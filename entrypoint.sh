#!/bin/bash
set -e

# Initialize the .env file if it doesn't exist
echo "Checking for .env file..."
pnpm env:init

# Execute the command passed to the script
echo "Running: $@"
exec "$@"