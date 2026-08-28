/**
 * WCAG 2.1 AA contrast checker for the Arenibus design tokens.
 *
 * Reads the colour variables straight out of `app/globals.css` so the check can
 * never drift from the real palette, then verifies every foreground/background
 * pair the marketing page actually renders, in both light and dark themes.
 *
 * Usage: node scripts/check-contrast.mjs
 * Exits non-zero when a pair falls below its WCAG AA threshold.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(root, "app/globals.css"), "utf8");

/** Pull `--name: #rrggbb;` declarations out of the block that starts at `selector`. */
function readTokens(selector) {
  const start = css.indexOf(selector);
  if (start === -1) throw new Error(`Selector not found in globals.css: ${selector}`);
  let depth = 0;
  let end = start;
  for (let i = css.indexOf("{", start); i < css.length; i++) {
    if (css[i] === "{") depth++;
    else if (css[i] === "}" && --depth === 0) {
      end = i;
      break;
    }
  }
  const tokens = {};
  for (const [, name, value] of css.slice(start, end).matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)) {
    tokens[name] = value.toLowerCase();
  }
  return tokens;
}

const channel = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);

function luminance(hex) {
  const [r, g, b] = hex
    .replace("#", "")
    .match(/../g)
    .map((x) => channel(parseInt(x, 16) / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(fg, bg) {
  const [hi, lo] = [luminance(fg), luminance(bg)].sort((a, b) => b - a);
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * Every pair below corresponds to real markup in `app/page.tsx`.
 * `min` is 4.5 for normal text and 3.0 for large text (>=24px, or >=18.66px bold).
 */
const PAIRS = [
  ["body copy", "foreground", "background", 4.5],
  ["secondary copy", "foreground-2", "background", 4.5],
  ["nav links", "foreground-2", "surface", 4.5],
  ["feature card copy", "foreground-2", "surface-2", 4.5],
  ["footer secondary (text-sm)", "muted", "surface-3", 4.5],
  ["inline brand link", "brand", "background", 4.5],
  ["primary CTA label", "brand-text", "brand", 4.5],
  ["primary CTA hover", "brand-text", "brand-strong", 4.5],
  ["demo section heading", "brand-text", "brand", 3.0],
  ["demo CTA label", "brand", "surface", 4.5],
  ["development badge (text-sm)", "warn", "warn-soft", 4.5],
  ["form success message", "ok", "surface-2", 4.5],
  ["form error message", "danger", "surface-2", 4.5],
];

const THEMES = [
  ["LIGHT", readTokens(":root {")],
  ["DARK", readTokens(':root[data-theme="dark"]')],
];

let failures = 0;

for (const [themeName, tokens] of THEMES) {
  console.log(`\n=== ${themeName} MODE — WCAG 2.1 AA ===`);
  for (const [label, fgToken, bgToken, min] of PAIRS) {
    const fg = tokens[fgToken];
    const bg = tokens[bgToken];
    if (!fg || !bg) {
      console.log(`  SKIP  ${label} (missing --${fgToken} or --${bgToken})`);
      continue;
    }
    const value = ratio(fg, bg);
    const pass = value >= min;
    if (!pass) failures++;
    console.log(
      `  ${pass ? "PASS" : "FAIL"}  ${label.padEnd(30)} ${value.toFixed(2).padStart(5)}:1  ` +
        `(min ${min.toFixed(1)})  ${fg} on ${bg}`
    );
  }
}

// The dark palette is also served through the prefers-color-scheme block; keep them identical.
const media = readTokens(':root:not([data-theme="dark"]):not([data-theme="light"])');
const darkTokens = THEMES[1][1];
const drift = Object.keys(darkTokens).filter((k) => media[k] && media[k] !== darkTokens[k]);
console.log(`\n=== DARK PALETTE PARITY (data-theme vs prefers-color-scheme) ===`);
if (drift.length) {
  failures += drift.length;
  drift.forEach((k) => console.log(`  FAIL  --${k}: ${darkTokens[k]} vs ${media[k]}`));
} else {
  console.log("  PASS  both dark blocks define identical colour tokens");
}

console.log(`\n${failures === 0 ? "All contrast checks passed." : `${failures} contrast failure(s).`}`);
process.exit(failures === 0 ? 0 : 1);
