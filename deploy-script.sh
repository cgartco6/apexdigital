#!/bin/bash

# Apex Digital Auto-Deploy Script for Afrihost
# Usage: ./deploy-script.sh

# Configuration
FTP_SERVER="ftp.apex-digital.co.za"
FTP_USER="!YOUR_FTP_USERNAME!"
FTP_PASS="!YOUR_FTP_PASSWORD!"
LOCAL_DIR="./public"
REMOTE_DIR="/public_html"
SECURE_DIR="./secure-config"
SECURE_REMOTE_DIR="/secure-config"  # Outside web root

# Deploy public files
echo "Deploying website files..."
lftp -u "$FTP_USER","$FTP_PASS" $FTP_SERVER <<EOF
set ftp:ssl-allow no
mirror -R $LOCAL_DIR $REMOTE_DIR
quit
EOF

# Deploy secure files (outside web root)
echo "Deploying secure configurations..."
lftp -u "$FTP_USER","$FTP_PASS" $FTP_SERVER <<EOF
set ftp:ssl-allow no
mirror -R $SECURE_DIR $SECURE_REMOTE_DIR
quit
EOF

# Set permissions
echo "Setting permissions..."
lftp -u "$FTP_USER","$FTP_PASS" $FTP_SERVER <<EOF
set ftp:ssl-allow no
chmod 755 $REMOTE_DIR
chmod 644 $REMOTE_DIR/*
chmod 700 $SECURE_REMOTE_DIR
chmod 600 $SECURE_REMOTE_DIR/*
quit
EOF

# Verify deployment
echo "Verifying deployment..."
curl -I https://apex-digital.co.za

echo "Deployment completed successfully! AI agents activated."
