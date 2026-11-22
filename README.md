# Sai Mouli — The Making of an Engineer

This is a personal portfolio for A Sai Mouli (Applied AI & Backend Engineer). A cinematic story frames real engineering work.

It is built with Next.js 16 (App Router) and TypeScript. GSAP 3 (ScrollTrigger + SplitText) is the only motion library, and styling is plain CSS.

## Run

```bash
npm install
npm run dev          # http://localhost:3000  (use -- -p 3210 if 3000 is taken)
npm run build && npm start
npm run lint         # ESLint (next/core-web-vitals + typescript)
npm run typecheck    # tsc --noEmit
npm test             # node:test — chapter timing logic
npm run media        # rebuild web media from output/ (needs ffmpeg + cwebp)
```

## Structure

```text
app/
  layout.tsx            fonts, metadata, Open Graph, Person JSON-LD, nav, motion
  page.tsx              home: Hero → Journey → Film → Stages → Work → Experience → Open Source → Capabilities → Contact
  work/[slug]/page.tsx  /work/zippyy and /work/xtxt (static)
  globals.css           design tokens and every style
components/
  motion.tsx            ALL scroll choreography (one GSAP matchMedia context)
  hero.tsx  journey.tsx  film-player.tsx  sections.tsx  diagrams.tsx  navigation.tsx
content/
  portfolio.ts          every factual claim: experience, projects, PRs, skills, links
  journey.ts            film sources, chapter times, captions, alt text, focal points
public/media/           web derivatives (scenes/, portraits/, film/)
public/resume/          unchanged resume PDF
scripts/build-media.sh  reproducible derivative pipeline
output/                 original masters (untouched; never served)
```

## Editing content

- **Copy, metrics, links:** `content/portfolio.ts`.
- **Chapters:** `content/journey.ts`. Each image has a `position` (CSS object-position) that keeps the face in frame.
- **Motion:** opt in with data attributes (`data-reveal`, `data-reveal="lines"`, `data-parallax`, `data-draw`, `data-scrub-y`). The full list is documented at the top of `components/motion.tsx`.

## Motion design

- **Hero.** A sticky 210vh scene on desktop. A framed childhood street opens to full-bleed, then dissolves into the Bengaluru office scene. The headline rises line by line on load.
- **Journey.** A sticky, uncropped 16:9 cinematic frame. Each chapter caption is a scroll step, and both image and caption crossfade from the same ScrollTrigger, with an amber progress line along the bottom of the frame.
- **Film frame.** The frame opens from an inset as it arrives.
- **Portraits.** Parallax at three speeds.
- **Architecture diagrams.** They draw themselves when they enter the viewport, and a pulse travels each key path.
- **Experience timeline.** The spine is scrubbed to scroll.
- **Contact.** The closing words reveal one at a time.

Accessibility constraints on the motion:

- No scroll hijacking, no pinning, no smooth-scroll library.
- The film is never scroll-seeked.
- With reduced motion, everything renders in its final state, and the journey stage swaps images instantly.
- Without JS, content is fully visible: reveals only hide content once JS and motion are confirmed, and a 4-second failsafe shows it anyway.

## Film and media

| Asset | Source | Web derivative |
| --- | --- | --- |
| Film | `output/engineer-film/the-journey-of-an-engineer.mp4` (1920×1080, 24 fps, 46.25 s, 37 MB) | `journey-720.mp4`: H.264 high, CRF 23, yuv420p, faststart, silent, **10 MB**, 1110 frames / 46.25 s verified. The original is copied as the `journey-1080.mp4` fallback. |
| Poster | frame at 1.5 s | `film/poster.webp` (84 KB) |
| Scenes | 7 PNGs, 1344×752 | WebP q86. Chapter 8 is film frame 965. |
| Portraits | 3 PNGs, 1024×1536 | WebP 768 wide |
| OG card | office scene | `public/og.jpg`, 1200×630 |

next/image serves responsive AVIF/WebP sizes from these files.

The video uses `preload="none"`, and its sources are only attached on an explicit play, so no MP4 is requested on first load. All UI state comes from media events. A user pause is never overridden. Auto-pauses caused by leaving the viewport or hiding the tab resume automatically.

Chapter start times come from the xfade offsets in `output/engineer-film/edit-filter.txt`.

## Provenance and honesty notes

- The resume PDF is the source of record. Metrics are labelled as resume-reported where relevant.
- **PR statuses were checked on GitHub on 22 Nov 2026.**
  - fastmcp #4758, fastmcp #4705 and dspy #10720 are merged.
  - chroma #7559 is open, and its issue is #7560.
  - instructor #2846 is listed as *open* on the resume but is **closed** on GitHub, so it is omitted. The update needed is the resume, not the site.
- The "More builds" section lists ECC Intelligence, PayPilot and Zeoatap. They were picked from a review of public repos, and their descriptions use only what the repositories show.
- Illustrations are narrative artwork, not photographs. Diagrams are labelled as conceptual or simplified.
- The phone number stays in the PDF only.

## Deploy

The site is static-friendly and runs as-is on Vercel or any Node host. Set `NEXT_PUBLIC_SITE_URL` to the final domain for canonical/OG URLs; it falls back to localhost. There is no analytics, no backend and no secrets.

Hosting notes:

- The 10 MB and 35 MB MP4s live in `public/`. A CDN with byte-range support (Vercel has it) handles seeking.
- If you would rather not ship the 35 MB fallback, remove it from `content/journey.ts` and `public/media/film/`.

## Manual QA checklist

Every item below was verified with headless Chrome (Playwright):

- [x] 1440 / 1280 / 768 / 390 / 320 widths: no horizontal overflow, faces clear of type.
- [x] No MP4 request on load; 720p requested on play.
- [x] Chapter seek: "Graduation" lands at 19.0 s and is marked current.
- [x] User pause survives scrolling away and back.
- [x] End overlay shows the DOM text "THE JOURNEY CONTINUES." with a link to Work.
- [x] Hero "Watch my journey" plays from 0; "Watch this chapter" seeks.
- [x] Skip link is the first Tab stop.
- [x] Mobile menu: opens, Escape closes it and returns focus, links navigate and close it.
- [x] Resume returns 200 `application/pdf`. Every hash link resolves. External links use `noopener`. One `h1`. Every `img` has an alt attribute.
- [x] Reduced motion: no hidden content. No-JS: content visible.
- [x] `/work/zippyy` and `/work/xtxt` return 200; unknown slugs return 404.
- [x] No page errors.

Not measured: Lighthouse scores, and real-device iOS/Android playback.
