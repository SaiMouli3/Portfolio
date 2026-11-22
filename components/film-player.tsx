"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { chapters, chapterAt, film, FILM_DURATION } from "@/content/journey";
import { PauseIcon, PlayIcon, RestartIcon } from "./icons";

const fmt = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

/**
 * The film never loads until someone asks for it (preload="none", sources attached on first play).
 * UI state comes from media events only. A user pause is never overridden; pauses caused by
 * leaving the viewport or hiding the tab resume automatically.
 */
export default function FilmPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const pendingSeek = useRef<number | null>(null);
  const autoPaused = useRef(false);
  const [armed, setArmed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [ended, setEnded] = useState(false);
  const [error, setError] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const current = chapterAt(time);

  const playNow = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => setPlaying(false)); // rejected (e.g. no gesture): stay paused, controls still work
  }, []);

  /** Arm sources if needed, optionally seek, then play. Safe to call repeatedly / after errors. */
  const start = useCallback(
    (at?: number) => {
      const v = videoRef.current;
      if (!v) return;
      setEnded(false);
      setError(false);
      if (at !== undefined) pendingSeek.current = at;
      if (!armed) {
        setArmed(true); // sources render, effect below loads + plays
        return;
      }
      if (v.readyState >= 1 && pendingSeek.current !== null) {
        v.currentTime = pendingSeek.current;
        pendingSeek.current = null;
      }
      playNow();
    },
    [armed, playNow],
  );

  // First arm: sources now in the DOM.
  useEffect(() => {
    if (!armed) return;
    const v = videoRef.current;
    if (!v) return;
    v.load();
    playNow();
  }, [armed, playNow]);

  // "Watch my journey" (hero) and per-chapter buttons.
  useEffect(() => {
    const onPlay = (e: Event) => start((e as CustomEvent<{ at?: number }>).detail?.at ?? 0);
    window.addEventListener("film:play", onPlay);
    return () => window.removeEventListener("film:play", onPlay);
  }, [start]);

  // Pause when hidden or scrolled away; resume only if *we* paused it.
  useEffect(() => {
    const v = videoRef.current;
    const box = boxRef.current;
    if (!v || !box) return;
    const autoPause = () => {
      if (!v.paused) {
        autoPaused.current = true;
        v.pause();
      }
    };
    const autoResume = () => {
      if (autoPaused.current) {
        autoPaused.current = false;
        playNow();
      }
    };
    const onVis = () => (document.hidden ? autoPause() : autoResume());
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? autoResume() : autoPause()), { threshold: 0.25 });
    io.observe(box);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [playNow]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!armed || v.paused) start();
    else {
      autoPaused.current = false;
      v.pause();
    }
  };

  const seekChapter = (i: number) => start(chapters[i].start);

  return (
    <div>
      <div className="film-frame" ref={boxRef}>
        <video
          ref={videoRef}
          preload="none"
          playsInline
          muted
          poster={film.poster}
          aria-label={film.label}
          onLoadedMetadata={(e) => {
            if (pendingSeek.current !== null) {
              e.currentTarget.currentTime = pendingSeek.current;
              pendingSeek.current = null;
            }
          }}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onPlaying={() => {
            setPlaying(true);
            setWaiting(false);
          }}
          onPause={() => setPlaying(false)}
          onWaiting={() => setWaiting(true)}
          onEnded={() => {
            setPlaying(false);
            setEnded(true);
          }}
        >
          {armed &&
            film.sources.map((s, i) => (
              <source
                key={s.src}
                src={s.src}
                type={s.type}
                // The last source failing means nothing could play.
                onError={i === film.sources.length - 1 ? () => setError(true) : undefined}
              />
            ))}
        </video>

        {!armed && (
          <button className="film-start" onClick={() => start(0)} aria-label="Play the film, The Journey of an Engineer, 46 seconds, silent">
            <Image src={film.poster} alt="" fill sizes="(min-width: 1320px) 1240px, 100vw" className="poster" />
            <span className="big" style={{ position: "relative" }}><PlayIcon /></span>
            <span className="hint label" style={{ position: "absolute" }}>Silent · 0:46 · 8 chapters</span>
          </button>
        )}

        <div className="film-end" hidden={!ended}>
          <h3>THE JOURNEY CONTINUES.</h3>
          <div className="row">
            <a className="btn btn-primary" href="#work">See what I’m building now</a>
            <button className="btn btn-ghost" onClick={() => start(0)}>
              <RestartIcon /> Watch again
            </button>
          </div>
        </div>

        {error && (
          <div className="film-error" role="alert">
            <span>The film couldn’t load. The chapters below tell the same story.</span>
            <button className="ctrl" onClick={() => { setArmed(false); setError(false); }}>Try again</button>
          </div>
        )}
      </div>

      <div className="film-bar" aria-hidden="true">
        <i style={{ transform: `scaleX(${Math.min(1, time / FILM_DURATION)})` }} />
        {chapters.slice(1).map((c) => (
          <b key={c.n} style={{ left: `${(c.start / FILM_DURATION) * 100}%` }} />
        ))}
      </div>

      <div className="film-controls">
        <button className="ctrl" onClick={togglePlay} aria-label={playing ? "Pause film" : "Play film"}>
          {playing ? <PauseIcon /> : <PlayIcon />} {playing ? "Pause" : "Play"}
        </button>
        <button className="ctrl" onClick={() => start(0)} aria-label="Restart film from the beginning">
          <RestartIcon /> Restart
        </button>
        <a className="ctrl" href="#work">Skip to work</a>
        <span className="film-time" aria-live="off">
          {waiting && playing ? "Buffering… " : ""}
          {fmt(time)} / {fmt(FILM_DURATION)}
        </span>
      </div>
      <p className="sr-only" aria-live="polite">
        {armed ? `Chapter ${chapters[current].n}: ${chapters[current].title}` : ""}
      </p>

      <ol className="film-chapters" aria-label="Film chapters">
        {chapters.map((c, i) => (
          <li key={c.n}>
            <button onClick={() => seekChapter(i)} aria-current={armed && i === current ? "true" : undefined}>
              <span className="label">{c.n} · {fmt(c.start)}</span>
              <span>{c.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
