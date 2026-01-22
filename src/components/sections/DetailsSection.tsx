import CONFIG from "@/lib/config";

export default function DetailsSection() {
  const details = [
    {
      icon: "📍",
      label: "Locations",
      value: CONFIG.EVENT.LOCATIONS.join(" • "),
    },
    {
      icon: "📅",
      label: "Dates",
      value: "February 13–15, 2026",
    },
    {
      icon: "👥",
      label: "Limited Slots",
      value: `Only ${CONFIG.EVENT.MAX_SLOTS} Individuals`,
    },
    {
      icon: "🎯",
      label: "Hosted By",
      value: `${CONFIG.CONTACT.HOST} (${CONFIG.CONTACT.ORGANIZER})`,
    },
  ];

  return (
    <section id="details" className="section section--rose">
      <div className="container">
        <div className="sectionHeading">
          <h2 className="sectionHeading__title">Event Details</h2>
          <p className="sectionHeading__subtitle">
            Mark your calendar for this exclusive experience.
          </p>
        </div>

        <div className="detailsGrid">
          {details.map((detail, index) => (
            <div key={index} className="detailCard">
              <div className="detailCard__icon">{detail.icon}</div>
              <h3 className="detailCard__label">{detail.label}</h3>
              <div className="detailCard__value">{detail.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
