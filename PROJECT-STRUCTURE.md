# 📁 Project Structure

```
FOLDER TREE/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── tailwind.config.ts        # Tailwind CSS + custom colors/animations
│   ├── postcss.config.js         # PostCSS configuration
│   ├── next.config.js            # Next.js configuration
│   ├── .gitignore                # Git ignore rules
│   └── .env.example              # Environment variables template
│
├── 📚 Documentation
│   ├── README.md                 # Main documentation (comprehensive)
│   ├── QUICKSTART.md            # Quick start guide (for non-technical users)
│   ├── DEVELOPMENT.md           # Development guide (technical details)
│   ├── DEPLOYMENT-CHECKLIST.md  # Pre-launch checklist
│   └── SETUP.md                 # Quick setup reference
│
├── 🎨 Source Code (src/)
│   │
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root layout (SEO metadata)
│   │   └── (marketing)/         # Marketing route group
│   │       ├── layout.tsx       # Marketing layout
│   │       └── page.tsx         # Main landing page ⭐
│   │
│   ├── components/
│   │   │
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── Button.tsx       # CTA button with tracking
│   │   │   ├── Countdown.tsx    # Live countdown timer
│   │   │   ├── Navigation.tsx   # Sticky top navigation
│   │   │   └── MobileBottomCTA.tsx  # Sticky mobile CTA bar
│   │   │
│   │   └── sections/            # Page sections (in order)
│   │       ├── HeroSection.tsx           # 1. Hero with title, date, CTA
│   │       ├── SocialProofSection.tsx    # 2. Credibility strip
│   │       ├── DifferentSection.tsx      # 3. What makes it different
│   │       ├── FeaturesSection.tsx       # 4. What you'll enjoy (6 cards)
│   │       ├── DetailsSection.tsx        # 5. Event details
│   │       ├── InvestmentSection.tsx     # 6. Pricing card
│   │       ├── WhoSection.tsx            # 7. Target audience
│   │       ├── WhyNotMissSection.tsx     # 8. Persuasive points
│   │       ├── CTABannerSection.tsx      # 9. Mid-page CTA banner
│   │       ├── FAQSection.tsx            # 10. FAQ accordion
│   │       ├── CallbackFormSection.tsx   # 11. Callback form
│   │       ├── ContactSection.tsx        # 12. Contact info
│   │       └── Footer.tsx                # 13. Footer
│   │
│   ├── lib/                     # Utilities and configuration
│   │   ├── config.ts            # ⚙️ Main config (payment, API, event details)
│   │   └── analytics.ts         # 📊 Analytics tracking functions
│   │
│   ├── data/                    # Content data
│   │   └── content.ts           # FAQ, features, lists
│   │
│   └── styles/                  # Styling
│       └── globals.css          # Global styles + Tailwind imports
│
├── 🌐 Public Assets (public/)
│   └── assets/
│       ├── images/              # Images folder
│       │   ├── og-image.svg     # Placeholder social media image
│       │   └── README.md        # Instructions for adding images
│       └── icons/               # Icons folder
│           └── README.md        # Instructions for adding icons
│
└── 🛠️ VS Code Settings (.vscode/)
    ├── settings.json            # Editor settings
    └── extensions.json          # Recommended extensions
```

---

## 🎯 Key Files to Customize

### 1. Configuration

**File:** `src/lib/config.ts`

- Payment URL (MUST UPDATE)
- Form endpoint (MUST UPDATE)
- Event details (price, dates, slots)
- Contact information

### 2. Content

**File:** `src/data/content.ts`

- FAQ questions and answers
- Features list (6 items)
- "Perfect for" list
- "Why not miss" reasons

### 3. Analytics

**File:** `src/lib/analytics.ts`

- Integrate GA4, Facebook Pixel, etc.
- Currently logs to console

### 4. Main Page

**File:** `src/app/(marketing)/page.tsx`

- Imports all sections
- Contains JSON-LD structured data
- Update website URL here

---

## 🔄 Data Flow

```
User Action → Component → Analytics + Config
                              ↓
                    Track Event / Make API Call
```

### Example: Pay Button Click

```
User clicks "Pay Now"
  ↓
Button.tsx receives trackLocation="hero"
  ↓
Calls track('pay_cta_clicked', {location: 'hero'})
  ↓
Analytics.ts logs event (replace with real analytics)
  ↓
Opens CONFIG.PAYMENT_URL in new tab
```

