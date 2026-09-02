/**
 * Backfill email da siti ufficiali per range di structureNumber (all-hotels.json, 1-based).
 *
 * Usage:
 *   node scripts/backfill-structure-range-emails.mjs --from 666 --to 700
 *   node scripts/backfill-structure-range-emails.mjs --from 631 --to 665
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { fetchContactsFromWebsite } from "./lib/onboarding-website-contacts.mjs";
import { fetchEmailFromWebsite, normalizePublicEmail } from "./lib/onboarding-email.mjs";

const OUT_DIR = resolve(__dirname, "../data/gemini-responses");
const DELAY_MS = 250;

const AGGREGATOR_FRAGMENTS = [
  "booking.com",
  "airbnb.com",
  "all.accor.com",
  "accor.com",
  "facebook.com",
  "directy.eu",
  "beb.it/",
  "gctravel.it",
  "agrigento-templi.it",
  ".org.es/",
  ".com.es/",
  "romeit.cyou",
  "roomsit.cyou",
];

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  const from = get("--from") ? Number.parseInt(get("--from"), 10) : null;
  const to = get("--to") ? Number.parseInt(get("--to"), 10) : null;
  if (!from || !to) {
    console.error("Usage: --from N --to M");
    process.exit(1);
  }
  return { from, to, dryRun: process.argv.includes("--dry-run") };
}

function isAggregatorWebsite(url) {
  if (!url?.trim()) return true;
  const lower = url.toLowerCase();
  return AGGREGATOR_FRAGMENTS.some((f) => lower.includes(f));
}

async function resolveEmail(website) {
  const contacts = await fetchContactsFromWebsite(website);
  let email = contacts.email;
  if (!email) email = await fetchEmailFromWebsite(website);
  return { email: email ? normalizePublicEmail(email) : null, pages: contacts.pages };
}

async function main() {
  const { from, to, dryRun } = parseArgs();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env missing");

  const allFile = JSON.parse(
    readFileSync(resolve(__dirname, "../data/n8n/missing-descriptions/all-hotels.json"), "utf8"),
  );
  const allHotels = allFile.hotels ?? allFile;
  const slice = allHotels.slice(from - 1, to).map((h, i) => ({ structureNumber: from + i, slug: h.slug }));

  const { createClient } = await import("@supabase/supabase-js");
  const sb = createClient(url, key, { auth: { persistSession: false } });

  const { data: rows, error } = await sb
    .from("onboarding_hotels")
    .select("id, slug, nome, email, website")
    .in("slug", slice.map((s) => s.slug));
  if (error) throw error;
  const bySlug = Object.fromEntries((rows ?? []).map((r) => [r.slug, r]));

  const summary = {
    range: `${from}-${to}`,
    dryRun,
    total: slice.length,
    alreadyHadEmail: 0,
    noWebsite: 0,
    aggregatorSkipped: 0,
    scrapedFound: 0,
    dbUpdated: 0,
    notFound: 0,
    errors: 0,
  };
  const details = [];

  console.log(`=== Strutture ${from}-${to} (${slice.length} hotel) ===\n`);

  for (const s of slice) {
    const db = bySlug[s.slug];
    if (!db) {
      console.log(`#${s.structureNumber} ${s.slug} — non in DB`);
      details.push({ structureNumber: s.structureNumber, slug: s.slug, status: "not_in_db" });
      continue;
    }

    if (db.email?.trim()) {
      summary.alreadyHadEmail++;
      continue;
    }

    const website = db.website?.trim();
    if (!website) {
      summary.noWebsite++;
      details.push({ structureNumber: s.structureNumber, slug: s.slug, status: "no_website" });
      continue;
    }

    if (isAggregatorWebsite(website)) {
      summary.aggregatorSkipped++;
      details.push({ structureNumber: s.structureNumber, slug: s.slug, status: "aggregator_skipped", website });
      continue;
    }

    const { email, pages } = await resolveEmail(website);
    if (!email) {
      summary.notFound++;
      console.log(`  #${s.structureNumber} ${s.slug} — non trovata (${website})`);
      details.push({ structureNumber: s.structureNumber, slug: s.slug, status: "not_found", website });
      await new Promise((r) => setTimeout(r, DELAY_MS));
      continue;
    }

    summary.scrapedFound++;
    if (dryRun) {
      console.log(`  [dry] #${s.structureNumber} ${s.slug} → ${email}`);
      details.push({ structureNumber: s.structureNumber, slug: s.slug, status: "dry_run", email, website });
    } else {
      const { error: upErr } = await sb.from("onboarding_hotels").update({ email }).eq("id", db.id);
      if (upErr) {
        summary.errors++;
        console.log(`  ERR #${s.structureNumber} ${s.slug}: ${upErr.message}`);
        details.push({ structureNumber: s.structureNumber, slug: s.slug, status: "error", email, err: upErr.message });
      } else {
        summary.dbUpdated++;
        console.log(`  ✓ #${s.structureNumber} ${s.slug} → ${email}`);
        details.push({ structureNumber: s.structureNumber, slug: s.slug, status: "updated", email, website, pages });
      }
    }

    await new Promise((r) => setTimeout(r, DELAY_MS));
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const outPath = resolve(OUT_DIR, `structures-${from}-${to}-email-backfill-report.json`);
  writeFileSync(outPath, JSON.stringify({ summary, details }, null, 2) + "\n");

  console.log("\n=== TOTALE ===");
  console.log(JSON.stringify(summary, null, 2));
  console.log(`Report: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
