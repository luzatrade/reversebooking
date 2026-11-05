/**
 * Backfill email da siti ufficiali per hotel in blocchi missing-descriptions.
 *
 * Usage:
 *   node scripts/backfill-block-emails.mjs --from 1 --to 17
 *   node scripts/backfill-block-emails.mjs --block 018
 *   node scripts/backfill-block-emails.mjs --from 1 --to 17 --dry-run
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { fetchContactsFromWebsite } from "./lib/onboarding-website-contacts.mjs";
import { fetchEmailFromWebsite, normalizePublicEmail } from "./lib/onboarding-email.mjs";

const OUT_DIR = resolve(__dirname, "../data/gemini-responses");
const DELAY_MS = 250;

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  const block = get("--block");
  const from = get("--from") ? Number.parseInt(get("--from"), 10) : block ? Number.parseInt(block, 10) : null;
  const to = get("--to") ? Number.parseInt(get("--to"), 10) : block ? from : null;
  if (!from || !to) {
    console.error("Usage: --from N --to M  oppure  --block NNN");
    process.exit(1);
  }
  return { from, to, dryRun: process.argv.includes("--dry-run") };
}

function padBlock(n) {
  return String(n).padStart(3, "0");
}

function loadBlockHotels(blockNum) {
  const path = resolve(__dirname, `../data/missing-descriptions/blocks/block-${padBlock(blockNum)}.json`);
  if (!existsSync(path)) return null;
  const block = JSON.parse(readFileSync(path, "utf8"));
  return block.hotels ?? [];
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

  const { createClient } = await import("@supabase/supabase-js");
  const sb = createClient(url, key, { auth: { persistSession: false } });

  const summary = {
    blocks: `${padBlock(from)}-${padBlock(to)}`,
    dryRun,
    totalHotels: 0,
    alreadyHadEmail: 0,
    noWebsite: 0,
    notFound: 0,
    scrapedFound: 0,
    dbUpdated: 0,
    errors: 0,
    byBlock: [],
  };
  const allDetails = [];

  for (let b = from; b <= to; b++) {
    const hotels = loadBlockHotels(b);
    if (!hotels?.length) {
      console.log(`[block ${padBlock(b)}] file missing or empty — skip`);
      continue;
    }

    const slugs = hotels.map((h) => h.slug);
    const { data: rows, error } = await sb
      .from("onboarding_hotels")
      .select("id, slug, nome, email, website")
      .in("slug", slugs);
    if (error) throw error;
    const bySlug = Object.fromEntries((rows ?? []).map((r) => [r.slug, r]));

    const blockStats = {
      block: padBlock(b),
      hotels: hotels.length,
      updated: 0,
      notFound: 0,
      alreadyHad: 0,
      noWebsite: 0,
    };

    console.log(`\n=== Blocco ${padBlock(b)} (${hotels.length} strutture) ===`);
    summary.totalHotels += hotels.length;

    for (let i = 0; i < hotels.length; i++) {
      const h = hotels[i];
      const db = bySlug[h.slug];
      if (!db) {
        console.log(`  [${i + 1}] ${h.slug} — non in DB`);
        continue;
      }

      if (db.email?.trim()) {
        summary.alreadyHadEmail++;
        blockStats.alreadyHad++;
        continue;
      }

      const website = db.website?.trim();
      if (!website) {
        summary.noWebsite++;
        blockStats.noWebsite++;
        continue;
      }

      const { email, pages } = await resolveEmail(website);
      if (!email) {
        summary.notFound++;
        blockStats.notFound++;
        allDetails.push({ block: padBlock(b), slug: h.slug, status: "not_found", website });
        continue;
      }

      summary.scrapedFound++;
      if (dryRun) {
        console.log(`  [dry] ${h.slug} → ${email}`);
        blockStats.updated++;
        allDetails.push({ block: padBlock(b), slug: h.slug, status: "dry_run", email });
      } else {
        const { error: upErr } = await sb.from("onboarding_hotels").update({ email }).eq("id", db.id);
        if (upErr) {
          summary.errors++;
          console.log(`  ERR ${h.slug}: ${upErr.message}`);
          allDetails.push({ block: padBlock(b), slug: h.slug, status: "error", email, err: upErr.message });
        } else {
          summary.dbUpdated++;
          blockStats.updated++;
          console.log(`  ✓ ${h.slug} → ${email}`);
          allDetails.push({ block: padBlock(b), slug: h.slug, status: "updated", email, pages });
        }
      }

      await new Promise((r) => setTimeout(r, DELAY_MS));
    }

    summary.byBlock.push(blockStats);
    console.log(
      `  Blocco ${padBlock(b)}: aggiornate ${blockStats.updated}, già ok ${blockStats.alreadyHad}, no sito ${blockStats.noWebsite}, non trovate ${blockStats.notFound}`,
    );
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const outPath = resolve(OUT_DIR, `block-${padBlock(from)}-${padBlock(to)}-email-backfill-report.json`);
  writeFileSync(outPath, JSON.stringify({ summary, details: allDetails }, null, 2) + "\n");

  console.log("\n=== TOTALE ===");
  console.log(JSON.stringify(summary, null, 2));
  console.log(`Report: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
