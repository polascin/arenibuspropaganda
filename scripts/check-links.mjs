/**
 * Link checker for the Arenibus marketing site.
 *
 * Inventories user-facing href / Link / fetch URLs from app source, PHP
 * redirects, and sitemap <loc> entries, then verifies internals against
 * `out/`, fragments against `id` attributes, mailto against an address
 * allowlist, and externals with HTTP GET.
 *
 * Usage: node scripts/check-links.mjs   (requires a prior `npm run build`)
 * Exits non-zero when any link fails.
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_ORIGIN = "https://arenibus.polascin.net";
const MAILTO_ALLOW = new Set(["arenibus@polascin.net", "arenibus@nephroctor.com"]);
const USER_AGENT = "ArenibusLinkCheck/1.0 (+https://arenibus.polascin.net/)";
const FETCH_TIMEOUT_MS = 15_000;
const FETCH_RETRIES = 3;
const FETCH_RETRY_DELAY_MS = 2_000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function walk(dir) {
  const files = [];
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, ent.name);
    if (ent.isDirectory()) files.push(...walk(p));
    else if (/\.(tsx|ts)$/.test(ent.name)) files.push(p);
  }
  return files;
}

function rel(file) {
  return relative(root, file).replaceAll("\\", "/");
}

/** Extract JSX opening tags, ignoring `>` that appear inside `{...}`. */
function extractOpenTags(src, tagName) {
  const tags = [];
  const startRe = new RegExp(`<${tagName}\\b`, "g");
  let m;
  while ((m = startRe.exec(src))) {
    let i = m.index + m[0].length;
    let brace = 0;
    let quote = null;
    for (; i < src.length; i++) {
      const c = src[i];
      if (quote) {
        if (c === "\\" && quote !== "`") {
          i++;
          continue;
        }
        if (c === quote) quote = null;
        continue;
      }
      if (c === '"' || c === "'" || c === "`") {
        quote = c;
        continue;
      }
      if (c === "{") {
        brace++;
        continue;
      }
      if (c === "}" && brace) {
        brace--;
        continue;
      }
      if (brace) continue;
      if (c === ">") {
        tags.push(src.slice(m.index, i + 1));
        break;
      }
    }
  }
  return tags;
}

function attr(tag, name) {
  const re = new RegExp(
    `\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\\{"([^"]*)"\\}|\\{'([^']*)'\\}|\\{(\\w+)\\})`
  );
  const m = tag.match(re);
  if (!m) return null;
  return { value: m[1] ?? m[2] ?? m[3] ?? m[4] ?? null, ident: m[5] ?? null };
}

function collectConstStrings(src) {
  const map = new Map();
  const re = /const\s+(\w+)\s*=\s*(?:[\s\n]*)("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g;
  let m;
  while ((m = re.exec(src))) {
    map.set(m[1], m[2].slice(1, -1));
  }
  return map;
}

function idsIn(src) {
  const ids = new Set();
  const re = /\bid\s*=\s*(?:"([^"]+)"|'([^']+)'|\{"([^"]+)"\}|\{'([^']+)'\})/g;
  let m;
  while ((m = re.exec(src))) {
    ids.add(m[1] ?? m[2] ?? m[3] ?? m[4]);
  }
  return ids;
}

function pathToSource(pathname) {
  if (pathname === "/") return join(root, "app", "page.tsx");
  const trimmed = pathname.replace(/\/$/, "");
  const candidate = join(root, "app", trimmed, "page.tsx");
  if (existsSync(candidate)) return candidate;
  return null;
}

function isFilePath(pathname) {
  return /\.[a-z0-9]+$/i.test(pathname) && !pathname.endsWith("/");
}

