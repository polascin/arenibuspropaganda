import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arenibus.polascin.net"),
  title: "Arenibus – Nefrologický a dialyzačný informačný systém",
  description:
    "Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko (hemodialýza a peritoneálna dialýza), integrovaný s ezdravotníctvom.",
  keywords: [
    "Arenibus",
    "nefrologický informačný systém",
    "dialyzačný informačný systém",
    "dialyzačné stredisko",
    "hemodialýza",
    "peritoneálna dialýza",
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
    title: "Arenibus – Nefrologický a dialyzačný informačný systém",
    description:
      "Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko (hemodialýza a peritoneálna dialýza), integrovaný s ezdravotníctvom.",
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
    title: "Arenibus – Nefrologický a dialyzačný informačný systém",
    description:
      "Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko (hemodialýza a peritoneálna dialýza), integrovaný s ezdravotníctvom.",
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
  description:
    "Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko, integrovaný s ezdravotníctvom.",
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
