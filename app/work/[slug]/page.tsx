import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { person, projects } from "@/content/portfolio";
import { Footer } from "@/components/sections";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.name} case study`, description: p.oneLiner, alternates: { canonical: `/work/${p.slug}` } };
}

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const other = projects.find((x) => x.slug !== slug)!;

  return (
    <>
      <article>
        <header className="case-hero wrap" style={{ display: "grid", gap: "1.5rem" }}>
          <Link href="/#work" className="arrow-link label" style={{ width: "fit-content" }}>
            <span aria-hidden="true">←</span> All work
          </Link>
          <p className="label" data-reveal data-immediate>Personal project · {p.kicker}</p>
          <h1 className="display" data-reveal="lines" data-immediate>{p.name}</h1>
          <p className="lede" style={{ maxWidth: "52ch" }} data-reveal data-immediate>{p.oneLiner}</p>
          <div className="project-cta" data-reveal data-immediate>
            <a className="btn btn-primary" href={p.repo} {...ext}>View on GitHub <span aria-hidden="true">↗</span></a>
            {p.extraLinks?.map((l) => (
              <a key={l.href} className="arrow-link" href={l.href} {...ext}>{l.label} <span aria-hidden="true">↗</span></a>
            ))}
          </div>
        </header>

        <div className="wrap" style={{ paddingBottom: "clamp(5rem, 10vw, 9rem)" }}>
          <div className="case-grid">
            <aside className="case-aside">
              <div>
                <p className="label">Stack</p>
                <ul className="chips" style={{ marginTop: ".75rem" }}>{p.stack.map((s) => <li className="chip" key={s}>{s}</li>)}</ul>
              </div>
              {p.outcomes.map((m) => (
                <div className="metric" key={m.label}>
                  <span className="num">{m.value}</span>
                  <p>{m.label}</p>
                </div>
              ))}
            </aside>

            <div className="case-body">
              <section aria-labelledby="problem">
                <p className="label">01 — Problem</p>
                <h2 id="problem" className="h3" data-reveal>{p.problem}</h2>
              </section>

              <section aria-labelledby="approach">
                <p className="label">02 — Approach</p>
                <h2 id="approach" className="sr-only">Approach</h2>
                <ol data-reveal>{p.approach.map((a) => <li key={a}>{a}</li>)}</ol>
              </section>

              <section aria-labelledby="decisions">
                <p className="label">03 — Design decisions</p>
                <h2 id="decisions" className="sr-only">Design decisions</h2>
                <div className="decisions" data-reveal data-stagger>
                  {p.decisions.map((d) => (
                    <div key={d.title}><h3>{d.title}</h3><p>{d.body}</p></div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="outcome">
                <p className="label">04 — Where it stands</p>
                <h2 id="outcome" className="sr-only">Outcome</h2>
                <ul data-reveal>
                  {p.outcomes.map((m) => <li key={m.label}><strong style={{ color: "var(--ivory)" }}>{m.value}</strong> {m.label}</li>)}
                </ul>
                <p className="muted" style={{ fontSize: ".85rem" }}>{p.note} Figures are as reported on the resume ({person.shortName}, 2026), not live measurements.</p>
              </section>

              <nav aria-label="Next case study" style={{ borderTop: "1px solid var(--line)", paddingTop: "2rem" }}>
                <p className="label">Next</p>
                <Link href={`/work/${other.slug}`} className="h2" style={{ textDecoration: "none", display: "inline-block", marginTop: ".5rem" }}>
                  {other.name} <span aria-hidden="true">→</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
