#!/bin/bash
# Stop any existing server
pm2 stop bakehouse78 || true

# Start the Next.js server using PM2
cd /var/www/bakehouse78
pm2 start npm --name "bakehouse78" -- start

# Save the PM2 process list
pm2 save


# Restart Nginx to pick up new configuration
sudo systemctl restart nginx