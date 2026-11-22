import Link from "next/link";
import {
  capabilities,
  contributions,
  education,
  experience,
  exploring,
  moreProjects,
  natwest,
  person,
  projects,
  site,
} from "@/content/portfolio";
import { DownloadIcon } from "./icons";
import HarborWater from "./harbor-water";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function XtxtSample() {
  return (
    <pre className="code-sample" aria-label="Example XTXT document">
      <span className="t"># Machine Learning</span>{"\n\n"}
      Neural networks are inspired by the brain.{"\n\n"}
      <span className="d">@table</span>(<span className="k">chart</span>=&quot;bar&quot;, <span className="k">x</span>=&quot;Month&quot;, <span className="k">y</span>=&quot;Signups&quot;){"\n"}
      Month | Signups{"\n"}Jan   | 20{"\n"}Feb   | 35{"\n"}
      <span className="d">@endtable</span>{"\n\n"}
      <span className="d">@task</span>{"\n"}
      <span className="k">Title</span>: Ship the reference parser{"\n"}
      <span className="k">Status</span>: In Progress{"\n"}
      <span className="d">@endtask</span>
    </pre>
  );
}

export function Work() {
  const [zippyy, xtxt] = projects;
  return (
    <section id="work" className="section raised" aria-labelledby="work-title">
      <div className="wrap">
        <header className="section-head">
          <p className="label" data-reveal>01 — Selected work</p>
          <h2 id="work-title" className="h2" data-reveal="lines">
            Systems where a model helps — <em>and rules decide.</em>
          </h2>
          <p className="lede" data-reveal>
            One thread runs through my work: put language models inside systems that validate, constrain and audit what they do.
          </p>
        </header>

        {/* Professional */}
        <article className="feature" aria-labelledby="natwest-title">
          <div className="feature-copy" data-reveal>
            <div className="kicker">
              <span className="label">Professional · {natwest.org}</span>
              <span className="label">{natwest.period}</span>
            </div>
            <h3 id="natwest-title" className="h3">{natwest.title}</h3>
            <p className="muted">{natwest.summary}</p>
            <p className="muted">{natwest.secondary}</p>
            <div className="metric-row">
              {natwest.metrics.map((m) => (
                <div className="metric" key={m.label}>
                  <span className="num">{m.value}</span>
                  <p>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Zippyy */}
        <article className="feature" aria-labelledby="zippyy-title">
          <div className="feature-copy" data-reveal>
            <div className="kicker">
              <span className="label">Personal project · {zippyy.kicker}</span>
            </div>
            <h3 id="zippyy-title" className="h3">{zippyy.name}</h3>
            <p className="project-summary">{zippyy.oneLiner}</p>
            <p className="muted">{zippyy.problem}</p>
            <ul className="chips" aria-label="Stack">{zippyy.stack.map((s) => <li className="chip" key={s}>{s}</li>)}</ul>
            <div className="metric-row">
              {zippyy.outcomes.map((m) => (
                <div className="metric" key={m.label}><span className="num">{m.value}</span><p>{m.label}</p></div>
              ))}
            </div>
            <div className="project-cta">
              <Link className="btn btn-primary" href="/work/zippyy">Read the case study</Link>
              <a className="arrow-link" href={zippyy.repo} {...ext}>GitHub repository <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>

        {/* XTXT */}
        <article className="feature" aria-labelledby="xtxt-title">
          <div className="feature-copy" data-reveal>
            <div className="kicker"><span className="label">Personal project · {xtxt.kicker}</span></div>
            <h3 id="xtxt-title" className="h3">{xtxt.name}</h3>
            <p className="project-summary">{xtxt.oneLiner}</p>
            <p className="muted">{xtxt.problem}</p>
            <ul className="chips" aria-label="Languages">{xtxt.stack.map((s) => <li className="chip" key={s}>{s}</li>)}</ul>
            <div className="metric-row">
              {xtxt.outcomes.map((m) => (
                <div className="metric" key={m.label}><span className="num">{m.value}</span><p>{m.label}</p></div>
              ))}
            </div>
            <div className="project-cta">
              <Link className="btn btn-primary" href="/work/xtxt">Read the case study</Link>
              <a className="arrow-link" href={xtxt.repo} {...ext}>GitHub repository <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>

        {/* More */}
        <div className="feature" style={{ display: "block" }}>
          <p className="label" data-reveal>More builds on GitHub</p>
          <ul className="more-projects" style={{ listStyle: "none", padding: 0 }} data-reveal data-stagger>
            {moreProjects.map((p) => (
              <li className="more-project" key={p.name}>
                <h4>{p.name}</h4>
                <div style={{ display: "grid", gap: ".75rem" }}>
                  <p className="muted">{p.blurb}</p>
                  <ul className="chips" aria-label={`${p.name} stack`}>{p.stack.map((s) => <li className="chip" key={s}>{s}</li>)}</ul>
                </div>
                <a className="arrow-link" href={p.repo} {...ext} aria-label={`${p.name} on GitHub`}>
                  Repository <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section light" aria-labelledby="experience-title">
      <div className="wrap">
        <header className="section-head">
          <p className="label" data-reveal>02 — Experience</p>
          <h2 id="experience-title" className="h2" data-reveal="lines">Where the work happened.</h2>
          <p className="lede" data-reveal>
            Official title: {person.title}. Two internships before that, each with one result I can point to.
          </p>
        </header>
        <div style={{ position: "relative" }} data-scrub-root>
          <div className="timeline-line" aria-hidden="true"><i data-scrub-y /></div>
          <ol className="timeline">
            {experience.map((r) => (
              <li className="role" key={r.org}>
                <div data-reveal>
                  <p className="label">{r.period}</p>
                  <h3>{r.org}</h3>
                  <p className="muted">{r.role} · {r.place}</p>
                </div>
                <ul data-reveal>{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
                {r.highlight && (
                  <div className="hl" data-reveal>
                    <span className="num">{r.highlight.value}</span>
                    <p>{r.highlight.label}</p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div className="edu" data-reveal>
          <div>
            <p className="label">Education · {education.period}</p>
            <h3 className="h3" style={{ marginTop: ".5rem" }}>{education.school}</h3>
            <p className="muted">{education.degree}</p>
          </div>
          <div>
            <span className="num">{education.cgpa}</span>
            <p className="label">CGPA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OpenSource() {
  return (
    <section id="open-source" className="section" aria-labelledby="oss-title">
      <div className="wrap">
        <header className="section-head">
          <p className="label" data-reveal>03 — Open source</p>
          <h2 id="oss-title" className="h2" data-reveal="lines">
            Small fixes, <em>found the hard way.</em>
          </h2>
          <p className="lede" data-reveal>
            Concurrency bugs, caches that remembered failures, CI that couldn’t fail. Each one started with a reproduction.
          </p>
        </header>
        <ol className="oss-list">
          {contributions.map((c) => (
            <li className="oss" key={c.href} data-reveal>
              <div className="oss-ref">
                <span className="num">{c.ref.split(" · ").pop()}</span>
                <span className="repo">{c.repo}</span>
                <span className={`badge ${c.status.toLowerCase()}`} style={{ marginTop: ".9rem" }}>{c.status}</span>
              </div>
              <div>
                <h3>{c.headline}</h3>
                <a className="arrow-link" href={c.href} {...ext}>
                  {c.repo} {c.ref} on GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="bf">
                <p><strong>The bug</strong>{c.bug}</p>
                <p><strong>The fix</strong>{c.fix}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="oss-note muted">Statuses checked on GitHub on {site.verifiedOn}.</p>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="section light" aria-labelledby="caps-title" style={{ background: "var(--ivory-2)" }}>
      <div className="wrap">
        <header className="section-head">
          <p className="label" data-reveal>04 — What I build and explore</p>
          <h2 id="caps-title" className="h2" data-reveal="lines">Tools, grouped by the job they do.</h2>
        </header>
        <div className="caps">
          {capabilities.map((c) => (
            <div className="cap" key={c.title} data-reveal>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <ul className="chips" aria-label={`${c.title} tools`}>{c.tools.map((t) => <li className="chip" key={t}>{t}</li>)}</ul>
              <p className="evidence">{c.evidence}</p>
            </div>
          ))}
        </div>
        <div className="exploring">
          <p className="label" data-reveal>After hours</p>
          <p data-reveal="lines">{exploring}</p>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <>
      <section id="contact" className="contact" aria-labelledby="contact-title">
        <HarborWater />
        <div className="wrap">
          <p className="continues" data-reveal="words">Let’s build what comes next.</p>
          <div className="contact-grid">
            <div style={{ display: "grid", gap: "1.25rem" }} data-reveal>
              <h2 id="contact-title" className="h3">
                If you’re working on engineering problems, AI systems, or something worth building together — I’d like to hear about it.
              </h2>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={`mailto:${person.email}`}>Email me</a>
                <a className="btn btn-ghost" href={person.resume} download={person.resumeFilename}>
                  <DownloadIcon /> Download resume
                </a>
              </div>
            </div>
            <ul className="contact-links" data-reveal data-stagger>
              <li><a href={`mailto:${person.email}`}><span className="label">Email</span><span>{person.email}</span></a></li>
              <li><a href={person.github} {...ext}><span className="label">GitHub</span><span>SaiMouli3 ↗</span></a></li>
              <li><a href={person.linkedin} {...ext}><span className="label">LinkedIn</span><span>saimouli036 ↗</span></a></li>
              <li><a href={person.resume} download={person.resumeFilename}><span className="label">Resume</span><span>PDF ↓</span></a></li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {person.name} · {person.location}</span>
        <span>Applied AI · Backend engineering · Open source.</span>
      </div>
    </footer>
  );
}
