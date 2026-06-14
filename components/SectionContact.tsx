"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function SectionContact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Static site — no backend. Acknowledge the enquiry locally.
    setSubmitted(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <span className="tag-eyebrow">GET IN TOUCH</span>
          <h2>Begin Your Journey</h2>
          <p className="intro">
            Our residences are best experienced in person. Schedule a private
            preview today.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <p
              className="intro"
              style={{ color: "var(--accent)", marginBottom: 0 }}
            >
              Thank you. Our team will reach out to confirm your private preview.
            </p>
          ) : (
            <form onSubmit={onSubmit}>
              <input
                className="field"
                type="text"
                name="name"
                placeholder="Full Name"
                required
                aria-label="Full Name"
              />
              <input
                className="field"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                aria-label="Phone Number"
              />
              <input
                className="field"
                type="email"
                name="email"
                placeholder="Email Address"
                required
                aria-label="Email Address"
              />
              <input
                className="field"
                type="date"
                name="visitDate"
                aria-label="Preferred Visit Date"
              />
              <select
                className="field"
                name="bhk"
                defaultValue=""
                aria-label="Select BHK Type"
                required
              >
                <option value="" disabled>
                  Select BHK Type
                </option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="unsure">Not Sure</option>
              </select>
              <button className="submit" type="submit">
                Schedule My Private Preview
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
