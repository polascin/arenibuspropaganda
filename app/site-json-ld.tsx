import { DEMO_VERSION_PLAIN, SITE_DESCRIPTION } from "@/lib/site";

const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Arenibus",
  description: SITE_DESCRIPTION,
  url: "https://arenibus.polascin.net/",
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  softwareVersion: DEMO_VERSION_PLAIN,
  inLanguage: "sk",
  // Square brand mark — not the 1200×630 Open Graph card.
  logo: "https://arenibus.polascin.net/icon-512.png",
  image: {
    "@type": "ImageObject",
    url: "https://arenibus.polascin.net/og-image.png",
    width: 1200,
    height: 630,
  },
  featureList: [
    "Správa pacientov",
    "Evidencia návštev",
    "Hemodialýza a predpis",
    "Peritoneálna dialýza",
    "Kalendár a harmonogram",
    "Laboratórne výsledky",
    "Moje zoznamy a štatistiky",
    "Vykazovanie poisťovniam",
    "Prevádzka dialýzy",
    "Audit a bezpečnosť",
  ],
  // No offers / isAccessibleForFree: demo access is on request, not a free product listing.
  provider: {
    "@type": "Person",
    name: "MUDr. Ľubomír Polaščín",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arenibus",
  url: "https://arenibus.polascin.net/",
  inLanguage: "sk",
  description: SITE_DESCRIPTION,
  publisher: {
    "@type": "Person",
    name: "MUDr. Ľubomír Polaščín",
  },
};

/** Homepage-only SoftwareApplication + WebSite nodes (not legal/404 routes). */
export default function SiteJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
    </>
  );
}
