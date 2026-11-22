"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { nav, person } from "@/content/portfolio";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 600);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section in view (home page only).
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = nav.map((n) => n.href.split("#")[1]);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`nav${scrolled || open ? " is-scrolled" : ""}${hidden && !open ? " is-hidden" : ""}`}>
        <div className="wrap nav-inner">
          <Link href="/" className="wordmark" aria-label="Sai Mouli, home">
            Sai Mouli<i>.</i>
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} aria-current={active === n.href.split("#")[1] ? "true" : undefined}>
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a className="nav-resume" href={person.resume} download={person.resumeFilename}>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <button
            ref={btnRef}
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="bars" aria-hidden="true" />
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <div id="mobile-menu" ref={menuRef} className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={close} style={{ display: "block" }}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary" href={person.resume} download={person.resumeFilename} onClick={close}>
          Download resume
        </a>
      </div>
    </>
  );
}
