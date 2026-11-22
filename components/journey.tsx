import Image from "next/image";
import { chapters, lifeStages } from "@/content/journey";
import FilmPlayer from "./film-player";
import WatchButton from "./watch-button";

export function Journey() {
  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <div className="wrap">
        <header className="section-head journey-intro">
          <p className="label" data-reveal>01 — The journey</p>
          <h2 id="journey-title" className="h2" data-reveal="lines">
            The making of an engineer, in eight short chapters.
          </h2>
          <p className="lede" data-reveal>
            An animated short I made about the path from a walk to school to a workstation at night. The scenes are
            illustrations — a story about curiosity, not a record of exact events.
          </p>
        </header>

        <div className="chapters">
          <div className="chapter-stage" aria-hidden="true">
            <div className="stage-frame">
              <div className="stage-progress"><i /></div>
              {chapters.map((c) => (
                <div className="slide" key={c.n}>
                  <Image src={c.image.src} alt="" fill sizes="(min-width: 1024px) 80vw, 1px" style={{ objectPosition: c.image.position }} />
                </div>
              ))}
              <div className="stage-hud">
                <span className="stage-count num">
                  <span data-stage-count>01</span> <small>/ {String(chapters.length).padStart(2, "0")}</small>
                </span>
                <span className="label" data-stage-label>{chapters[0].stage}</span>
              </div>
            </div>
          </div>

          <ol className="chapter-list">
            {chapters.map((c) => (
              <li className="chapter" key={c.n} data-stage={c.stage}>
                <div className="chapter-figure">
                  <Image src={c.image.src} alt={c.image.alt} width={1344} height={752} sizes="(min-width: 1024px) 1px, 100vw" style={{ objectPosition: c.image.position }} />
                </div>
                <div className="chapter-body">
                  <div className="chapter-meta">
                    <span className="num">{c.n}</span>
                    <span className="label">{c.stage}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.caption}</p>
                  <WatchButton at={c.start}>
                    Watch this chapter <span aria-hidden="true">→</span>
                  </WatchButton>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Film() {
  return (
    <section id="film" className="section film" aria-labelledby="film-title">
      <div className="wrap">
        <header className="section-head">
          <p className="label" data-reveal>02 — The film</p>
          <h2 id="film-title" className="h2" data-reveal="lines">The Journey of an Engineer</h2>
          <p className="lede" data-reveal>Forty-six silent seconds. Press play when you like — the rest of the site doesn’t wait for it.</p>
        </header>
        <FilmPlayer />
        <details className="transcript">
          <summary>Read the film as text</summary>
          <ol>
            {chapters.map((c) => (
              <li key={c.n}>
                <strong>{c.title}.</strong> {c.image.alt.replace(/^(Illustration|Still from the film): /, "")}
              </li>
            ))}
            <li><strong>End.</strong> The screen fades to a dark frame with drifting particles. The journey continues.</li>
          </ol>
        </details>
      </div>
    </section>
  );
}

export function Stages() {
  return (
    <section className="section light" aria-labelledby="stages-title">
      <div className="wrap">
        <header className="section-head">
          <p className="label" data-reveal>03 — Same person, three chapters</p>
          <h2 id="stages-title" className="h2" data-reveal="lines">
            The backpack changed hands. <em>The curiosity didn’t.</em>
          </h2>
        </header>
        <div className="stages">
          {lifeStages.map((s, i) => (
            <figure className="stage" key={s.age} style={{ margin: 0 }} data-reveal>
              <div className="stage-portrait">
                <div data-parallax={[4, 8, 12][i]} style={{ height: "112%", marginTop: "-6%", position: "relative" }}>
                  <Image src={s.src} alt={s.alt} fill sizes="(min-width: 760px) 30vw, 100vw" />
                </div>
              </div>
              <figcaption style={{ display: "grid", gap: "0.5rem" }}>
                <span className="label">{s.age}</span>
                <h3>{s.label}</h3>
                <p className="muted">{s.line}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
