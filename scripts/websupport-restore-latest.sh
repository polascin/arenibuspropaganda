#!/bin/bash
# Runs on WebSupport. Expects DIR in the environment.
set -euo pipefail

cd "$DIR" || exit 1

BACKUP_DIR="$HOME/arenibus-backups"
LATEST=$(ls -1t "$BACKUP_DIR"/backup_*.tar.gz 2>/dev/null | head -n 1)
if [ -z "$LATEST" ]; then
  echo "No backup found to restore."
  exit 1
fi

echo "Restoring $LATEST"
INCOMING=$(mktemp -d "$DIR/.incoming.XXXXXX")
cleanup_incoming() { rm -rf "$INCOMING"; }
trap cleanup_incoming EXIT
tar -xzf "$LATEST" -C "$INCOMING"
if [ ! -f "$INCOMING/index.html" ]; then
  echo "Backup is missing index.html. Aborting restore."
  exit 1
fi

PREVIOUS=$(mktemp -d "$DIR/.previous.XXXXXX")
find . -mindepth 1 -maxdepth 1 ! -name '.incoming.*' ! -name '.previous.*' -exec mv -f {} "$PREVIOUS/" \;
find "$INCOMING" -mindepth 1 -maxdepth 1 -exec mv -f {} . \;
rmdir "$INCOMING" 2>/dev/null || rm -rf "$INCOMING"
trap - EXIT
rm -rf "$PREVIOUS"

find . -type d -exec chmod 755 {} +
find . -type f -exec chmod 644 {} +
echo "Restored $LATEST"
