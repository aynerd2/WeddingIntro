# 💍 Wedding Website Template - Black & White Romance

A stunning, production-ready wedding website built with Next.js 14, featuring elegant black and white design, smooth animations, and complete functionality for modern weddings.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🎨 **Elegant Black & White Design** - Timeless, sophisticated aesthetic
- 💫 **Smooth Animations** - Powered by Framer Motion for delightful interactions
- 📱 **Fully Responsive** - Beautiful on all devices from mobile to desktop
- 🖼️ **Photo Galleries** - Pre-wedding photos with lightbox viewer
- 👥 **Wedding Party Profiles** - Bridesmaids & groomsmen with Instagram links
- 📸 **Guest Photo Uploads** - Let guests share their photos (Cloudinary integration)
- 💰 **Gift Payment Integration** - Stripe/Paystack ready for monetary gifts
- ⚡ **Performance Optimized** - Lazy loading, WebP images, CDN delivery
- 🎭 **Custom Typography** - Beautiful font combinations
- 🔍 **SEO Optimized** - Meta tags and Open Graph ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/aynerd2/WeddingIntro.git
cd WeddingIntro

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website!

## 📝 Customization Checklist

Use this checklist to customize the template for your wedding:

### Basic Information
- [ ] Update couple names in `components/Hero.tsx`
- [ ] Update wedding date in `components/Hero.tsx`
- [ ] Update metadata in `app/layout.tsx`

### Photos
- [ ] Add couple photos to `public/images/couple/`
- [ ] Add pre-wedding photos (see guide below)
- [ ] Add bridesmaid photos
- [ ] Add groomsmen photos

### Content
- [ ] Write personal love statements in `components/OurStory.tsx`
- [ ] Update wedding party details in `components/WeddingParty.tsx`
- [ ] Update bank details in `components/GiftSection.tsx`
- [ ] Update social media links in `components/Footer.tsx`

### Optional Features
- [ ] Set up Cloudinary for image optimization (see guide)
- [ ] Configure payment integration (Stripe/Paystack)
- [ ] Customize colors and fonts

## 📸 Adding Your Photos

### Method 1: Local Files (Easiest)

1. **Create folder structure:**
   ```
   public/
   └── images/
       ├── couple/
       │   ├── bride.jpg
       │   └── groom.jpg
       ├── pre-wedding/
       │   ├── photo1.jpg
       │   ├── photo2.jpg
       │   └── ... (30+ photos)
       ├── bridesmaids/
       │   ├── name1.jpg
       │   └── ...
       └── groomsmen/
           ├── name1.jpg
           └── ...
   ```

