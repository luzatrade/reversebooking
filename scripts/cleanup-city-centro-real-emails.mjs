/**
 * Centro città / zona: solo strutture con email reale.
 *
 * Usage:
 *   node scripts/cleanup-city-centro-real-emails.mjs --comune Venezia
 *   node scripts/cleanup-city-centro-real-emails.mjs --comune Venezia --zone mestre
 *   node scripts/cleanup-city-centro-real-emails.mjs --comune Venezia --zone all
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

const CITY_ZONES = {
  Milano: { centro: { lat: 45.4642, lng: 9.19, radiusM: 2800 } },
  Venezia: {
    centro: { lat: 45.4343, lng: 12.3388, radiusM: 2000 },
    mestre: { lat: 45.4935, lng: 12.2424, radiusM: 1800 },
  },
};

const comuneFlag = process.argv.indexOf("--comune");
const zoneFlag = process.argv.indexOf("--zone");
const comuneName =
  comuneFlag !== -1 && process.argv[comuneFlag + 1] && !process.argv[comuneFlag + 1].startsWith("--")
    ? process.argv[comuneFlag + 1]
    : null;
const zoneName =
  zoneFlag !== -1 && process.argv[zoneFlag + 1] && !process.argv[zoneFlag + 1].startsWith("--")
    ? process.argv[zoneFlag + 1]
    : "centro";

if (!comuneName || !CITY_ZONES[comuneName]) {
  console.error(`Servono --comune con uno di: ${Object.keys(CITY_ZONES).join(", ")}`);
  process.exit(1);
}

const zones = CITY_ZONES[comuneName];
if (zoneName === "all") {
  if (!zones.centro || !zones.mestre) {
    console.error(`--zone all non disponibile per ${comuneName}`);
    process.exit(1);
  }
} else if (!zones[zoneName]) {
  console.error(`--zone deve essere uno di: ${Object.keys(zones).join(", ")}, all`);
  process.exit(1);
}

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

function inZone(row, zone) {
  if (row.lat == null || row.lng == null) return false;
  return haversineMeters(zone.lat, zone.lng, Number(row.lat), Number(row.lng)) <= zone.radiusM;
}

function inSelectedZones(row) {
  if (zoneName === "all") {
    return inZone(row, zones.centro) || inZone(row, zones.mestre);
  }
  return inZone(row, zones[zoneName]);
}

function zoneLabel(row) {
  if (zoneName !== "all") return zoneName;
  if (inZone(row, zones.centro)) return "centro";
  if (zones.mestre && inZone(row, zones.mestre)) return "mestre";
  return "unknown";
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

async function runZoneCleanup(sb, rows, report) {
  const area = (rows ?? []).filter(inSelectedZones);
  report.totalCentro += area.length;

  const label =
    zoneName === "all" ? `${comuneName} (centro + Mestre)` : `${comuneName} ${zoneName}`;
  console.log(`${label}: ${area.length} strutture (dryRun=${dryRun})\n`);

  for (const row of area) {
    let email = normalizePublicEmail(row.email);
    const website = row.website?.trim() || null;
    let real = email && isRealOnboardingEmail(email, website);

    if (!real) {
      if (website) {
        console.log(`  scrape ${row.slug ?? row.nome} …`);
        try {
          const scraped = await resolveEmail(website, email);
          if (scraped && isRealOnboardingEmail(scraped, website)) {
            email = scraped;
            real = true;
            if (!dryRun) {
              await sb.from("onboarding_hotels").update({ email }).eq("id", row.id);
            }
            report.updatedEmail.push({
              zone: zoneLabel(row),
              slug: row.slug,
              nome: row.nome,
              email,
              website,
            });
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
      report.kept.push({ zone: zoneLabel(row), slug: row.slug, nome: row.nome, email, website });
      continue;
    }

    const { data: full } = await sb
      .from("onboarding_hotels")
      .select("claimed_by, status")
      .eq("id", row.id)
      .maybeSingle();
    if (full?.claimed_by) {
      report.skippedClaimed.push({ slug: row.slug, nome: row.nome, reason: "claimed" });
      console.log(`  ~ skip delete (claimed): ${row.slug}`);
      continue;
    }

    console.log(`  DELETE ${row.slug ?? "∅"} (${row.nome}) — no real email`);
    report.deleted.push({
      zone: zoneLabel(row),
      slug: row.slug,
      nome: row.nome,
      oldEmail: row.email,
      website,
    });
    if (!dryRun) {
      const { error: delErr } = await sb.from("onboarding_hotels").delete().eq("id", row.id);
      if (delErr) console.log(`  ERR delete: ${delErr.message}`);
    }
  }
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env missing");

  const sb = createClient(url, key, { auth: { persistSession: false } });
  const { data: rows, error } = await sb
    .from("onboarding_hotels")
    .select("id, slug, nome, email, website, phone, lat, lng, indirizzo, main_photo_url, place_id")
    .ilike("city_name", comuneName);
  if (error) throw error;

  const report = {
    comune: comuneName,
    zone: zoneName,
    dryRun,
    totalCentro: 0,
    kept: [],
    updatedEmail: [],
    deleted: [],
    skippedClaimed: [],
  };

  await runZoneCleanup(sb, rows, report);

  const slugCity = comuneName.toLowerCase().replace(/\s+/g, "-");
  const zoneSuffix = zoneName === "centro" ? "centro" : zoneName === "all" ? "centro-mestre" : zoneName;
  const outPath = resolve(__dirname, `../data/${slugCity}-${zoneSuffix}-real-emails-report.json`);
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
