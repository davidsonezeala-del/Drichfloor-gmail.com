"use client";

import Button from "@/components/ui/Button";
import CONFIG from "@/lib/config";

export default function CTABannerSection() {
  return (
    <section className="section section--cta">
      <div className="container">
        <div className="ctaBanner">
          <h2 className="ctaBanner__title">Secure Your Slot Now</h2>
          <p className="ctaBanner__subtitle">
            Don't let this Valentine's pass like every other year. Make 2026
            unforgettable.
          </p>

          <div className="ctaBanner__actions">
            <Button
              variant="secondary"
              size="lg"
              href={CONFIG.PAYMENT_URL}
              trackLocation="cta_banner"
            >
              PAY ₦1,000,000 NOW – RESERVE MY SLOT
            </Button>
          </div>

          <p className="ctaBanner__note">
            ⚡ Only {CONFIG.EVENT.MAX_SLOTS} slots available • First-come,
            first-served
          </p>
        </div>
      </div>
    </section>
  );
}
