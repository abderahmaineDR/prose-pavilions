#!/bin/bash

# Simple deployment script for The Literary Corner
# Builds the project and deploys to various platforms

echo "🚀 The Literary Corner - Deployment Script"
echo "=========================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Run build
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix errors and try again."
  exit 1
fi

echo "✅ Build successful!"

# Prompt for deployment target
echo ""
echo "Choose deployment target:"
echo "1) Netlify"
echo "2) Vercel"
echo "3) GitHub Pages"
echo "4) Just build (no deploy)"
read -p "Enter choice (1-4): " choice

case $choice in
  1)
    echo "📤 Deploying to Netlify..."
    if command -v netlify &> /dev/null; then
      netlify deploy --prod
    else
      echo "⚠️  Netlify CLI not installed. Install with: npm install -g netlify-cli"
      echo "Then run: netlify deploy --prod"
    fi
    ;;
  2)
    echo "📤 Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
      vercel --prod
    else
      echo "⚠️  Vercel CLI not installed. Install with: npm install -g vercel"
      echo "Then run: vercel --prod"
    fi
    ;;
  3)
    echo "📤 Deploying to GitHub Pages..."
    if command -v gh-pages &> /dev/null; then
      npm run deploy
    else
      echo "⚠️  gh-pages not installed. Install with: npm install --save-dev gh-pages"
      echo "Add to package.json scripts:"
      echo '  "predeploy": "npm run build",'
      echo '  "deploy": "gh-pages -d dist"'
    fi
    ;;
  4)
    echo "✅ Build complete. Files are in ./dist directory"
    ;;
  *)
    echo "Invalid choice. Build complete. Files are in ./dist directory"
    ;;
esac

echo ""
echo "✨ Done!"