function outFileFor(pathname) {
  if (pathname === "/") return join(root, "out", "index.html");
  const stripped = pathname.replace(/^\//, "");
  if (isFilePath(pathname)) return join(root, "out", stripped);
  return join(root, "out", stripped, "index.html");
}

function mailtoAddress(href) {
  const raw = href.replace(/^mailto:/i, "").split("?")[0];
  try {
    return decodeURIComponent(raw).trim().toLowerCase();
  } catch {
    return raw.trim().toLowerCase();
  }
}

function sourceFileForFragment(file, pathname) {
  if (!pathname || pathname === "/") return file;
  return pathToSource(pathname) ?? file;
}

let failures = 0;
const seenExternal = new Map();

function fail(where, message) {
  failures++;
  console.log(`  FAIL  ${where}  ${message}`);
}

function pass(where, message) {
  console.log(`  PASS  ${where}  ${message}`);
}

function checkInternalPath(where, pathname) {
  if (!pathname.startsWith("/")) {
    fail(where, `internal path must start with /: ${pathname}`);
    return false;
  }
  if (!isFilePath(pathname) && pathname !== "/" && !pathname.endsWith("/")) {
    fail(where, `missing trailing slash (trailingSlash: true): ${pathname}`);
    return false;
  }
  const target = outFileFor(pathname);
  if (!existsSync(target)) {
    fail(where, `no file in out/ for ${pathname} (expected ${rel(target)})`);
    return false;
  }
  pass(where, pathname);
  return true;
}

function checkFragment(where, file, pathname, fragment) {
  const source = sourceFileForFragment(file, pathname);
  if (!existsSync(source)) {
    fail(where, `cannot resolve source for #${fragment} at ${pathname || "/"}`);
    return;
  }
  const ids = idsIn(readFileSync(source, "utf8"));
  if (!ids.has(fragment)) {
    fail(where, `missing id="${fragment}" in ${rel(source)}`);
    return;
  }
  pass(where, `#${fragment} in ${rel(source)}`);
}

function checkMailto(where, href) {
  const address = mailtoAddress(href);
  if (!MAILTO_ALLOW.has(address)) {
    fail(where, `mailto not in allowlist: ${address}`);
    return;
  }
  pass(where, `mailto:${address}`);
}

async function checkExternal(where, url) {
  if (url.startsWith("http://")) {
    fail(where, `plain http is not allowed: ${url}`);
    return;
  }
  if (seenExternal.has(url)) {
    const prev = seenExternal.get(url);
    if (prev.ok) pass(where, `${url} (cached ${prev.status})`);
    else fail(where, `${url} (cached failure: ${prev.detail})`);
    return;
  }

  let lastDetail = "unknown error";
  for (let attempt = 1; attempt <= FETCH_RETRIES; attempt++) {
    try {
      const res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: { "User-Agent": USER_AGENT, Accept: "text/html,application/json,*/*" },
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
      const status = res.status;
      const formspreeOk = status === 405 && url.includes("formspree.io");
      if ((status >= 200 && status < 400) || formspreeOk) {
        seenExternal.set(url, { ok: true, status });
        const retryNote = attempt > 1 ? ` (after ${attempt} attempts)` : "";
        pass(where, `${url} → ${status}${retryNote}`);
        return;
      }
      lastDetail = `HTTP ${status}`;
      // Non-transient HTTP failures (404/5xx) do not retry.
      if (status < 500) break;
    } catch (err) {
      lastDetail = err.name === "TimeoutError" || err.name === "AbortError" ? "timeout" : err.message;
    }
    if (attempt < FETCH_RETRIES) await sleep(FETCH_RETRY_DELAY_MS * attempt);
  }

  seenExternal.set(url, { ok: false, detail: lastDetail });
  fail(where, `${url} → ${lastDetail}`);
}

function resolveHref(tag, consts) {
  const href = attr(tag, "href");
  if (!href) return null;
  if (href.ident) return consts.get(href.ident) ?? null;
  return href.value;
}

function checkAnchorAttrs(where, tag, href) {
  if (!href.startsWith("http://") && !href.startsWith("https://")) return;
  if (href.startsWith(SITE_ORIGIN)) return;
  const target = attr(tag, "target");
  const relAttr = attr(tag, "rel");
  const targetVal = target?.value ?? "";
  const relVal = relAttr?.value ?? "";
  const relParts = new Set(relVal.split(/\s+/).filter(Boolean));
  if (targetVal !== "_blank") fail(where, `external <a> missing target="_blank": ${href}`);
  if (!relParts.has("noopener") || !relParts.has("noreferrer")) {
    fail(where, `external <a> missing rel="noopener noreferrer": ${href}`);
  }
}

function classify(href) {
  if (href.startsWith("mailto:")) return { kind: "mailto", href };
  if (href.startsWith("http://") || href.startsWith("https://")) {
    if (href === SITE_ORIGIN || href.startsWith(SITE_ORIGIN + "/")) {
      const u = new URL(href);
      return { kind: "internal", pathname: u.pathname || "/", fragment: u.hash.replace(/^#/, "") || null, href };
    }
    return { kind: "external", href };
  }
  if (href.startsWith("#")) return { kind: "fragment", fragment: href.slice(1), pathname: null, href };
  if (href.startsWith("/")) {
    const hash = href.indexOf("#");
    if (hash >= 0) {
      return {
        kind: "internal",
        pathname: href.slice(0, hash),
        fragment: href.slice(hash + 1),
        href,
      };
    }
    return { kind: "internal", pathname: href, fragment: null, href };
  }
  return { kind: "unknown", href };
}

if (!existsSync(join(root, "out", "index.html"))) {
  console.error("out/ is missing. Run `npm run build` before `npm run check:links`.");
  process.exit(1);
}

await main();

async function main() {

const appFiles = walk(join(root, "app"));
const findings = [];

console.log("=== SOURCE LINKS (app/**/*.tsx) ===");
for (const file of appFiles) {
  const src = readFileSync(file, "utf8");
  const consts = collectConstStrings(src);
  const whereFile = rel(file);

  for (const tag of extractOpenTags(src, "a")) {
    const href = resolveHref(tag, consts);
    if (!href) {
      fail(whereFile, "could not resolve <a> href");
      continue;
    }
    findings.push({ file, tag, href, isAnchor: true, where: `${whereFile} <a href>` });
  }
  for (const tag of extractOpenTags(src, "Link")) {
    const href = resolveHref(tag, consts);
    if (!href) {
      fail(whereFile, "could not resolve <Link> href");
      continue;
    }
    findings.push({ file, tag, href, isAnchor: false, where: `${whereFile} <Link href>` });
  }

  const fetchRe = /\bfetch\s*\(\s*("([^"]+)"|'([^']+)')/g;
  let fm;
  while ((fm = fetchRe.exec(src))) {
    findings.push({
      file,
      tag: null,
      href: fm[2] ?? fm[3],
      isAnchor: false,
      where: `${whereFile} fetch()`,
    });
  }
}

console.log("\n=== PHP REDIRECTS ===");
for (const name of ["privacy.php", "terms.php"]) {
  const file = join(root, "public", name);
  if (!existsSync(file)) {
    fail(`public/${name}`, "file missing");
    continue;
  }
  const src = readFileSync(file, "utf8");
  const m = src.match(/header\(\s*['"]Location:\s*([^'"]+)['"]/i);
  if (!m) {
    fail(`public/${name}`, "no Location header");
    continue;
  }
  findings.push({ file, tag: null, href: m[1].trim(), isAnchor: false, where: `public/${name} Location` });
}

console.log("\n=== SITEMAP <loc> ===");
const sitemap = join(root, "public", "sitemap.xml");
if (!existsSync(sitemap)) {
  fail("public/sitemap.xml", "file missing");
} else {
  const src = readFileSync(sitemap, "utf8");
  const locs = [...src.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1].trim());
  if (!locs.length) fail("public/sitemap.xml", "no <loc> entries");
  for (const loc of locs) {
    findings.push({ file: sitemap, tag: null, href: loc, isAnchor: false, where: "public/sitemap.xml <loc>" });
  }
}

for (const item of findings) {
  const { href, file, tag, isAnchor, where } = item;
  const c = classify(href);

  if (c.kind === "mailto") {
    checkMailto(where, c.href);
    continue;
  }
  if (c.kind === "fragment") {
    checkFragment(where, file, "/", c.fragment);
    continue;
  }
  if (c.kind === "internal") {
    const ok = checkInternalPath(where, c.pathname);
    if (ok && c.fragment) checkFragment(where, file, c.pathname, c.fragment);
    continue;
  }
  if (c.kind === "external") {
    if (isAnchor && tag) checkAnchorAttrs(where, tag, c.href);
    await checkExternal(where, c.href);
    continue;
  }
  fail(where, `unrecognised href: ${href}`);
}

console.log(
    `\n${failures === 0 ? "All link checks passed." : `${failures} link failure(s).`}`
  );
  process.exit(failures === 0 ? 0 : 1);
}
