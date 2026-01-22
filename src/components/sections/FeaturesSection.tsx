import { features } from "@/data/content";

export default function FeaturesSection() {
  return (
    <section id="enjoy" className="section">
      <div className="container">
        <div className="sectionHeading">
          <h2 className="sectionHeading__title">What You'll Enjoy</h2>
          <p className="sectionHeading__subtitle">
            Every detail has been thoughtfully arranged to ensure your complete
            comfort and immersion.
          </p>
        </div>

        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="featureItem">
              <div className="featureItem__icon">{feature.icon}</div>
              <div className="featureItem__content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
