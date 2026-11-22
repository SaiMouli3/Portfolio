> Latest refinement: user approved the overall design and requested removal of the Zippyy and XTXT illustrations only. Both project sections are text-only again; bridge/study assets remain on disk. Keep the rest of the design unchanged.

> Artwork refinement: village art is now reserved for the hero. New original assets: `public/art/bridge.png` (Zippyy), `public/art/study.png` (XTXT), `public/art/harbor.png` (contact). About stays plain. Global and Experience repeated artwork removed. Project heading hierarchy and responsive illustration panels refined.

> Latest direction: the user has now requested the reference’s full blue engraved coastal housing style across the site. This supersedes the earlier text-only visual restriction. Original coastal art at `public/art/cobalt-coast.png` is used in the hero, About, contact, and global backdrop; translucent ivory surfaces protect text readability. The portrait stays as a small circular detail. Port remains 3080.

# Claude Code handover — Sai Mouli portfolio

## Current instruction

The user requested: “remove all images and keep simple and add handover doc to claude in this i will tell it what to do”.

The site is now a simple, text-first portfolio. Wait for the user’s next direction before choosing a new design or restoring imagery. The older cinematic brief is archived in `CLAUDE_CODE_HANDOFF_PREVIOUS.md` for reference only; it is superseded, not an active assignment.

## Project and running locally

- Directory: `/Users/admin/Desktop/Portfolio`
- Next.js 16.4.6 App Router, React 19, TypeScript, global CSS.
- Read `AGENTS.md` and the relevant guides in `node_modules/next/dist/docs/` before coding; this Next.js version has API changes.
- Development: `npm run dev -- --port 3080`
- Production: `npm run build`, then `npm run start -- --port 3080`.
- Use port **3080**, as requested by the user.
- No deployment is requested.

## What changed

- Removed the illustrated journey, film player, and character gallery from the homepage; added a short text-only About section at `#journey` so navigation still works.
- Removed rendered architecture illustrations from homepage and case studies.
- Removed coastal backgrounds, paper texture, contact image, and social preview image metadata.
- Simplified hero, spacing, work layout, and contact section.
- Disabled global GSAP motion and reveal bootstrap so text renders immediately.
- Kept factual portfolio content, project case studies, navigation, social/contact links, and resume download.
- Original media and unused media components remain on disk, but are not rendered. Preserve them unless the user asks to delete files.

## Main files

- `app/page.tsx`: homepage sections and simple About.
- `components/hero.tsx`: text-only introduction.
- `components/sections.tsx`: work, experience, open source, capabilities, contact, footer.
- `app/work/[slug]/page.tsx`: Zippyy and XTXT case studies.
- `components/navigation.tsx`: desktop/mobile navigation.
- `app/globals.css`: existing styles with final simple-baseline overrides. A future cleanup may consolidate unused styles after the user settles on a direction.
- `app/layout.tsx`: fonts, metadata, navigation, and page shell.
- `content/portfolio.ts`: typed content and factual claims.
- `Sai_Mouli_Resume_B_Applied_Ai.pdf`: original resume; keep unchanged.

## Content constraints

Do not invent experience, metrics, employers, testimonials, or project results. Preserve the difference between professional work, personal projects, and personal AI learning. The original media is narrative artwork, not real photography. Do not restore or generate images without a new user request.

## Checks

Run `npm run typecheck`, `npm run lint`, `npm run test`, and `npm run build` after substantive changes. Check desktop and mobile presentation when browser inspection is available.

## Next task

The user will tell Claude what to do next. Use that instruction as the scope; this document does not authorize a redesign or deployment.
