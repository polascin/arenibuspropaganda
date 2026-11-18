#!/bin/bash
# Runs on WebSupport. Expects DIR in the environment and a gzip tar of out/ on stdin.
set -euo pipefail

cd "$DIR" || exit 1

BACKUP_DIR="$HOME/arenibus-backups"
BACKUP_KEEP=5

INCOMING=$(mktemp -d "$DIR/.incoming.XXXXXX")
cleanup_incoming() { rm -rf "$INCOMING"; }
trap cleanup_incoming EXIT

echo "Extracting incoming archive to $INCOMING ..."
tar -xzf - -C "$INCOMING"
if [ ! -f "$INCOMING/index.html" ] || [ ! -f "$INCOMING/.htaccess" ]; then
  echo "Incoming archive is missing index.html or .htaccess. Aborting swap."
  exit 1
fi

if find . -mindepth 1 -maxdepth 1 ! -name '.incoming.*' ! -name '.previous.*' -print -quit | grep -q .; then
  mkdir -p "$BACKUP_DIR"
  BACKUP_FILE="$BACKUP_DIR/backup_$(date +%Y%m%d_%H%M%S).tar.gz"
  SOURCE_COUNT=$(find . -mindepth 1 \( -name '.incoming.*' -o -name '.previous.*' \) -prune -o -print | wc -l)
  echo "Creating backup at $BACKUP_FILE ($SOURCE_COUNT entries to archive)..."
  tar -czf "$BACKUP_FILE" --exclude='./.incoming.*' --exclude='./.previous.*' -C "$DIR" .
  BACKUP_BYTES=$(wc -c < "$BACKUP_FILE")
  BACKUP_ENTRIES=$(tar -tzf "$BACKUP_FILE" | wc -l)
  echo "Backup: $BACKUP_BYTES bytes, $BACKUP_ENTRIES entries"
  if [ "$BACKUP_ENTRIES" -lt "$SOURCE_COUNT" ]; then
    echo "Backup verification failed: archived $BACKUP_ENTRIES entries but $SOURCE_COUNT exist. Aborting before swap."
    exit 1
  fi
  { ls -1t "$BACKUP_DIR"/backup_*.tar.gz 2>/dev/null || true; } \
    | tail -n +$((BACKUP_KEEP + 1)) \
    | while read -r old; do echo "Pruning $old"; rm -f -- "$old"; done
else
  echo "Directory is empty, no backup needed."
fi

PREVIOUS=$(mktemp -d "$DIR/.previous.XXXXXX")
find . -mindepth 1 -maxdepth 1 ! -name '.incoming.*' ! -name '.previous.*' -exec mv -f {} "$PREVIOUS/" \;
find "$INCOMING" -mindepth 1 -maxdepth 1 -exec mv -f {} . \;
rmdir "$INCOMING" 2>/dev/null || rm -rf "$INCOMING"
trap - EXIT
rm -rf "$PREVIOUS"

find . -type d -exec chmod 755 {} +
find . -type f -exec chmod 644 {} +
echo "Deployment completed successfully!"
