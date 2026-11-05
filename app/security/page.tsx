import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../breadcrumbs";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import SkipLink from "../skip-link";

const SECURITY_TITLE = "Bezpečnostný kontakt: Arenibus";
const SECURITY_DESCRIPTION =
  "Kontakt na hlásenie bezpečnostných zistení na webe Arenibus a v demo prostredí. Správy posielajte na arenibus@polascin.net.";

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
        alt: "Arenibus: nefrologický a dialyzačný informačný systém",
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
      <SkipLink />
      <div className="flex flex-col min-h-screen bg-background">
        <SiteHeader variant="subpage" />

        <main id="main-content" className="flex-1 py-16 md:py-20 px-4 sm:px-6 section-soft">
          <article className="legal-prose max-w-3xl mx-auto">
            <Breadcrumbs currentLabel="Bezpečnostný kontakt" currentPath="/security/" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
              Bezpečnostný kontakt
            </h1>
            <p className="text-muted text-sm mb-10">Aktualizované 3. októbra 2026</p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Hlásenie zistení</h2>
                <p className="text-foreground-2 mb-3">
                  Ak nájdete bezpečnostnú chybu na marketingovej stránke arenibus.polascin.net alebo v demo
                  prostredí{" "}
                  <a
                    href="https://demo.arenibus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-strong transition-colors"
                  >
                    demo.arenibus.com
                    <span className="sr-only"> (otvorí sa v novom okne)</span>
                  </a>
                  , napíšte na{" "}
                  <a href="mailto:arenibus@polascin.net" className="text-brand hover:text-brand-strong transition-colors">
                    arenibus@polascin.net
                  </a>
                  . Preferované jazyky sú slovenčina a angličtina.
                </p>
                <p className="text-foreground-2">
                  Táto stránka je verejný bezpečnostný kontakt pre obe prostredia. Hlásenia k demu prijíma
                  tá istá adresa.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Rozsah</h2>
                <p className="text-foreground-2 mb-3">Prijímame hlásenia, ktoré sa týkajú:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground-2 mb-3">
                  <li>webu arenibus.polascin.net,</li>
                  <li>
                    demo prostredia{" "}
                    <a
                      href="https://demo.arenibus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand hover:text-brand-strong transition-colors"
                    >
                      demo.arenibus.com
                      <span className="sr-only"> (otvorí sa v novom okne)</span>
                    </a>
                    .
                  </li>
                </ul>
                <p className="text-foreground-2">
                  Do hlásenia nevkladajte skutočné údaje o pacientoch. Informácie o osobných údajoch sú v
                  dokumente{" "}
                  <Link href="/privacy/" className="text-brand hover:text-brand-strong transition-colors">
                    Zásady ochrany osobných údajov
                  </Link>
                  ; pre demo platí{" "}
                  <Link href="/privacy/#demo" className="text-brand hover:text-brand-strong transition-colors">
                    článok 7
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
