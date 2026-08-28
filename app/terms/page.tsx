import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const TERMS_DESCRIPTION =
  "Podmienky používania stránky a demo verzie Arenibus – stav vývoja, vylúčenie záruk, duševné vlastníctvo a rozhodné právo.";

export const metadata: Metadata = {
  title: "Podmienky používania – Arenibus",
  description: TERMS_DESCRIPTION,
  alternates: {
    canonical: "/terms/",
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "/terms/",
    siteName: "Arenibus",
    title: "Podmienky používania – Arenibus",
    description: TERMS_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arenibus logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podmienky používania – Arenibus",
    description: TERMS_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full bg-surface/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
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
            <Link href="/" className="text-foreground-2 hover:text-brand transition-colors">
              Späť na úvod
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 py-16 px-4 bg-surface">
        <article className="max-w-4xl mx-auto">
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

      {/* Footer */}
      <footer className="bg-surface-3 text-foreground py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground-2">
            Arenibus © 2026 Ľubomír Polaščín
          </p>
          <p className="text-muted mt-2 text-sm">
            MUDr. Ľubomír Polaščín — Nephroctor
          </p>
          <p className="text-muted mt-1 text-sm">
            IČO 57646856
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link href="/privacy/" className="text-muted hover:text-brand transition-colors">
              Ochrana osobných údajov
            </Link>
            <Link href="/terms/" className="text-muted hover:text-brand transition-colors">
              Podmienky používania
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
