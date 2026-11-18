#!/bin/bash
# Push out/ to WebSupport in one SSH session (tar on stdin).
# Usage: scripts/websupport-push.sh USER@HOST PORT DIR
set -euo pipefail

HOST=${1:?host}
PORT=${2:?port}
DIR=${3:?dir}

ROOT=$(cd "$(dirname "$0")/.." && pwd)
if [ ! -f "$ROOT/out/.htaccess" ] || [ ! -f "$ROOT/out/index.html" ]; then
  echo "Build output is missing out/index.html or out/.htaccess. Aborting."
  exit 1
fi

REMOTE_SCRIPT=$(cat "$ROOT/scripts/websupport-remote-deploy.sh")
RESTORE_SCRIPT=$(cat "$ROOT/scripts/websupport-restore-latest.sh")
SSH_OPTS=(-o ConnectTimeout=30 -o ServerAliveInterval=5 -o BatchMode=yes)

set +e
delay=15
for attempt in 1 2 3 4 5; do
  echo "Deploying archive (attempt ${attempt}/5)..."
  sleep "$delay"
  tar -C "$ROOT/out" -czf - . | ssh "${SSH_OPTS[@]}" -p "$PORT" "$HOST" \
    "export DIR=$(printf %q "$DIR"); bash -c $(printf %q "$REMOTE_SCRIPT")"
  status=$?
  if [ "$status" -eq 0 ]; then
    echo "Deploy succeeded on attempt ${attempt}."
    exit 0
  fi
  echo "Deploy attempt ${attempt} failed with exit ${status}."
  delay=$((delay * 2))
done

echo "Deploy failed after 5 attempts; restoring latest backup."
ssh "${SSH_OPTS[@]}" -p "$PORT" "$HOST" \
  "export DIR=$(printf %q "$DIR"); bash -c $(printf %q "$RESTORE_SCRIPT")"
restore_status=$?
if [ "$restore_status" -eq 0 ]; then
  echo "Latest backup restored after failed deploy."
else
  echo "Backup restore also failed with exit ${restore_status}."
fi
exit 1
