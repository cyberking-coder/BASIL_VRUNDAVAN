"use client";

import Reveal from "./Reveal";

const HIGHLIGHTS: { place: string; dist: string }[] = [
  { place: "Pune International Airport", dist: "25 mins" },
  { place: "Hinjewadi IT Hub", dist: "15 mins" },
  { place: "Shivajinagar Station", dist: "20 mins" },
  { place: "Phoenix Mall", dist: "10 mins" },
  { place: "Symbiosis University", dist: "12 mins" },
  { place: "Mumbai Expressway", dist: "5 mins" },
];

export default function SectionLocation() {
  return (
    <section className="section location" id="location">
      <div className="container">
        <Reveal className="section-header">
          <span className="tag-eyebrow">LOCATION</span>
          <h2>At The Heart of Pune</h2>
        </Reveal>

        <div className="location__grid">
          <Reveal>
            <iframe
              className="location__map"
              src="https://maps.google.com/maps?q=Pune,Maharashtra&output=embed"
              title="Basil Vrundavan location map, Pune"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal className="location__right" delay={0.1}>
            <h3>Prime Connectivity</h3>
            {HIGHLIGHTS.map((h) => (
              <div className="location__item" key={h.place}>
                <span className="left">
                  <span className="dot" />
                  {h.place}
                </span>
                <span className="dist">{h.dist}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
