"use client";

import Reveal from "./Reveal";

const BASE = "/BASIL_VRUNDAVAN";

// Imagery uses existing hero sequence frames as PLACEHOLDERS so the layout is
// complete and previewable. To use the real amenity renders: drop the files
// into `public/amenities/` and change each tile's `img` to the commented path.
// Suggested filenames: pool.webp, lounge.webp, play.webp, gardens.webp,
// automation.webp, arrival.webp (+ collage-1.webp, collage-2.webp).
const frame = (n: number) =>
  `${BASE}/sequence/frame_${String(n).padStart(4, "0")}.webp`;

type Amenity = { word: string; name: string; desc: string; img: string };

const AMENITIES: Amenity[] = [
  {
    word: "Splashing",
    name: "Infinity Pool",
    desc: "Sky-level waters with panoramic city views",
    img: frame(66), // → `${BASE}/amenities/pool.webp`
  },
  {
    word: "Retreat",
    name: "Sky Lounge",
    desc: "A rooftop entertainment sanctuary",
    img: frame(178), // → `${BASE}/amenities/lounge.webp`
  },
  {
    word: "Frolic",
    name: "Children's Play",
    desc: "Joyful, safe spaces for little ones",
    img: frame(60), // → `${BASE}/amenities/play.webp`
  },
  {
    word: "Paradise",
    name: "Landscaped Gardens",
    desc: "Acres of curated green retreats",
    img: frame(80), // → `${BASE}/amenities/gardens.webp`
  },
  {
    word: "Effortless",
    name: "Home Automation",
    desc: "Smart living, quietly orchestrated",
    img: frame(158), // → `${BASE}/amenities/automation.webp`
  },
  {
    word: "Arrival",
    name: "Valet Parking",
    desc: "A seamless welcome, every time",
    img: frame(14), // → `${BASE}/amenities/arrival.webp`
  },
];

export default function SectionAmenities() {
  return (
    <section className="section amenities" id="amenities">
      <div className="container">
        <div className="amenities__intro">
          <Reveal className="amenities__intro-text">
            <span className="tag-eyebrow">AMENITIES</span>
            <h2>
              Art Inspired
              <br />
              Living
            </h2>
            <p>
              From sky-level waters to landscaped retreats, every shared space at
              Basil Vrundavan is composed with the same intent as the homes
              themselves — light, calm, and quietly luxurious.
            </p>
          </Reveal>

          <Reveal className="amenities__collage" delay={0.12}>
            <img src={frame(184)} alt="" aria-hidden="true" />
            <img src={frame(96)} alt="" aria-hidden="true" />
          </Reveal>
        </div>

        <div className="amenities__gallery">
          {AMENITIES.map((a, i) => (
            <Reveal
              key={a.name}
              className="amenity-tile"
              delay={(i % 3) * 0.08}
            >
              <img src={a.img} alt={a.name} />
              <span className="amenity-tile__shade" />
              <span className="amenity-tile__word">{a.word}.</span>
              <div className="amenity-tile__body">
                <div className="amenity-tile__name">{a.name}</div>
                <div className="amenity-tile__desc">{a.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
