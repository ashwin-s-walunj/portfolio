# 🚀 Portfolio Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages for free hosting.

## 📋 Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Your portfolio code (this project)

---

## 🎯 Deployment Steps

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Name**: `portfolio` (or any name you prefer)
   - **Description**: "My professional portfolio website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

### Step 2: Prepare Your Project for Deployment

Since this is a **React app only** (no backend needed), we'll deploy just the frontend.

**Option A: Deploy Frontend Only (Recommended)**

```bash
# Navigate to frontend directory
cd /app/frontend

# Initialize git repository (if not already done)
git init

# Add GitHub repository as remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Add homepage to package.json
# This step is IMPORTANT for GitHub Pages routing
```

Before deploying, you need to add this line to `/app/frontend/package.json`:

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "homepage": "https://YOUR_USERNAME.github.io/portfolio",
  "private": true,
  ...
}
```

Replace `YOUR_USERNAME` with your actual GitHub username and `portfolio` with your repository name.

### Step 3: Add Deploy Scripts

The following scripts are already configured in `package.json`:

```json
"scripts": {
  "predeploy": "yarn build",
  "deploy": "gh-pages -d build",
  ...
}
```

### Step 4: Deploy to GitHub Pages

```bash
# From /app/frontend directory

# Stage all files
git add .

# Commit your code
git commit -m "Initial commit: Portfolio website"

# Push to GitHub
git push -u origin main

# Deploy to GitHub Pages (this builds and publishes automatically)
yarn deploy
```

The `yarn deploy` command will:
1. Build your production-ready React app (`yarn build`)
2. Create a `gh-pages` branch
3. Push the build folder to that branch
4. Your site will be live in 1-2 minutes!

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **"Source"**, it should automatically be set to:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save** (if needed)

### Step 6: Access Your Live Site

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/portfolio
```

---

## 🔄 Updating Your Portfolio

Whenever you make changes to your portfolio:

```bash
# Make your code changes, then:
cd /app/frontend
git add .
git commit -m "Update portfolio"
git push origin main

# Redeploy to GitHub Pages
yarn deploy
```

---

## 🌐 Using a Custom Domain (Optional)

If you own a domain name (e.g., `ashwinwalunj.com`):

1. Add a `CNAME` file to `/app/frontend/public/` with your domain:
   ```
   ashwinwalunj.com
   ```

2. Update `homepage` in `package.json`:
   ```json
   "homepage": "https://ashwinwalunj.com"
   ```

3. Configure your domain's DNS settings:
   - Add an `A` record pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a `CNAME` record pointing to `YOUR_USERNAME.github.io`

4. In GitHub repository settings → Pages → Custom domain, enter your domain

---

## 🛠️ Troubleshooting

### Issue: Blank page after deployment
**Solution**: Make sure you added the `homepage` field in `package.json`

### Issue: 404 errors on refresh
**Solution**: This is normal for client-side routing. Add this to `/app/frontend/public/404.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Portfolio</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body></body>
</html>
```

And add this to `/app/frontend/public/index.html` inside `<head>`:

```html
<script>
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

### Issue: Deployment fails
**Solution**: 
- Check your GitHub token permissions
- Ensure you have `gh-pages` package installed
- Try: `yarn install` then `yarn deploy`

---

## 📞 Need Help?

If you encounter any issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Verify your repository settings
3. Check browser console for errors

---

## ✅ Deployment Checklist

- [ ] GitHub repository created
- [ ] Added `homepage` to package.json
- [ ] Installed `gh-pages` package
- [ ] Added deploy scripts to package.json
- [ ] Committed and pushed code to GitHub
- [ ] Ran `yarn deploy`
- [ ] Configured GitHub Pages settings
- [ ] Verified site is live

---

**Your portfolio is now live and accessible to recruiters worldwide! 🎉**
