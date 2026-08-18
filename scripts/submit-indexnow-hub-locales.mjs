#!/usr/bin/env node
/**
 * Submit the hub-only SEO locales (DE/ZH homepage + destination hubs) to IndexNow.
 *
 * URLs are read from the live sitemap, so only indexable hubs are notified.
 *
 * Usage:
 *   node scripts/submit-indexnow-hub-locales.mjs --dry-run
 *   node scripts/submit-indexnow-hub-locales.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://www.hotelsdrop.com";
const SITEMAP_CHUNKS = [0, 1];
const LOCALE_PREFIXES = ["/de", "/zh"];
const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

function resolveKey() {
  const fromEnv = process.env.INDEXNOW_API_KEY?.trim();
  if (fromEnv) return fromEnv;

  const publicDir = path.join(ROOT, "public");
  const keyFile = fs.readdirSync(publicDir).find((name) => /^[a-f0-9]{32}\.txt$/i.test(name));
  if (!keyFile) throw new Error("INDEXNOW_API_KEY missing and no key file in public/");
  return fs.readFileSync(path.join(publicDir, keyFile), "utf8").trim();
}

async function collectUrls() {
  const urls = new Set();
  for (const chunk of SITEMAP_CHUNKS) {
    const res = await fetch(`${ORIGIN}/sitemap/${chunk}.xml`);
    if (!res.ok) throw new Error(`sitemap/${chunk}.xml → HTTP ${res.status}`);
    const xml = await res.text();
    for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const loc = match[1];
      const { pathname } = new URL(loc);
      if (LOCALE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
        urls.add(loc);
      }
    }
  }
  return [...urls].sort();
}

async function post(endpoint, key, keyLocation, urlList) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(ORIGIN).host, key, keyLocation, urlList }),
  });
  const ok = res.status === 200 || res.status === 202;
  return { endpoint, status: res.status, ok, error: ok ? null : await res.text().catch(() => res.statusText) };
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const key = resolveKey();
  const keyLocation = process.env.INDEXNOW_KEY_LOCATION?.trim() || `${ORIGIN}/${key}.txt`;
  const urls = await collectUrls();

  const byLocale = LOCALE_PREFIXES.map((prefix) => {
    const count = urls.filter((url) => new URL(url).pathname.startsWith(prefix)).length;
    return `${prefix}: ${count}`;
  }).join(", ");
  console.log(`[indexnow] ${urls.length} URL (${byLocale})`);

  if (dryRun) {
    console.log("[indexnow] DRY RUN — nessun invio");
    console.log(urls.join("\n"));
    return;
  }

  for (const endpoint of ENDPOINTS) {
    const result = await post(endpoint, key, keyLocation, urls);
    console.log(`[indexnow] ${result.ok ? "OK" : "FAIL"} ${endpoint} → ${result.status}${result.error ? ` ${result.error}` : ""}`);
  }

  const reportDir = path.join(ROOT, "data/indexnow");
  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, `hub-locales-${new Date().toISOString().slice(0, 10)}.json`);
  fs.writeFileSync(reportPath, `${JSON.stringify({ submittedAt: new Date().toISOString(), keyLocation, urls }, null, 2)}\n`);
  console.log(`[indexnow] Report: ${reportPath}`);
}

main().catch((error) => {
  console.error("[indexnow]", error instanceof Error ? error.message : error);
  process.exit(1);
});
