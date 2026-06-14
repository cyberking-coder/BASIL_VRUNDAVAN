"use client";

import Reveal from "./Reveal";

type Spec = { k: string; v: string };

const TWO_BHK: Spec[] = [
  { k: "Carpet Area", v: "950 – 1,100 sq.ft." },
  { k: "Floor Range", v: "3rd – 18th Floor" },
  { k: "Balconies", v: "1 Private Balcony" },
  { k: "Possession", v: "December 2026" },
  { k: "Price", v: "From ₹1.2 Cr" },
];

const THREE_BHK: Spec[] = [
  { k: "Carpet Area", v: "1,350 – 1,550 sq.ft." },
  { k: "Floor Range", v: "8th – 24th Floor" },
  { k: "Balconies", v: "2 Private Balconies" },
  { k: "Possession", v: "December 2026" },
  { k: "Price", v: "From ₹1.8 Cr" },
];

function ResidenceCard({
  title,
  sub,
  specs,
  delay,
}: {
  title: string;
  sub: string;
  specs: Spec[];
  delay: number;
}) {
  return (
    <Reveal className="residence-card" delay={delay}>
      <div className="rc-title">{title}</div>
      <div className="rc-sub">{sub}</div>
      <div className="rc-divider" />
      {specs.map((s) => (
        <div className="spec" key={s.k}>
          <span className="k">{s.k}</span>
          <span className="v">{s.v}</span>
        </div>
      ))}
      <a href="#contact" className="btn-outline">
        Enquire Now
      </a>
    </Reveal>
  );
}

export default function SectionResidences() {
  return (
    <section className="section residences" id="residences">
      <div className="container">
        <Reveal className="section-header">
          <span className="tag-eyebrow">THE RESIDENCES</span>
          <h2>Choose Your Sanctuary</h2>
          <p className="subtext">
            Two configurations. One uncompromising standard.
          </p>
        </Reveal>

        <div className="residences__grid">
          <ResidenceCard
            title="2 BHK"
            sub="Signature Residence"
            specs={TWO_BHK}
            delay={0}
          />
          <ResidenceCard
            title="3 BHK"
            sub="Grand Residence"
            specs={THREE_BHK}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
