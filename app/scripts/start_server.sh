#!/bin/bash

# Stop any existing Next.js process
pm2 stop all || true

# Start the Next.js application
pm2 start /var/www/bakehouse78 --name "bakehouse78" --time

# Restart Nginx to pick up new configuration
sudo systemctl restart nginx
