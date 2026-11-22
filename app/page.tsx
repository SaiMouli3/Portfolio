import Hero from "@/components/hero";
import { Capabilities, Contact, Experience, OpenSource, Work } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="journey" className="section light">
        <div className="wrap">
          <p className="label" data-reveal>About</p>
          <h2 className="h2" data-reveal="lines">Curiosity, put into practice.</h2>
          <p className="lede" style={{ marginTop: "1.5rem", maxWidth: "60ch" }} data-reveal>I’m an applied AI and backend engineer in Bengaluru. I build reliable systems, contribute to open source, and explore practical ways to turn ideas into useful software.</p>
        </div>
      </section>
      <Work />
      <Experience />
      <OpenSource />
      <Capabilities />
      <Contact />
    </>
  );
}
