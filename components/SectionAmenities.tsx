"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Amenity = { icon: ReactNode; title: string; desc: string };

const AMENITIES: Amenity[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 16c1.5 0 1.5-1.5 3-1.5S6.5 16 8 16s1.5-1.5 3-1.5S12.5 16 14 16s1.5-1.5 3-1.5S18.5 16 20 16" />
        <path d="M2 20c1.5 0 1.5-1.5 3-1.5S6.5 20 8 20s1.5-1.5 3-1.5S12.5 20 14 20s1.5-1.5 3-1.5S18.5 20 20 20" />
        <path d="M8 12V5a2 2 0 1 1 4 0" />
        <path d="M16 12V5a2 2 0 0 0-4 0" />
      </svg>
    ),
    title: "INFINITY POOL",
    desc: "Sky-level waters with panoramic views",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16l-8 8z" />
        <path d="M12 12v7" />
        <path d="M8 21h8" />
      </svg>
    ),
    title: "SKY LOUNGE",
    desc: "Rooftop entertainment sanctuary",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="3" />
        <path d="M5 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" />
        <path d="M4 11a8 8 0 0 1 16 0" />
        <path d="M4 11v3a1.5 1.5 0 0 0 3 0v-2.5" />
        <path d="M20 11v3a1.5 1.5 0 0 1-3 0v-2.5" />
      </svg>
    ),
    title: "24/7 CONCIERGE",
    desc: "Bespoke services at your command",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21V11" />
        <path d="M12 11c0-4 3-7 8-7 0 5-3 8-8 8z" />
        <path d="M12 14c0-3-2.5-5-6-5 0 4 2.5 6 6 6z" />
      </svg>
    ),
    title: "LANDSCAPED GARDENS",
    desc: "Acres of curated green spaces",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8.5a13 13 0 0 1 18 0" />
        <path d="M6 12a8.5 8.5 0 0 1 12 0" />
        <path d="M9 15.5a4 4 0 0 1 6 0" />
        <circle cx="12" cy="19" r="0.6" />
      </svg>
    ),
    title: "HOME AUTOMATION",
    desc: "Smart living, effortlessly controlled",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5" />
        <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
        <circle cx="7" cy="15.5" r="0.6" />
        <circle cx="17" cy="15.5" r="0.6" />
      </svg>
    ),
    title: "VALET PARKING",
    desc: "Seamless arrival, every time",
  },
];

export default function SectionAmenities() {
  return (
    <section className="section amenities" id="amenities">
      <div className="container">
        <Reveal className="section-header">
          <span className="tag-eyebrow">AMENITIES</span>
          <h2>Life, Elevated</h2>
        </Reveal>

        <div className="amenities__grid">
          {AMENITIES.map((a, i) => (
            <Reveal
              key={a.title}
              className="amenity-card"
              delay={(i % 3) * 0.08}
            >
              {a.icon}
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
