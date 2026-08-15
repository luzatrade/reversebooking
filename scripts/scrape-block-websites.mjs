/**
 * Scraping email da siti ufficiali per hotel nei blocchi missing-descriptions.
 *
 * Usage:
 *   node scripts/scrape-block-websites.mjs --from 261 --to 290
 *   node scripts/scrape-block-websites.mjs --from 291 --to 320 --dry-run
 *   node scripts/scrape-block-websites.mjs --from 261 --to 290 --force
 */

import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { fetchContactsFromWebsite } from "./lib/onboarding-website-contacts.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const BLOCKS_DIR = resolve(__dirname, "../data/missing-descriptions/blocks");
const LOGS_DIR = resolve(__dirname, "../logs");
const EMAIL_DELAY_MS = 250;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");
const fromIndex = args.indexOf("--from");
const toIndex = args.indexOf("--to");
const fromBlock = fromIndex >= 0 ? Number(args[fromIndex + 1]) : null;
const toBlock = toIndex >= 0 ? Number(args[toIndex + 1]) : null;

if (!Number.isFinite(fromBlock) || !Number.isFinite(toBlock) || fromBlock > toBlock) {
  console.error("Usage: node scripts/scrape-block-websites.mjs --from N --to M [--dry-run] [--force]");
  process.exit(1);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function loadBlockHotels(blockNum) {
  const blockId = String(blockNum).padStart(3, "0");
  const path = resolve(BLOCKS_DIR, `block-${blockId}.json`);
  const raw = JSON.parse(readFileSync(path, "utf8"));
  return (raw.hotels ?? []).map((hotel) => ({
    id: hotel.id,
    slug: hotel.slug,
    nome: hotel.nome,
    city_name: hotel.city_name,
  }));
}

async function fetchDbRow(slug) {
  const { data, error } = await sb
    .from("onboarding_hotels")
    .select("id, slug, nome, website, email")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function main() {
  mkdirSync(LOGS_DIR, { recursive: true });

  const report = {
    generatedAt: new Date().toISOString(),
    fromBlock,
    toBlock,
    dryRun,
    force,
    processed: 0,
    updated: 0,
    skippedHasEmail: 0,
    skippedNoWebsite: 0,
    skippedNotFound: 0,
    skippedNoEmailFound: 0,
    errors: 0,
    results: [],
  };

  console.log(`[scrape-block] blocks ${fromBlock}–${toBlock} dryRun=${dryRun} force=${force}`);

  for (let block = fromBlock; block <= toBlock; block += 1) {
    const hotels = loadBlockHotels(block);
    console.log(`\n[block ${String(block).padStart(3, "0")}] ${hotels.length} hotel`);

    for (const hotel of hotels) {
      report.processed += 1;

      try {
        const row = await fetchDbRow(hotel.slug);
        if (!row) {
          report.skippedNotFound += 1;
          report.results.push({ slug: hotel.slug, status: "not_found" });
          continue;
        }

        if (row.email?.trim() && !force) {
          report.skippedHasEmail += 1;
          report.results.push({ slug: hotel.slug, status: "skip_has_email", email: row.email });
          continue;
        }

        if (!row.website?.trim()) {
          report.skippedNoWebsite += 1;
          report.results.push({ slug: hotel.slug, status: "skip_no_website" });
          continue;
        }

        const contacts = await fetchContactsFromWebsite(row.website);
        if (!contacts.email) {
          report.skippedNoEmailFound += 1;
          report.results.push({
            slug: hotel.slug,
            status: "no_email_found",
            website: row.website,
            pages: contacts.pages,
          });
          await sleep(EMAIL_DELAY_MS);
          continue;
        }

        if (dryRun) {
          report.updated += 1;
          report.results.push({
            slug: hotel.slug,
            status: "dry_run",
            email: contacts.email,
            website: row.website,
            pages: contacts.pages,
          });
          console.log(`  [dry] ${hotel.slug} → ${contacts.email}`);
        } else {
          const { error: updateError } = await sb
            .from("onboarding_hotels")
            .update({ email: contacts.email })
            .eq("id", row.id);
          if (updateError) throw updateError;
          report.updated += 1;
          report.results.push({
            slug: hotel.slug,
            status: "updated",
            email: contacts.email,
            website: row.website,
            pages: contacts.pages,
          });
          console.log(`  ok ${hotel.slug} → ${contacts.email}`);
        }
      } catch (err) {
        report.errors += 1;
        const message = err instanceof Error ? err.message : String(err);
        report.results.push({ slug: hotel.slug, status: "error", error: message });
        console.log(`  err ${hotel.slug}: ${message}`);
      }

      await sleep(EMAIL_DELAY_MS);
    }
  }

  const reportName = `scrape-emails-${fromBlock}-${toBlock}.json`;
  const reportPath = resolve(LOGS_DIR, reportName);
  writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log("\n=== FINE ===");
  console.log(`Processati: ${report.processed}`);
  console.log(`Email nuove: ${report.updated}`);
  console.log(`Skip (già email): ${report.skippedHasEmail}`);
  console.log(`Skip (no sito): ${report.skippedNoWebsite}`);
  console.log(`Skip (email non trovata): ${report.skippedNoEmailFound}`);
  console.log(`Non trovati: ${report.skippedNotFound}`);
  console.log(`Errori: ${report.errors}`);
  console.log(`Report: ${reportPath}`);
}

main().catch((err) => {
  console.error("FATAL:", err.message ?? err);
  process.exit(1);
});
