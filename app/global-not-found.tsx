import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import SkipLink from "./skip-link";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-sans",
});

const NOT_FOUND_TITLE = "Stránka sa nenašla: Arenibus";
const NOT_FOUND_DESCRIPTION =
  "Požadovaná adresa na webe Arenibus neexistuje. Vráťte sa na úvodnú stránku.";

export const metadata: Metadata = {
  metadataBase: new URL("https://arenibus.polascin.net"),
  title: NOT_FOUND_TITLE,
  description: NOT_FOUND_DESCRIPTION,
  applicationName: "Arenibus",
  // Next injects robots noindex for not-found; avoid a second conflicting robots meta.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1f1a" },
  ],
};

/** Full-document 404 for unmatched URLs (static export → out/404.html). */
export default function GlobalNotFound() {
  return (
    <html
      lang="sk"
      className={`${sourceSans.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var m=localStorage.getItem("darkMode");if(m!==null)document.documentElement.setAttribute("data-theme",m==="true"?"dark":"light")}catch(e){}',
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SkipLink />
        <div className="flex flex-col min-h-screen bg-background">
          <SiteHeader variant="subpage" />

          <main
            id="main-content"
            className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 section-soft"
          >
            <div className="max-w-xl mx-auto text-center">
              <p className="text-sm font-semibold text-brand-strong mb-3">HTTP 404</p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Stránka sa nenašla
              </h1>
              <p className="text-foreground-2 mb-8 leading-relaxed">
                Požadovaná adresa na webe Arenibus neexistuje. Skontrolujte odkaz alebo sa vráťte
                na úvodnú stránku.
              </p>
              <Link
                href="/"
                className="btn-primary inline-flex items-center justify-center px-8 py-3.5 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong shadow-brand"
              >
                Prejsť na úvod
              </Link>
            </div>
          </main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
