import CONFIG from "@/lib/config";

export default function SocialProofSection() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div
          className="grid-2"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✓</div>
            <p
              style={{
                fontSize: "0.875rem",
                textTransform: "uppercase",
                opacity: 0.8,
                marginBottom: "0.5rem",
              }}
            >
              Curated By
            </p>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              {CONFIG.CONTACT.ORGANIZER}
            </p>
          </div>

          <div>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✓</div>
            <p
              style={{
                fontSize: "0.875rem",
                textTransform: "uppercase",
                opacity: 0.8,
                marginBottom: "0.5rem",
              }}
            >
              Hosted By
            </p>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              {CONFIG.CONTACT.HOST}
            </p>
          </div>

          <div>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✓</div>
            <p
              style={{
                fontSize: "0.875rem",
                textTransform: "uppercase",
                opacity: 0.8,
                marginBottom: "0.5rem",
              }}
            >
              You Get
            </p>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              Luxury Transport • Premium Stay • Cultural Immersion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
