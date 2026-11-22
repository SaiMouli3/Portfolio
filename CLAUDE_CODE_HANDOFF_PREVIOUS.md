# Claude Code handoff: build Sai Mouli's complete portfolio

## Your assignment

You are the designer and engineer responsible for shipping an exceptional, complete, production-ready personal portfolio website for **A Sai Mouli**. Work in this Portfolio directory. Build and run the site; do not stop after providing a plan, design proposal, or snippets. Use the resume, original character artwork, cinematic scenes, and completed short film already in this folder.

The concept is **The Making of an Engineer**: one curious Indian child becomes an engineering student, a professional software engineer, and a builder exploring applied AI. The result must combine the emotional craft of an animated film with the clarity and technical substance of an excellent engineering portfolio. The cinematic story should attract attention; credible work should earn trust.

Make thoughtful implementation decisions without asking for routine approvals. Preserve all original files. Do not deploy, purchase services, generate more paid media, or replace existing assets unless I explicitly request it. Finish with a working local website, checked responsive layouts, and clear run/deploy instructions.

## Read first and establish facts

1. Inspect the directory and any applicable AGENTS.md before implementation. There is currently a resume PDF and an `output/` asset directory; inspect again in case the project changed.
2. Read `Sai_Mouli_Resume_B_Applied_Ai.pdf` directly. It is the primary factual source for names, dates, work, education, projects, contact information, and metrics. Resolve any discrepancy in the notes below in favor of the PDF. Preserve the PDF unchanged.
3. Inspect the supplied images visually and watch/sample the completed film. Build the visual design around their actual framing and color. Do not assume these are downloadable 3D models: they are raster renders and video.
4. Keep all factual copy in a central typed content file. Clearly separate professional experience, personal projects, open-source contributions, and personal interests.
5. Use the provided resume as the snapshot of record. PR status, test counts, and metrics below are resume-reported facts, not live measurements. If verifying links or statuses, do not silently upgrade open work to merged work. Do not fabricate case-study details, testimonials, dates, benchmarks, employers, publications, awards, or technical claims.

## Positioning and voice

Name: **A Sai Mouli**; display **Sai Mouli** where a shorter name reads better.

Professional positioning: **Applied AI Engineer · Backend Engineer · Builder**. The resume lists the job title **Software Engineer at NatWest Group**. Distinguish the positioning from the official employment title. AI research is a personal learning interest; do not claim a formal research position, published papers, training a foundation model, or hardware expertise unsupported by the resume.

Tone: intelligent, warm, quietly ambitious, specific, human. Avoid exaggerated marketing copy, “10x engineer,” generic AI slogans, and paragraphs full of buzzwords.

Suggested hero direction, refine to fit the final design:

> It started with curiosity.
> Now I build what comes next.

Supporting line:

> I'm Sai Mouli, an applied AI and backend engineer in Bengaluru, building reliable systems and practical AI tools.

Primary CTA: **Explore my work**. Secondary: **Download resume**. An unobtrusive **Watch my journey** control opens/plays the full film. The story supports the portfolio; recruiters must immediately understand who I am and reach my work, resume, and contact details.

## Verified resume content to incorporate

### Links and contact

- Email: `saimouli12345678@gmail.com`
- GitHub: `https://github.com/SaiMouli3`
- LinkedIn: `https://www.linkedin.com/in/saimouli036/`
- Location: Bengaluru, India.
- Existing portfolio URL in resume: `https://sai-mouli-portfolio.vercel.app`. Treat this as the previous site, not proof of the new deployment URL or authority to overwrite a deployment.
- Resume PDF includes a telephone number. Keep it in the downloadable resume; do not publish it prominently on the website by default.

### Experience

**NatWest Group — Software Engineer** · Bengaluru · Jul 2025–Present, per resume.

- Built a natural-language analytics engine over a **136-table reporting database**: plain-English questions become schema-validated SQL, execute, and produce charts.
- Integrated it into a dashboard chatbot for self-service reporting.
- Developed backend APIs and data pipelines for the SCO Observability Platform, supporting application monitoring and customer-journey visibility across interconnected systems.
- Processed lifecycle and technical observability events for analytics and quality-control teams.
- Reduced large dashboard query time from approximately **3 minutes to under 30 seconds**.

Present only resume-level public descriptions. No invented internal screenshots, bank data, confidential architecture, customer records, or unsupported company claims. Employer name can appear as ordinary text; no invented company logo.

**Aamara Technologies — Backend Developer Intern** · Bengaluru · Mar 2024–Aug 2024.

