# 🚀 Quick Start Guide - Ghana Valentine's Experience 2026

## ✅ What You Have

A complete, production-ready landing page with:

- ✨ Modern, luxury design
- 📱 Mobile-responsive with sticky CTA
- ⏱️ Live countdown to Feb 13, 2026
- 📊 Analytics tracking ready
- 🎯 SEO optimized
- ✉️ Working callback form
- ❓ FAQ section with 6 questions
- 🔒 TypeScript for reliability

## 🎯 Three Things You MUST Do Before Launch

### 1️⃣ Set Your Payment Link

Open: `src/lib/config.ts`

Find this line:

```typescript
PAYMENT_URL: 'https://paystack.com/pay/PLACEHOLDER',
```

Replace with your actual Paystack link:

```typescript
PAYMENT_URL: 'https://paystack.com/pay/ghana-valentine-2026',
```

### 2️⃣ Set Your Form Endpoint

Same file (`src/lib/config.ts`):

Find:

```typescript
CALL_REQUEST_ENDPOINT: 'https://example.com/submit',
```

Replace with your backend URL:

```typescript
CALL_REQUEST_ENDPOINT: 'https://your-backend.com/api/callback',
```

### 3️⃣ Add Your Analytics

Open: `src/lib/analytics.ts`

Uncomment the section for your analytics service (Google Analytics, Facebook Pixel, etc.)

---

## 🖥️ How to Run Locally

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

---

## 🎨 How to Change Content

### Change Price or Event Details

**File:** `src/lib/config.ts`

```typescript
EVENT: {
  NAME: 'Ghana Valentine\'s Experience 2026',
  START_DATE: '2026-02-13',
  END_DATE: '2026-02-15',
  PRICE: 1000000,  // ← Change price here
  MAX_SLOTS: 30,   // ← Change number of slots
}
```

### Change FAQ Questions

**File:** `src/data/content.ts`

Look for `faqData` array and edit questions/answers.

### Change Features List

**File:** `src/data/content.ts`

Look for `features` array and edit the 6 features.

### Change Main Copy

**Files:** `src/components/sections/*.tsx`

Each section has its own file:

- Hero text → `HeroSection.tsx`
- Investment copy → `InvestmentSection.tsx`
- etc.

---

## 📸 How to Add Images

1. Place images in: `public/assets/images/`
2. Reference them as: `/assets/images/your-image.jpg`
3. **IMPORTANT:** Add an `og-image.jpg` (1200x630px) for social media sharing

---

## 🚀 How to Deploy

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! ✅

### Option 2: Other Platforms

1. Build the project:
   ```bash
   npm run build
   ```
2. Follow your hosting provider's Next.js deployment guide

---

## 🔍 Testing Checklist

Before going live, test these:

- [ ] Click all "Pay Now" buttons → Check they go to correct payment link
- [ ] Submit the callback form → Check data arrives at your endpoint
- [ ] Test on mobile phone → Check sticky bottom CTA appears
- [ ] Click navigation links → Check smooth scrolling works
- [ ] Open FAQ items → Check they expand/collapse
- [ ] Check countdown → Should show time until Feb 13, 2026
- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Check page loads fast

---

## 📊 Analytics Events

Once you configure analytics, you'll track:

| Event                | Fires When                   |
| -------------------- | ---------------------------- |
| `pay_cta_clicked`    | User clicks any "Pay" button |
| `callback_requested` | User submits callback form   |

Location is tracked for Pay buttons:

- `hero` - Hero section
- `pricing` - Investment section
- `cta_banner` - Middle banner
- `sticky` - Mobile sticky CTA
- `nav` - Top navigation

---

## 📱 Mobile Features

On mobile devices (phones/tablets):

- Top navigation is simplified
- Bottom sticky CTA bar appears
- Easier thumb-friendly buttons
- Optimized spacing and font sizes

---

## 🆘 Common Issues

### "Page not found"

- Make sure you're running `npm run dev`
- Visit `http://localhost:3000` (not https)

### "Module not found"

```bash
rm -rf node_modules
npm install
```

### Changes not showing

- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or restart dev server

### Form not submitting

- Check `CALL_REQUEST_ENDPOINT` in config.ts
- Check browser console for errors (F12)
- Verify your backend is running

---

## 🎯 Analytics Integration Examples

### Google Analytics 4

In `src/lib/analytics.ts`, uncomment:

```typescript
if (typeof window !== "undefined" && (window as any).gtag) {
  (window as any).gtag("event", eventName, properties);
}
```

Then add to `src/app/layout.tsx`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Facebook Pixel

Similar process - uncomment FB section in analytics.ts

---

## 📞 Support Contacts

**For Ghana Valentine's Experience:**

- Email: rootedrootsafrica@ourheritagebranding.com
- Phone: 08153675215

**For Technical Issues:**

- Check `README.md` for detailed documentation
- Check `DEVELOPMENT.md` for architecture details

---

## 🎉 You're All Set!

This landing page is ready to launch. Just:

1. Update payment link ✅
2. Update form endpoint ✅
3. Add analytics ✅
4. Test everything ✅
5. Deploy ✅

**Good luck with your Ghana Valentine's Experience 2026! 🇬🇭❤️**
