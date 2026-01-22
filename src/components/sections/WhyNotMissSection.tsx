import { whyNotMiss } from "@/data/content";

export default function WhyNotMissSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeading">
          <h2 className="sectionHeading__title">Why You Must Not Miss This</h2>
          <p className="sectionHeading__subtitle">
            Some opportunities come once. This is one of them.
          </p>
        </div>

        <div className="grid-2">
          {whyNotMiss.map((reason, index) => (
            <div key={index} className="card card--solid">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