- Built backend systems for Techno Rings' shop-floor operations, used by **20,000 people**, using Django REST Framework and MySQL with a React frontend.
- Supported machine assignment, shift logging, and tool-life tracking.
- Implemented payroll exception rules for breakdowns and reassignment; daily processing fell from about **4 hours to under 30 minutes**.

**Pods Studio — Software Development Intern** · Bengaluru · Nov 2023–Dec 2023.

- Moved customer email onto Celery/cron event-driven triggers; resume reports **27% higher retention**.
- Debugged failed in-app payments.

Do not reinterpret “20,000 people” as daily active users or invent attribution/measurement methods behind the metrics.

### Featured projects

**Zippyy** — `https://github.com/SaiMouli3/zippyy`

- Multi-tenant delivery-recovery platform.
- Python, FastAPI, PostgreSQL, Redis, Next.js.
- Signed carrier, WhatsApp, and voice webhooks are deduplicated into an inbox, drive a shipment state machine, and wake durable agent workflows using typed tools.
- Carrier actions pass a deterministic **14-rule policy engine**; the LLM handles replies the rule extractor is unsure about.
- Per-merchant row-level security and `SKIP LOCKED` job leases.
- Resume reports **145 passing tests**. Do not label this a live current count unless verified.

**XTXT** — `https://github.com/SaiMouli3/xtxt`

- A plain-text format whose directives carry images, tables, charts, and typed records as JSON-extractable data.
- Specification, Go reference parser, and **12-case conformance suite**, run in CI by **5 SDKs**.
- Published to PyPI and npm, according to resume. Do not invent package links or download counts.
- Languages listed: Go, Python, JavaScript, Rust, Java, C. Do not extrapolate expertise beyond what the project supports.

Give each project a genuinely useful case study: problem, approach, interesting design choices, verified outcomes, and repository link. Use clean HTML/SVG architecture diagrams when helpful. Label conceptual diagrams as simplified overviews rather than actual production screenshots. Do not add fake live-demo links or imply unavailable software is hosted.

### Open source

Keep the contribution list compact and precise. Validate exact URLs before publishing PR links; if validation is unavailable, use the repository link and display the PR number as text.

- `PrefectHQ/fastmcp` PR **#4758**, merged per resume: fixed lost updates in event storage; a five-concurrent-write reproduction retained only one of five event IDs before the fix. Final design used **64 striped asyncio locks** keyed by stream ID after maintainer review.
- `PrefectHQ/fastmcp` PR **#4705**, merged per resume: prevented caching `is_error` responses that could pin a transient 503 for an hour.
- `stanfordnlp/dspy` PR **#10720**, merged per resume: fixed `dspy.majority()` raising TypeError when voting on non-string values.
- `chroma-core/chroma` issue **#7560**, PR **#7559**, open per resume: showed CI lint could never fail; proposed fixes for two hidden bugs.
- `567-labs/instructor` PR **#2846**, open per resume: rendered context placeholders in `input_text` parts that reached the model unprocessed.

### Skills and education

- Languages: Python, C++, SQL.
- Applied AI: LangGraph, LangChain, MCP servers, RAG, embeddings, FAISS.
- Backend: FastAPI, Django, DRF, Flask, SQLAlchemy, REST APIs, data pipelines, WebSockets, Celery.
- Infrastructure/data: PostgreSQL, MySQL, Redis, AWS, Docker, Kubernetes, Linux, Git, GitHub Actions.
- Practices: asyncio concurrency, transactions, pytest, API design, performance optimization.
- Ramaiah Institute of Technology, B.Tech in Computer Science and Engineering, **2021–2025**, **CGPA 9.06/10**.

Group skills by engineering capability with context from the work. Avoid proficiency percentages, fake endorsements, huge logo walls, and unsupported years-of-experience counters.

## Original assets: exact local paths relative to this directory

### Completed film

`output/engineer-film/the-journey-of-an-engineer.mp4`

- Verified export: **1920×1080**, H.264, **24 fps**, **46.25 seconds**, approximately **37 MB**, **silent**.
- Includes all seven narrative chapters, split into eight shots with short dissolves.
- Ends with a clean dark frame and subtle particles. The phrase **THE JOURNEY CONTINUES.** must be rendered by the website as accessible HTML, not baked into or regenerated inside the video.
- Treat the film as an authored linear video, not a collection of draggable keyframes. Avoid scroll-seeking this long-GOP MP4: it can stutter badly on mobile.
- Individual source clips are `output/engineer-film/shot-00.mp4` through `shot-07.mp4`. These are source material, not all initial-page downloads.
- Supporting files: `master-brief.txt`, `shot-prompts.json`, `generation-manifest.json`, `assemble.py`, `film-contact-sheet.jpg`, and `closing-frame.jpg` in the same directory.
- Original MP4 is the master. Make separate web-optimized derivatives if needed; do not overwrite it.

