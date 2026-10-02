import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../breadcrumbs";
import SiteFooter from "../site-footer";
import ThemeToggle from "../theme-toggle";

const PRIVACY_TITLE = "Zásady ochrany osobných údajov – Arenibus";
const PRIVACY_DESCRIPTION =
  "Ako spracúvame osobné údaje na stránke Arenibus a v demo prostredí demo.arenibus.com – prevádzkovateľ, účely, právne základy, uchovávanie a vaše práva.";

const privacyBreadcrumbLd = {
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
      name: "Ochrana osobných údajov",
      item: "https://arenibus.polascin.net/privacy/",
    },
  ],
};

export const metadata: Metadata = {
  title: PRIVACY_TITLE,
  description: PRIVACY_DESCRIPTION,
  alternates: {
    canonical: "/privacy/",
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "/privacy/",
    siteName: "Arenibus",
    title: PRIVACY_TITLE,
    description: PRIVACY_DESCRIPTION,
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
    title: PRIVACY_TITLE,
    description: PRIVACY_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function PrivacyPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyBreadcrumbLd) }}
      />

      {/* Content */}
      <main id="main-content" className="flex-1 py-16 px-4 bg-surface">
        <article className="max-w-4xl mx-auto">
          <Breadcrumbs currentLabel="Ochrana osobných údajov" />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zásady ochrany osobných údajov
          </h1>
          <p className="text-muted text-sm mb-6">Účinné od 2. októbra 2026</p>

          <div className="bg-surface-2 p-6 rounded-lg border border-border mb-10">
            <p className="text-foreground font-semibold mb-2">Rozsah týchto zásad</p>
            <p className="text-foreground-2">
              Tieto zásady pokrývajú dve samostatné prostredia s odlišným spracúvaním údajov:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground-2 mt-3">
              <li>
                <span className="font-semibold text-foreground">marketingovú webovú stránku</span>{" "}
                arenibus.polascin.net — články 1 až 6 nižšie,
              </li>
              <li>
                <span className="font-semibold text-foreground">demo prostredie</span>{" "}
                <a
                  href="https://demo.arenibus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-strong transition-colors"
                >
                  demo.arenibus.com
                </a>{" "}
                — samostatný{" "}
                <a href="#demo" className="text-brand hover:text-brand-strong transition-colors">
                  článok 7
                </a>
                , ktorý platí výhradne preň.
              </li>
            </ul>
            <p className="text-foreground-2 mt-3">
              Demo prostredie beží na inej doméne, inom serveri a s vlastným prihlasovaním, preto sa
              naň články 1 až 6 nevzťahujú — platí pre neho článok 7. Prevádzkovateľ je pre obidve
              prostredia ten istý (článok 1).
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">1. Prevádzkovateľ</h2>
              <p className="text-foreground-2 mb-3">
                Prevádzkovateľom osobných údajov spracúvaných prostredníctvom tejto webovej stránky
                (arenibus.polascin.net) je:
              </p>
              <div className="bg-surface-2 p-6 rounded-lg border border-border">
                <p className="text-foreground font-semibold">MUDr. Ľubomír Polaščín – Nephroctor</p>
                <p className="text-foreground-2 mt-1">IČO: 57 646 856</p>
                <p className="text-foreground-2 mt-1">
                  E-mail:{" "}
                  <a href="mailto:arenibus@polascin.net" className="text-brand hover:text-brand-strong transition-colors">
                    arenibus@polascin.net
                  </a>
                </p>
                <p className="text-foreground-2 mt-1">
                  Demo prístup:{" "}
                  <a href="mailto:arenibus@nephroctor.com" className="text-brand hover:text-brand-strong transition-colors">
                    arenibus@nephroctor.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                2. Aké údaje spracúvame na webovej stránke
              </h2>
              <p className="text-foreground-2 mb-3">
                Túto webovú stránku si môžete prezerať bez toho, aby ste nám poskytli akékoľvek osobné
                údaje. Osobné údaje spracúvame iba vtedy, ak nás sami kontaktujete:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground-2">
                <li>
                  <span className="font-semibold text-foreground">Kontaktný formulár</span> — meno,
                  e-mailová adresa a text vašej správy.
                </li>
                <li>
                  <span className="font-semibold text-foreground">E-mailová korešpondencia</span> — údaje,
                  ktoré nám sami zašlete e-mailom na adresu arenibus@polascin.net
                  alebo arenibus@nephroctor.com (žiadosti o prístup do demo prostredia).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">3. Účel a právny základ spracúvania</h2>
              <p className="text-foreground-2 mb-3">
                Údaje z kontaktného formulára a e-mailovej korešpondencie spracúvame na účely odpovedania
                na váš dopyt a komunikácie o systéme Arenibus. Právnym základom je:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground-2">
                <li>
                  čl. 6 ods. 1 písm. b) GDPR — vykonanie opatrení pred uzatvorením zmluvy na vašu
                  žiadosť (predzmluvné vzťahy),
                </li>
                <li>
                  čl. 6 ods. 1 písm. f) GDPR — náš oprávnený záujem odpovedať na doručené dopyty a viesť
                  s vami komunikáciu.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">4. Doba uchovávania</h2>
              <p className="text-foreground-2">
                Údaje uchovávame po dobu vybavenia vášho dopytu a následne najviac 3 roky od ukončenia
                komunikácie, pokiaľ z osobitných predpisov nevyplýva iná lehota. Po uplynutí tejto doby
                údaje vymažeme.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                5. Cookies a analytika na webovej stránke
              </h2>
              <p className="text-foreground-2">
                Táto webová stránka nepoužíva cookies ani žiadne analytické či marketingové nástroje.
                Jedinou informáciou, ktorú si váš prehliadač ukladá (localStorage), je vaša voľba svetlého
                alebo tmavého režimu zobrazenia — tá zostáva len vo vašom prehliadači a nikam sa neodosiela.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">6. Príjemcovia a sprostredkovatelia</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground-2">
                <li>
                  <span className="font-semibold text-foreground">Hosting</span> — webovú stránku
                  prevádzkuje spoločnosť Websupport, s.r.o. (Slovenská republika), pričom servery sa
                  nachádzajú v Európskej únii.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Kontaktný formulár</span> — správy
                  z formulára technicky doručuje služba Formspree (Formspree, Inc., USA); prípadný prenos
                  údajov do tretej krajiny je zabezpečený zárukami podľa kapitoly V GDPR (rámec EÚ–USA na
                  ochranu údajov, resp. štandardné zmluvné doložky).
                </li>
              </ul>
              <p className="text-foreground-2 mt-3">
                Príjemcovia uvedení v tomto článku sa týkajú výhradne webovej stránky. Demo prostredie
                má vlastný hosting aj vlastných príjemcov — sú opísaní v{" "}
                <a href="#demo" className="text-brand hover:text-brand-strong transition-colors">
                  článku 7
                </a>
                .
              </p>
            </section>

            <section id="demo">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                7. Demo prostredie (demo.arenibus.com)
              </h2>
              <p className="text-foreground-2 mb-3">
                Tento článok platí výhradne pre demonštračnú inštanciu systému Arenibus na adrese{" "}
                <a
                  href="https://demo.arenibus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-strong transition-colors"
                >
                  demo.arenibus.com
                </a>
                . Prevádzkovateľom je ten istý subjekt ako podľa článku 1. Demo obsahuje výhradne{" "}
                <span className="font-semibold text-foreground">fiktívnych pacientov a fiktívne údaje</span>{" "}
                — nie sú to údaje skutočných osôb a demo sa nesmie používať na skutočnú zdravotnú
                dokumentáciu.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">7.1 Prihlasovanie</h3>
              <p className="text-foreground-2">
                Demo je prístupné len po prihlásení. Prihlasovanie zabezpečuje Keycloak na tej istej
                doméne (cesta <code className="text-sm">/auth</code>) protokolom OpenID Connect
                (Authorization Code s PKCE). Demo kontá sú vopred vytvorené a{" "}
                <span className="font-semibold text-foreground">zdieľané</span> — vydáva ich
                prevádzkovateľ na vyžiadanie, nezakladáte si vlastné konto a pri vstupe neuvádzate svoje
                meno ani e-mail. V prihlasovacom systéme sa tak spracúvajú len údaje týchto
                demonštračných kont (prihlasovacie meno, overovací údaj, časy a stav relácií), nie vaša
                identita.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
                7.2 Čo si ukladá váš prehliadač
              </h3>
              <p className="text-foreground-2 mb-3">
                Samotná demo aplikácia{" "}
                <span className="font-semibold text-foreground">nepoužíva cookies</span> a neobsahuje
                žiadne analytické, reklamné ani sledovacie nástroje. Ukladá len tieto položky:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground-2">
                <li>
                  <span className="font-semibold text-foreground">sessionStorage</span> — prihlasovacie
                  tokeny a jednorazové hodnoty prihlasovacieho toku (
                  <code className="text-sm">arenibus.oidc.tokens</code>,{" "}
                  <code className="text-sm">arenibus.oidc.verifier</code>,{" "}
                  <code className="text-sm">arenibus.oidc.state</code>). Prehliadač ich zahodí pri
                  zatvorení karty.
                </li>
                <li>
                  <span className="font-semibold text-foreground">localStorage</span> — len vaše
                  zobrazovacie predvoľby: svetlý alebo tmavý režim (
                  <code className="text-sm">arenibus.theme</code>), skryté úvodné sprievodcovia
                  a naposledy zvolený filter či rozbalená sekcia. Žiadna z nich neobsahuje údaje
                  o pacientoch a nikam sa neodosiela.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Cookies prihlasovacieho servera</span>{" "}
                  — Keycloak si počas prihlásenia nastaví vlastné technické cookies relácie na ceste{" "}
                  <code className="text-sm">/auth</code>. Sú nevyhnutné na prihlásenie a neslúžia na
                  sledovanie.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">7.3 Logy a audit</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground-2">
                <li>
                  <span className="font-semibold text-foreground">Audit log v aplikácii</span> — demo
                  vedie rovnaký audit ako ostrá prevádzka: identifikátor prihláseného konta, čas, druh
                  úkonu, typ a identifikátor záznamu a voliteľný technický kontext. Zapisujú sa aj
                  neúspešné pokusy o prístup (zamietnutie prístupu, neexistujúci záznam) — s metódou,
                  stavovým kódom a cestou volania.{" "}
                  <span className="font-semibold text-foreground">IP adresy sa do auditu nezapisujú</span>{" "}
                  a neukladá sa ani telo požiadavky.
                </li>
                <li>
                  <span className="font-semibold text-foreground">IP adresa</span> — spracúva sa len
                  prechodne v pamäti servera na ochranu pred zahltením (limit počtu volaní za minútu).
                  Neukladá sa do databázy a webový server nemá zapnutý prístupový log.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Technické logy služieb</span> —
                  chybové a prevádzkové výpisy jednotlivých služieb na serveri, rotované (najviac 5
                  súborov po 10 MB na službu, staršie sa prepisujú). Slúžia na diagnostiku poruchy.
                </li>
              </ul>
              <p className="text-foreground-2 mt-3">
                Právnym základom pre audit a bezpečnostné logy je čl. 6 ods. 1 písm. f) GDPR — náš
                oprávnený záujem na bezpečnosti a dostupnosti demo prostredia.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
                7.4 Hosting a príjemcovia
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground-2">
                <li>
                  <span className="font-semibold text-foreground">Hosting</span> — demo beží na jednom
                  virtuálnom serveri spoločnosti{" "}
                  <span className="font-semibold text-foreground">Hetzner Online GmbH</span>{" "}
                  (Industriestrasse 25, 91710 Gunzenhausen, Nemecko), v dátovom centre v Norimbergu,
                  teda v Európskej únii. Hetzner vystupuje ako sprostredkovateľ poskytujúci
                  infraštruktúru.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Žiadni ďalší príjemcovia</span> —
                  databáza, prihlasovací server aj aplikácia bežia na tom istom serveri a nie sú priamo
                  dostupné z internetu. Demo neodosiela údaje do žiadnej analytickej, telemetrickej ani
                  e-mailovej služby.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Štátne systémy (NZIS, ÚDZS) sú v demo vypnuté
                  </span>{" "}
                  — demo s nimi nekomunikuje a nič do nich neodosiela.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Formspree sa dema netýka</span> — táto
                  služba doručuje len správy z kontaktného formulára na webovej stránke (článok 6).
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
                7.5 Prenosy do tretích krajín
              </h3>
              <p className="text-foreground-2">
                Z demo prostredia{" "}
                <span className="font-semibold text-foreground">neprebiehajú žiadne prenosy</span>{" "}
                osobných údajov mimo Európskej únie a Európskeho hospodárskeho priestoru. Prenos do USA
                opísaný v článku 6 sa vzťahuje výhradne na kontaktný formulár webovej stránky.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
                7.6 Nočná obnova demo dát a doba uchovávania
              </h3>
              <p className="text-foreground-2 mb-3">
                Databáza demo aplikácie sa každú noc o 03:00 (čas Európa/Bratislava){" "}
                <span className="font-semibold text-foreground">obnoví zo vzorovej snímky</span>{" "}
                fiktívnych dát a termíny sa posunú na aktuálne dni. Čokoľvek, čo návštevníci počas dňa
                v demo zadali alebo zmenili, je tým prepísané obsahom snímky — vrátane záznamov auditu
                vytvorených počas dňa. Demo preto nie je dôkazný ani archívny systém.
              </p>
              <p className="text-foreground-2 mb-3">
                Táto obnova{" "}
                <span className="font-semibold text-foreground">
                  nie je mazaním prihlasovacích kont ani prevádzkových logov
                </span>
                : prihlasovacie kontá a ich databáza sa neobnovujú a zostávajú zachované, technické logy
                služieb sa zahadzujú až rotáciou podľa článku 7.3 a log samotnej nočnej obnovy zostáva
                na serveri.
              </p>
              <p className="text-foreground-2">
                Zálohy demo databázy sú šifrované a uchovávané v Európskej únii. Lehoty podľa článku 4 sa
                na obsah dema nevzťahujú; e-mailová korešpondencia so žiadosťou o demo prístup sa riadi
                článkom 4.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
                7.7 Čo do dema nezadávajte
              </h3>
              <p className="text-foreground-2">
                Demo slúži na ukážku funkcií. Nezadávajte do neho{" "}
                <span className="font-semibold text-foreground">
                  žiadne skutočné údaje o pacientoch ani iné skutočné osobné údaje
                </span>
                . Ak takéto údaje do dema zadáte, prepíše ich najbližšia nočná obnova; o skoršie
                odstránenie môžete požiadať na{" "}
                <a
                  href="mailto:arenibus@nephroctor.com"
                  className="text-brand hover:text-brand-strong transition-colors"
                >
                  arenibus@nephroctor.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">8. Vaše práva</h2>
              <p className="text-foreground-2 mb-3">
                V súvislosti so spracúvaním osobných údajov máte podľa GDPR najmä tieto práva:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground-2">
                <li>právo na prístup k svojim osobným údajom (čl. 15),</li>
                <li>právo na opravu nesprávnych údajov (čl. 16),</li>
                <li>právo na vymazanie (čl. 17),</li>
                <li>právo na obmedzenie spracúvania (čl. 18),</li>
                <li>právo na prenosnosť údajov (čl. 20),</li>
                <li>právo namietať proti spracúvaniu na základe oprávneného záujmu (čl. 21).</li>
              </ul>
              <p className="text-foreground-2 mt-3">
                Svoje práva si môžete uplatniť e-mailom na arenibus@polascin.net. Bezpečnostné hlásenia
                posielajte na rovnakú adresu; podrobnosti sú na stránke{" "}
                <Link href="/security/" className="text-brand hover:text-brand-strong transition-colors">
                  Bezpečnostný kontakt
                </Link>
                . Ak sa domnievate, že
                vaše osobné údaje spracúvame v rozpore s právnymi predpismi, máte právo podať sťažnosť
                dozornému orgánu, ktorým je{" "}
                <a
                  href="https://dataprotection.gov.sk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-strong transition-colors"
                >
                  Úrad na ochranu osobných údajov Slovenskej republiky
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">9. Záverečné ustanovenia</h2>
              <p className="text-foreground-2">
                Tieto zásady môžeme priebežne aktualizovať; aktuálne znenie je vždy zverejnené na tejto
                stránke. Tieto zásady sú účinné od 2. októbra 2026 a od tohto dátumu výslovne
                pokrývajú aj demo prostredie demo.arenibus.com (článok 7).
              </p>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter current="privacy" />
    </div>
    </>
  );
}
