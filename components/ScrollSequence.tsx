"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BASE_PATH = "/BASIL_VRUNDAVAN";
const TOTAL_SOURCE_FRAMES = 192;

/** Linear fade helper. Returns 0..1 opacity for a value `p` given a fade-in
 *  window [inStart,inEnd] and an optional fade-out window [outStart,outEnd]. */
function fade(
  p: number,
  inStart: number,
  inEnd: number,
  outStart?: number,
  outEnd?: number
): number {
  let o = 0;
  if (p >= inEnd) o = 1;
  else if (p >= inStart) o = (p - inStart) / (inEnd - inStart);
  else o = 0;

  if (outStart !== undefined && outEnd !== undefined && p >= outStart) {
    o = p >= outEnd ? 0 : 1 - (p - outStart) / (outEnd - outStart);
  }
  return Math.max(0, Math.min(1, o));
}

export default function ScrollSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ---- Mobile: use every 2nd frame (96 frames) ----
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const frameNumbers: number[] = [];
    for (let i = 1; i <= TOTAL_SOURCE_FRAMES; i += isMobile ? 2 : 1) {
      frameNumbers.push(i);
    }
    const frameCount = frameNumbers.length;

    const images: HTMLImageElement[] = [];
    let currentIndex = -1;
    let allLoaded = false;

    // ---- Canvas sizing (DPR-aware, sized to its own box) ----
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Use the canvas's rendered box (fills the sticky's dvh height) rather
      // than window.innerHeight, so the mobile URL bar can't crop the frame.
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
    };

    const drawFrame = (index: number, force = false) => {
      if (!force && index === currentIndex) return;
      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      currentIndex = index;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      // object-fit: cover math
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    resize();

    // ---- Preload all frames ----
    let loadedCount = 0;
    const onOne = () => {
      loadedCount += 1;
      const pct = Math.round((loadedCount / frameCount) * 100);
      if (barRef.current) barRef.current.style.width = pct + "%";
      if (pctRef.current) pctRef.current.textContent = pct + "%";
      if (loadedCount === frameCount && !allLoaded) {
        allLoaded = true;
        drawFrame(0, true);
        setLoaded(true);
      }
    };

    frameNumbers.forEach((num, i) => {
      const img = new Image();
      img.onload = onOne;
      img.onerror = onOne; // don't stall the loader on a missing frame
      img.src = `${BASE_PATH}/sequence/frame_${String(num).padStart(
        4,
        "0"
      )}.webp`;
      images[i] = img;
    });

    // ---- GSAP ScrollTrigger (init only after all frames are ready) ----
    let trigger: ScrollTrigger | null = null;
    const onResize = () => {
      resize();
      drawFrame(currentIndex < 0 ? 0 : currentIndex, true);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);
    // The mobile address bar show/hide fires visualViewport resize (not always
    // a window resize), so keep the canvas + scroll metrics in sync with it.
    window.visualViewport?.addEventListener("resize", onResize);

    const initGsap = () => {
      gsap.registerPlugin(ScrollTrigger);
      const frameState = { index: 0 };

      trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          const idx = Math.round(p * (frameCount - 1));
          if (idx !== frameState.index) {
            frameState.index = idx;
            drawFrame(idx);
          }

          // Text layer opacities driven by scroll progress
          if (layer1Ref.current)
            layer1Ref.current.style.opacity = String(
              fade(p, 0.01, 0.05, 0.13, 0.18)
            );
          if (layer2Ref.current)
            layer2Ref.current.style.opacity = String(
              fade(p, 0.38, 0.42, 0.56, 0.6)
            );
          if (layer3Ref.current)
            layer3Ref.current.style.opacity = String(fade(p, 0.7, 0.74));
          if (layer4Ref.current)
            layer4Ref.current.style.opacity = String(fade(p, 0.85, 0.89));
        },
      });

      // Prime initial state
      if (layer1Ref.current) layer1Ref.current.style.opacity = "0";
      ScrollTrigger.refresh();
    };

    // Poll for load completion to kick off GSAP exactly once.
    let raf = 0;
    const waitForLoad = () => {
      if (allLoaded) {
        initGsap();
        return;
      }
      raf = requestAnimationFrame(waitForLoad);
    };
    raf = requestAnimationFrame(waitForLoad);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="sequence" id="top" aria-label="Cinematic introduction">
      <div className="sequence__sticky">
        <canvas ref={canvasRef} className="sequence__canvas" />

        {/* Text overlays */}
        <div className="sequence__overlays">
          {/* Layer 1 — Hero */}
          <div className="seq-layer seq-layer--1" ref={layer1Ref}>
            <p className="tag">PUNE · PREMIUM RESIDENCES</p>
            <h1>BASIL VRUNDAVAN</h1>
            <div className="rule" />
            <p className="sub">Where Every Morning Feels Like A Dream</p>
          </div>

          {/* Layer 2 — Crafted */}
          <div className="seq-layer seq-layer--2" ref={layer2Ref}>
            <p className="tag">CRAFTED FOR THE</p>
            <h2>Distinguished Few</h2>
          </div>

          {/* Layer 3 — Pricing */}
          <div className="seq-layer seq-layer--3" ref={layer3Ref}>
            <p className="tag">2 &amp; 3 BHK RESIDENCES</p>
            <p className="price">From ₹1.2 Cr</p>
            <p className="note">Pune&apos;s Most Anticipated Address</p>
          </div>

          {/* Layer 4 — CTA */}
          <div className="seq-layer seq-layer--4" ref={layer4Ref}>
            <a href="#contact" className="seq-cta">
              Schedule a Private Preview →
            </a>
          </div>
        </div>

        {/* Loader */}
        <div
          className={`sequence__loader${loaded ? " hidden" : ""}`}
          ref={loaderRef}
        >
          <p className="loader__logo">BASIL VRUNDAVAN</p>
          <div className="loader__bar">
            <div className="loader__bar-inner" ref={barRef} />
          </div>
          <span className="loader__pct" ref={pctRef}>
            0%
          </span>
        </div>
      </div>
    </section>
  );
}
