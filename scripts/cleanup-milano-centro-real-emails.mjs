/**
 * Milano centro: solo strutture con email reale. Scrapa siti, rimuove junk e cancella senza email.
 *
 * Usage:
 *   node scripts/cleanup-milano-centro-real-emails.mjs --dry-run
 *   node scripts/cleanup-milano-centro-real-emails.mjs
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { createClient } from "@supabase/supabase-js";
import { fetchContactsFromWebsite } from "./lib/onboarding-website-contacts.mjs";
import { fetchEmailFromWebsite, normalizePublicEmail } from "./lib/onboarding-email.mjs";
import { isRealOnboardingEmail } from "./lib/onboarding-email-quality.mjs";

const dryRun = process.argv.includes("--dry-run");
const DELAY_MS = 300;

const CENTRO = { lat: 45.4642, lng: 9.19, radiusM: 2800 };

function haversineMeters(lat1, lng1, lat2, lng2) {
  const toRad = (d) => (d * Math.PI) / 180;
  const R = 6371000;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function inCentro(row) {
  if (row.lat == null || row.lng == null) return false;
  return haversineMeters(CENTRO.lat, CENTRO.lng, Number(row.lat), Number(row.lng)) <= CENTRO.radiusM;
}

async function resolveEmail(website, current) {
  if (!website?.trim()) return normalizePublicEmail(current);
  const contacts = await fetchContactsFromWebsite(website);
  let email = contacts.email ? normalizePublicEmail(contacts.email) : null;
  if (!email) email = await fetchEmailFromWebsite(website);
  return email ? normalizePublicEmail(email) : null;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env missing");

  const sb = createClient(url, key, { auth: { persistSession: false } });
  const { data: rows, error } = await sb
    .from("onboarding_hotels")
    .select("id, slug, nome, email, website, phone, lat, lng, indirizzo, main_photo_url, place_id")
    .ilike("city_name", "Milano");
  if (error) throw error;

  const centro = (rows ?? []).filter(inCentro);
  const report = {
    dryRun,
    totalCentro: centro.length,
    kept: [],
    updatedEmail: [],
    deleted: [],
    skippedClaimed: [],
  };

  console.log(`Milano centro: ${centro.length} strutture (dryRun=${dryRun})\n`);

  for (const row of centro) {
    let email = normalizePublicEmail(row.email);
    const website = row.website?.trim() || null;
    let real = email && isRealOnboardingEmail(email, website);

    if (!real) {
      if (website) {
        console.log(`  scrape ${row.slug} …`);
        try {
          const scraped = await resolveEmail(website, email);
          if (scraped && isRealOnboardingEmail(scraped, website)) {
            email = scraped;
            real = true;
            if (!dryRun) {
              await sb.from("onboarding_hotels").update({ email }).eq("id", row.id);
            }
            report.updatedEmail.push({ slug: row.slug, nome: row.nome, email, website });
            console.log(`  ✓ email ${email}`);
          }
        } catch (err) {
          console.log(`  ! scrape err: ${err.message}`);
        }
        await sleep(DELAY_MS);
      }
    }

    if (email && !isRealOnboardingEmail(email, website)) {
      real = false;
      console.log(`  ✗ junk/non-verificata: ${row.nome} → ${email}`);
    }

    if (real && email) {
      report.kept.push({ slug: row.slug, nome: row.nome, email, website });
      continue;
    }

    // Non eliminare se claimed? check claimed_by
    const { data: full } = await sb.from("onboarding_hotels").select("claimed_by, status").eq("id", row.id).maybeSingle();
    if (full?.claimed_by) {
      report.skippedClaimed.push({ slug: row.slug, nome: row.nome, reason: "claimed" });
      console.log(`  ~ skip delete (claimed): ${row.slug}`);
      continue;
    }

    console.log(`  DELETE ${row.slug} (${row.nome}) — no real email`);
    report.deleted.push({ slug: row.slug, nome: row.nome, oldEmail: row.email, website });
    if (!dryRun) {
      const { error: delErr } = await sb.from("onboarding_hotels").delete().eq("id", row.id);
      if (delErr) console.log(`  ERR delete: ${delErr.message}`);
    }
  }

  const outPath = resolve(__dirname, "../data/milano-centro-real-emails-report.json");
  writeFileSync(outPath, JSON.stringify(report, null, 2) + "\n");

  console.log("\n=== TOTALE ===");
  console.log(`Mantenute (email reale): ${report.kept.length}`);
  console.log(`Email aggiornate: ${report.updatedEmail.length}`);
  console.log(`Eliminate: ${report.deleted.length}`);
  console.log(`Skipped (claimed): ${report.skippedClaimed.length}`);
  console.log(`Report: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
