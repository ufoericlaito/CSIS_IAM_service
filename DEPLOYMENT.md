# UL Student Management System - Deployment Guide

## GitHub Repository Setup

### Step 1: Create GitHub Repository

1. Visit https://github.com/new
2. Repository name: `ul-student-management` (or your preferred name)
3. Description: `UL Student Management System - A modern student information management platform`
4. Choose **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### Step 2: Push Code to GitHub

After creating the repository, run these commands in your terminal:

```bash
# Add the remote repository (replace REPO_NAME with your actual repository name)
git remote add origin https://github.com/ufoericlaito/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M master

# Push code to GitHub
git push -u origin master
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Click **Save**

### Step 4: Automatic Deployment

The GitHub Actions workflow will automatically:
- Build your React app when you push to the `master` branch
- Deploy to GitHub Pages
- Your site will be available at: `https://ufoericlaito.github.io/REPO_NAME/`

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The built files will be in the `dist` folder
# You can deploy this folder to any static hosting service
```

## Testing Locally

Before deploying, test the production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## Troubleshooting

### Issue: 404 errors on page refresh
- Solution: GitHub Pages doesn't support client-side routing by default
- Add a 404.html that redirects to index.html (already configured)

### Issue: Assets not loading
- Check that `base: './'` is set in `vite.config.ts` (already configured)

### Issue: Build fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 18+)

## Environment Variables

For production deployment with environment variables:
1. Create `.env.production` file
2. Add your production API URLs and keys
3. Never commit `.env` files to Git

## Post-Deployment

After successful deployment:
1. Visit your site at `https://ufoericlaito.github.io/REPO_NAME/`
2. Test all features:
   - Login (admin@ul.com / admin123)
   - Student Management
   - Settings
   - Audit Logs
3. Check browser console for any errors

## Updating the Site

To update your deployed site:

```bash
# Make your changes
git add .
git commit -m "Your commit message"
git push

# GitHub Actions will automatically rebuild and deploy
```

## Support

For issues or questions:
- Check GitHub Actions logs for deployment errors
- Review the build output for any warnings
- Ensure all tests pass before deploying