Approximate edited chapter starts, verify against playback before synchronizing UI:

| Time | Chapter |
| --- | --- |
| 0.00 s | Childhood: walk to school |
| 5.75 s | The first love: computer games |
| 11.50 s | Entering engineering college |
| 15.25 s | Learning programming in the lab |
| 19.00 s | Graduation |
| 24.75 s | Professional software engineering |
| 31.50 s | Personal AI research |
| 39.25 s | The builder and the next chapter |
| 46.25 s | End |

### Cinematic chapter images

All are in `output/character-design/`:

1. `childhood-walk-to-school.png` — golden morning street, rear view, light-blue shirt.
2. `childhood-gaming-bedroom.png` — excited child at computer, cream shirt, blue/warm lighting.
3. `college-campus-arrival.png` — age-20 student entering campus, navy T-shirt, jeans, backpack.
4. `college-programming-laboratory.png` — college student programming in daylight laboratory.
5. `engineering-graduation.png` — age-23 graduate holding degree, golden-hour campus.
6. `bengaluru-software-engineer-office.png` — age-23 professional in glass office.
7. `late-night-ai-research.png` — personal nighttime workstation with blue and amber lighting.

These are narrative illustrations, not photographs of real institutions, actual employer offices, or screenshots of real software. The technical labels in generated monitor images are illustrative and should not be presented as authoritative code or scientific documentation.

### Character identity references

- `childhood-protagonist.png` — childhood full-body portrait.
- `protagonist-college-age-20.png` — canonical college full-body portrait.
- `protagonist-age-23.png` — canonical adult full-body portrait.
- `higgsfield-master-turnaround.png` and `higgsfield-master-expressions.png` — childhood identity sheets.
- `indian-boy-character-sheet.png` — original childhood sheet.
- `expressions-childhood-age-8.png` and `expressions-engineer-age-23.png` — eight-expression sheets.
- `expressions-college-age-19.png` — earlier intermediate concept, not the canonical age-20 college identity. Prefer the age-20 portrait and scenes.

Do not display contact sheets or entire expression grids as website hero assets. Do not invent new faces, recolor skin, distort proportions, use random stock characters, or claim these PNGs are rigged 3D models. Any gentle artwork motion should come from restrained CSS or the existing video.

## Visual direction: premium editorial cinema meets serious engineering

Visual layout reference: `output/website-design/portfolio-desktop-concept.png`. Use this generated desktop mockup for hierarchy, palette, typography, imagery placement, and section rhythm. It is a design concept, not a source of factual copy: it contains invented internship dates, simplified project descriptions/diagrams, and imprecise contribution status. Use the verified resume facts above and original scene assets instead. Do not embed the mockup as a flattened website or copy its factual errors. Build accessible responsive HTML components and adapt the composition naturally to smaller screens.

Build one coherent art direction, not a generic developer template. The emotional contrast is warm childhood sunlight evolving into cool professional environments and blue/amber night research.

- Base palette: deep ink/navy, warm ivory, restrained amber highlights, a small amount of cool blue for technical detail. Suggested starting tokens: ink `#0B1017`, raised surface `#131C28`, ivory `#F1EBE1`, muted text `#A8B3C2`, amber `#D7AB69`, cool accent `#79B8D0`. Adjust to actual artwork and accessible contrast.
- Use dark cinematic framing for hero and film, warm editorial breathing room in selected content sections, and a dark research/contact ending. Avoid a monochrome wall of same-size cards.
- Establish an excellent type system: a distinctive readable display face with a restrained sans-serif body face and small monospace technical annotations. Use at most three families, licensed/self-hosted where practical, with robust fallbacks. No tiny all-caps body copy.
- Desktop display typography can be large and confident; use `clamp()` so mobile remains composed. Favor generous line height, short paragraphs, balanced line lengths, and intentional negative space.
- Fine rules, chapter numbers, restrained metadata, asymmetrical editorial layouts, large scene imagery, and precise alignment should create the premium feel.
- No generic purple gradients, excessive glassmorphism, neon cyberpunk styling, fake terminal walls, endless floating particles, flashy loading screens, or decorative 3D that competes with the protagonist.
- Preserve faces/hands when cropping. Use per-image `object-position` values and responsive art direction. Overlay copy only over negative space with sufficient contrast; do not bury faces beneath text.

