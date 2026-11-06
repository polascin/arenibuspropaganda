import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Source_Sans_3 } from "next/font/google";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";
import { THEME_BOOTSTRAP_SCRIPT } from "@/lib/theme-bootstrap";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arenibus.polascin.net"),
  applicationName: "Arenibus",
  category: "healthcare",
  formatDetection: {
    telephone: false,
  },
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
  // Homepage-only canonical / openGraph.url live on app/page.tsx so legal and
  // 404 routes do not inherit a self-referencing home URL by default.
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: "Arenibus",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arenibus: nefrologický a dialyzačný informačný systém",
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
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1f1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${sourceSans.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_BOOTSTRAP_SCRIPT,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}
        <Script src="/clarity-consent.js?v=20261105c" strategy="afterInteractive" data-project="z6sz54ayk0" data-paths="/,/privacy/,/terms/,/security/" data-privacy="/privacy/" />
      </body>
    </html>
  );
}
