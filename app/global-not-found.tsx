import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { NOT_FOUND_DESCRIPTION, NOT_FOUND_TITLE } from "@/lib/site";
import NotFoundShell from "./not-found-shell";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-sans",
});

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
        <NotFoundShell />
      </body>
    </html>
  );
}
