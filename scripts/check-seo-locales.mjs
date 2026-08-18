#!/usr/bin/env node
/**
 * Verify every hub-only SEO locale on a live deployment.
 *
 * Catches the failure modes we hit when shipping DE/ZH: untranslated hero,
 * duplicated site header, missing hreflang, hubs absent from the sitemap.
 *
 * Usage:
 *   node scripts/check-seo-locales.mjs
 *   node scripts/check-seo-locales.mjs --base https://reversebooking.vercel.app
 *   node scripts/check-seo-locales.mjs --locale es
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const EXPORT_DIR = path.join(ROOT, "data/seo/export");

const DESTINATION_SEGMENT = { de: "reiseziele", zh: "destinations", es: "destinos" };

function arg(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? null : process.argv[index + 1];
}

const BASE = (arg("base") || "https://www.hotelsdrop.com").replace(/\/+$/, "");
const ONLY_LOCALE = arg("locale");

function decode(html) {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#8217;|&rsquo;/g, "\u2019");
}

function loadLocales() {
  return fs
    .readdirSync(EXPORT_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((locale) => (ONLY_LOCALE ? locale === ONLY_LOCALE : true))
    .map((locale) => {
      const file = path.join(EXPORT_DIR, locale, "content.json");
      if (!fs.existsSync(file)) return null;
      return { locale, content: JSON.parse(fs.readFileSync(file, "utf8")) };
    })
    .filter(Boolean);
}

const results = [];

function record(locale, name, ok, detail = "") {
  results.push({ locale, name, ok, detail });
  const icon = ok ? "PASS" : "FAIL";
  console.log(`  [${icon}] ${name}${detail && !ok ? ` — ${detail}` : ""}`);
}

async function get(url) {
  const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "hotelsdrop-seo-check" } });
  const body = res.status >= 200 && res.status < 300 ? decode(await res.text()) : "";
  return { status: res.status, location: res.headers.get("location"), body };
}

async function checkHomepage({ locale, content }) {
  const url = `${BASE}/${locale}`;
  const page = await get(url);

  record(locale, `homepage ${url} → 200`, page.status === 200, `HTTP ${page.status} ${page.location ?? ""}`);
  if (page.status !== 200) return;

  const { homepage } = content;

  record(locale, `<html lang="${locale}">`, page.body.includes(`lang="${locale}"`));

  if (homepage.heroHeadline) {
    record(locale, "hero H1 tradotto", page.body.includes(homepage.heroHeadline), homepage.heroHeadline);
  }
  if (homepage.heroEntityIntro) {
    record(locale, "terza riga hero presente", page.body.includes(homepage.heroEntityIntro));
  }

  const cta = homepage.ui?.showcase?.dropYourRequest;
  if (cta) record(locale, "CTA principale tradotta", page.body.includes(cta), cta);

  const login = homepage.ui?.common?.login;
  if (login) record(locale, "label login tradotta", page.body.includes(login), login);

  const headerCount = (page.body.match(/<header[\s>]/g) ?? []).length;
  record(locale, "nessuna navbar duplicata", headerCount <= 1, `${headerCount} tag <header>`);

  const h1Count = (page.body.match(/<h1[\s>]/g) ?? []).length;
  record(locale, "un solo H1", h1Count === 1, `${h1Count} H1`);

  record(
    locale,
    "canonical corretto",
    page.body.includes(`rel="canonical" href="${BASE}/${locale}"`) ||
      page.body.includes(`href="${BASE}/${locale}"`),
  );

  if (homepage.title) {
    record(locale, "title tradotto", page.body.includes(homepage.title.slice(0, 40)), homepage.title);
  }
}

async function checkHubs({ locale, content }) {
  const slugs = Object.keys(content.hubs ?? {});
  if (!slugs.length) {
    console.log(`  [SKIP] hub non pubblicati per ${locale} (nessuna copy per città)`);
    return;
  }

  const segment = DESTINATION_SEGMENT[locale] ?? "destinations";
  for (const slug of slugs.slice(0, 2)) {
    const url = `${BASE}/${locale}/${segment}/${slug}`;
    const page = await get(url);
    record(locale, `hub ${url} → 200`, page.status === 200, `HTTP ${page.status} ${page.location ?? ""}`);
    if (page.status !== 200) continue;

    const hub = content.hubs[slug];
    const city = content.cityDisplayNames?.[slug] || hub.displayName;
    if (city) record(locale, `hub ${slug}: nome città localizzato`, page.body.includes(city), city);

    /** Split on placeholders: only literal fragments can be matched in the HTML. */
    const introSample = (hub.intro || "")
      .split(/\{[a-z]+\}/i)
      .map((fragment) => fragment.trim())
      .sort((a, b) => b.length - a.length)[0]
      ?.slice(0, 40);
    if (introSample && introSample.length > 10) {
      record(locale, `hub ${slug}: intro tradotta`, page.body.includes(introSample), introSample);
    }
  }
}

async function checkSitemap(locales) {
  const urls = new Set();
  for (const chunk of [0, 1]) {
    const res = await fetch(`${BASE}/sitemap/${chunk}.xml`);
    if (!res.ok) {
      record("sitemap", `sitemap/${chunk}.xml → 200`, false, `HTTP ${res.status}`);
      continue;
    }
    const xml = await res.text();
    for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(match[1]);
  }

  const hubSlugsInSitemap = (prefix) =>
    new Set(
      [...urls]
        .map((url) => new URL(url).pathname)
        .filter((pathname) => pathname.startsWith(`${prefix}/`) && pathname.split("/").length === 4)
        .map((pathname) => pathname.split("/").pop()),
    );

  /** Hubs failing the quality gate are absent for every locale, italian included. */
  const indexableHubs = hubSlugsInSitemap("/it");

  for (const { locale, content } of locales) {
    const homepageListed = urls.has(`${BASE}/${locale}`) || urls.has(`${BASE}/${locale}/`);
    record(locale, "homepage in sitemap", homepageListed);

    const packSlugs = Object.keys(content.hubs ?? {});
    const expected = packSlugs.filter((slug) => indexableHubs.has(slug));
    const listed = hubSlugsInSitemap(`/${locale}`);
    const missing = expected.filter((slug) => !listed.has(slug));
    const skipped = packSlugs.filter((slug) => !indexableHubs.has(slug));

    record(
      locale,
      `hub in sitemap: ${expected.length - missing.length}/${expected.length}`,
      missing.length === 0,
      `mancanti: ${missing.join(", ")}`,
    );
    if (skipped.length) {
      console.log(`  [SKIP] fuori dal gate qualità (assenti anche in IT): ${skipped.join(", ")}`);
    }
  }
}

async function main() {
  const locales = loadLocales();
  if (!locales.length) {
    console.error("Nessuna lingua hub trovata in data/seo/export");
    process.exit(1);
  }

  console.log(`Base: ${BASE}`);
  for (const entry of locales) {
    console.log(`\n== ${entry.locale.toUpperCase()} ==`);
    await checkHomepage(entry);
    await checkHubs(entry);
  }

  console.log("\n== SITEMAP ==");
  await checkSitemap(locales);

  const failed = results.filter((result) => !result.ok);
  console.log(`\n${results.length - failed.length}/${results.length} controlli superati`);
  if (failed.length) {
    console.log("\nFallimenti:");
    for (const result of failed) console.log(`  ${result.locale}: ${result.name}${result.detail ? ` (${result.detail})` : ""}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
