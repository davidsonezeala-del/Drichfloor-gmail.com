import { differentiators } from "@/data/content";

export default function DifferentSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="sectionHeading">
          <h2 className="sectionHeading__title">
            What Makes This Experience Different?
          </h2>
          <p className="sectionHeading__subtitle">
            This isn't just another trip—it's a carefully curated journey
            designed for discerning individuals.
          </p>
        </div>

        <div className="differentiators">
          {differentiators.map((item, index) => (
            <div key={index} className="differentiatorItem">
              <div className="differentiatorItem__icon">✓</div>
              <p className="differentiatorItem__text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
