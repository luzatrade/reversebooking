#!/usr/bin/env node
/**
 * IndexNow for entity pages (home, about, glossary, guides, top hubs).
 * Uso: node scripts/submit-indexnow-entity.mjs [--dry-run]
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dryRun = process.argv.includes("--dry-run");
const origin = (process.env.SITE_ORIGIN ?? "https://www.hotelsdrop.com").replace(/\/$/, "");

const INTERNAL_PATHS = [
  "/",
  "/cos-e-hotelsdrop",
  "/glossario",
  "/guide/reverse-booking",
  "/guide/viaggi-di-gruppo",
  "/guide/agenzie-viaggio",
  "/destinazioni",
  "/destinazioni/roma",
  "/destinazioni/milano",
  "/destinazioni/firenze",
  "/destinazioni/napoli",
  "/destinazioni/venezia",
  "/destinazioni/bologna",
  "/destinazioni/torino",
  "/destinazioni/palermo",
];

function loadKey() {
  const envKey = process.env.INDEXNOW_API_KEY?.trim();
  if (envKey) return envKey;
  try {
    const txt = readFileSync(resolve(__dirname, "../public/6cfc69986d924392bf34861a5187da1d.txt"), "utf8").trim();
    return txt || null;
  } catch {
    return null;
  }
}

function urlsForPath(internal) {
  if (internal === "/") return [`${origin}/it`, `${origin}/en`];
  if (internal.startsWith("/destinazioni/")) {
    const slug = internal.slice("/destinazioni/".length);
    return [`${origin}/it/destinazioni/${slug}`, `${origin}/en/destinations/${slug}`];
  }
  if (internal.startsWith("/guide/")) {
    const slug = internal.slice("/guide/".length);
    const enSlug = slug === "viaggi-di-gruppo" ? "group-travel" : slug === "agenzie-viaggio" ? "travel-agencies" : slug;
    return [`${origin}/it/guide/${slug}`, `${origin}/en/guides/${enSlug}`];
  }
  if (internal === "/destinazioni") return [`${origin}/it/destinazioni`, `${origin}/en/destinations`];
  if (internal === "/glossario") return [`${origin}/it/glossario`, `${origin}/en/glossary`];
  return [`${origin}/it${internal}`, `${origin}/en${internal}`];
}

const urls = [...new Set(INTERNAL_PATHS.flatMap(urlsForPath))];
const key = loadKey();
const keyLocation = `${origin}/${key}.txt`;

if (!key) {
  console.error("[indexnow-entity] Missing INDEXNOW_API_KEY");
  process.exit(1);
}

console.log(`[indexnow-entity] ${urls.length} URL`);
if (dryRun) {
  urls.forEach((u) => console.log(" ", u));
  process.exit(0);
}

const body = JSON.stringify({ host: new URL(origin).host, key, keyLocation, urlList: urls });
const endpoints = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

for (const endpoint of endpoints) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body,
  });
  console.log(`${endpoint} → ${res.status}`);
}