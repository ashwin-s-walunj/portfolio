# 🚀 Quick Deployment Guide

## GitHub Pages Deployment - 3 Simple Steps

### Step 1: Update package.json

Add your GitHub details to `/app/frontend/package.json`:

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
  "private": true,
  ...
}
```

Replace:
- `YOUR_GITHUB_USERNAME` with your actual GitHub username
- `YOUR_REPO_NAME` with your repository name (e.g., "portfolio")

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Name your repository (e.g., "portfolio")
3. Make it **Public**
4. Click "Create repository"

### Step 3: Deploy!

Run these commands from `/app/frontend/`:

```bash
# Initialize Git and push to GitHub
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main

# Deploy to GitHub Pages
yarn deploy
```

---

## ✅ That's It!

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

⏱️ It may take 1-2 minutes for GitHub Pages to publish.

---

## 🔄 Update Your Portfolio Later

Made changes? Just run:

```bash
git add .
git commit -m "Update portfolio"
git push
yarn deploy
```

---

## 📊 Check Deployment Status

Visit: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/settings/pages`

---

Need detailed instructions? See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md)
