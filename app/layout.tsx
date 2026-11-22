import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { person, site } from "@/content/portfolio";
import Navigation from "@/components/navigation";
import Motion from "@/components/motion";
import "./globals.css";

const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const description =
  "Sai Mouli is an applied AI and backend engineer in Bengaluru — Software Engineer at NatWest Group — building reliable systems and practical AI tools.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Sai Mouli — Applied AI & Backend Engineer", template: "%s — Sai Mouli" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Sai Mouli — The Making of an Engineer",
    description,
  },
  twitter: { card: "summary", title: "Sai Mouli — Applied AI & Backend Engineer", description },
};

export const viewport: Viewport = { themeColor: "#f4eedf", colorScheme: "light" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  alternateName: person.shortName,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "NatWest Group" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Ramaiah Institute of Technology" },
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  email: `mailto:${person.email}`,
  url: site.url,
  sameAs: [person.github, person.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Content is hidden for reveal only once JS runs and motion is allowed; a 4 s failsafe shows it regardless. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-motion');setTimeout(function(){document.documentElement.classList.add('motion-failsafe')},4000)",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Navigation />
        <main id="main" tabIndex={-1}>{children}</main>
        <Motion />
      </body>
    </html>
  );
}
