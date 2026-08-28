#!/bin/bash
set -euo pipefail

# Deployment script for Arenibus marketing website to websupport
# Target: https://arenibus.polascin.net/
# Deployment directory: /data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus

DEPLOY_DIR="/data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus"
SSH_HOST="shell.r1.websupport.sk"
SSH_USER="uid58858"
SSH_PORT="26650"
BACKUP_KEEP=5

echo "Building Next.js project..."
if ! npm run build; then
    echo "Build failed. Aborting deployment."
    exit 1
fi

if [ ! -f out/index.html ]; then
    echo "Build output is missing out/index.html. Aborting deployment."
    exit 1
fi

echo "Build successful. Starting deployment to websupport..."

# Back up and clear the remote directory.
# The archive is written *outside* DEPLOY_DIR, otherwise the cleanup below would
# delete the backup it just created.
ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" \
    DEPLOY_DIR="$DEPLOY_DIR" BACKUP_KEEP="$BACKUP_KEEP" 'bash -s' <<'ENDSSH'
set -euo pipefail

BACKUP_DIR="$HOME/arenibus-backups"

# Never run the cleanup below from an unexpected directory.
if ! cd "$DEPLOY_DIR"; then
    echo "Deploy directory $DEPLOY_DIR is not reachable. Aborting."
    exit 1
fi

if [ -n "$(ls -A . 2>/dev/null)" ]; then
    mkdir -p "$BACKUP_DIR"
    BACKUP_FILE="$BACKUP_DIR/backup_$(date +%Y%m%d_%H%M%S).tar.gz"
    SOURCE_COUNT=$(find "$DEPLOY_DIR" -mindepth 1 | wc -l)
    echo "Creating backup at $BACKUP_FILE ($SOURCE_COUNT entries to archive)..."
    tar -czf "$BACKUP_FILE" -C "$DEPLOY_DIR" .

    # A backup that silently archives nothing is worse than no backup,
    # so verify the archive before the directory is wiped.
    BACKUP_BYTES=$(wc -c < "$BACKUP_FILE")
    BACKUP_ENTRIES=$(tar -tzf "$BACKUP_FILE" | wc -l)
    echo "Backup: $BACKUP_BYTES bytes, $BACKUP_ENTRIES entries"
    if [ "$BACKUP_ENTRIES" -lt "$SOURCE_COUNT" ]; then
        echo "Backup verification failed: archived $BACKUP_ENTRIES entries but $SOURCE_COUNT exist. Aborting before cleanup."
        exit 1
    fi

    # Keep only the most recent BACKUP_KEEP archives.
    { ls -1t "$BACKUP_DIR"/backup_*.tar.gz 2>/dev/null || true; } | tail -n +$((BACKUP_KEEP + 1)) | while read -r old; do
        echo "Pruning old backup $old"
        rm -f -- "$old"
    done
else
    echo "Directory is empty, no backup needed."
fi

echo "Removing old files..."
find . -mindepth 1 -maxdepth 1 -exec rm -rf -- {} +

echo "Ready for file upload..."
ENDSSH

echo "Uploading built files..."
if ! scp -P "$SSH_PORT" -r out/* "$SSH_USER@$SSH_HOST:$DEPLOY_DIR/"; then
    echo "File upload failed."
    exit 1
fi

echo "Setting permissions..."
ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" DEPLOY_DIR="$DEPLOY_DIR" 'bash -s' <<'ENDSSH'
set -euo pipefail
cd "$DEPLOY_DIR" || exit 1
find . -type d -exec chmod 755 {} +
find . -type f -exec chmod 644 {} +
echo "Deployment completed successfully!"
ENDSSH

echo "Verifying live site..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://arenibus.polascin.net/)
if [ "$STATUS" != "200" ]; then
    echo "Warning: https://arenibus.polascin.net/ returned HTTP $STATUS"
    exit 1
fi

echo "Deployment to https://arenibus.polascin.net/ completed! (HTTP $STATUS)"
