# CSIS IAM Service - Deployment Guide

## 🚀 Quick Start - GitHub Pages Deployment

This project is already configured for automatic deployment to GitHub Pages. Follow these simple steps:

### Step 1: Enable GitHub Pages

1. Visit your repository settings:
   ```
   https://github.com/ufoericlaito/CSIS_IAM_service/settings/pages
   ```

2. Under **"Build and deployment"** section:
   - **Source**: Select **"GitHub Actions"**
   - Click **Save**

3. That's it! GitHub Actions will automatically deploy your site.

### Step 2: Wait for Deployment

1. Go to the Actions tab:
   ```
   https://github.com/ufoericlaito/CSIS_IAM_service/actions
   ```

2. You should see a workflow running called **"Deploy to GitHub Pages"**

3. Wait for the green checkmark ✅ (usually takes 2-5 minutes)

### Step 3: Access Your Website

Once deployment is complete, your website will be available at:
```
https://ufoericlaito.github.io/CSIS_IAM_service/
```

---

## 📋 Deployment Status Check

### Check if GitHub Pages is Enabled

1. Go to: https://github.com/ufoericlaito/CSIS_IAM_service/settings/pages
2. You should see:
   - ✅ **Source**: GitHub Actions
   - ✅ **Your site is live at**: https://ufoericlaito.github.io/CSIS_IAM_service/

### Check Deployment History

1. Go to: https://github.com/ufoericlaito/CSIS_IAM_service/deployments
2. You should see successful deployments listed

---

## 🔄 How Auto-Deployment Works

Every time you push code to the `master` branch:

1. **GitHub Actions** automatically triggers
2. **Builds** the project using `npm run build`
3. **Deploys** the built files to GitHub Pages
4. **Updates** your live website

### Workflow File Location
```
.github/workflows/deploy.yml
```

---

## 🛠️ Manual Deployment (If Needed)

If automatic deployment doesn't work, you can deploy manually:

### Option 1: Trigger Workflow Manually

1. Go to: https://github.com/ufoericlaito/CSIS_IAM_service/actions
2. Click on **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button
4. Select `master` branch
5. Click **"Run workflow"**

### Option 2: Re-push Code

```bash
git commit --allow-empty -m "Trigger deployment"
git push
```

---

## 🌐 Alternative Deployment Options

### Deploy to Vercel

1. Visit: https://vercel.com/new
2. Import your GitHub repository
3. Vercel will auto-detect Vite configuration
4. Click **Deploy**
5. Your site will be live at: `https://your-project.vercel.app`

### Deploy to Netlify

1. Visit: https://app.netlify.com/start
2. Connect to GitHub and select your repository
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**
5. Your site will be live at: `https://your-project.netlify.app`

### Deploy to Your Own Server

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist/` folder to your server

3. Configure your web server (Apache/Nginx) to serve the files

---

## 🔧 Troubleshooting

### Issue: GitHub Pages shows 404

**Solution:**
1. Check if GitHub Pages is enabled in Settings > Pages
2. Make sure **Source** is set to **"GitHub Actions"**
3. Check if the workflow ran successfully in Actions tab

### Issue: Workflow fails

**Solution:**
1. Go to Actions tab and click on the failed workflow
2. Check the error logs
3. Common fixes:
   - Make sure `package.json` has correct scripts
   - Ensure `vite.config.ts` has `base: './'`
   - Check if all dependencies are in `package.json`

### Issue: Site loads but shows blank page

**Solution:**
1. Check browser console for errors (F12)
2. Verify `vite.config.ts` has:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: './',  // Important for GitHub Pages
   })
   ```
3. Rebuild and redeploy

### Issue: Assets not loading (images, CSS)

**Solution:**
1. Make sure all asset paths start with `/` (e.g., `/logo-placeholder.svg`)
2. Assets should be in the `public/` folder
3. Check `base: './'` in `vite.config.ts`

---

## 📱 Testing Before Deployment

### Test Locally

1. Build the production version:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

3. Open: http://localhost:4173

4. Test all features:
   - Login/Logout
   - Navigation
   - Admin features
   - User features
   - Responsive design

---

## 🔐 Environment Variables (If Needed)

If you need to add environment variables:

### For GitHub Pages

1. Go to: Settings > Secrets and variables > Actions
2. Click **"New repository secret"**
3. Add your secrets

### For Vercel/Netlify

Add environment variables in their respective dashboards.

---

## 📊 Monitoring Deployment

### GitHub Actions Status Badge

Add this to your README.md to show deployment status:

```markdown
![Deploy Status](https://github.com/ufoericlaito/CSIS_IAM_service/actions/workflows/deploy.yml/badge.svg)
```

---

## ✅ Deployment Checklist

Before going live, make sure:

- [ ] GitHub Pages is enabled
- [ ] Workflow runs successfully
- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Login functionality works
- [ ] Admin features work
- [ ] Responsive design works on mobile
- [ ] No console errors
- [ ] Logo is updated (if needed)
- [ ] Demo accounts work

---

## 🎯 Quick Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Push changes and trigger deployment
git add .
git commit -m "Your message"
git push
```

---

## 📞 Need Help?

If you encounter issues:

1. Check the Actions tab for error logs
2. Review this guide's troubleshooting section
3. Check Vite documentation: https://vitejs.dev/
4. Check GitHub Pages documentation: https://docs.github.com/pages

---

**Your website should now be live at:**
## https://ufoericlaito.github.io/CSIS_IAM_service/

🎉 Happy deploying!

