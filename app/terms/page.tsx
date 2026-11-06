import type { Metadata } from "next";
import Link from "next/link";
import { SITE_OG_IMAGE } from "@/lib/site";
import Breadcrumbs from "../breadcrumbs";
import { proseLinkClass } from "../link-styles";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import SkipLink from "../skip-link";

const TERMS_TITLE = "Podmienky používania: Arenibus";
const TERMS_DESCRIPTION =
  "Podmienky používania stránky a demo verzie Arenibus: stav vývoja, vylúčenie záruk, duševné vlastníctvo a rozhodné právo.";

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
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TERMS_TITLE,
    description: TERMS_DESCRIPTION,
    images: [SITE_OG_IMAGE.url],
  },
};

export default function TermsPage() {
  return (
    <>
      <SkipLink />
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader variant="subpage" />

      {/* Content */}
      <main id="main-content" className="flex-1 py-16 md:py-20 px-4 sm:px-6 section-soft">
        <article className="legal-prose max-w-3xl mx-auto">
          <Breadcrumbs currentLabel="Podmienky používania" currentPath="/terms/" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Podmienky používania
          </h1>
          <p className="text-muted text-sm mb-8">Účinné od 3. októbra 2026</p>

          <div className="bg-surface-2 p-6 rounded-lg border border-border mb-12">
            <p className="text-foreground font-semibold mb-2">Rozsah týchto podmienok</p>
            <p className="text-foreground-2">
              Tieto podmienky rozlišujú dve prostredia:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground-2 mt-3">
              <li>
                <span className="font-semibold text-foreground">marketingovú webovú stránku</span>{" "}
                arenibus.polascin.net: platia články 1 až 7,
              </li>
              <li>
                <span className="font-semibold text-foreground">demo prostredie</span>{" "}
                <a
                  href="https://demo.arenibus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={proseLinkClass}
                >
                  demo.arenibus.com
                  <span className="sr-only"> (otvorí sa v novom okne)</span>
                </a>
                : platia články 2, 3, 4, 5 a 6. Článok 7 (zmeny podmienok a kontakt) platí aj pre ne.
              </li>
            </ul>
            <p className="text-foreground-2 mt-3">
              Článok 1 opisuje prevádzkovateľa a webovú stránku. Používaním demo prostredia vyjadrujete
              súhlas s článkami, ktoré sa naň podľa tohto rozsahu vzťahujú.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Úvodné ustanovenia</h2>
              <p className="text-foreground-2">
                Túto webovú stránku (arenibus.polascin.net) prevádzkuje MUDr. Ľubomír Polaščín,
                Nephroctor (ďalej len „prevádzkovateľ“). Stránka slúži na prezentáciu nefrologického
                informačného systému Arenibus a jeho demo verzie. Používaním stránky vyjadrujete súhlas
                s článkami 1 až 7.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">2. Stav vývoja a demo verzia</h2>
              <p className="text-foreground-2 mb-3">
                Tento článok platí pre demo prostredie. Systém Arenibus je vo fáze aktívneho vývoja
                (MVP: minimálny životaschopný produkt). Demo verzia dostupná na{" "}
                <a
                  href="https://demo.arenibus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={proseLinkClass}
                >
                  demo.arenibus.com
                  <span className="sr-only"> (otvorí sa v novom okne)</span>
                </a>{" "}
                slúži výlučne na prezentačné účely. Prevádzkovateľ neposkytuje žiadne záruky týkajúce sa
                jej funkčnosti, presnosti ani dostupnosti; demo verzia sa môže kedykoľvek zmeniť alebo byť
                dočasne či trvalo nedostupná.
              </p>
              <p className="text-foreground-2 mb-3">
                Demo verzia obsahuje výlučne fiktívne dáta. Nezadávajte do nej{" "}
                <span className="font-semibold text-foreground">
                  žiadne skutočné údaje o pacientoch ani iné skutočné osobné údaje
                </span>
                .
              </p>
              <p className="text-foreground-2 mb-3">
                Databáza demo aplikácie sa každú noc o 03:00 (čas Európa/Bratislava){" "}
                <span className="font-semibold text-foreground">obnoví zo vzorovej snímky</span>{" "}
                fiktívnych dát a termíny sa posunú na aktuálne dni. Čokoľvek, čo návštevníci počas dňa
                v demo zadali alebo zmenili, je tým prepísané obsahom snímky: vrátane záznamov auditu
                vytvorených počas dňa. Demo preto nie je dôkazný ani archívny systém.
              </p>
              <p className="text-foreground-2 mb-3">
                Táto obnova{" "}
                <span className="font-semibold text-foreground">
                  nie je mazaním prihlasovacích kont ani prevádzkových logov
                </span>
                : prihlasovacie kontá a ich databáza sa neobnovujú a zostávajú zachované, technické logy
                služieb sa zahadzujú až rotáciou a log samotnej nočnej obnovy zostáva na serveri.
              </p>
              <p className="text-foreground-2">
                Spracúvanie údajov v deme opisuje{" "}
                <Link href="/privacy/#demo" className={proseLinkClass}>
                  článok 7 zásad ochrany osobných údajov
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">3. Žiadne zdravotné poradenstvo</h2>
              <p className="text-foreground-2">
                Tento článok platí pre webovú stránku aj pre demo prostredie. Systém Arenibus je nástroj
                určený pre zdravotníckych pracovníkov. Obsah tejto webovej
                stránky ani demo verzie nepredstavuje zdravotné poradenstvo a má výlučne informačný
                charakter. Nie je náhradou odbornej zdravotnej starostlivosti, diagnostiky ani liečby.
                V zdravotných otázkach sa vždy obráťte na lekára alebo iného kvalifikovaného
                zdravotníckeho pracovníka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">4. Duševné vlastníctvo</h2>
              <p className="text-foreground-2">
                Tento článok platí pre webovú stránku aj pre softvér sprístupnený v demo prostredí.
                Obsah tejto webovej stránky (najmä texty, grafika a logo Arenibus) aj softvér systému
                Arenibus vrátane demo prostredia sú chránené autorským právom a ďalšími právami duševného
                vlastníctva prevádzkovateľa. Akékoľvek kopírovanie, rozširovanie alebo iné použitie nad
                rámec bežného prezerania stránky a používania dema podľa týchto podmienok je bez
                predchádzajúceho písomného súhlasu prevádzkovateľa zakázané.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">5. Obmedzenie zodpovednosti</h2>
              <p className="text-foreground-2">
                Tento článok platí pre webovú stránku aj pre demo prostredie. Webová stránka aj demo
                verzia sa poskytujú v stave, v akom sú („as is“), bez akýchkoľvek
                záruk. Prevádzkovateľ nezodpovedá, v rozsahu prípustnom právnymi predpismi, za žiadnu
                škodu vzniknutú v súvislosti s používaním alebo nedostupnosťou tejto stránky či demo
                verzie, ani za správnosť a úplnosť zverejnených informácií.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">6. Rozhodné právo</h2>
              <p className="text-foreground-2">
                Tento článok platí pre webovú stránku aj pre demo prostredie. Tieto podmienky a všetky
                právne vzťahy vzniknuté v súvislosti s používaním tejto webovej stránky alebo demo
                prostredia sa spravujú právnym poriadkom Slovenskej republiky. Na riešenie prípadných
                sporov sú príslušné súdy Slovenskej republiky.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">7. Záverečné ustanovenia</h2>
              <p className="text-foreground-2 mb-3">
                Tento článok platí pre celé znenie, vrátane článkov, ktoré sa vzťahujú na demo prostredie.
                Prevádzkovateľ môže tieto podmienky kedykoľvek zmeniť; aktuálne znenie je vždy zverejnené
                na tejto stránke. Informácie o spracúvaní osobných údajov nájdete v dokumente{" "}
                <Link href="/privacy/" className={proseLinkClass}>
                  Zásady ochrany osobných údajov
                </Link>
                .
              </p>
              <p className="text-foreground-2">
                V prípade otázok nás kontaktujte e-mailom na{" "}
                <a href="mailto:arenibus@polascin.net" className={proseLinkClass}>
                  arenibus@polascin.net
                </a>
                . Tieto podmienky sú účinné od 3. októbra 2026.
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
