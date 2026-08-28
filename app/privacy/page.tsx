import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zásady ochrany osobných údajov – Arenibus",
  description:
    "Informácie o spracúvaní osobných údajov na webovej stránke Arenibus – prevádzkovateľ, účely, právne základy, doba uchovávania a vaše práva podľa GDPR.",
  alternates: {
    canonical: "/privacy/",
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "/privacy/",
    siteName: "Arenibus",
    title: "Zásady ochrany osobných údajov – Arenibus",
    description:
      "Informácie o spracúvaní osobných údajov na webovej stránke Arenibus – prevádzkovateľ, účely, právne základy, doba uchovávania a vaše práva podľa GDPR.",
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
    title: "Zásady ochrany osobných údajov – Arenibus",
    description:
      "Informácie o spracúvaní osobných údajov na webovej stránke Arenibus – prevádzkovateľ, účely, právne základy, doba uchovávania a vaše práva podľa GDPR.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPage() {
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
            Zásady ochrany osobných údajov
          </h1>
          <p className="text-muted text-sm mb-10">Účinné od 25. augusta 2026</p>

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
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">2. Aké údaje spracúvame</h2>
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
                  ktoré nám sami zašlete e-mailom na adresu arenibus@polascin.net.
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
              <h2 className="text-2xl font-semibold text-foreground mb-3">5. Cookies a analytika</h2>
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
                Demo verzia systému beží na samostatnej doméne{" "}
                <a
                  href="https://demo.arenibus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-strong transition-colors"
                >
                  demo.arenibus.com
                </a>{" "}
                s vlastným spracúvaním údajov, na ktoré sa tieto zásady nevzťahujú.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">7. Vaše práva</h2>
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
                Svoje práva si môžete uplatniť e-mailom na arenibus@polascin.net. Ak sa domnievate, že
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
              <h2 className="text-2xl font-semibold text-foreground mb-3">8. Záverečné ustanovenia</h2>
              <p className="text-foreground-2">
                Tieto zásady môžeme priebežne aktualizovať; aktuálne znenie je vždy zverejnené na tejto
                stránke. Tieto zásady sú účinné od 25. augusta 2026.
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
