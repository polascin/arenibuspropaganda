#!/bin/bash
set -euo pipefail

# Deployment script for Arenibus marketing website to websupport
# Target: https://arenibus.polascin.net/
# Deployment directory: /data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus

DEPLOY_DIR="/data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus"
SSH_HOST="shell.r1.websupport.sk"
SSH_USER="uid58858"
SSH_PORT="26650"
ROOT=$(cd "$(dirname "$0")" && pwd)

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
bash "$ROOT/scripts/websupport-push.sh" "$SSH_USER@$SSH_HOST" "$SSH_PORT" "$DEPLOY_DIR"

echo "Verifying live site..."
UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
fail=0
for path in / /privacy/ /terms/ /security/ /robots.txt /sitemap.xml; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" -A "$UA" "https://arenibus.polascin.net${path}")
    echo "https://arenibus.polascin.net${path} HTTP $STATUS"
    if [ "$STATUS" != "200" ]; then
        echo "Warning: https://arenibus.polascin.net${path} returned HTTP $STATUS"
        fail=1
    fi
done
CSP=$(curl -sI -A "$UA" "https://arenibus.polascin.net/" | tr -d '\r' | awk -F': ' 'tolower($1)=="content-security-policy"{print $2}')
echo "CSP: $CSP"
case "$CSP" in
    *"script-src"*"'unsafe-inline'"*)
        echo "CSP allows Next.js inline hydration scripts"
        ;;
    *)
        echo "Smoke test failed: CSP must include script-src 'unsafe-inline' for Next.js hydration"
        fail=1
        ;;
esac
if [ "$fail" != "0" ]; then
    exit 1
fi

echo "Deployment to https://arenibus.polascin.net/ completed!"
