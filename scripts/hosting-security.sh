#!/usr/bin/env bash
set -euo pipefail
umask 077

# Run over the hosting account's existing authenticated SSH connection.
# Preserve provider binaries; use an account-local override when needed.
version=2.11.3
printf 'PHP CLI: '
if ! command -v php >/dev/null; then
  echo 'unavailable; Composer maintenance skipped'
  exit 0
fi
php -r 'echo PHP_VERSION, PHP_EOL;'
if command -v node >/dev/null; then printf 'Node CLI: '; node --version; fi
if command -v ssh >/dev/null; then ssh -V 2>&1; fi

target=$(command -v composer || true)
if [ -z "$target" ] || [ ! -f "$target" ]; then
  echo 'Composer is not installed as a regular executable; no installation changed.'
  exit 0
fi
target=$(readlink -f -- "$target")
directory=$(dirname -- "$target")
current=$(php "$target" --no-plugins --no-scripts --version 2>/dev/null | sed -n 's/^Composer version \([^ ]*\).*/\1/p')
if [ -z "$current" ]; then echo 'Cannot verify installed Composer version; no installation changed.'; exit 1; fi
printf 'Composer before: %s\n' "$current"
if php -r 'exit(version_compare($argv[1], $argv[2], ">=") ? 0 : 1);' "$current" "$version"; then
  echo 'Composer already meets the patched version; no downgrade performed.'
  exit 0
fi
local_install=0
if [ ! -w "$target" ] || [ ! -w "$directory" ]; then
  echo 'Provider Composer is read-only; installing a verified account-local override.'
  local_install=1
  directory="$HOME/.local/bin"
  mkdir -p -- "$directory"
  target="$directory/composer"
fi
if [ -e "$target" ] && ! php -r 'try { new Phar($argv[1]); } catch (Throwable $e) { exit(1); }' "$target"; then
  echo 'Composer executable is a wrapper rather than a PHAR; no installation changed.'
  exit 0
fi
if ! command -v curl >/dev/null || ! command -v sha256sum >/dev/null; then
  echo 'Verified download needs curl and sha256sum; no installation changed.'
  exit 0
fi

temporary=$(mktemp -d)
staged=''
trap 'rm -rf -- "$temporary"; if [ -n "$staged" ]; then rm -f -- "$staged"; fi' EXIT
url="https://getcomposer.org/download/$version/composer.phar"
curl --proto '=https' --tlsv1.2 --fail --silent --show-error --location --max-time 120 "$url" -o "$temporary/composer.phar"
curl --proto '=https' --tlsv1.2 --fail --silent --show-error --location --max-time 60 "$url.sha256sum" -o "$temporary/checksum"
expected=$(awk '{print $1}' "$temporary/checksum")
if [[ ! "$expected" =~ ^[0-9a-fA-F]{64}$ ]]; then
  echo 'Invalid official checksum; no installation changed.'
  exit 1
fi
printf '%s  %s\n' "$expected" "$temporary/composer.phar" | sha256sum --check --status
php "$temporary/composer.phar" --no-plugins --no-scripts --version >/dev/null
backup_dir="$HOME/.cache/composer-security-backups"
mkdir -p -- "$backup_dir"
chmod 700 -- "$backup_dir"
if [ -f "$target" ]; then
  backup=$(mktemp "$backup_dir/composer-before-$current.XXXXXXXX.phar")
  cp -p -- "$target" "$backup"
fi
staged=$(mktemp "$directory/.composer-security.XXXXXXXX")
cp -- "$temporary/composer.phar" "$staged"
if [ -f "$target" ]; then chmod --reference="$target" "$staged"; else chmod 755 "$staged"; fi
mv -f -- "$staged" "$target"
staged=''
php "$target" --no-plugins --no-scripts --version
if [ "$local_install" -eq 1 ]; then
  profile="$HOME/.profile"
  if [ -f "$HOME/.bash_profile" ]; then profile="$HOME/.bash_profile";
  elif [ -f "$HOME/.bash_login" ]; then profile="$HOME/.bash_login"; fi
  if [ -e "$profile" ] && [ ! -w "$profile" ]; then
    echo 'Account-local Composer updated; login profile is read-only, so default PATH remains unchanged.'
    exit 0
  fi
  if ! grep -Fq '# Composer security account-local override' "$profile" 2>/dev/null; then
    if [ -f "$profile" ]; then
      profile_backup=$(mktemp "$backup_dir/login-profile.XXXXXXXX")
      cp -p -- "$profile" "$profile_backup"
    fi
    printf '\n# Composer security account-local override\nexport PATH="$HOME/.local/bin:$PATH"\n' >> "$profile"
  fi
  selected=$(bash -lc 'command -v composer' 2>/dev/null)
  if [ "$selected" = "$target" ]; then
    echo 'Verified: new login shells select the patched account-local Composer.'
  else
    echo 'Account-local Composer updated; the hosting login configuration still selects another executable.'
  fi
else
  echo 'Composer updated atomically; previous PHAR retained in the private account backup directory.'
fi
