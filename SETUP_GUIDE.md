# Wedding Website Setup Guide 🎊

This guide will walk you through customizing the wedding website for Jumoke & Bankole.

## Quick Start Checklist ✅

- [ ] Install dependencies
- [ ] Replace placeholder images
- [ ] Update wedding party information
- [ ] Add personal statements
- [ ] Configure payment integration
- [ ] Update bank details
- [ ] Test all features
- [ ] Deploy to production

## Step-by-Step Customization

### 1. Installing & Running (5 minutes)

```bash
# Navigate to project folder
cd wedding-website

# Install all dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000 to see the website.

### 2. Adding Real Photos (30 minutes)

#### Option A: Using Cloudinary (Recommended)

1. Create free account at [cloudinary.com](https://cloudinary.com)
2. Upload all 30+ pre-wedding photos
3. Copy the URLs for each image
4. Update `components/Gallery.tsx`:

```typescript
const images = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/your-cloud/image/upload/photo1.jpg',
    alt: 'Our engagement day',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/your-cloud/image/upload/photo2.jpg',
    alt: 'Beach photoshoot',
  },
  // Add all 30+ photos...
]
```

#### Option B: Using Local Images

1. Create folder: `public/images/gallery/`
2. Add photos: `photo1.jpg`, `photo2.jpg`, etc.
3. Update `components/Gallery.tsx`:

```typescript
const images = [
  {
    id: 1,
    url: '/images/gallery/photo1.jpg',
    alt: 'Our engagement day',
  },
  // Add remaining photos...
]
```

### 3. Wedding Party Information (20 minutes)

Edit `components/WeddingParty.tsx` with actual data:

```typescript
const bridesmaids = [
  {
    name: 'Sarah Johnson',              // Full name
    nickname: 'SJ',                      // Nickname or pet name
    instagram: '@sarahjay',              // Instagram handle
    statement: 'Your statement here...',  // What they say about the couple
  },
  // Add 3-4 more bridesmaids with their info
]

const groomsmen = [
  {
    name: 'David Okafor',
    nickname: 'Dave',
    instagram: '@daveo',
    statement: 'Your statement here...',
  },
  // Add 3-4 more groomsmen with their info
]
```

**Wedding Party Photos:**
- Upload their photos to Cloudinary or `public/images/party/`
- Update image URLs in the same file
- Recommended size: 400x500px (portrait orientation)

### 4. Personal Love Statements (15 minutes)

Edit `components/OurStory.tsx`:

**Jumoke's Statement** (line 42-49):
```typescript
<p className="font-sans text-base leading-relaxed text-deep-black">
  [Replace with Jumoke's actual statement about Bankole and their love]
</p>
```

**Bankole's Statement** (line 70-78):
```typescript
<p className="font-sans text-base leading-relaxed">
  [Replace with Bankole's actual statement about Jumoke and their love]
</p>
```

**Timeline Events** (lines 89-124):
Update the three milestone stories:
1. First Met
2. Fell in Love
3. The Proposal

### 5. Payment Integration (30 minutes)

#### Update Bank Details

Edit `components/GiftSection.tsx` (lines 17-22):

```typescript
const bankDetails = {
  accountName: 'Jumoke & Bankole Wedding Fund',  // Replace
  accountNumber: '1234567890',                   // Replace
  bankName: 'Access Bank Nigeria',               // Replace
  routingNumber: '987654321',                    // Replace or remove if not applicable
}
```

#### Setup Stripe Payment (Recommended)

1. Create account at [stripe.com](https://stripe.com)
2. Get your publishable key from the dashboard
3. Install Stripe:
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

4. Create `.env.local`:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
```

5. Update `handlePayment` function in `components/GiftSection.tsx`:

```typescript
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const handlePayment = async () => {
  const amount = selectedAmount || parseFloat(customAmount);
  if (!amount || amount <= 0) return;

  const stripe = await stripePromise;
  
  // Call your backend to create payment intent
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: amount * 100 }), // Convert to cents
  });

  const { clientSecret } = await response.json();
  
  // Redirect to Stripe checkout
  const { error } = await stripe!.confirmPayment({
    clientSecret,
    confirmParams: {
      return_url: `${window.location.origin}/payment-success`,
    },
  });

  if (error) {
    alert('Payment failed: ' + error.message);
  }
};
```

6. Create backend API route `app/api/create-payment-intent/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  const { amount } = await request.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    metadata: { wedding: 'Jumoke & Bankole' },
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
```

#### Alternative: Setup Paystack (For Nigerian Payments)

1. Create account at [paystack.com](https://paystack.com)
2. Get your public key
3. Install: `npm install react-paystack`
4. Update gift component with Paystack integration

### 6. Social Media Links (5 minutes)

Edit `components/Footer.tsx` (lines 35-51):

```typescript
<a
  href="https://instagram.com/jumoke_actual_handle"  // Update
  target="_blank"
  rel="noopener noreferrer"
>
  <Instagram size={20} />
</a>
<a
  href="https://instagram.com/bankole_actual_handle"  // Update
  target="_blank"
  rel="noopener noreferrer"
>
  <Instagram size={20} />
</a>
```

### 7. Guest Photo Upload Backend (Optional - 1 hour)

For production, implement real image storage:

**Using Cloudinary:**

1. Install: `npm install cloudinary`
2. Create `app/api/upload-guest-photo/route.ts`:

```typescript
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: 'wedding-guest-photos' },
      (error, result) => {
        if (error) reject(error);
        resolve(NextResponse.json({ url: result?.secure_url }));
      }
    ).end(buffer);
  });
}
```

3. Update `components/GuestGallery.tsx` to use this API

### 8. Testing Before Launch (15 minutes)

Test all features:
- [ ] Navigation works smoothly
- [ ] All images load correctly
- [ ] Gallery lightbox functions
- [ ] Guest photo upload works (if implemented)
- [ ] Payment flow is clear
- [ ] Bank details are correct
- [ ] Mobile responsive design looks good
- [ ] All social links work

### 9. Deployment (20 minutes)

#### Deploy to Vercel:

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Wedding website ready"
git remote add origin your-repo-url
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `CLOUDINARY_CLOUD_NAME`
   - etc.
6. Click "Deploy"
7. Your site will be live at `your-project.vercel.app`

#### Custom Domain (Optional):

1. Buy domain from Namecheap, GoDaddy, etc.
2. In Vercel dashboard, go to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Final Touches

### Performance Optimization:
- Compress all images to WebP format (use [squoosh.app](https://squoosh.app))
- Keep images under 200KB each
- Test website speed at [PageSpeed Insights](https://pagespeed.web.dev)

### SEO & Sharing:
- Update `app/layout.tsx` metadata
- Add Open Graph image (1200x630px)
- Test sharing on social media

### Analytics (Optional):
- Add Google Analytics
- Track gift button clicks
- Monitor photo uploads

## Support & Help

If you need help:
1. Check the README.md file
2. Review Next.js documentation
3. Check component comments for guidance

## Common Issues & Solutions

**Images not showing:**
- Check file paths are correct
- Ensure images are in `public` folder or hosted URLs work
- Clear browser cache

**Payment not working:**
- Verify API keys are correct
- Check environment variables are set
- Test in Stripe test mode first

**Animations laggy:**
- Reduce number of animated elements
- Optimize images
- Test on different devices

---

Congratulations! Your wedding website is ready to share with guests! 🎉💍
