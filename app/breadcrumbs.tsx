import Link from "next/link";
import { SITE_ORIGIN } from "@/lib/site";
import { proseLinkClass } from "./link-styles";

type BreadcrumbsProps = {
  currentLabel: string;
  /** Absolute path with trailing slash, e.g. `/privacy/`. */
  currentPath: string;
};

export default function Breadcrumbs({ currentLabel, currentPath }: BreadcrumbsProps) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Arenibus",
        item: `${SITE_ORIGIN}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentLabel,
        item: `${SITE_ORIGIN}${currentPath}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <nav aria-label="Drobečková navigácia" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li className="flex items-center gap-2">
            <Link
              href="/"
              className={proseLinkClass}
            >
              Arenibus
            </Link>
            <span aria-hidden="true" className="text-muted">
              /
            </span>
          </li>
          <li aria-current="page" className="text-foreground-2">
            {currentLabel}
          </li>
        </ol>
      </nav>
    </>
  );
}
