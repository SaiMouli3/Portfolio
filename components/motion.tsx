"use client";

/**
 * All scroll choreography in one place (one GSAP context, one ScrollTrigger clock).
 * Markup opts in with data attributes; with reduced motion or no JS everything renders in its final state.
 *
 *   data-reveal            fade + rise when it enters
 *   data-reveal="lines"    SplitText line-mask rise (data-immediate → on load, not on scroll)
 *   data-reveal="words"    word-by-word rise
 *   data-stagger           children reveal in sequence
 *   data-parallax="12"     yPercent drift (scrubbed), ± value
 *   data-draw              SVG .wire paths draw in, .node fades up
 *   data-scrub-y           scaleY 0→1 tied to its parent's scroll range
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const EASE = "power3.out";

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const splits: SplitText[] = [];
    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduce: "(prefers-reduced-motion: reduce)",
        desktop: "(min-width: 900px)",
        wide: "(min-width: 1024px)",
      },
      (ctx) => {
        const { motion, desktop, wide } = ctx.conditions as Record<string, boolean>;

        // Chapters stage works with or without motion (instant swaps when reduced).
        if (wide) chapterStage(motion);

        if (!motion) return;
        root.classList.add("motion-ready");

        // ── Generic reveals
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          const kind = el.dataset.reveal;
          const immediate = el.hasAttribute("data-immediate");
          const trigger = immediate ? undefined : { trigger: el, start: "top 88%", once: true };

          if (kind === "lines" || kind === "words") {
            gsap.set(el, { opacity: 1 });
            const split = SplitText.create(el, {
              type: kind === "lines" ? "lines" : "words,lines",
              mask: "lines",
              linesClass: "split-line",
              autoSplit: true,
              aria: "auto",
              onSplit(self) {
                return gsap.from(kind === "lines" ? self.lines : self.words, {
                  yPercent: 115,
                  duration: kind === "lines" ? 1.15 : 0.9,
                  stagger: kind === "lines" ? 0.1 : 0.06,
                  ease: "expo.out",
                  delay: immediate ? 0.15 : 0,
                  scrollTrigger: trigger,
                });
              },
            });
            splits.push(split);
            return;
          }

          const staggered = el.hasAttribute("data-stagger");
          const targets = staggered ? Array.from(el.children) : [el];
          if (staggered) gsap.set(el, { opacity: 1 });
          gsap.fromTo(
            targets,
            { opacity: 0, y: 36 },
            { opacity: 1, y: 0, duration: 1.1, ease: EASE, stagger: 0.09, delay: immediate ? 0.5 : 0, scrollTrigger: trigger },
          );
        });

        // ── Parallax drift
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amt = Number(el.dataset.parallax) || 10;
          gsap.fromTo(
            el,
            { yPercent: -amt },
            { yPercent: amt, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 0.6 } },
          );
        });

        // ── Diagrams draw themselves
        gsap.utils.toArray<SVGSVGElement>("[data-draw]").forEach((svg) => {
          const wires = svg.querySelectorAll<SVGPathElement>(".wire");
          const nodes = svg.querySelectorAll(".node");
          wires.forEach((p) => {
            const len = p.getTotalLength();
            gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
          });
          const tl = gsap.timeline({ scrollTrigger: { trigger: svg, start: "top 80%", once: true } });
          tl.from(nodes, { opacity: 0, y: 14, duration: 0.6, stagger: 0.07, ease: EASE })
            .to(wires, { strokeDashoffset: 0, duration: 0.9, stagger: 0.08, ease: "power2.inOut" }, 0.25)
            .add(() => pulses(svg));
        });

        // ── Scrubbed lines (timeline spine)
        gsap.utils.toArray<HTMLElement>("[data-scrub-y]").forEach((el) => {
          gsap.to(el, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: el.closest("[data-scrub-root]") ?? el.parentElement, start: "top 70%", end: "bottom 70%", scrub: 0.4 },
          });
        });

        // ── Film frame opens as it arrives
        const frame = document.querySelector<HTMLElement>(".film-frame");
        if (frame) {
          gsap.fromTo(
            frame,
            { clipPath: "inset(8% 10% 8% 10% round 14px)", scale: 0.96 },
            { clipPath: "inset(0% 0% 0% 0% round 6px)", scale: 1, ease: "none", scrollTrigger: { trigger: frame, start: "top 95%", end: "top 30%", scrub: 0.5 } },
          );
        }

        // Hero portrait: wipes up into its frame, then drifts gently as the page scrolls.
        const portrait = document.querySelector<HTMLElement>("[data-portrait]");
        if (portrait) {
          const img = portrait.querySelector("img");
          gsap.fromTo(portrait, { clipPath: "inset(100% 0% 0% 0% round 10px)" }, { clipPath: "inset(0% 0% 0% 0% round 10px)", duration: 1.4, ease: "expo.inOut", delay: 0.2 });
          gsap.fromTo(img, { scale: 1.15 }, { scale: 1, duration: 1.8, ease: "expo.out", delay: 0.2 });
          gsap.to(portrait, { yPercent: -8, ease: "none", scrollTrigger: { trigger: portrait, start: "top top+=80", end: "bottom top", scrub: 0.5 } });
        }

        // Reading progress: a hairline along the top of the viewport.
        gsap.to(".scroll-progress i", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

        // Metrics and highlights settle in with a slight scale, after their block.
        gsap.utils.toArray<HTMLElement>(".metric .num, .hl .num, .oss-ref .num, .edu .num").forEach((el) => {
          gsap.from(el, { scale: 0.92, opacity: 0, transformOrigin: "left bottom", duration: 0.9, ease: "back.out(1.6)", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
        });

        if (desktop) heroScene();
        return () => document.querySelectorAll(".diagram .pulse").forEach((d) => d.remove());
      },
    );

    // Layout shifts once web fonts land; re-measure triggers.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      splits.forEach((s) => s.revert());
      mm.revert();
      root.classList.remove("motion-ready", "has-stage");
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true"><i /></div>;
}

/** Hero: framed childhood image opens to full-bleed, then dissolves into the night workstation. */
function heroScene() {
  const track = document.querySelector<HTMLElement>(".hero-track");
  if (!track) return;
  const media = track.querySelector<HTMLElement>(".hero-media");
  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: { trigger: track, start: "top top", end: "bottom bottom", scrub: 0.8 },
  });
  tl.to(media, { top: 0, bottom: 0, left: 0, right: 0, borderRadius: 0, duration: 0.45, ease: "power2.inOut" }, 0)
    .to(".hero-scrim", { opacity: 1, duration: 0.35 }, 0.1)
    .fromTo(".hero-media .layer-then img", { scale: 1 }, { scale: 1.12, duration: 1 }, 0)
    .to(".hero-media .layer-now", { opacity: 1, duration: 0.25 }, 0.55)
    .fromTo(".hero-media .layer-now img", { scale: 1.1 }, { scale: 1, duration: 0.45 }, 0.55)
    .to(".hero-cue .then", { opacity: 0, y: -10, duration: 0.1 }, 0.5)
    .fromTo(".hero-cue .now", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.1 }, 0.62)
    .to(".hero-copy", { y: -40, duration: 1 }, 0);
}

