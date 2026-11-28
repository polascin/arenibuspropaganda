#!/usr/bin/env bash
set -euo pipefail
umask 077

# Run over the hosting account's existing authenticated SSH connection.
# Update only a writable, existing Composer PHAR; never change shell profiles.
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
if [ ! -w "$target" ] || [ ! -w "$directory" ]; then
  echo 'Composer is managed by the hosting provider or another account; update requires its administrator.'
  exit 0
fi
if ! php -r 'try { new Phar($argv[1]); } catch (Throwable $e) { exit(1); }' "$target"; then
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
current=$(php "$target" --no-plugins --no-scripts --version 2>/dev/null | sed -n 's/^Composer version \([^ ]*\).*/\1/p')
if [ -z "$current" ]; then echo 'Cannot verify installed Composer version; no installation changed.'; exit 1; fi
printf 'Composer before: %s\n' "$current"
if php -r 'exit(version_compare($argv[1], $argv[2], ">=") ? 0 : 1);' "$current" "$version"; then
  echo 'Composer already meets the patched version; no downgrade performed.'
  exit 0
fi

backup_dir="$HOME/.cache/composer-security-backups"
mkdir -p -- "$backup_dir"
chmod 700 -- "$backup_dir"
backup=$(mktemp "$backup_dir/composer-before-$current.XXXXXXXX.phar")
cp -p -- "$target" "$backup"
staged=$(mktemp "$directory/.composer-security.XXXXXXXX")
cp -- "$temporary/composer.phar" "$staged"
chmod --reference="$target" "$staged"
mv -f -- "$staged" "$target"
staged=''
php "$target" --no-plugins --no-scripts --version
echo 'Composer updated atomically; previous PHAR retained in the private account backup directory.'
