#!/usr/bin/env bash
# Start the backend API service
# Usage: bash start.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== Backend API Service ==="
echo "Installing dependencies..."
npm install

echo ""
echo "Starting server on http://0.0.0.0:8080"
echo "Test: curl http://localhost:8080/api/hello"
echo ""

node server.js
