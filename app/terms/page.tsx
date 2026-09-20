import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../breadcrumbs";
import SiteFooter from "../site-footer";
import ThemeToggle from "../theme-toggle";

const TERMS_TITLE = "Podmienky používania – Arenibus";
const TERMS_DESCRIPTION =
  "Podmienky používania stránky a demo verzie Arenibus – stav vývoja, vylúčenie záruk, duševné vlastníctvo a rozhodné právo.";

const termsBreadcrumbLd = {
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
      name: "Podmienky používania",
      item: "https://arenibus.polascin.net/terms/",
    },
  ],
};

export const metadata: Metadata = {
  title: TERMS_TITLE,
  description: TERMS_DESCRIPTION,
  alternates: {
    canonical: "/terms/",
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "/terms/",
    siteName: "Arenibus",
    title: TERMS_TITLE,
    description: TERMS_DESCRIPTION,
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
    title: TERMS_TITLE,
    description: TERMS_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
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
      {/* Navigation */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsBreadcrumbLd) }}
      />

      {/* Content */}
      <main id="main-content" className="flex-1 py-16 px-4 bg-surface">
        <article className="max-w-4xl mx-auto">
          <Breadcrumbs currentLabel="Podmienky používania" />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Podmienky používania
          </h1>
          <p className="text-muted text-sm mb-10">Účinné od 25. augusta 2026</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">1. Úvodné ustanovenia</h2>
              <p className="text-foreground-2">
                Túto webovú stránku (arenibus.polascin.net) prevádzkuje MUDr. Ľubomír Polaščín –
                Nephroctor (ďalej len „prevádzkovateľ“). Stránka slúži na prezentáciu nefrologického
                informačného systému Arenibus a jeho demo verzie. Používaním stránky vyjadrujete súhlas
                s týmito podmienkami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">2. Stav vývoja a demo verzia</h2>
              <p className="text-foreground-2 mb-3">
                Systém Arenibus je vo fáze aktívneho vývoja (MVP — minimálny životaschopný produkt).
                Demo verzia dostupná na{" "}
                <a
                  href="https://demo.arenibus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-strong transition-colors"
                >
                  demo.arenibus.com
                </a>{" "}
                slúži výlučne na prezentačné účely. Prevádzkovateľ neposkytuje žiadne záruky týkajúce sa
                jej funkčnosti, presnosti ani dostupnosti; demo verzia sa môže kedykoľvek zmeniť alebo byť
                dočasne či trvalo nedostupná.
              </p>
              <p className="text-foreground-2">
                Demo verzia obsahuje výlučne fiktívne dáta, ktoré sa pravidelne obnovujú. Do demo verzie
                nevkladajte skutočné osobné ani zdravotné údaje.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">3. Žiadne zdravotné poradenstvo</h2>
              <p className="text-foreground-2">
                Systém Arenibus je nástroj určený pre zdravotníckych pracovníkov. Obsah tejto webovej
                stránky ani demo verzie nepredstavuje zdravotné poradenstvo a má výlučne informačný
                charakter. Nie je náhradou odbornej zdravotnej starostlivosti, diagnostiky ani liečby —
                v zdravotných otázkach sa vždy obráťte na lekára alebo iného kvalifikovaného
                zdravotníckeho pracovníka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">4. Duševné vlastníctvo</h2>
              <p className="text-foreground-2">
                Obsah tejto webovej stránky — najmä texty, grafika, logo Arenibus a softvér — je chránený
                autorským právom a ďalšími právami duševného vlastníctva prevádzkovateľa. Akékoľvek
                kopírovanie, rozširovanie alebo iné použitie obsahu nad rámec bežného prezerania stránky
                je bez predchádzajúceho písomného súhlasu prevádzkovateľa zakázané.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">5. Obmedzenie zodpovednosti</h2>
              <p className="text-foreground-2">
                Webová stránka aj demo verzia sa poskytujú v stave, v akom sú („as is“), bez akýchkoľvek
                záruk. Prevádzkovateľ nezodpovedá, v rozsahu prípustnom právnymi predpismi, za žiadnu
                škodu vzniknutú v súvislosti s používaním alebo nedostupnosťou tejto stránky či demo
                verzie, ani za správnosť a úplnosť zverejnených informácií.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">6. Rozhodné právo</h2>
              <p className="text-foreground-2">
                Tieto podmienky a všetky právne vzťahy vzniknuté v súvislosti s používaním tejto webovej
                stránky sa spravujú právnym poriadkom Slovenskej republiky. Na riešenie prípadných sporov
                sú príslušné súdy Slovenskej republiky.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">7. Záverečné ustanovenia</h2>
              <p className="text-foreground-2 mb-3">
                Prevádzkovateľ môže tieto podmienky kedykoľvek zmeniť; aktuálne znenie je vždy zverejnené
                na tejto stránke. Informácie o spracúvaní osobných údajov nájdete v dokumente{" "}
                <Link href="/privacy/" className="text-brand hover:text-brand-strong transition-colors">
                  Zásady ochrany osobných údajov
                </Link>
                .
              </p>
              <p className="text-foreground-2">
                V prípade otázok nás kontaktujte e-mailom na{" "}
                <a href="mailto:arenibus@polascin.net" className="text-brand hover:text-brand-strong transition-colors">
                  arenibus@polascin.net
                </a>
                . Tieto podmienky sú účinné od 25. augusta 2026.
              </p>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter current="terms" />
    </div>
    </>
  );
}
