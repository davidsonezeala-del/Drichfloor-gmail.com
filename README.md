# Ghana Valentine's Experience 2026 - Landing Page

A premium, production-grade Next.js landing page for the Ghana Valentine's Experience 2026.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with metadata and JSON-LD
- ✅ Analytics-ready event tracking
- ✅ Smooth scrolling navigation
- ✅ Sticky mobile CTA
- ✅ Countdown timer to event
- ✅ FAQ section with accordion
- ✅ Working callback form
- ✅ Accessibility features

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Payment Link

To change the payment link, edit `src/lib/config.ts`:

```typescript
PAYMENT_URL: 'https://paystack.com/pay/YOUR_PAYMENT_CODE',
```

Replace `YOUR_PAYMENT_CODE` with your actual Paystack payment link or any other payment processor URL.

### Callback Form Endpoint

To change the callback form submission endpoint, edit `src/lib/config.ts`:

```typescript
CALL_REQUEST_ENDPOINT: 'https://your-backend.com/api/callback',
```

Replace with your actual backend endpoint that accepts POST requests with the following JSON structure:

```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "preferredTime": "Morning|Afternoon|Evening"
}
```

### Analytics Integration

Analytics tracking is set up in `src/lib/analytics.ts`. Currently, it logs to console. To integrate with your analytics service:

1. Open `src/lib/analytics.ts`
2. Uncomment and configure your analytics service (Google Analytics, Mixpanel, Facebook Pixel, etc.)
3. Replace the console.log with your actual tracking implementation

Example for Google Analytics 4:

```typescript
if (typeof window !== "undefined" && (window as any).gtag) {
  (window as any).gtag("event", eventName, properties);
}
```

### Editing Copy

All content is centralized in two locations:

1. **Main content data**: `src/data/content.ts`
   - Features list
   - FAQ questions and answers
   - Differentiators
   - Perfect for list
   - Why not miss reasons

2. **Event configuration**: `src/lib/config.ts`
   - Event name, dates, locations
   - Price and currency
   - Contact information
   - Organizer and host details

3. **Section components**: `src/components/sections/`
   - Each section has its own component
   - Edit directly in the component files for specific copy changes

## Project Structure

```
├── public/
│   └── assets/
│       ├── images/          # Add your images here
│       └── icons/           # Add your icons here
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx     # Main landing page
│   │   └── layout.tsx       # Root layout with SEO
│   ├── components/
│   │   ├── sections/        # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SocialProofSection.tsx
│   │   │   ├── DifferentSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── DetailsSection.tsx
│   │   │   ├── InvestmentSection.tsx
│   │   │   ├── WhoSection.tsx
│   │   │   ├── WhyNotMissSection.tsx
│   │   │   ├── CTABannerSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── CallbackFormSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Countdown.tsx
│   │       ├── Navigation.tsx
│   │       └── MobileBottomCTA.tsx
│   ├── data/
│   │   └── content.ts       # Content data
│   ├── lib/
│   │   ├── analytics.ts     # Analytics tracking
│   │   └── config.ts        # Configuration constants
│   └── styles/
│       └── globals.css      # Global styles
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## Adding Images

1. Place your images in `public/assets/images/`
2. Reference them in components using `/assets/images/your-image.jpg`
3. Use Next.js Image component for optimization:

```tsx
import Image from "next/image";

<Image
  src="/assets/images/your-image.jpg"
  alt="Description"
  width={1200}
  height={630}
  priority
/>;
```

## Customization

### Colors

Ghana-inspired colors are defined in `tailwind.config.ts`:

- Ghana Red: `#CE1126`
- Ghana Gold: `#FCD116`
- Ghana Green: `#006B3F`

### Fonts

The default font is Inter (Google Fonts). To change:

1. Edit `src/app/layout.tsx`
2. Import your preferred font from `next/font/google`

### Animations

Custom animations are defined in:

- `tailwind.config.ts` (keyframes)
- `src/styles/globals.css` (additional animations)

## Analytics Events

The following events are tracked:

- `pay_cta_clicked` - When user clicks any pay button (includes location)
- `callback_requested` - When user submits callback form (includes preferred time)
- `section_viewed` - When user views a section (optional)
- `link_clicked` - When user clicks external links (optional)

## Performance Tips

1. Add actual images to `public/assets/images/` before production
2. Optimize images (use WebP format when possible)
3. Test with Lighthouse for performance scores
4. Enable Next.js Image Optimization in production
5. Consider adding a CDN for assets

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:

```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting provider's Next.js deployment guide.

## Support

For questions about this landing page:

- Email: rootedrootsafrica@ourheritagebranding.com
- Phone: 08153675215

## License

© 2026 Rooted Routes Africa. All rights reserved.
