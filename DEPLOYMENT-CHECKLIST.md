# 🚀 Pre-Launch Deployment Checklist

## 📋 Before Deployment

### Critical (Must Complete)

- [ ] **Update Payment URL** in `src/lib/config.ts`
  - Replace `https://paystack.com/pay/PLACEHOLDER` with actual link
  - Test the payment link manually
- [ ] **Update Form Endpoint** in `src/lib/config.ts`
  - Replace `https://example.com/submit` with actual API endpoint
  - Verify endpoint accepts POST requests with JSON
  - Test form submission
- [ ] **Add Real Images**
  - Add `og-image.jpg` (1200x630px) to `public/assets/images/`
  - Replace placeholder SVG
  - Optimize images (use TinyPNG or similar)
- [ ] **Update Website URL** in `src/app/layout.tsx`
  - Replace `https://yourwebsite.com` with actual domain
  - Update in metadata and JSON-LD

### High Priority (Strongly Recommended)

- [ ] **Add Analytics**
  - Configure in `src/lib/analytics.ts`
  - Add tracking IDs to environment variables
  - Test events fire correctly (check console)
- [ ] **Add Favicon**
  - Generate at https://realfavicongenerator.net/
  - Place in `public/` folder
- [ ] **Test Mobile Experience**
  - Test on real iPhone
  - Test on real Android device
  - Check sticky bottom CTA appears
  - Test all buttons are thumb-friendly
- [ ] **Test All Links**
  - All "Pay Now" buttons go to payment link
  - Email link (`mailto:`) works
  - Phone link (`tel:`) works
  - Navigation smooth scrolls to sections

### Medium Priority (Recommended)

- [ ] **Verify Contact Information**
  - Phone: 08153675215
  - Email: rootedrootsafrica@ourheritagebranding.com
  - Host name: Wilson Chibututu
  - Organizer: Rooted Routes Africa
- [ ] **Review Content**
  - Check all copy for typos
  - Verify dates (Feb 13-15, 2026)
  - Verify price (₦1,000,000)
  - Verify locations (Accra, Aburi, Cape Coast)
  - Check FAQ answers are accurate
- [ ] **SEO Check**
  - Verify page title in browser tab
  - Check meta description
  - Test Open Graph image with https://www.opengraph.xyz/
  - Test with https://search.google.com/test/rich-results

### Low Priority (Optional but Good)

- [ ] **Performance Test**
  - Run Lighthouse audit (target 90+ score)
  - Optimize images if needed
  - Check page load time
- [ ] **Accessibility Test**
  - Test keyboard navigation (Tab key)
  - Check focus states visible
  - Test with screen reader if possible
- [ ] **Browser Testing**
  - Chrome (Desktop & Mobile)
  - Safari (Desktop & Mobile)
  - Firefox
  - Edge
- [ ] **Legal/Compliance**
  - Privacy policy (if collecting data)
  - Terms and conditions
  - Cookie consent (if using analytics cookies in EU)

---

## 🛠️ Technical Checks

### Build Test

```bash
npm run build
```

✅ Should complete without errors

### Run Production Build Locally

```bash
npm run build
npm start
```

✅ Test the production version at http://localhost:3000

### Dependencies Check

```bash
npm audit
```

✅ Fix any critical vulnerabilities

---

## 🌐 Deployment Steps

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Production-ready Ghana Valentine's Experience 2026"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your repository
   - Configure:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Add Environment Variables** (if using)
   - In Vercel dashboard → Settings → Environment Variables
   - Add any `NEXT_PUBLIC_*` variables
   - Redeploy

4. **Add Custom Domain** (optional)
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Other Platforms

#### Netlify

```bash
npm run build
# Deploy .next folder
```

#### AWS / DigitalOcean / Other

- Use PM2 or similar process manager
- Run `npm run build && npm start`
- Set up reverse proxy (nginx)
- Enable HTTPS

---

## ✅ Post-Deployment Checks

After deployment, verify:

- [ ] **Homepage Loads**
  - Visit your deployed URL
  - Check no errors in console (F12)
- [ ] **All Sections Visible**
  - Scroll through entire page
  - Check all sections render correctly
- [ ] **Navigation Works**
  - Click each navigation link
  - Verify smooth scrolling
- [ ] **CTA Buttons Work**
  - Click "Pay Now" → Goes to payment page
  - Click "Request Call" → Scrolls to form
  - On mobile: Check sticky bottom CTA
- [ ] **Form Submission**
  - Fill out callback form
  - Submit
  - Check data arrives at your endpoint
- [ ] **Countdown Shows**
  - Check countdown displays correctly
  - Verify it counts down
- [ ] **FAQ Works**
  - Click each FAQ item
  - Verify they expand/collapse
- [ ] **Analytics Tracking**
  - Click a Pay button
  - Check analytics dashboard (may take 24hrs to show)
- [ ] **Mobile Test**
  - Visit on phone
  - Check sticky CTA at bottom
  - Test all interactions
- [ ] **Share Test**
  - Share link on WhatsApp → Check preview
  - Share on Facebook → Check preview
  - Share on Twitter → Check preview

---

## 📊 Monitor After Launch

### First 24 Hours

- [ ] Check analytics for traffic
- [ ] Monitor form submissions
- [ ] Check for any error reports
- [ ] Monitor payment conversions
- [ ] Check mobile vs desktop traffic ratio

### First Week

- [ ] Review analytics data
- [ ] Check conversion rates
- [ ] Look for any user issues
- [ ] Monitor page performance
- [ ] Check bounce rate

---

## 🆘 Emergency Contacts

If something goes wrong:

**Technical Issues:**

- Check Vercel/hosting dashboard for errors
- Check browser console (F12) for JavaScript errors
- Review deployment logs

**Payment Issues:**

- Contact Paystack support
- Verify payment link is correct
- Check payment dashboard

**Form Issues:**

- Check backend API logs
- Verify endpoint URL is correct
- Test endpoint with Postman

---

## 🎉 Launch Day!

Once everything is checked:

1. **Announce on Social Media**
   - Share the link
   - OG image will appear in preview
2. **Send to Email List**
   - Include direct payment link
3. **Monitor Traffic**
   - Watch analytics dashboard
   - Be ready to respond to issues

4. **Respond to Inquiries**
   - Check callback form submissions
   - Reply to calls/emails promptly

---

## 📝 Notes

- Keep a backup of config before deploying
- Document any custom changes
- Save analytics access credentials
- Keep payment dashboard accessible

---

**Good luck with your launch! 🚀🇬🇭❤️**

Last updated: January 22, 2026