### Example: Form Submission

```
User submits callback form
  ↓
CallbackFormSection.tsx validates data
  ↓
POST to CONFIG.CALL_REQUEST_ENDPOINT
  ↓
Calls track('callback_requested', {call_time: 'Morning'})
  ↓
Shows success message
```

---

## 🎨 Styling System

### Colors (tailwind.config.ts)

- `ghana-red` - #CE1126
- `ghana-gold` - #FCD116
- `ghana-green` - #006B3F
- `gold-[50-900]` - Gold shades
- `slate-[50-900]` - Grays

### Animations (tailwind.config.ts)

- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up from bottom
- `animate-slide-in` - Slide in from left
- `animate-pulse-subtle` - Subtle pulse

### Usage

```tsx
<div className="bg-ghana-red text-white animate-fade-in">Content</div>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width   | Usage         |
| ---------- | ------- | ------------- |
| `sm:`      | 640px+  | Small tablets |
| `md:`      | 768px+  | Tablets       |
| `lg:`      | 1024px+ | Desktop       |
| `xl:`      | 1280px+ | Large desktop |

### Mobile-First Approach

```tsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Small on mobile, larger on desktop */}
</div>
```

---

## 🚀 Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Run production build locally
npm run lint     # Check for code issues
```

---

## 🔌 API Integration Points

### 1. Payment

- **Location:** All "Pay Now" buttons
- **URL:** `CONFIG.PAYMENT_URL`
- **Action:** Opens in new tab
- **Tracking:** Fires `pay_cta_clicked` event

### 2. Callback Form

- **Location:** CallbackFormSection
- **Endpoint:** `CONFIG.CALL_REQUEST_ENDPOINT`
- **Method:** POST
- **Data:**
  ```json
  {
    "fullName": "string",
    "email": "string",
    "phone": "string",
    "preferredTime": "Morning|Afternoon|Evening"
  }
  ```
- **Tracking:** Fires `callback_requested` event

---

## 🎯 Analytics Events

| Event                | Trigger          | Properties                                                     |
| -------------------- | ---------------- | -------------------------------------------------------------- |
| `pay_cta_clicked`    | Pay button click | `{location: 'hero'\|'pricing'\|'cta_banner'\|'sticky'\|'nav'}` |
| `callback_requested` | Form submission  | `{call_time: 'Morning'\|'Afternoon'\|'Evening'}`               |

---

## 🔒 Type Safety

TypeScript ensures:

- Config values are typed correctly
- Component props are validated
- API responses match expected structure
- Typos are caught at build time

---

## 📦 Dependencies

### Production

- `next` - React framework
- `react` - UI library
- `react-dom` - React DOM bindings

### Development

- `typescript` - Type safety
- `tailwindcss` - Styling
- `@types/*` - Type definitions

**Total:** Minimal dependencies = faster load times

---

## 🎯 Performance Features

✅ Server-side rendering (SEO)
✅ Automatic code splitting
✅ Image optimization ready
✅ Font optimization (next/font)
✅ CSS-only animations (no JS)
✅ Minimal dependencies
✅ Mobile-first responsive

---

## 📊 Section Breakdown

| Section       | Purpose                    | CTA                    |
| ------------- | -------------------------- | ---------------------- |
| Hero          | Grab attention, show value | Pay Now / Request Call |
| Social Proof  | Build credibility          | None                   |
| Different     | Show uniqueness            | None                   |
| Features      | Show what's included       | None                   |
| Details       | Event specifics            | None                   |
| Investment    | Pricing                    | Pay Now                |
| Who           | Target audience            | None                   |
| Why Not Miss  | Persuasion                 | None                   |
| CTA Banner    | Mid-page conversion        | Pay Now                |
| FAQ           | Address objections         | None                   |
| Callback Form | Lead capture               | Submit                 |
| Contact       | Direct contact             | Call / Email           |
| Footer        | Final impression           | None                   |

---

## 🎨 Design Principles

1. **Luxury & Premium** - Gold accents, elegant typography
2. **Ghana-Inspired** - Subtle use of national colors
3. **Conversion-Focused** - Multiple clear CTAs
4. **Mobile-First** - Optimized for phone usage
5. **Accessible** - Semantic HTML, keyboard nav, focus states
6. **Performant** - Fast load, smooth animations

---

This structure creates a professional, maintainable, and scalable landing page! 🚀
