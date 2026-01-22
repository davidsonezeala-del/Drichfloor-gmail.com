"use client";

import Countdown from "@/components/ui/Countdown";
import Button from "@/components/ui/Button";
import CONFIG from "@/lib/config";

export default function HeroSection() {
  return (
    <section className="section section--hero">
      <div className="container">
        <div className="hero">
          {/* Left: Content */}
          <div className="hero__left">
            <div className="hero__badge">Only 30 Selected Individuals</div>

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

            <div style={{ margin: "2rem 0" }}>
              <Countdown />
            </div>

            <div className="hero__ctaRow">
              <Button
                href={CONFIG.PAYMENT_URL}
                variant="primary"
                size="lg"
                trackLocation="hero"
              >
                PAY ₦1,000,000 NOW – RESERVE MY SLOT
              </Button>
              <button
                className="btn btn--secondary"
                onClick={() => {
                  const form = document.getElementById("callback-form");
                  if (form)
                    form.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                }}
              >
                Request a Call
              </button>
            </div>
          </div>

          {/* Right: Video */}
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