2. **Optimize images first** (important for performance):
   - Go to [squoosh.app](https://squoosh.app)
   - Upload each photo
   - Convert to WebP format
   - Set quality to 80
   - Download and use the optimized version

3. **Update code** - See [SIMPLE_PHOTO_GUIDE.md](SIMPLE_PHOTO_GUIDE.md) for detailed instructions

### Method 2: Cloudinary (Recommended for Best Performance)

For automatic image optimization and guest uploads:

1. Create free account at [cloudinary.com](https://cloudinary.com)
2. Follow [CLOUDINARY_SETUP.md](CLOUDINARY_SETUP.md) guide
3. Update `.env.local` with your credentials

## 🎨 Customization Guide

### Update Couple Names

**File: `components/Hero.tsx`** (lines 45-53)

```typescript
<h1>
  YourName              {/* Change here */}
  <span>&</span>
  PartnerName           {/* Change here */}
</h1>
```

### Update Wedding Date

**File: `components/Hero.tsx`** (lines 56-61)

```typescript
<p className="font-elegant text-2xl">
  Your Special Day      {/* Change here */}
</p>
<p className="font-sans text-lg">
  Month Day, Year       {/* Change here */}
</p>
```

### Add Couple Photos

**File: `components/OurStory.tsx`** (lines 33 & 62)

```typescript
// Bride's photo
<img 
  src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901009/v30i05s6ehah1ssqgyga.jpg"    {/* Add your photo path */}
  alt="Jumoke"
/>

// Groom's photo
<img 
  src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901009/xt0insycgmof4cfwacpg.jpg"    {/* Add your photo path */}
  alt="Bankole"
/>
```

### Add Pre-Wedding Photos

**File: `components/Gallery.tsx`** (line 17)

Replace the sample data with:

```typescript
const images = [
  { id: 1, url: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901007/ljf8r1yu8okb0htc0guq.jpg', alt: 'Description 1' },
  { id: 2, url: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901009/ejecsf34ynxuchgiydxc.jpg', alt: 'Description 2' },
  { id: 3, url: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901011/di384oqcqqd6qnoxcxai.jpg', alt: 'Description 3' },
  // Add all 30+ photos
]
```

### Add Wedding Party

**File: `components/WeddingParty.tsx`** (lines 6-48)

```typescript
const bridesmaids = [
  {
    name: 'Yusuf Zainab',
    nickname: 'Zizi',
    instagram: '@Daisyzynab',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900956/dtrplasbuasugs9jwxor.jpg',  
    statement: 'your home will be amongst the best ...',
  },
   {
    name: 'Abolaji Abigael Omotayo',
    nickname: 'TSplash',
    instagram: '@sarahjay',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900951/jddiclhdylfbr2mzcpk9.jpg',  
    statement: 'May you both be a safe place for each other,full of trust, warmth and enduring love',
  },
  {
    name: 'Fasanu Elizabeth Adeola',
    nickname: 'Lizzie',
    instagram: '@lizzie_herself',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900950/wa8cr7wsqvdprpx2jai4.jpg',  
    statement: 'You are a going to make a great couple, And I pray that the lord keep and bless your home always. Amen',
  },
    {
    name: 'Ojekunle Gift Oluwatobi',
    nickname: 'Gifted',
    instagram: '@holuwatobi_gift',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900956/bxsdbpl9edqgvjlubqx3.jpg',  
    statement: 'Olajumoke mi as I will always call you, I pray your Home will be blessed,with wealth, children, and powerful connection in Jesus name 🙏. I love you Boo 💕 💕',
  },


{
    name: 'Gloria Archisheko jigo',
    nickname: 'Riah😻',
    instagram: '@gloreeyah_zhigoo',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900956/f1xsazvbukxqxhx6woyo.jpg',  
    statement: 'I pray this union stands as a testimony of love, faith, and commitment, inspiring many beautiful homes.😍',
  },
  {
    name: 'Akinwumi Mopelola',
    nickname: 'Mope',
    instagram: '@Mopelolalove1',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900954/ojwk6sf3kcarl5yh7uym.jpg',  
    statement: 'May your marriage be a place of peace in a noisy world, a safe space where love is chosen daily and friendship never fades',
  },
]

const groomsmen = [
 {
    name: 'Victor Oluwafemi',
    nickname: 'JoyWay',
    instagram: '@Livelyfemi',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900955/gncimloq2y6z0o3kr4qe.jpg',  
    statement: 'Take things easy with yourselves, as time goes on, you’d get to understand each other more.',
  },
  {
    name: 'Olaniyi Miracle Oluwapelumi',
    nickname: 'Hemhigh',
    instagram: '@official_miracle.o',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900955/uglw1q5tgmmjdtnyqwjw.jpg',  
    statement: 'May your love grow stronger every day. May God bless your union with peace, joy, and endless laughter.',
  },
  {
    name: 'Tumilara Adaraniwon',
    nickname: 'nill',
    instagram: '@thefeyitumilara',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900955/yw8c5sofegozv5b3fsjk.jpg',  
    statement: 'May your union be built on love, respect, patience, and faith, and may your home be a place of comfort and peace.',
  },
  {
    name: 'Rabiu Idowu Olalere',
    nickname: 'Atewo',
    instagram: '@Dc_codeh_gadgets',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900955/fiy3wrtobkgfuy3dzprb.jpg',  
    statement: 'May your love continue to grow deeper with every smile you share and every challenge you overcome together',
  },
   {
    name: 'Oluwatobi FALUSI',
    nickname: 'PHALUS',
    instagram: '@Luwalusi',
    image: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768900954/xyikuf2j4fzcwvexx8zl.jpg',  
    statement: 'I wish you a lifetime of happiness, shared dreams and countless beautiful memories.',
  },
]
```

Then update the image tags (lines 109 & 175):

```typescript
// For bridesmaids
<img src={bridesmaid.image} alt={bridesmaid.name} />

// For groomsmen  
<img src={groomsman.image} alt={groomsman.name} />
```

### Update Personal Statements

**File: `components/OurStory.tsx`** (lines 42-48 & 70-77)

Replace the placeholder text with your own love story.

### Configure Payment

**File: `components/GiftSection.tsx`** (lines 17-22)

```typescript
const bankDetails = {
  accountName: 'Your Account Name',
  accountNumber: '1234567890',
  bankName: 'Your Bank Name',
  routingNumber: '987654321',  // Optional
}
```

## 💳 Payment Integration

### Stripe (International)

1. Sign up at [stripe.com](https://stripe.com)
2. Get API keys from dashboard
3. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```
4. Create API route (see [Payment Guide](docs/PAYMENT_INTEGRATION.md))

### Paystack (African Markets)

```bash
npm install react-paystack
```

See [Payment Integration Guide](docs/PAYMENT_INTEGRATION.md) for complete setup.

## 🌈 Color Customization

**File: `tailwind.config.js`** (lines 11-17)

```javascript
colors: {
  'deep-black': '#0a0a0a',    // Change these
  'soft-white': '#fafafa',    // to your
  'charcoal': '#1a1a1a',      // preferred
  'pearl': '#f5f5f5',         // color
  'smoke': '#666666',         // palette
}
```

## 🎭 Font Customization

**File: `app/globals.css`** (line 5)

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

**File: `tailwind.config.js`** (lines 19-23)

```javascript
fontFamily: {
  'display': ['YourFont', 'serif'],
  'elegant': ['YourFont2', 'serif'],
  'sans': ['YourFont3', 'sans-serif'],
}
```

## 📂 Project Structure

```
wedding-website/
├── app/
│   ├── api/                      # API routes
│   │   ├── upload-guest-photo/   # Image upload
│   │   └── get-guest-photos/     # Fetch photos
│   ├── layout.tsx                # Root layout + metadata
│   ├── page.tsx                  # Main page
│   └── globals.css               # Global styles
├── components/
│   ├── Hero.tsx                  # Landing section
│   ├── Navigation.tsx            # Navigation bar
│   ├── OurStory.tsx              # Love story + photos
│   ├── Gallery.tsx               # Pre-wedding gallery
│   ├── WeddingParty.tsx          # Bridesmaids & groomsmen
│   ├── GuestGallery.tsx          # Guest uploads
│   ├── GiftSection.tsx           # Payment section
│   └── Footer.tsx                # Footer + social links
├── public/
│   └── images/                   # Your photos go here
├── docs/                         # Documentation
├── .env.example                  # Environment template
├── package.json                  # Dependencies
├── tailwind.config.js            # Styling config
└── next.config.js                # Next.js config
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables
6. Click "Deploy"

Your site will be live at `yoursite.vercel.app`

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/wedding-website-template)

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Build: `npm run build`
5. Publish: `.next`

### Custom Domain

After deployment:
1. Buy domain (Namecheap, GoDaddy, etc.)
2. Add to Vercel/Netlify dashboard
3. Update DNS records as shown
4. Wait 24-48 hours for propagation

## 📊 Performance

This template is optimized for speed:

- **Lighthouse Score**: 95+ across all metrics
- **Load Time**: < 3 seconds on 4G
- **Image Optimization**: Automatic WebP conversion
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Images load as needed

## 📚 Documentation

- **[SIMPLE_PHOTO_GUIDE.md](SIMPLE_PHOTO_GUIDE.md)** - Easy photo setup (non-technical)
- **[CLOUDINARY_SETUP.md](CLOUDINARY_SETUP.md)** - Image optimization with Cloudinary
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed customization walkthrough
- **[IMAGE_OPTIMIZATION.md](IMAGE_OPTIMIZATION.md)** - Technical image handling
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute

## 🐛 Troubleshooting

### Images not showing
- Check file paths are correct
- Ensure images are in `public/images/` folder
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

### Cloudinary errors
- Verify credentials in `.env.local`
- Check file is named `.env.local` (not `.env.example`)
- Restart dev server after adding credentials

### Animations not working
- Install dependencies: `npm install framer-motion`
- Clear cache: `rm -rf .next && npm run dev`

### Payment not processing
- Check API keys are correct
- Use test keys for development
- Check console for error messages

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/NewFeature`
3. Make your changes
4. Commit: `git commit -m 'Add NewFeature'`
5. Push: `git push origin feature/NewFeature`
6. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use for personal or commercial projects
- ✅ Modify and customize
- ✅ Distribute
- ❌ Hold the authors liable

## 🙏 Acknowledgments

- Icons: [Lucide React](https://lucide.dev)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Images: [Cloudinary](https://cloudinary.com)
- Hosting: [Vercel](https://vercel.com)

## 💬 Support & Community

- 📧 **Email**: your.email@example.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/aynerd2/WeddingIntro/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/aynerd2/WeddingIntro/discussions)
- ⭐ **Star this repo** if you find it helpful!

## 🎯 Roadmap

Upcoming features:

- [ ] RSVP functionality with guest management
- [ ] Event schedule/timeline section
- [ ] Registry integration (Amazon, Target)
- [ ] Multi-language support
- [ ] Dark mode option
- [ ] Video background support
- [ ] Digital guestbook
- [ ] Live streaming integration
- [ ] Mobile app version

## 🌟 Showcase

Used this template? We'd love to see it!

Share your wedding website by submitting a PR to [SHOWCASE.md](SHOWCASE.md)

## ⚡ Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking

# Cleanup
rm -rf .next         # Clear build cache
npm install          # Reinstall dependencies
```

## 📞 Getting Help

Stuck? Here's how to get help:

1. Check the [documentation files](/)
2. Search [existing issues](https://github.com/aynerd2/WeddingIntro/issues)
3. Ask in [Discussions](https://github.com/aynerd2/WeddingIntro/discussions)
4. Open a [new issue](https://github.com/aynerd2/WeddingIntro/issues/new)

## 💝 Originally Created For

This template was designed for **Jumoke & Bankole's Valentine's Day 2026 Wedding**.

Now available as an open-source template for couples worldwide! 🌍

---

**Made with ❤️ for couples celebrating love**

If this template helps make your wedding website beautiful, consider:
- ⭐ Starring this repository
- 📢 Sharing with other couples
- 💝 Contributing improvements

**Happy Wedding Planning! 🎉💍**
