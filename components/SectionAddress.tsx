"use client";

import Reveal from "./Reveal";

export default function SectionAddress() {
  return (
    <section className="section address" id="overview">
      <div className="container">
        <div className="address__grid">
          <Reveal className="address__left">
            <span className="tag-eyebrow">OUR STORY</span>
            <h2>
              <span className="italic-pre">A New</span>
              <br />
              Standard of Living.
            </h2>
            <hr className="gold-rule rule" />
            <p className="address__stat-row">24 Floors · 280 Homes · 1 Vision</p>
          </Reveal>

          <Reveal className="address__right" delay={0.1}>
            <p>
              Basil Vrundavan rises as Pune&apos;s most thoughtfully designed
              residential landmark. Nestled in lush greenery with panoramic city
              views, every residence has been crafted to bring nature, light,
              and luxury into perfect harmony.
            </p>
            <p>
              With sweeping balconies, premium Italian marble finishes, and
              intelligent home automation — this is not just a home. This is a
              statement.
            </p>
            <div className="address__stats">
              <div className="address__stat-box">
                <div className="num">60%</div>
                <div className="label">Open Green Space</div>
              </div>
              <div className="address__stat-box">
                <div className="num">24/7</div>
                <div className="label">Concierge Service</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
