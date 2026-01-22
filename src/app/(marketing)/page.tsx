import Navigation from "@/components/ui/Navigation";
import MobileBottomCTA from "@/components/ui/MobileBottomCTA";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import DifferentSection from "@/components/sections/DifferentSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DetailsSection from "@/components/sections/DetailsSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import WhoSection from "@/components/sections/WhoSection";
import WhyNotMissSection from "@/components/sections/WhyNotMissSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import FAQSection from "@/components/sections/FAQSection";
import CallbackFormSection from "@/components/sections/CallbackFormSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import CONFIG from "@/lib/config";

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: CONFIG.EVENT.NAME,
  description:
    "A premium Valentine's getaway to Ghana featuring luxury transport, 3-night hotel accommodation, curated tours of Accra, Aburi, and Cape Coast. Limited to 30 selected individuals.",
  startDate: CONFIG.EVENT.START_DATE,
  endDate: CONFIG.EVENT.END_DATE,
  location: {
    "@type": "Place",
    name: "Accra, Ghana",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GH",
      addressLocality: "Accra",
    },
  },
  organizer: {
    "@type": "Organization",
    name: CONFIG.CONTACT.ORGANIZER,
    email: CONFIG.CONTACT.EMAIL,
    telephone: CONFIG.CONTACT.PHONE,
  },
  performer: {
    "@type": "Person",
    name: CONFIG.CONTACT.HOST,
  },
  offers: {
    "@type": "Offer",
    price: CONFIG.EVENT.PRICE,
    priceCurrency: "NGN",
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString(),
    url: "https://yourwebsite.com",
  },
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  maximumAttendeeCapacity: CONFIG.EVENT.MAX_SLOTS,
  image: "https://yourwebsite.com/assets/images/og-image.jpg",
};

export default function MarketingPage() {
  return (
    <div className="page-wrap">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <SocialProofSection />
        <DifferentSection />
        <FeaturesSection />
        <DetailsSection />
        <InvestmentSection />
        <WhoSection />
        <WhyNotMissSection />
        <CTABannerSection />
        <FAQSection />
        <CallbackFormSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom CTA */}
      <MobileBottomCTA />
    </div>
  );
}
