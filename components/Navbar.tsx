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
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".sequence");
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      // Flip the navbar to its light theme once we've scrolled past the
      // dark hero sequence and into the cream sections.
      if (hero) {
        setPastHero(hero.getBoundingClientRect().bottom <= 90);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock body scroll while the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const cls = `navbar${scrolled ? " scrolled" : ""}${
    pastHero ? " light" : ""
  }`;

  return (
    <header className={cls}>
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

        <a href="#contact" className="navbar__cta">
          Book a Visit
        </a>

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
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Book a Visit
        </a>
      </div>
    </header>
  );
}
