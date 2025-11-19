# LOGO Replacement Guide

## 📍 LOGO Location

The LOGO file is located at:
```
public/logo-placeholder.svg
```

## 🎨 LOGO Specifications

### Recommended Dimensions
- **Width**: 120px (recommended)
- **Height**: 40px (recommended)
- **Aspect Ratio**: 3:1 (horizontal)
- **Format**: SVG, PNG, or JPG

### File Formats Supported
- ✅ **SVG** (Recommended - scalable, small file size)
- ✅ **PNG** (Good for logos with transparency)
- ✅ **JPG** (Good for photographic logos)
- ✅ **WebP** (Modern format, good compression)

## 🔄 How to Replace the LOGO

### Method 1: Replace the File Directly

1. Prepare your logo file with the recommended dimensions (120x40px)
2. Name your file: `logo-placeholder.svg` (or `.png`, `.jpg`)
3. Replace the file in the `public/` folder
4. If using a different format, update the file extension in all navigation bars

### Method 2: Use a Different Filename

If you want to use a different filename (e.g., `csis-logo.svg`):

1. Place your logo file in the `public/` folder
2. Update the logo path in the following files:

**Files to Update:**
- `src/Pages/Dashboard_Home_Page_ADMIN.tsx` (line ~105)
- `src/Pages/Dashboard_Home_Page_User.tsx` (line ~41)
- `src/Pages/ADMIN/Student_Management.tsx` (line ~150)
- `src/Pages/ADMIN/Audit_Logs.tsx` (line ~66)
- `src/Pages/Settings_Page.tsx` (line ~80)
- `src/Pages/Users_Information.tsx` (line ~75)

**Change this:**
```tsx
<img 
  src="/logo-placeholder.svg" 
  alt="CSIS IAM Logo" 
  height="40" 
  className="me-3"
  style={{ objectFit: 'contain' }}
/>
```

**To this:**
```tsx
<img 
  src="/csis-logo.svg" 
  alt="CSIS IAM Logo" 
  height="40" 
  className="me-3"
  style={{ objectFit: 'contain' }}
/>
```

## 🎯 LOGO Design Tips

### For Best Results:
1. **Horizontal Layout**: Design your logo to fit a 3:1 aspect ratio
2. **White/Light Colors**: The logo appears on a dark gradient background
3. **Transparent Background**: Use PNG or SVG with transparency
4. **High Contrast**: Ensure the logo is visible on purple gradient (#667eea to #764ba2)
5. **Scalable**: Use vector format (SVG) for crisp display on all screen sizes

### Example Dimensions:
- **Small**: 90x30px
- **Medium**: 120x40px (current)
- **Large**: 150x50px

## 🔧 Adjusting LOGO Size

If you need to change the logo height, update the `height` attribute:

```tsx
<img 
  src="/logo-placeholder.svg" 
  alt="CSIS IAM Logo" 
  height="50"  // Change this value
  className="me-3"
  style={{ objectFit: 'contain' }}
/>
```

## 📱 Responsive Behavior

The logo automatically:
- Maintains aspect ratio (`objectFit: 'contain'`)
- Aligns vertically with the text (`align-items-center`)
- Has right margin spacing (`me-3` = 1rem)
- Collapses on mobile with the navbar toggle

## ✅ After Replacing the LOGO

1. Test on all pages:
   - Admin Dashboard
   - User Dashboard
   - Student Management
   - Audit Logs
   - Settings

2. Check on different screen sizes:
   - Desktop (1920px+)
   - Tablet (768px - 1024px)
   - Mobile (< 768px)

3. Verify the logo is visible on the gradient background

4. Commit and push your changes:
```bash
git add public/logo-placeholder.svg
git commit -m "Update CSIS IAM logo"
git push
```

## 🎨 Current Placeholder

The current placeholder is a simple SVG with:
- Semi-transparent white background
- "CSIS IAM" text in white
- 120x40px dimensions

Replace it with your actual logo for the final design!

