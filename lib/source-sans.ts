import { Source_Sans_3 } from "next/font/google";

/**
 * Shared body font for the root layout and the standalone 404 document.
 * Keep latin-ext so Slovak diacritics do not fall back to system UI.
 */
export const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-sans",
});
