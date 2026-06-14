"use client";

import Reveal from "./Reveal";

const BASE = "/BASIL_VRUNDAVAN";

type Amenity = { name: string; desc: string; img: string };

// Project renders (already carry their own corner word-labels), shown 2:1.
const AMENITIES: Amenity[] = [
  {
    name: "Infinity Pool",
    desc: "Sky-level waters with panoramic city views.",
    img: `${BASE}/amenities1.jpg`,
  },
  {
    name: "Sky Deck & Lounge",
    desc: "Rooftop celebrations beneath open skies.",
    img: `${BASE}/amenities3.jpg`,
  },
  {
    name: "Children's Play Zone",
    desc: "Joyful, safe spaces for little ones to roam.",
    img: `${BASE}/amenities5.jpg`,
  },
  {
    name: "Landscaped Gardens",
    desc: "A curated green labyrinth and seating courts.",
    img: `${BASE}/amenities7.jpg`,
  },
  {
    name: "Fitness Centre",
    desc: "A skyline gymnasium to energise every day.",
    img: `${BASE}/amenities8.jpg`,
  },
  {
    name: "Grand Entrance",
    desc: "A seamless, valeted arrival experience.",
    img: `${BASE}/am1.png`,
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
            <img src={`${BASE}/amenities1.jpg`} alt="Rooftop infinity pool" />
            <img src={`${BASE}/amenities3.jpg`} alt="Rooftop sky deck" />
          </Reveal>
        </div>

        <div className="amenities__gallery">
          {AMENITIES.map((a, i) => (
            <Reveal
              key={a.name}
              className="amenity-tile"
              delay={(i % 2) * 0.08}
            >
              <div className="amenity-tile__media">
                <img src={a.img} alt={a.name} />
              </div>
              <div className="amenity-tile__caption">
                <span className="amenity-tile__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="amenity-tile__name">{a.name}</span>
              </div>
              <p className="amenity-tile__desc">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
