import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../breadcrumbs";
import SiteFooter from "../site-footer";
import ThemeToggle from "../theme-toggle";

const SECURITY_TITLE = "Bezpečnostný kontakt – Arenibus";
const SECURITY_DESCRIPTION =
  "Kontakt na hlásenie bezpečnostných zistení na webe Arenibus. Správy posielajte na arenibus@polascin.net.";

const securityBreadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Arenibus",
      item: "https://arenibus.polascin.net/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bezpečnostný kontakt",
      item: "https://arenibus.polascin.net/security/",
    },
  ],
};

export const metadata: Metadata = {
  title: SECURITY_TITLE,
  description: SECURITY_DESCRIPTION,
  alternates: {
    canonical: "/security/",
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "/security/",
    siteName: "Arenibus",
    title: SECURITY_TITLE,
    description: SECURITY_DESCRIPTION,
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
    title: SECURITY_TITLE,
    description: SECURITY_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function SecurityPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-brand-text focus:rounded-lg"
      >
        Preskočiť na hlavný obsah
      </a>
      <div className="flex flex-col min-h-screen bg-background">
        <header className="sticky top-0 z-50">
          <nav className="w-full bg-surface/80 backdrop-blur-sm border-b border-border" aria-label="Hlavná navigácia">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden shadow-sm relative">
                    <Image
                      src="/logo-96.webp"
                      alt="Arenibus logo"
                      fill
                      className="object-cover"
                      sizes="40px"
                      draggable={false}
                      priority
                    />
                  </div>
                  <p className="text-2xl font-bold text-brand-strong">Arenibus</p>
                </Link>
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <Link href="/" className="text-foreground-2 hover:text-brand transition-colors">
                    Späť na úvod
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(securityBreadcrumbLd) }}
        />

        <main id="main-content" className="flex-1 py-16 px-4 bg-surface">
          <article className="max-w-4xl mx-auto">
            <Breadcrumbs currentLabel="Bezpečnostný kontakt" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bezpečnostný kontakt
            </h1>
            <p className="text-muted text-sm mb-10">Aktualizované 20. septembra 2026</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Hlásenie zistení</h2>
                <p className="text-foreground-2 mb-3">
                  Ak nájdete bezpečnostnú chybu na tejto marketingovej stránke, napíšte na{" "}
                  <a href="mailto:arenibus@polascin.net" className="text-brand hover:text-brand-strong transition-colors">
                    arenibus@polascin.net
                  </a>
                  . Preferované jazyky sú slovenčina a angličtina.
                </p>
                <p className="text-foreground-2">
                  Táto stránka je verejný bezpečnostný kontakt pre arenibus.polascin.net.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Rozsah</h2>
                <p className="text-foreground-2">
                  Týka sa webu arenibus.polascin.net. Demo na demo.arenibus.com má vlastné spracúvanie údajov.
                  Informácie o osobných údajoch sú v dokumente{" "}
                  <Link href="/privacy/" className="text-brand hover:text-brand-strong transition-colors">
                    Zásady ochrany osobných údajov
                  </Link>
                  .
                </p>
              </section>
            </div>
          </article>
        </main>

        <SiteFooter current="security" />
      </div>
    </>
  );
}
