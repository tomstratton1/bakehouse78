#!/bin/bash
set -e

# Check if the application folder exists
if [ ! -d /var/www/bakehouse78 ]; then
  echo "Application directory not found!"
  exit 1
fi

# Check if public directory exists
if [ ! -d /var/www/bakehouse78/public ]; then
  echo "Public directory is missing!"
  exit 1
fi

echo "All checks passed."