## Information architecture and user experience

### 1. Immediate useful entry

Compact persistent navigation: name/wordmark, Journey, Work, Experience, Open Source, Contact, Resume. Excellent keyboard/mobile navigation with real anchor destinations and appropriate scroll offsets.

Hero gives positioning, two clear CTAs, a beautifully framed cinematic visual, and a subtle chapter cue. No forced 46-second intro. Visitors can read the portfolio immediately; the film is an invitation, not a gate. Do not show a preloader waiting for the entire movie.

### 2. The journey

Use the film and chapter illustrations as the emotional backbone. Design a deliberate section with a large player, chapter navigation, and concise editorial captions rather than duplicating seven huge videos. A desktop sticky visual with a readable chapter list is appropriate if smooth; on mobile use a straightforward vertical sequence with a well-sized player.

Give the film visible play/pause, restart and skip/explore-work controls. Update progress/chapter UI from actual media events, not arbitrary timers. Clicking a chapter seeks only after metadata is available and can be retried safely if loading fails. Do not resume after an explicit user pause. Keep background auto-play attempts muted and handle rejection gracefully. Do not auto-play on reduced-motion or data-saving connections.

At film end, present **THE JOURNEY CONTINUES.** as real DOM text with a natural link to current projects. Do not automatically scroll the user away or trap navigation. Provide a descriptive accessible video label and text narrative/transcript for the silent film.

Childhood scenes are creative storytelling, not evidence of exact historical events. Graduation timing/education must follow the resume; age-23 is the artwork identity, not a claim that the degree was completed at a particular age.

### 3. Selected engineering work

Make this easy to scan independently of the film. Feature Zippyy and XTXT as substantial editorial project stories with visual architecture overviews, problem/approach/outcome, technical decisions, and real GitHub links. Provide dedicated `/work/zippyy` and `/work/xtxt` pages or equivalently polished accessible detail views with stable URLs. Never use childhood artwork as a fake screenshot of a software product.

Add a clear separate professional-work feature for NatWest's analytics and observability work using only the resume's public descriptions. Use a carefully designed HTML/SVG system overview if helpful, identified as conceptual. Highlight the 136-table scope and query-time improvement with clear context, not animated vanity counters.

### 4. Experience and education

An elegant readable timeline for NatWest, Aamara, and Pods Studio with exact dates and concise impact. Include education and CGPA. Strong visual hierarchy, no dense resume pasted into a card.

### 5. Open-source engineering

An editorial contribution list emphasizing the engineering bug and fix, with truthful status badges and repository/PR links. This is strong evidence of craftsmanship; give it visual weight. Do not render all five items as identically empty generic cards.

### 6. What I build and explore

An intentional compact skills section: reliable backends, applied AI workflows, concurrency/data systems, and experimentation. Use relevant evidence. Include a short honest paragraph about continued learning and personal AI experiments without claiming unverified research outputs.

### 7. Contact and footer

Warm, confident close using the night-research atmosphere: an invitation to discuss engineering, AI systems, or collaboration. Real email, GitHub, LinkedIn, resume download. Do not claim I am actively job-seeking unless supported by my instructions. Prefer a reliable `mailto:` contact action over a fake form. A form is optional only if it has a working configured backend and truthful success/error handling.

## Implementation requirements

