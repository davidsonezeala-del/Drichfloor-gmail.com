import CONFIG from "@/lib/config";

export default function ContactSection() {
  return (
    <section id="contact" className="section section--dark">
      <div className="container">
        <div className="sectionHeading sectionHeading--light">
          <h2 className="sectionHeading__title">Get In Touch</h2>
          <p className="sectionHeading__subtitle">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="grid-2">
          <a href={`tel:${CONFIG.CONTACT.PHONE}`} className="contactCard">
            <div className="contactCard__icon">📱</div>
            <p className="contactCard__label">Call Us</p>
            <p className="contactCard__value">{CONFIG.CONTACT.PHONE}</p>
          </a>

          <a href={`mailto:${CONFIG.CONTACT.EMAIL}`} className="contactCard">
            <div className="contactCard__icon">✉️</div>
            <p className="contactCard__label">Email Us</p>
            <p className="contactCard__value">{CONFIG.CONTACT.EMAIL}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
