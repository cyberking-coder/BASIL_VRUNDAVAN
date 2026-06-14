# BASIL VRUNDAVAN

A luxury apartment scroll-scrub experience for **Basil Vrundavan** — a premium
2 & 3 BHK residential development in Pune. Built with Next.js 16 (App Router,
Turbopack, static export), a 192-frame WebP canvas sequence scrubbed by GSAP
ScrollTrigger, and Framer Motion section reveals.

## Tech

- **Next.js 16** — App Router, `output: "export"` (fully static)
- **GSAP ScrollTrigger** — scroll-scrubbed 192-frame cinematic sequence
- **Framer Motion** — fade-up section reveals
- **next/font/google** — self-hosted Cormorant Garamond + DM Sans

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/BASIL_VRUNDAVAN](http://localhost:3000/BASIL_VRUNDAVAN).

> The app is served under the `basePath` `/BASIL_VRUNDAVAN`, so all routes and
> assets live beneath that prefix.

## Build

```bash
npm run build
```

Produces a static site in `out/`.

## Deployment — GitHub Pages

Deployment is automated via `.github/workflows/deploy.yml`:

1. In the repository, go to **Settings → Pages** and set
   **Source** to **GitHub Actions**.
2. Push to `main`. The workflow runs `npm ci`, `npm run build`, then uploads and
   deploys the `out/` artifact.
3. The site goes live at
   **https://cyberking-coder.github.io/BASIL_VRUNDAVAN**.

The `basePath` in `next.config.ts` (`/BASIL_VRUNDAVAN`) ensures every asset
resolves correctly under the GitHub Pages project path. The frame sequence lives
in `public/sequence/` and is referenced at runtime as
`/BASIL_VRUNDAVAN/sequence/frame_0001.webp … frame_0192.webp`.