- If a functioning stack already exists, retain it unless unsuitable. Otherwise use a compatible current stable **Next.js App Router + TypeScript** setup with a clean component architecture and a single styling system. Verify library APIs against installed versions. Use ordinary React and CSS for most of the site; one restrained motion library is enough.
- Prefer semantic server-rendered content; isolate video, navigation state, and motion into small client components. No unnecessary CMS, authentication, database, or backend.
- Centralize resume-derived content and asset metadata in typed modules. Keep navigation, case studies, experience, links, chapter times, image focal points, and accessibility descriptions easy to edit.
- Copy only required assets into organized `public/media/` paths and the unchanged resume into `public/resume/`. Source references in `output/` remain intact. Do not place the entire source directory in the browser bundle.
- Create responsive WebP/AVIF image derivatives and thumbnails using available tooling. Keep masters. Include width/height/aspect ratios to prevent layout shift; serve optimized sizes and lazy-load below the fold.
- The approximately 37 MB original film must not download on initial page load. Use a lightweight poster, `preload="none"` or carefully justified metadata loading, and attach/load source on explicit play or deliberate near-viewport activation. Respect `prefers-reduced-motion`, data saver, tab visibility, and user pause. Preserve normal scrolling.
- Produce a smaller 720p H.264 web derivative if ffmpeg is available, maintaining the 16:9 composition and identity; use sensible quality, `yuv420p`, fast-start metadata, and an explicit fallback to the original. An optional WebM is secondary, not required. Verify duration/frame integrity. Do not create an image-frame sequence for scroll animation.
- Keep all core content usable without video, JavaScript animation, or a high-end GPU. On mobile/reduced motion, use static chapter visuals and an explicit play control. No background audio.
- Respect WCAG 2.2 AA intent: strong contrast, semantic headings, descriptive links, visible focus, skip link, keyboard-operable controls, adequate touch targets, labeled media controls, useful image descriptions, reduced-motion behavior, and no focus traps. If using a dialog, implement focus management, Escape, close button, and focus return.
- Avoid expensive WebGL and large particle canvases. Never imply supplied renders are an interactive rig. Motion should be purposeful and restrained: short opacity/transform transitions, subtle image depth, occasional chapter reveals. No scroll hijacking, cursor replacement, or pointer-only affordances.
- Resume download must work from every route with a clear filename. External links must use verified targets and safe attributes when opening new tabs. No `href="#"`, broken navigation, inaccessible custom buttons, or nonfunctional CTA placeholders.
- Include thoughtful page metadata, descriptive titles, favicon, Open Graph artwork derived from provided assets, and appropriate Person structured data using supported facts. Make canonical/social URLs configurable; do not invent a live deployment domain. Keep secrets and analytics keys out of source; no tracking service by default.
- Use a reproducible lockfile and ordinary scripts for development, lint/type checks, and production build. No paid runtime dependencies. Do not start multiple conflicting dev servers.

## Suggested source organization

Adapt to the framework rather than following this mechanically:

```text
app/
  page.tsx
  layout.tsx
  globals.css
  work/zippyy/page.tsx
  work/xtxt/page.tsx
components/
  navigation.tsx
  hero.tsx
  journey-player.tsx
  journey-chapters.tsx
  selected-work.tsx
  experience.tsx
  open-source.tsx
  contact.tsx
content/
  portfolio.ts
  journey.ts
public/
  media/
  resume/Sai-Mouli-Resume.pdf
README.md
```

## Execution and quality bar

Work through design, implementation, real browser review, and refinement. Do not deliver a scaffold or a generic template with my name swapped in.

1. Inventory assets and resume; document a short implementation plan, then execute it.
2. Establish design tokens, typography, section rhythm, imagery crops, navigation, and content hierarchy before adding decorative motion.
3. Build the complete core site and case studies, then integrate media/progressive enhancement.
4. Run the production build, type checking, and configured linting. Fix meaningful errors and warnings introduced by the implementation.
5. Use an actual browser at approximately 1440 px desktop, 768 px tablet, and 390 px mobile, with a narrow 320 px sanity check. Take screenshots and inspect them. Refine spacing, typography, visual balance, image crops, and content density rather than relying only on code inspection.
6. Test keyboard navigation, mobile menu, CTA anchors, resume download, project links, chapter seeking, video play/pause/restart, end-state overlay, error fallback, reduced motion, and slow-network initial rendering. Confirm no horizontal overflow or console errors. Confirm the original video is not eagerly fetched on first load.
7. Add a few focused tests for important behavior if the stack supports them: chapter boundaries, functional navigation/media fallback, and core content rendering. Avoid large test suites that merely mirror CSS. A clear manual QA checklist is still required.
8. Check all public claims against the PDF. No fabricated testimonials, made-up live demos, unsupported research claims, or unverified PR statuses.
9. Leave a concise README with install/run/build commands, project structure, content-editing instructions, asset provenance, video optimization details, hosting considerations, and any genuine remaining configuration. Do not claim measured Lighthouse scores without measuring them. If a check cannot run, explicitly report it.
10. Finish by reporting what was built, how to open it, which checks actually passed, and any limitations. Keep improving until the result is visually cohesive, responsive, functional, and ready for me to review locally.

## Final acceptance criteria

The website should feel like **Sai Mouli's authored story**, supported by real engineering work. Within seconds, a visitor understands my professional focus and can inspect my projects or resume. The film adds emotion without blocking access. All three life stages remain visually recognizable, every scene earns its place, and technical credibility is as strong as the art direction.

Ship the complete implementation in this folder. Start now.
