import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arenibus.polascin.net"),
  title: "Arenibus - Nefrologický Informačný Systém",
  description:
    "Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko, integrovaný s ezdravotníctvom. Spravujte pacientov, návštevy, dialyzačný predpis a laboratórne výsledky efektívne s Arenibus.",
  keywords: [
    "Arenibus",
    "nefrologický informačný systém",
    "dialyzačné stredisko",
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
    title: "Arenibus - Nefrologický Informačný Systém",
    description:
      "Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko, integrovaný s ezdravotníctvom.",
    images: [
      {
        url: "/ArenibusLogo.png",
        width: 1200,
        height: 630,
        alt: "Arenibus logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenibus - Nefrologický Informačný Systém",
    description:
      "Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko, integrovaný s ezdravotníctvom.",
    images: ["/ArenibusLogo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/ArenibusLogo.png",
  },
};

export const viewport: Viewport = {
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
    <html lang="sk" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
