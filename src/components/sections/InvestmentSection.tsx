import Button from "@/components/ui/Button";
import CONFIG from "@/lib/config";

export default function InvestmentSection() {
  const inclusions = [
    "Luxury transport (Nigeria ↔ Ghana)",
    "3-night hotel stay in Accra",
    "Daily meals (breakfast, lunch, dinner)",
    "Curated tours of Accra, Aburi, and Cape Coast",
    "Security and professional tour guides",
    "Souvenirs and cultural activities",
    "Full Valentine experience package",
  ];

  return (
    <section id="investment" className="section section--dark">
      <div className="container">
        <div className="sectionHeading sectionHeading--light">
          <h2 className="sectionHeading__title">Investment</h2>
          <p className="sectionHeading__subtitle">
            A premium, all-inclusive experience crafted for excellence.
          </p>
        </div>

        <div className="priceCard priceCard--featured">
          <div className="priceCard__header">
            <h3 className="priceCard__name">All-Inclusive Package</h3>
            <p className="priceCard__desc">
              A premium experience crafted for excellence
            </p>
          </div>

          <div className="priceCard__amount">
            <span className="priceAmount">
              {CONFIG.EVENT.CURRENCY}
              {CONFIG.EVENT.PRICE.toLocaleString()}
            </span>
            <span className="priceAmount__label">per person</span>
          </div>

          <ul className="priceIncludes">
            {inclusions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Scarcity note */}
          <div className="bg-red-50 border-l-4 border-ghana-red p-6 rounded-lg mb-8">
            <p className="text-slate-800 font-semibold">
              ⚠️ Slots are first-come, first-served. Registration closes once
              all {CONFIG.EVENT.MAX_SLOTS} slots are filled.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              href={CONFIG.PAYMENT_URL}
              trackLocation="pricing"
              className="w-full md:w-auto text-lg"
            >
              RESERVE MY SLOT NOW – PAY ₦1,000,000
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
