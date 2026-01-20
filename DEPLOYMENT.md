# Deployment Guide 🚀

Complete guide to deploying your wedding website to production.

## Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Vercel Deployment](#vercel-deployment-recommended)
- [Netlify Deployment](#netlify-deployment)
- [Custom Domain Setup](#custom-domain-setup)
- [Environment Variables](#environment-variables)
- [Post-Deployment](#post-deployment)
- [Troubleshooting](#troubleshooting)

## Pre-Deployment Checklist

Before deploying, make sure you've completed:

### Content
- [ ] Updated couple names
- [ ] Updated wedding date
- [ ] Added all photos (optimized)
- [ ] Updated personal statements
- [ ] Added wedding party details
- [ ] Configured payment details
- [ ] Updated social media links
- [ ] Tested all links

### Technical
- [ ] All images optimized (< 300KB each)
- [ ] Environment variables configured
- [ ] Cloudinary set up (if using)
- [ ] Payment gateway tested
- [ ] Build runs successfully (`npm run build`)
- [ ] No console errors in browser
- [ ] Tested on mobile devices
- [ ] SEO metadata updated

### Testing
- [ ] Navigation works on all pages
- [ ] Gallery lightbox functions correctly
- [ ] Guest uploads work (if enabled)
- [ ] Payment form displays correctly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Works in Chrome, Firefox, Safari

## Vercel Deployment (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Wedding website ready"

# Create repository on GitHub, then:
git remote add origin https://github.com/aynerd2/WeddingIntro.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**

2. **Sign up/Login** with GitHub

3. **Click "Add New Project"**

4. **Import your repository**
   - Select your wedding website repository
   - Click "Import"

5. **Configure project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. **Add Environment Variables**

   Click "Environment Variables" and add:

   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_value
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_value
   CLOUDINARY_API_KEY=your_value
   CLOUDINARY_API_SECRET=your_value
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_value (optional)
   STRIPE_SECRET_KEY=your_value (optional)
   ```

7. **Click "Deploy"**

   Wait 2-3 minutes for deployment to complete.

8. **Done!** Your site will be live at:
   ```
   https://your-project-name.vercel.app
   ```

### Step 3: Configure Custom Domain (Optional)

See [Custom Domain Setup](#custom-domain-setup) below.

## Netlify Deployment

Alternative to Vercel, also free for personal projects.

### Step 1: Push to GitHub

Same as Vercel Step 1 above.

### Step 2: Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com)**

2. **Sign up/Login** with GitHub

3. **Click "Add new site" → "Import an existing project"**

4. **Connect to Git provider**
   - Choose GitHub
   - Authorize Netlify
   - Select your repository

5. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18` (or higher)

6. **Add Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add all variables from `.env.local`

7. **Click "Deploy site"**

   Wait for deployment to complete.

8. **Your site is live!**
   ```
   https://random-name-12345.netlify.app
   ```

### Step 3: Custom Domain

See [Custom Domain Setup](#custom-domain-setup) below.

## Custom Domain Setup

Make your website accessible at `www.yourwedding.com` instead of the default URL.

### Step 1: Buy a Domain

Purchase from:
- [Namecheap](https://namecheap.com) - Recommended, affordable
- [GoDaddy](https://godaddy.com) - Popular choice
- [Google Domains](https://domains.google) - Simple interface
- [Hover](https://hover.com) - Privacy-focused

**Recommended domain**: `yournames.com` or `yournameswedding.com`

### Step 2A: Add Domain in Vercel

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Enter your domain (e.g., `yourwedding.com`)
4. Click **"Add"**

Vercel will show DNS records to add.

### Step 2B: Add Domain in Netlify

1. In Netlify dashboard, go to **"Domain Settings"**
2. Click **"Add custom domain"**
3. Enter your domain
4. Click **"Verify"** then **"Add domain"**

Netlify will show DNS records to add.

### Step 3: Update DNS Records

**In your domain registrar** (Namecheap, GoDaddy, etc.):

1. Go to DNS settings
2. Add the records provided by Vercel/Netlify

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

3. Save DNS settings

### Step 4: Wait for DNS Propagation

- Usually takes **1-24 hours**
- Check status: [whatsmydns.net](https://whatsmydns.net)
- SSL certificate auto-generates (HTTPS enabled)

### Step 5: Set Primary Domain

In Vercel/Netlify, set `www.yourwedding.com` as primary domain.

This redirects `yourwedding.com` → `www.yourwedding.com`

## Environment Variables

### Production vs Development

Use different credentials for production:

**Development (.env.local):**
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

**Production (Vercel/Netlify):**
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

### Adding Variables

**Vercel:**
1. Project Settings → Environment Variables
2. Add variable
3. Select "Production" environment
4. Save

**Netlify:**
1. Site Settings → Environment Variables
2. Click "Add a variable"
3. Enter key and value
4. Save

### Redeploy After Changes

Environment variables require redeployment:

**Vercel:** Automatic redeployment triggered  
**Netlify:** Click "Trigger deploy" → "Deploy site"

## Post-Deployment

### 1. Test Everything

- [ ] Visit your live site
- [ ] Test on mobile device
- [ ] Click all navigation links
- [ ] Try uploading a photo
- [ ] Test payment form
- [ ] Check all images load
- [ ] Verify social media links

### 2. Set Up Analytics (Optional)

**Google Analytics:**

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:

```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Vercel Analytics:**

1. In Vercel dashboard, go to Analytics tab
2. Enable Web Analytics
3. Automatic tracking enabled!

### 3. Set Up Monitoring

**Uptime Monitoring:**
- [UptimeRobot](https://uptimerobot.com) - Free, checks every 5 min
- [Pingdom](https://pingdom.com) - Professional monitoring

**Error Tracking:**
- [Sentry](https://sentry.io) - Track runtime errors
- [LogRocket](https://logrocket.com) - Session replay

### 4. Performance Optimization

**Check performance:**
- [PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://webpagetest.org)

**Target scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 5. SEO Setup

**Update metadata** in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'YourNames Wedding | Month Day, Year',
  description: 'Join us as we celebrate our love...',
  keywords: 'wedding, your names, location',
  openGraph: {
    title: 'YourNames Wedding',
    description: 'Join us for our special day',
    url: 'https://yourwedding.com',
    siteName: 'YourNames Wedding',
    images: [
      {
        url: 'https://yourwedding.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}
```

**Create Open Graph image:**
- Size: 1200x630px
- Include couple names and wedding date
- Place in `public/og-image.jpg`

### 6. Share with Guests

Once deployed:

1. **Test thoroughly** (different devices, browsers)
2. **Share URL** via:
   - Wedding invitations
   - Save-the-date cards
   - Email
   - WhatsApp/social media
3. **Create QR code** for easy access:
   - Use [qr-code-generator.com](https://qr-code-generator.com)
   - Add to physical invitations

## Troubleshooting

### Build Fails

**Error: "Module not found"**
```bash
# Solution: Install missing dependencies
npm install
npm run build
```

**Error: "Type error"**
```bash
# Solution: Fix TypeScript errors
npm run type-check
# Fix errors shown, then rebuild
```

### Images Not Loading

**Check:**
1. Images are in `public/images/` folder
2. Paths start with `/images/` (not `./images/`)
3. Image files exist and have correct names
4. No typos in image paths

### Environment Variables Not Working

**Check:**
1. Variables set in hosting dashboard (not just `.env.local`)
2. Client-side variables have `NEXT_PUBLIC_` prefix
3. Redeployed after adding variables
4. No typos in variable names

### Slow Page Load

**Solutions:**
1. Optimize images (use [squoosh.app](https://squoosh.app))
2. Enable Cloudinary for automatic optimization
3. Reduce image file sizes (< 300KB each)
4. Use WebP format
5. Enable lazy loading (already implemented)

### Payment Not Working

**Check:**
1. Using correct API keys (test vs live)
2. Environment variables set correctly
3. Stripe/Paystack account is activated
4. Test mode enabled for testing
5. Check browser console for errors

### Custom Domain Not Working

**Check:**
1. DNS records added correctly
2. Waited 24+ hours for propagation
3. No typos in DNS records
4. Domain is pointing to correct values
5. SSL certificate generated (HTTPS)

### 404 Errors

**Solutions:**
1. Check route paths are correct
2. Ensure all pages are in `app/` directory
3. Clear build cache: `rm -rf .next`
4. Rebuild: `npm run build`

## Emergency Rollback

If something breaks after deployment:

### Vercel

1. Go to Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"

### Netlify

1. Go to Deploys
2. Find last working deploy
3. Click "Publish deploy"

## Continuous Deployment

Both Vercel and Netlify auto-deploy on git push:

```bash
# Make changes locally
git add .
git commit -m "Update wedding date"
git push origin main

# Automatic deployment triggered!
# Check status in hosting dashboard
```

## Need Help?

- 📚 [Vercel Docs](https://vercel.com/docs)
- 📚 [Netlify Docs](https://docs.netlify.com)
- 🐛 [GitHub Issues](https://github.com/aynerd2/WeddingIntro/issues)
- 💬 [Discussions](https://github.com/aynerd2/WeddingIntro/discussions)

---

**Your website is now live!** 🎉

Share it with your guests and celebrate! 💍
