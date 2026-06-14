const LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Residences", href: "#residences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <div className="footer__logo">BASIL VRUNDAVAN</div>
          <div className="footer__place">Pune, Maharashtra</div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__right">
          <div className="footer__copy">
            © 2025 Basil Vrundavan. All Rights Reserved.
          </div>
          <div className="footer__rera">RERA No: P52100XXXXXX</div>
        </div>
      </div>
    </footer>
  );
}
