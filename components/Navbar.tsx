"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Residences", href: "#residences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo" aria-label="Basil Vrundavan home">
          BASIL VRUNDAVAN
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar__burger${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-overlay${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
