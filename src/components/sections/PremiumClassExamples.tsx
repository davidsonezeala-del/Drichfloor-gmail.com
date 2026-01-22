/**
 * Ghana Valentine's Experience - Hero Section with Video
 * This snippet shows how to use the premium CSS classes
 */

export default function HeroWithVideo() {
  return (
    <section className="section section--hero">
      <div className="container">
        <div className="hero">
          {/* Left: Text Content */}
          <div className="hero__left">
            <div className="hero__badge">
              <span>Only 30 Selected Individuals</span>
            </div>

            <h1 className="hero__title">
              Ghana Valentine's
              <span>Experience 2026</span>
            </h1>

            <p className="hero__subtitle">A 3-Day Luxury Cultural Escape</p>

            <div className="hero__meta">
              <span>Accra • Aburi • Cape Coast</span>
              <span>February 13th – 15th, 2026</span>
            </div>

            <p className="hero__tagline">Valentine, Redefined Through Africa</p>

            <div className="hero__ctaRow">
              <a href="PAYMENT_URL" className="btn btn--primary btn--large">
                PAY ₦1,000,000 NOW – RESERVE MY SLOT
              </a>
              <button className="btn btn--secondary">Request a Call</button>
            </div>
          </div>

          {/* Right: Video Embed */}
          <div className="hero__right">
            <div className="videoCard">
              <div className="videoFrame">
                <iframe
                  src="https://www.youtube.com/embed/VuT7zFS4Das"
                  title="Ghana Valentine's Experience 2026"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Pricing Section Example
 */
export function PricingExample() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeading">
          <h2 className="sectionHeading__title">Investment</h2>
          <p className="sectionHeading__subtitle">
            A premium, all-inclusive experience crafted for excellence.
          </p>
        </div>

        <div className="priceCard">
          <div className="priceCard__header">
            <p className="priceCard__label">All-Inclusive Fee</p>
            <div className="priceAmount">
              <span className="priceAmount__currency">₦</span>
              <span>1,000,000</span>
            </div>
            <p className="priceAmount__term">per person</p>
          </div>

          <ul className="priceIncludes">
            <li>Luxury transport (Nigeria ↔ Ghana)</li>
            <li>3-night hotel stay in Accra</li>
            <li>Daily meals (breakfast, lunch, dinner)</li>
            <li>Curated tours of Accra, Aburi, and Cape Coast</li>
            <li>Security and professional tour guides</li>
            <li>Souvenirs and cultural activities</li>
            <li>Full Valentine experience package</li>
          </ul>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="PAYMENT_URL" className="btn btn--primary btn--large">
              RESERVE MY SLOT NOW
            </a>
          </div>
        </div>

        {/* Alternative: Fee Badge */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <span className="feeBadge">Fee: ₦1,000,000 per person</span>
        </div>
      </div>
    </section>
  );
}

/**
 * Features Grid Example
 */
export function FeaturesExample() {
  const features = [
    {
      icon: "✈️",
      title: "Luxury Transport",
      desc: "Private luxury coaster buses from Nigeria to Ghana and back",
    },
    {
      icon: "🏨",
      title: "3-Night Hotel Stay",
      desc: "Premium accommodation in the heart of Accra",
    },
    {
      icon: "🍽️",
      title: "3 Meals Daily",
      desc: "Breakfast, lunch, and dinner featuring local and international cuisine",
    },
    {
      icon: "🗺️",
      title: "Curated Tours",
      desc: "Accra city, Aburi mountains, and Cape Coast heritage sites",
    },
    {
      icon: "👮",
      title: "Security & Guides",
      desc: "Professional tour guides and security throughout",
    },
    {
      icon: "🎁",
      title: "Games & Souvenirs",
      desc: "Cultural activities and memorable keepsakes",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeading">
          <h2 className="sectionHeading__title">What You'll Enjoy</h2>
          <p className="sectionHeading__subtitle">
            Every detail thoughtfully arranged for your comfort and immersion.
          </p>
        </div>

        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="featureItem">
              <div className="featureItem__icon">{feature.icon}</div>
              <div className="featureItem__content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Form Example
 */
export function FormExample() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeading">
          <h2 className="sectionHeading__title">
            Prefer to Speak With Someone First?
          </h2>
          <p className="sectionHeading__subtitle">
            Request a callback and we'll reach out to answer all your questions.
          </p>
        </div>

        <div className="formCard">
          <form>
            <div className="field">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                placeholder="+234 XXX XXX XXXX"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="time">Preferred Time for Call *</label>
              <select id="time" required>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 7 PM)</option>
              </select>
            </div>

            <div className="formActions">
              <button type="submit" className="btn btn--primary">
                Request a Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/**
 * Sticky Mobile CTA
 * Place this at the end of your layout/page
 */
export function StickyMobileCTA() {
  return (
    <div className="stickyCta">
      <div className="stickyCta__inner">
        <a href="PAYMENT_URL" className="btn btn--primary stickyCta__btn">
          Pay ₦1,000,000 Now
        </a>
        <button className="btn btn--secondary stickyCta__btn">
          Request Call
        </button>
      </div>
    </div>
  );
}
