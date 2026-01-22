import { perfectFor } from "@/data/content";

export default function WhoSection() {
  return (
    <section id="who" className="section section--rose">
      <div className="container">
        <div className="sectionHeading">
          <h2 className="sectionHeading__title">Who This Is Perfect For</h2>
          <p className="sectionHeading__subtitle">
            If you recognize yourself here, this experience was designed for
            you.
          </p>
        </div>

        <div className="differentiators">
          {perfectFor.map((item, index) => (
            <div key={index} className="differentiatorItem">
              <div className="differentiatorItem__icon">→</div>
              <p className="differentiatorItem__text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
