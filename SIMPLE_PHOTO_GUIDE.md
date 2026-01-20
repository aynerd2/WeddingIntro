# SIMPLE PHOTO UPLOAD GUIDE 📸
## For People Who Don't Like Technical Stuff!

You have 3 types of photos to add:
1. **Pre-wedding photos** (30+ photos of Jumoke & Bankole)
2. **Bridesmaids photos** (4 photos)
3. **Groomsmen photos** (4 photos)

Let me show you the EASIEST way to add them.

---

## 🎯 EASIEST METHOD: Use Your Computer Folders (No Cloudinary Needed!)

### Step 1: Create Folders for Your Photos

1. Open the `wedding-website` folder you downloaded
2. Go to `public` folder (if it doesn't exist, create it)
3. Inside `public`, create a folder called `images`
4. Inside `images`, create these 3 folders:
   ```
   public/
   └── images/
       ├── pre-wedding/      (put 30+ couple photos here)
       ├── bridesmaids/      (put 4 bridesmaid photos here)
       └── groomsmen/        (put 4 groomsmen photos here)
   ```

### Step 2: Prepare Your Photos

**IMPORTANT**: Make your photos smaller first or the website will be VERY slow!

**Easy way to make photos smaller:**

1. Go to https://squoosh.app (it's free, no sign-up)
2. Drag each photo into the website
3. On the right side:
   - Change "Format" to **WebP**
   - Set "Quality" to **80**
4. Click "Download" button
5. Save the smaller photo

Do this for ALL your photos (yes, it takes time but only do it once!)

**Name your photos simply:**
- Pre-wedding: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
- Bridesmaids: `bridesmaid1.jpg`, `bridesmaid2.jpg`, etc.
- Groomsmen: `groomsman1.jpg`, `groomsman2.jpg`, etc.

### Step 3: Put Photos in Folders

Copy your optimized photos into the folders you created:

```
public/
└── images/
    ├── pre-wedding/
    │   ├── photo1.webp
    │   ├── photo2.webp
    │   ├── photo3.webp
    │   └── ... (all 30+ photos)
    │
    ├── bridesmaids/
    │   ├── bridesmaid1.webp
    │   ├── bridesmaid2.webp
    │   ├── bridesmaid3.webp
    │   └── bridesmaid4.webp
    │
    └── groomsmen/
        ├── groomsman1.webp
        ├── groomsman2.webp
        ├── groomsman3.webp
        └── groomsman4.webp
```

### Step 4: Update the Code (Copy & Paste)

#### A. Update Pre-Wedding Gallery

Open file: `components/Gallery.tsx`

Find this line (around line 17):
```typescript
const images = Array.from({ length: 30 }, (_, i) => ({
```

**REPLACE EVERYTHING** from that line until line 21 with this:

```typescript
const images = [
  { id: 1, url: '/images/pre-wedding/photo1.webp', alt: 'Pre-wedding photo 1' },
  { id: 2, url: '/images/pre-wedding/photo2.webp', alt: 'Pre-wedding photo 2' },
  { id: 3, url: '/images/pre-wedding/photo3.webp', alt: 'Pre-wedding photo 3' },
  { id: 4, url: '/images/pre-wedding/photo4.webp', alt: 'Pre-wedding photo 4' },
  { id: 5, url: '/images/pre-wedding/photo5.webp', alt: 'Pre-wedding photo 5' },
  { id: 6, url: '/images/pre-wedding/photo6.webp', alt: 'Pre-wedding photo 6' },
  { id: 7, url: '/images/pre-wedding/photo7.webp', alt: 'Pre-wedding photo 7' },
  { id: 8, url: '/images/pre-wedding/photo8.webp', alt: 'Pre-wedding photo 8' },
  { id: 9, url: '/images/pre-wedding/photo9.webp', alt: 'Pre-wedding photo 9' },
  { id: 10, url: '/images/pre-wedding/photo10.webp', alt: 'Pre-wedding photo 10' },
  // Add all 30+ photos following this pattern
]
```

Just copy that pattern for ALL your photos. Change the numbers to match how many photos you have.

#### B. Update Bridesmaids Photos

Open file: `components/WeddingParty.tsx`

Find the part that says `bridesmaids = [` (around line 6)

Look for these lines inside each bridesmaid entry:
```typescript
<img
  src={`https://picsum.photos/400/500?random=${index + 100}`}
```

Change them to:
```typescript
// For first bridesmaid (Sarah Johnson)
<img
  src="/images/bridesmaids/bridesmaid1.webp"

// For second bridesmaid (Amara Obi)
<img
  src="/images/bridesmaids/bridesmaid2.webp"

// For third bridesmaid (Temi Adeleke)
<img
  src="/images/bridesmaids/bridesmaid3.webp"

// For fourth bridesmaid (Grace Williams)
<img
  src="/images/bridesmaids/bridesmaid4.webp"
```

#### C. Update Groomsmen Photos

Same file: `components/WeddingParty.tsx`

Find the groomsmen section and change:
```typescript
// For first groomsman (David Okafor)
<img
  src="/images/groomsmen/groomsman1.webp"

// For second groomsman (Michael Balogun)
<img
  src="/images/groomsmen/groomsman2.webp"

// Continue for all groomsmen...
```

### Step 5: Test It!

1. Open Terminal/Command Prompt
2. Go to your project folder:
   ```bash
   cd wedding-website
   ```
3. Run:
   ```bash
   npm run dev
   ```
4. Open browser: http://localhost:3000
5. Check if all photos show up!

---

## 🌟 METHOD 2: Use Cloudinary (If You Want Guest Uploads to Work)

**Why use Cloudinary?**
- Guest photos will be saved permanently (not just in browser)
- All guests will see the same photos
- Photos load faster
- Free for wedding websites!

### Step 1: Create Account

1. Go to https://cloudinary.com
2. Click **"Sign Up for Free"**
3. Fill in:
   - Name
   - Email
   - Password
4. Click the email they send you to verify
5. You're in!

### Step 2: Get Your 3 Magic Codes

After you sign up, you'll see a dashboard. You need 3 things:

1. **Cloud Name** - It's at the top (looks like: `dab123xyz`)
2. **API Key** - Below cloud name (looks like: `123456789012345`)
3. **API Secret** - Click "reveal" to see it (looks like: `AbCdEfGhIjKlMnOpQrStUv`)

**WRITE THESE DOWN!** You'll need them.

### Step 3: Create Upload Preset

1. In Cloudinary dashboard, click **"Settings"** (gear icon, top right)
2. Click **"Upload"** tab
3. Scroll down to **"Upload presets"**
4. Click **"Add upload preset"**
5. Fill in:
   - **Preset name**: Type `wedding_photos`
   - **Signing Mode**: Choose **"Unsigned"**
   - **Folder**: Type `jumoke-bankole-wedding`
6. Click **"Save"**

### Step 4: Add Your Codes to the Website

1. In your `wedding-website` folder, find file: `.env.example`
2. **Make a copy** and rename it to: `.env.local` (note the dot at the start!)
3. Open `.env.local` in Notepad or any text editor
4. Replace the placeholder text with YOUR codes:

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dab123xyz
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=wedding_photos
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=AbCdEfGhIjKlMnOpQrStUv
```

Use YOUR actual codes from Step 2!

5. **Save** the file

### Step 5: Upload Pre-Wedding & Wedding Party Photos to Cloudinary

**Option A: Upload Through Dashboard (Easiest)**

1. In Cloudinary, click **"Media Library"**
2. Click **"Upload"** button (blue button, top right)
3. Create folders:
   - Click "Folder" icon
   - Create: `jumoke-bankole-wedding/pre-wedding`
   - Create: `jumoke-bankole-wedding/bridesmaids`
   - Create: `jumoke-bankole-wedding/groomsmen`
4. Go into each folder and drag your photos in
5. After upload, click each photo and copy the URL (starts with `https://res.cloudinary.com/...`)

**Then update your code:**

In `components/Gallery.tsx`:
```typescript
const images = [
  { 
    id: 1, 
    url: 'https://res.cloudinary.com/YOUR-CLOUD/image/upload/v1234/jumoke-bankole-wedding/pre-wedding/photo1.jpg',
    alt: 'Our engagement day' 
  },
  // Paste all your Cloudinary URLs here
]
```

Do the same for bridesmaids and groomsmen in `components/WeddingParty.tsx`

### Step 6: Test Everything

```bash
npm run dev
```

Go to http://localhost:3000 and check:
- ✅ Pre-wedding photos show
- ✅ Bridesmaid photos show
- ✅ Groomsmen photos show
- ✅ Try uploading a test photo in Guest Gallery
- ✅ Refresh page - guest photo should still be there!

---

## ❓ Which Method Should You Use?

### Use EASIEST METHOD (Computer Folders) if:
- You just want the website to work
- You don't care about guest uploads
- You want it done in 30 minutes

### Use Cloudinary if:
- You want guests to upload photos that EVERYONE can see
- You want photos to load faster
- You want to look more professional
- You have 1 hour to set it up

---

## 🆘 Common Problems

### "Photos not showing!"

**Check:**
1. Are photos in the right folder? (`public/images/...`)
2. Did you spell the file names correctly?
3. Did you save the code files after editing?
4. Try refreshing browser (press Ctrl+F5 or Cmd+Shift+R)

### "Cloudinary says 'Invalid credentials'"

**Fix:**
1. Check `.env.local` file exists (not `.env.example`)
2. Make sure you copied the codes correctly (no extra spaces)
3. Make sure file is named exactly `.env.local`
4. Restart the server: Stop it (Ctrl+C) and run `npm run dev` again

### "Images are huge and slow!"

**Fix:**
1. Use https://squoosh.app to make them smaller
2. Target: Each photo should be under 300KB
3. Use WebP format
4. Re-upload the smaller versions

---

## 📝 Quick Checklist

Before you say "I'm done!":

- [ ] All 30+ pre-wedding photos show on website
- [ ] All 4 bridesmaid photos show
- [ ] All 4 groomsmen photos show
- [ ] Photos load in under 5 seconds
- [ ] Website looks good on phone (test it!)
- [ ] Guest upload works (if using Cloudinary)

---

## 💡 Pro Tips

1. **Name photos clearly**: Instead of `IMG_1234.jpg`, use `engagement-shoot.jpg`
2. **Backup**: Keep original high-quality photos in a different folder
3. **Test on phone**: 70% of people will view on mobile
4. **Ask for help**: If stuck, just ask me!

---

## 🎉 You're Done!

Once photos show up on the website, you're good to go! The hard part is over.

Now just update the names, Instagram handles, and statements in the code and you're ready to share with guests!

Questions? I'm here to help make it simpler! 😊
