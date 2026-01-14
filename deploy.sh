#!/bin/bash

# Quick deployment script for kaliya.in
# Run this after SSH into EC2

echo "🚀 Deploying kaliya.in..."

# Navigate to project
cd /home/ubuntu/service-kaliya.in

# Pull latest changes
echo "📥 Pulling latest code..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build Next.js
echo "🔨 Building application..."
npm run build

# Restart PM2
echo "♻️  Restarting application..."
pm2 restart kaliya-website

# Show status
echo "✅ Deployment complete!"
pm2 status
pm2 logs kaliya-website --lines 20