/** Journey: the sticky stage follows whichever chapter caption is centred. */
function chapterStage(motion: boolean) {
  const slides = gsap.utils.toArray<HTMLElement>(".stage-frame .slide");
  const items = gsap.utils.toArray<HTMLElement>(".chapter");
  const count = document.querySelector<HTMLElement>("[data-stage-count]");
  const stageLabel = document.querySelector<HTMLElement>("[data-stage-label]");
  if (!slides.length || !items.length) return;
  document.documentElement.classList.add("has-stage");
  ScrollTrigger.refresh();
  let current = -1;

  const show = (i: number) => {
    if (i === current) return;
    slides.forEach((s, k) => {
      gsap.to(s, { opacity: k === i ? 1 : 0, duration: motion ? 0.9 : 0, ease: "power2.out", overwrite: true });
      if (motion && k === i) gsap.fromTo(s.querySelector("img"), { scale: 1.06 }, { scale: 1, duration: 2.4, ease: "power2.out", overwrite: true });
    });
    items.forEach((el, k) => el.classList.toggle("is-active", k === i));
    if (count) count.textContent = String(i + 1).padStart(2, "0");
    if (stageLabel) stageLabel.textContent = items[i].dataset.stage ?? "";
    current = i;
  };

  items.forEach((el, i) =>
    ScrollTrigger.create({
      trigger: el,
      start: "top 60%",
      end: "bottom 60%",
      onToggle: (self) => self.isActive && show(i),
    }),
  );
  show(0);

  gsap.fromTo(
    ".stage-progress i",
    { scaleX: 0 },
    { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".chapter-list", start: "top 55%", end: "bottom 55%", scrub: true } },
  );
}

/** A single amber pulse travels each key wire once — signal flowing through the system. */
function pulses(svg: SVGSVGElement) {
  svg.querySelectorAll<SVGPathElement>(".wire.key").forEach((path, i) => {
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("r", "3.5");
    dot.setAttribute("class", "pulse");
    svg.appendChild(dot);
    const len = path.getTotalLength();
    const o = { t: 0 };
    gsap.to(o, {
      t: 1,
      duration: 1.4,
      delay: i * 0.25,
      ease: "power1.inOut",
      repeat: 3,
      repeatDelay: 2.2,
      onUpdate: () => {
        const p = path.getPointAtLength(o.t * len);
        dot.setAttribute("cx", String(p.x));
        dot.setAttribute("cy", String(p.y));
        dot.setAttribute("opacity", String(Math.sin(o.t * Math.PI)));
      },
    });
  });
}
