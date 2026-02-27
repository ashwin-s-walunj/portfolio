#!/bin/bash

# Portfolio GitHub Pages Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "Please run this script from the /app/frontend directory"
    exit 1
fi

echo "📝 Before deploying, you need to:"
echo ""
echo "1. Create a GitHub repository at https://github.com/new"
echo "2. Update package.json with your GitHub username and repo name"
echo ""
read -p "Have you created a GitHub repository? (y/n): " created_repo

if [ "$created_repo" != "y" ]; then
    echo ""
    echo "Please create a repository first, then run this script again."
    exit 0
fi

echo ""
read -p "Enter your GitHub username: " username
read -p "Enter your repository name (e.g., portfolio): " repo_name

echo ""
echo "📦 Configuration Summary:"
echo "  GitHub URL: https://github.com/$username/$repo_name"
echo "  Live Site: https://$username.github.io/$repo_name"
echo ""
read -p "Is this correct? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "Deployment cancelled."
    exit 0
fi

echo ""
echo "🔧 Configuring package.json..."

# Update package.json with homepage
if grep -q '"homepage"' package.json; then
    echo "Homepage field already exists, skipping..."
else
    # Add homepage field after "private": true
    sed -i "s/\"private\": true,/\"private\": true,\n  \"homepage\": \"https:\/\/$username.github.io\/$repo_name\",/" package.json
    echo "✅ Added homepage field to package.json"
fi

# Check if deploy scripts exist
if ! grep -q '"predeploy"' package.json; then
    echo "⚠️  Deploy scripts not found in package.json"
    echo "Please add these scripts to package.json:"
    echo ""
    echo '  "predeploy": "yarn build",'
    echo '  "deploy": "gh-pages -d build"'
    echo ""
fi

echo ""
echo "🔍 Checking if gh-pages is installed..."
if ! grep -q '"gh-pages"' package.json; then
    echo "Installing gh-pages..."
    yarn add -D gh-pages
else
    echo "✅ gh-pages already installed"
fi

echo ""
echo "📤 Initializing Git repository..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Add remote
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$username/$repo_name.git"
echo "✅ Remote added: https://github.com/$username/$repo_name.git"

echo ""
echo "📝 Committing code..."
git add .
git commit -m "Initial commit: Portfolio website"

echo ""
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "🏗️  Building and deploying to GitHub Pages..."
yarn deploy

echo ""
echo "✅ Deployment Complete!"
echo ""
echo "🌐 Your portfolio will be live at:"
echo "   https://$username.github.io/$repo_name"
echo ""
echo "⏱️  GitHub Pages may take 1-2 minutes to publish your site."
echo ""
echo "📊 To check deployment status:"
echo "   Visit: https://github.com/$username/$repo_name/settings/pages"
echo ""
echo "🔄 To update your portfolio later, run:"
echo "   git add . && git commit -m 'Update portfolio' && git push && yarn deploy"
echo ""
