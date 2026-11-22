import Image from "next/image";
import { person } from "@/content/portfolio";

export default function Hero() {
  return (
    <section className="coast-hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
      <div className="coast-intro">
        <p className="label" data-reveal data-immediate>Bengaluru, India · A portfolio of ideas & engineering</p>
        <h1 id="hero-title" data-reveal="lines" data-immediate>A curious mind.<br />A world of <em>possibilities.</em></h1>
        <p className="coast-description" data-reveal data-immediate>I’m Sai Mouli. I build thoughtful AI systems and reliable backends — turning a little curiosity into things that work.</p>
        <div className="hero-ctas" data-reveal data-stagger data-immediate>
          <a className="btn btn-primary" href="#work">Discover my work <span aria-hidden="true">↗</span></a>
          <a className="arrow-link" href="#journey">The story so far <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <figure className="hero-portrait" data-portrait>
        <Image
          src="/portraits/sai-mouli-editorial.png"
          alt="Portrait of Sai Mouli in a navy blazer and cream shirt, smiling, against a warm beige wall."
          width={1122}
          height={1402}
          priority
          sizes="(min-width: 900px) 34vw, 80vw"
        />
        <figcaption>Sai Mouli <span>Applied AI & backend engineer</span></figcaption>
      </figure>
      </div>
      <div className="wrap coast-caption" data-reveal data-immediate><span>Applied AI · Backend engineering · Open source</span><a href={person.github} target="_blank" rel="noopener noreferrer">Made with curiosity ↗</a></div>
    </section>
  );
}
