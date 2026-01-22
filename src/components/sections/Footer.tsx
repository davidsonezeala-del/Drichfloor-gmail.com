export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__signature">
          <p className="footer__quote">
            Valentine is temporary. Memories are permanent.
          </p>
          <p className="footer__tagline">
            Don't just celebrate love — experience it in Ghana.
          </p>
        </div>

        <div className="footer__divider" />

        <div className="footer__legal">
          <p className="footer__disclaimer">
            <strong>Disclaimer:</strong> Schedule and activities may be adjusted
            slightly for safety, weather conditions, or logistical requirements.
            All participants will be notified of any changes in advance.
          </p>

          <p className="footer__copyright">
            © {new Date().getFullYear()} Rooted Routes Africa. All rights
            reserved.
          </p>

          <p className="footer__meta">
            Ghana Valentine's Experience 2026 • February 13-15, 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
