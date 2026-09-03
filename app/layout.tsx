import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_TITLE = "Arenibus – Nefrologický a dialyzačný informačný systém";
const SITE_DESCRIPTION =
  "Moderný .NET systém pre nefrologickú ambulanciu a dialýzu (HD, PD) s registrami, vykazovaním poisťovniam a integráciou na ezdravotníctvo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://arenibus.polascin.net"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Arenibus",
    "nefrologický informačný systém",
    "dialyzačný informačný systém",
    "dialyzačné stredisko",
    "hemodialýza",
    "peritoneálna dialýza",
    "vykazovanie poisťovniam",
    "ezdravotníctvo",
    "MVP",
    "nefrologická ambulancia",
  ],
  authors: [{ name: "MUDr. Ľubomír Polaščín" }],
  creator: "MUDr. Ľubomír Polaščín",
  publisher: "MUDr. Ľubomír Polaščín",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://arenibus.polascin.net/",
    siteName: "Arenibus",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arenibus – nefrologický a dialyzačný informačný systém",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1f1a" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Arenibus",
  description: SITE_DESCRIPTION,
  url: "https://arenibus.polascin.net/",
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  isAccessibleForFree: true,
  provider: {
    "@type": "Person",
    name: "MUDr. Ľubomír Polaščín",
  },
  sameAs: ["https://demo.arenibus.com/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var m=localStorage.getItem("darkMode");if(m!==null)document.documentElement.setAttribute("data-theme",m==="true"?"dark":"light")}catch(e){}',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
