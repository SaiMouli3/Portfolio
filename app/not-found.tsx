import Link from "next/link";

export default function NotFound() {
  return (
    <section className="case-hero wrap" style={{ minHeight: "70vh", display: "grid", gap: "1.5rem", alignContent: "center" }}>
      <p className="label">404</p>
      <h1 className="display">This chapter hasn’t been written.</h1>
      <Link className="btn btn-primary" href="/" style={{ width: "fit-content" }}>Back to the story</Link>
    </section>
  );
}
