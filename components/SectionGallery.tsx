"use client";

import Reveal from "./Reveal";

const BASE = "/BASIL_VRUNDAVAN";

type Shot = { img: string; cap: string };

const SHOTS: Shot[] = [
  { img: `${BASE}/01.jpg`, cap: "Architectural Elevation" },
  { img: `${BASE}/02.jpg`, cap: "The Commercial Boulevard" },
  { img: `${BASE}/03.jpg`, cap: "Podium & Towers" },
  { img: `${BASE}/ambegao2.jpg`, cap: "Golden Hour Arrival" },
];

export default function SectionGallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <Reveal className="section-header">
          <span className="tag-eyebrow">GALLERY</span>
          <h2>A Closer Look</h2>
          <p className="subtext">
            Renders of the towers, podium, and arrival — a glimpse of life at
            Basil Vrundavan.
          </p>
        </Reveal>

        <div className="gallery__grid">
          {SHOTS.map((s, i) => (
            <Reveal
              key={s.cap}
              className="gallery__item"
              delay={(i % 2) * 0.08}
            >
              <img src={s.img} alt={s.cap} />
              <span className="gallery__cap">{s.cap}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
