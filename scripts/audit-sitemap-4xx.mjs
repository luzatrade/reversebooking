#!/usr/bin/env node
/**
 * Verifica URL della sitemap e segnala risposte 4xx/5xx.
 * Uso: node scripts/audit-sitemap-4xx.mjs [--origin https://www.hotelsdrop.com] [--sample 200]
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const originArg = args.find((a) => a.startsWith("--origin="))?.split("=")[1];
const sampleArg = Number.parseInt(args.find((a) => a.startsWith("--sample="))?.split("=")[1] ?? "0", 10);
const origin = (originArg ?? process.env.SITE_ORIGIN ?? "https://www.hotelsdrop.com").replace(/\/$/, "");

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  return { status: res.status, text: res.ok ? await res.text() : "" };
}

async function loadSitemapUrls() {
  const indexRes = await fetchText(`${origin}/sitemap.xml`);
  if (indexRes.status !== 200) throw new Error(`sitemap.xml → ${indexRes.status}`);
  const childLocs = [...indexRes.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const child of childLocs) {
    const part = await fetchText(child);
    if (part.status !== 200) {
      console.warn(`WARN child sitemap ${child} → ${part.status}`);
      continue;
    }
    urls.push(...[...part.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  }
  return urls;
}

function pickSample(urls, limit) {
  if (!limit || limit >= urls.length) return urls;
  const step = Math.max(1, Math.floor(urls.length / limit));
  const sample = [];
  for (let i = 0; i < urls.length && sample.length < limit; i += step) sample.push(urls[i]);
  return sample;
}

async function headStatus(url) {
  const res = await fetch(url, { method: "HEAD", redirect: "follow" });
  return res.status;
}

const urls = await loadSitemapUrls();
const targets = pickSample(urls, sampleArg);
console.log(`Origin: ${origin}`);
console.log(`Sitemap URLs: ${urls.length} (checking ${targets.length})`);

const bad = new Map();
for (let i = 0; i < targets.length; i += 1) {
  const url = targets[i];
  if (i > 0 && i % 100 === 0) process.stdout.write(`…${i}\n`);
  const status = await headStatus(url);
  if (status >= 400) {
    if (!bad.has(status)) bad.set(status, []);
    bad.get(status).push(url);
  }
}

if (!bad.size) {
  console.log("OK — nessun 4xx/5xx nel campione.");
  process.exit(0);
}

for (const [status, list] of bad) {
  console.log(`\n${status}: ${list.length}`);
  for (const url of list.slice(0, 30)) console.log(`  ${url}`);
}
process.exit(1);
