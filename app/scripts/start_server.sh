#!/bin/bash

export AWS_REGION="eu-west-2"
export SES_FROM_EMAIL="noreply@bakehouse78.co.uk"
export SES_TO_EMAIL="tstratton3912@gmail.com"
export NODE_ENV="production"

# Stop any existing server
pm2 stop bakehouse78 || true

# Start the Next.js server using PM2
cd /var/www/bakehouse78
pm2 start npm --name "bakehouse78" -- start

# Save the PM2 process list
pm2 save


# Restart Nginx to pick up new configuration
sudo systemctl restart nginx