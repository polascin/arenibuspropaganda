#!/bin/bash

# Deployment script for Arenibus marketing website to websupport
# Target: https://arenibus.polascin.net/
# Deployment directory: /data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus

DEPLOY_DIR="/data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus"
SSH_HOST="shell.r1.websupport.sk"
SSH_USER="uid58858"
SSH_PORT="26650"

echo "Building Next.js project..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed. Aborting deployment."
    exit 1
fi

echo "Build successful. Starting deployment to websupport..."

# Connect to websupport and deploy
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST << 'ENDSSH'
    DEPLOY_DIR="/data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus"
    
    # Navigate to the deployment directory
    cd $DEPLOY_DIR
    
    # Create backup of current deployment
    if [ -n "$(ls -A)" ]; then
        echo "Creating backup..."
        tar -czf backup_$(date +%Y%m%d_%H%M%S).tar.gz .
    else
        echo "Directory is empty, no backup needed."
    fi
    
    # Remove all files from the directory
    echo "Removing old files..."
    rm -rf *
    
    echo "Ready for file upload..."
ENDSSH

echo "Uploading built files..."
scp -P $SSH_PORT -r out/* $SSH_USER@$SSH_HOST:$DEPLOY_DIR/

if [ $? -ne 0 ]; then
    echo "File upload failed."
    exit 1
fi

echo "Setting permissions..."
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST << 'ENDSSH'
    DEPLOY_DIR="/data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus"
    cd $DEPLOY_DIR
    chmod -R 755 .
    chmod -R 644 *.html *.json *.js *.css
    echo "Deployment completed successfully!"
ENDSSH

echo "Deployment to https://arenibus.polascin.net/ completed!"
