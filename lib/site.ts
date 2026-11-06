/** Canonical marketing origin (no trailing path beyond `/`). */
export const SITE_ORIGIN = "https://arenibus.polascin.net";

/** Live demo footer / bundle version shown on https://demo.arenibus.com/. */
export const DEMO_VERSION = "v0.17.264";

/** Same value without the leading `v`, for schema.org `softwareVersion`. */
export const DEMO_VERSION_PLAIN = DEMO_VERSION.replace(/^v/, "");

/** Shared meta / Open Graph / JSON-LD description (≤ 160 characters). */
export const SITE_DESCRIPTION =
  "Moderný .NET systém pre nefrologickú ambulanciu a dialýzu (HD, PD) s registrami, vykazovaním poisťovniam a integráciou na ezdravotníctvo.";

export const SITE_TITLE = "Arenibus: Nefrologický a dialyzačný informačný systém";

/** Shared Open Graph / Twitter card image (relative to metadataBase). */
export const SITE_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Arenibus: nefrologický a dialyzačný informačný systém",
} as const;

export const NOT_FOUND_TITLE = "Stránka sa nenašla: Arenibus";

export const NOT_FOUND_DESCRIPTION =
  "Požadovaná adresa na webe Arenibus neexistuje. Vráťte sa na úvodnú stránku.";
