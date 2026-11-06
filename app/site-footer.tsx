import Link from "next/link";
import { footerLinkClass } from "./link-styles";

type FooterPage = "home" | "privacy" | "terms" | "security";

export default function SiteFooter({ current }: { current?: FooterPage }) {
  return (
    <footer className="bg-surface-3 text-foreground py-10 px-4 sm:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-foreground-2 font-medium tracking-tight">
          Arenibus © 2024 až 2026 Ľubomír Polaščín
        </p>
        <p className="text-muted mt-2 text-sm">
          MUDr. Ľubomír Polaščín, Nephroctor
        </p>
        <p className="text-muted mt-1 text-sm">
          IČO 57646856
        </p>
        <nav
          aria-label="Pätičkové odkazy"
          className="mt-6 flex justify-center flex-wrap gap-x-8 gap-y-3 text-sm"
        >
          <Link
            href="/"
            aria-current={current === "home" ? "page" : undefined}
            className={footerLinkClass}
          >
            Úvod
          </Link>
          <Link
            href="/privacy/"
            aria-current={current === "privacy" ? "page" : undefined}
            className={footerLinkClass}
          >
            Ochrana osobných údajov
          </Link>
          <Link
            href="/terms/"
            aria-current={current === "terms" ? "page" : undefined}
            className={footerLinkClass}
          >
            Podmienky používania
          </Link>
          <Link
            href="/security/"
            aria-current={current === "security" ? "page" : undefined}
            className={footerLinkClass}
          >
            Bezpečnostný kontakt
          </Link>
        </nav>
      </div>
    </footer>
  );
}
