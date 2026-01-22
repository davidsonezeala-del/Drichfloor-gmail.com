# Development Guide

## Project Overview

This is a production-grade landing page for the Ghana Valentine's Experience 2026, built with modern web technologies and best practices.

## Architecture

### Page Structure

- **Single-page application** with smooth scrolling navigation
- **Sticky navigation** on desktop
- **Sticky bottom CTA** on mobile devices
- **12+ sections** including Hero, Features, Investment, FAQ, Contact, etc.

### Key Features

#### 1. SEO Optimization

- Server-side metadata in layout.tsx
- JSON-LD structured data for Event schema
- Open Graph tags for social media
- Semantic HTML with proper heading hierarchy

#### 2. Analytics Integration

- Event tracking hooks ready to use
- Tracks: CTA clicks (with location), callback form submissions
- Easy to integrate with GA4, Mixpanel, Facebook Pixel

#### 3. Form Handling

- Client-side validation
- Error handling with user-friendly messages
- Loading states and success states
- Keeps form data on submission failure

#### 4. Mobile Optimization

- Mobile-first responsive design
- Sticky bottom CTA appears only on mobile
- Touch-friendly buttons and interactions
- Optimized spacing for mobile viewports

#### 5. Performance

- Next.js App Router for optimal performance
- Ready for next/image optimization
- Minimal dependencies (no heavy UI libraries)
- CSS animations only (no JavaScript animation libraries)

## Development Workflow

### 1. Initial Setup

```bash
npm install
npm run dev
```

### 2. Customize Configuration

Edit `src/lib/config.ts`:

```typescript
export const CONFIG = {
  PAYMENT_URL: "YOUR_PAYMENT_LINK",
  CALL_REQUEST_ENDPOINT: "YOUR_API_ENDPOINT",
  // ... other config
};
```

### 3. Update Content

Most content is in `src/data/content.ts`:

- FAQ questions and answers
- Features list
- Testimonials / social proof
- "Perfect for" list

### 4. Integrate Analytics

Edit `src/lib/analytics.ts`:

```typescript
export function track(
  eventName: EventName,
  properties?: EventProperties,
): void {
  // Replace console.log with your analytics service

  // Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, properties);
  }
}
```

### 5. Add Images

Place images in `public/assets/images/`:

- `og-image.jpg` (1200x630px) - Required for social sharing
- Other images as needed

Update references in components to use actual images.

### 6. Test Before Deploy

- [ ] Test all CTA buttons
- [ ] Test form submission
- [ ] Test on mobile devices
- [ ] Check navigation on all sections
- [ ] Verify countdown is working
- [ ] Test FAQ accordion
- [ ] Verify analytics tracking (check console)
- [ ] Test sticky mobile CTA
- [ ] Check accessibility (keyboard navigation, screen readers)
- [ ] Run Lighthouse audit

## Component Structure

### UI Components (`src/components/ui/`)

- `Button.tsx` - Reusable button with tracking
- `Countdown.tsx` - Live countdown to event
- `Navigation.tsx` - Sticky top navigation
- `MobileBottomCTA.tsx` - Sticky mobile CTA bar

### Section Components (`src/components/sections/`)

- `HeroSection.tsx` - Main hero with title, date, CTA
- `SocialProofSection.tsx` - Credibility strip
- `DifferentSection.tsx` - What makes it different
- `FeaturesSection.tsx` - What you'll enjoy (6 features)
- `DetailsSection.tsx` - Event details (cards)
- `InvestmentSection.tsx` - Pricing information
- `WhoSection.tsx` - Target audience
- `WhyNotMissSection.tsx` - Persuasive points
- `CTABannerSection.tsx` - Mid-page CTA banner
- `FAQSection.tsx` - FAQ with accordion
- `CallbackFormSection.tsx` - Callback request form
- `ContactSection.tsx` - Contact information
- `Footer.tsx` - Footer with signature lines

## Styling

### Tailwind Configuration

- Custom colors: Ghana red, gold, green
- Custom animations: fade-in, slide-up, slide-in
- Responsive breakpoints: sm, md, lg, xl

### Custom Animations

Defined in `tailwind.config.ts`:

- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up from bottom
- `animate-slide-in` - Slide in from left
- `animate-pulse-subtle` - Subtle pulsing effect

Usage:

```tsx
<div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
  Content
</div>
```

## API Integration

### Payment Processing

The payment button links to `CONFIG.PAYMENT_URL`. Update this with your Paystack, Flutterwave, or other payment link.

### Callback Form

The form POSTs JSON to `CONFIG.CALL_REQUEST_ENDPOINT`:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+234XXXXXXXXXX",
  "preferredTime": "Morning"
}
```

Your backend should:

1. Accept POST requests
2. Validate the data
3. Store in database or send notification
4. Return 200 OK on success

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository in Vercel
3. Deploy (automatic)

### Environment Variables in Production

If using environment variables, set them in your deployment platform:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_FB_PIXEL_ID`
- Any other public variables

### Pre-deployment Checklist

- [ ] Update payment URL
- [ ] Update form endpoint
- [ ] Add analytics tracking
- [ ] Add real images (especially og-image)
- [ ] Update website URL in metadata
- [ ] Add favicon
- [ ] Test production build locally (`npm run build && npm start`)
- [ ] Verify all links work
- [ ] Check mobile experience

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Type Errors

Check `tsconfig.json` and ensure all imports are correct.

### Styling Issues

```bash
# Rebuild Tailwind CSS
npx tailwindcss -i ./src/styles/globals.css -o ./dist/output.css
```

### Images Not Loading

- Ensure images are in `public/` directory
- Reference with `/assets/images/filename.jpg` (not `./` or `../`)

## Performance Optimization

### Image Optimization

Use Next.js Image component:

```tsx
import Image from "next/image";

<Image
  src="/assets/images/hero.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority // for above-the-fold images
/>;
```

### Code Splitting

Next.js automatically code-splits by route. For components, use dynamic imports if needed:

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"));
```

### Lighthouse Score Tips

1. Optimize images (WebP format, compressed)
2. Add `priority` to hero image
3. Use `next/font` for font optimization
4. Minimize JavaScript bundles
5. Enable caching headers in production

## Maintenance

### Updating Content

Most content is in:

- `src/data/content.ts` - Lists, FAQ, features
- `src/lib/config.ts` - Event details, contact info
- Section components - Specific copy

### Adding New Sections

1. Create new component in `src/components/sections/`
2. Import and add to `src/app/(marketing)/page.tsx`
3. Add navigation link if needed in `Navigation.tsx`

### Updating Styles

- Global styles: `src/styles/globals.css`
- Theme colors: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

## Support

For technical issues with this codebase:

- Check README.md for basic setup
- Review this guide for architecture details
- Check Next.js documentation: https://nextjs.org/docs

For business inquiries:

- Email: rootedrootsafrica@ourheritagebranding.com
- Phone: 08153675215
