"use client";

import { PlayIcon } from "./icons";

/** Scrolls to the film and asks the player to start (an explicit user gesture, so it may play). */
export default function WatchButton({ at = 0, children }: { at?: number; children?: React.ReactNode }) {
  return (
    <a
      href="#film"
      className={children ? "arrow-link seek" : "watch-btn"}
      onClick={() => window.dispatchEvent(new CustomEvent("film:play", { detail: { at } }))}
    >
      {children ?? (
        <>
          <span className="ring"><PlayIcon /></span>
          Watch my journey <span className="muted mono">0:46</span>
        </>
      )}
    </a>
  );
}
