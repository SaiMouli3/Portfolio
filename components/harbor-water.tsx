"use client";

import { useEffect, useRef } from "react";

/**
 * Moving water for the harbour illustration behind #contact.
 * A copy of the section background is masked to the water only (public/art/harbor-water-mask.png,
 * boats and shore cut out) and pushed through an animated SVG ripple. The original stays still underneath.
 * Paused off-screen; hidden entirely for reduced motion (see globals.css).
 */
export default function HarborWater() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const section = svg?.closest("section");
    if (!svg || !section) return;
    svg.pauseAnimations();
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? svg.unpauseAnimations() : svg.pauseAnimations()));
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <svg ref={svgRef} width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
        <filter id="harbor-water" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.004 0.065" numOctaves="2" seed="7" result="ripples">
            <animate attributeName="baseFrequency" dur="9s" values="0.004 0.065;0.0052 0.08;0.004 0.065" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="ripples" scale="9" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="harbor-water" aria-hidden="true" />
    </>
  );
}
