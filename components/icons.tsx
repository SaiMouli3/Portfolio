export const PlayIcon = () => (
  <svg viewBox="0 0 12 14" aria-hidden="true" fill="currentColor"><path d="M0 0l12 7-12 7z" /></svg>
);
export const PauseIcon = () => (
  <svg viewBox="0 0 12 14" aria-hidden="true" fill="currentColor"><path d="M0 0h4v14H0zM8 0h4v14H8z" /></svg>
);
export const RestartIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2.5 8a5.5 5.5 0 1 0 1.7-4" /><path d="M2 1.5V5h3.5" /></svg>
);
export const DownloadIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 2v9M4 7l4 4 4-4M2.5 14h11" /></svg>
);
export const Arrow = ({ dir = "right" }: { dir?: "right" | "out" | "down" }) => (
  <span aria-hidden="true">{dir === "out" ? "↗" : dir === "down" ? "↓" : "→"}</span>
);
