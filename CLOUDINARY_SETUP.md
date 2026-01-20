# Cloudinary Setup Guide for Image Optimization 📸

This guide explains how to set up Cloudinary for automatic image optimization, compression, and cloud storage.

## Why Cloudinary?

✅ **Automatic Image Optimization** - Converts to WebP, compresses, and resizes automatically
✅ **CDN Delivery** - Fast global image delivery
✅ **Persistent Storage** - Images saved permanently in the cloud
✅ **Shared Gallery** - All guests see the same photos in real-time
✅ **Free Tier** - 25GB storage and 25GB bandwidth per month (more than enough for a wedding!)

## Step-by-Step Setup

### 1. Create Cloudinary Account (5 minutes)

1. Visit [cloudinary.com](https://cloudinary.com)
2. Click "Sign Up for Free"
3. Fill in your details and verify email
4. You'll be redirected to your dashboard

### 2. Get Your Credentials (2 minutes)

From your Cloudinary Dashboard:

1. **Cloud Name**: Found at the top of dashboard (e.g., "demo-wedding")
2. **API Key**: Found in "Account Details" section
3. **API Secret**: Click "reveal" next to API Secret

### 3. Create Upload Preset (3 minutes)

1. Go to **Settings** → **Upload**
2. Scroll to "Upload presets"
3. Click **"Add upload preset"**
4. Configure:
   - **Preset name**: `wedding_guest_photos`
   - **Signing Mode**: Select "Unsigned" (allows direct uploads without backend)
   - **Folder**: `jumoke-bankole-wedding/guest-photos`
   - **Use filename**: Yes
   - **Unique filename**: Yes
5. Click **Save**

### 4. Configure Environment Variables

Create `.env.local` file in your project root:

```bash
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=wedding_guest_photos
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

**Replace the values** with your actual credentials from step 2.

### 5. Install Dependencies

```bash
npm install cloudinary
```

### 6. Test the Setup

1. Run your development server:
```bash
npm run dev
```

2. Navigate to the Guest Gallery section
3. Try uploading a test image
4. Check your Cloudinary dashboard to confirm the upload

## How Image Optimization Works

### Automatic Transformations

When guests upload photos, Cloudinary automatically:

1. **Resizes** large images to max 1200x1200px (reduces file size)
2. **Compresses** images with smart quality settings
3. **Converts** to WebP format (50-80% smaller than JPEG)
4. **Generates** thumbnails for gallery view (400x400px)
5. **Lazy loads** images for better performance

### Example Transformation

**Original Image**: 
- Size: 8MB
- Format: JPEG
- Dimensions: 4000x3000px

**After Cloudinary Optimization**:
- Size: 200KB (96% reduction!)
- Format: WebP (or JPEG for older browsers)
- Dimensions: 1200x900px
- Quality: Auto-optimized

## API Routes Explained

### Upload Endpoint: `/api/upload-guest-photo`

```typescript
// Handles image uploads with optimization
POST /api/upload-guest-photo
- Validates file type and size
- Uploads to Cloudinary with transformations
- Returns optimized image URL
```

### Fetch Endpoint: `/api/get-guest-photos`

```typescript
// Retrieves all guest photos
GET /api/get-guest-photos
- Fetches images from Cloudinary folder
- Generates optimized thumbnail URLs
- Returns sorted by newest first
```

## Folder Structure in Cloudinary

```
cloudinary/
└── jumoke-bankole-wedding/
    ├── guest-photos/          (Guest uploaded images)
    ├── pre-wedding/           (Your pre-wedding photos)
    └── wedding-party/         (Bridesmaids & groomsmen photos)
```

## Advanced: Upload Your Pre-Wedding Photos

### Option 1: Manual Upload (Easier)

1. Go to Cloudinary Dashboard → **Media Library**
2. Click **Upload**
3. Create folder: `jumoke-bankole-wedding/pre-wedding`
4. Upload all 30+ photos
5. Copy URLs and update `components/Gallery.tsx`

### Option 2: Bulk Upload API (Faster)

Create a script `scripts/upload-gallery.ts`:

```typescript
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import path from 'path'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function uploadGallery() {
  const galleryFolder = './public/images/pre-wedding' // Your local folder
  const files = fs.readdirSync(galleryFolder)
  
  for (const file of files) {
    const filePath = path.join(galleryFolder, file)
    
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'jumoke-bankole-wedding/pre-wedding',
        transformation: [
          { width: 1200, height: 1600, crop: 'limit', quality: 'auto:good' }
        ]
      })
      
      console.log(`Uploaded: ${file} -> ${result.secure_url}`)
    } catch (error) {
      console.error(`Failed to upload ${file}:`, error)
    }
  }
}

uploadGallery()
```

Run with: `ts-node scripts/upload-gallery.ts`

## Update Gallery Component with Cloudinary URLs

After uploading, update `components/Gallery.tsx`:

```typescript
const images = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/your-cloud/image/upload/v1234/jumoke-bankole-wedding/pre-wedding/photo1.jpg',
    alt: 'Our engagement shoot',
  },
  // ... more images
]
```

## Performance Benefits

### Before Cloudinary:
- Images: 5-10MB each
- Load time: 10-30 seconds on mobile
- Bandwidth: 500MB+ per gallery view
- Format: Raw JPEG/PNG

### After Cloudinary:
- Images: 100-300KB each
- Load time: 1-3 seconds on mobile
- Bandwidth: 20-50MB per gallery view
- Format: WebP (modern), JPEG (fallback)

## Cost Estimation

Cloudinary Free Tier includes:
- 25GB storage
- 25GB bandwidth/month
- Unlimited transformations

**Typical Wedding Website Usage:**
- 30 pre-wedding photos: ~500MB
- 100 guest uploads: ~1.5GB
- 1000 monthly visitors: ~20GB bandwidth

**Result**: Completely FREE! 🎉

## Troubleshooting

### Error: "Upload failed"
- Check API keys are correct in `.env.local`
- Verify upload preset is "Unsigned"
- Ensure folder name matches in code and Cloudinary

### Error: "Folder not found"
- Create folders manually in Cloudinary first
- Or remove folder restriction from upload preset

### Images not showing
- Check CORS settings in Cloudinary (usually auto-configured)
- Verify `NEXT_PUBLIC_` prefix for client-side variables
- Clear browser cache

### Slow uploads
- Check internet connection
- Reduce image size before upload
- Upload fewer images at once

## Alternative: Other Image Services

If you prefer not to use Cloudinary:

### AWS S3 + CloudFront
- More control, but requires more setup
- Good for large-scale applications

### ImageKit
- Similar to Cloudinary
- Different pricing structure

### Vercel Blob Storage
- Integrated with Vercel deployment
- Simple API, but less features

## Security Best Practices

1. **Never commit** `.env.local` to Git
2. **Use unsigned uploads** only for trusted users
3. **Set upload limits** (size, quantity)
4. **Enable folder restrictions** in upload preset
5. **Monitor usage** in Cloudinary dashboard

## Next Steps

1. ✅ Set up Cloudinary account
2. ✅ Configure environment variables
3. ✅ Test guest photo uploads
4. ✅ Upload pre-wedding photos
5. ✅ Update Gallery component URLs
6. ✅ Deploy to production

---

Need help? Check [Cloudinary Documentation](https://cloudinary.com/documentation) or the project README.md
