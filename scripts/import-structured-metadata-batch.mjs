/**
 * Import metadata from structured Gemini cards (indirizzo, website ufficiale, city).
 * Does NOT touch description / description_en.
 *
 * Usage:
 *   node scripts/import-structured-metadata-batch.mjs --file data/gemini-responses/block-631-665-metadata.json
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { normalizePublicEmail, isSuspiciousOnboardingEmail } = await import("./lib/onboarding-email.mjs");

const AGGREGATOR_FRAGMENTS = [
  "booking.com",
  "airbnb.com",
  "all.accor.com",
  "accor.com",
  "romeit.cyou",
  "facebook.com",
  "m.facebook.com",
  "staycentral",
  "roomsit.cyou",
  "directy.eu",
  "beb.it/",
  "gctravel.it",
  "agrigento-templi.it",
  ".org.es/",
  ".com.es/",
  "prolocomaccagno.it/albergo",
];

function isSuspiciousWebsite(url) {
  if (!url?.trim()) return true;
  const lower = url.toLowerCase();
  return AGGREGATOR_FRAGMENTS.some((f) => lower.includes(f));
}

function parseArgs() {
  const i = process.argv.indexOf("--file");
  if (i === -1 || !process.argv[i + 1]) {
    console.error("Usage: node scripts/import-structured-metadata-batch.mjs --file meta.json");
    process.exit(1);
  }
  return { file: resolve(process.cwd(), process.argv[i + 1]) };
}

async function resolveCityIstat(cityName) {
  if (!cityName) return null;
  const { createClient } = await import("@supabase/supabase-js");
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });
  const { data } = await sb.from("comuni_italiani").select("codice_istat, nome").ilike("nome", cityName).maybeSingle();
  return data?.codice_istat ?? null;
}

async function main() {
  const { file } = parseArgs();
  const rows = JSON.parse(readFileSync(file, "utf8"));
  const { createClient } = await import("@supabase/supabase-js");
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  let ok = 0;
  let skip = 0;
  let websiteSkipped = 0;

  for (const [i, h] of rows.entries()) {
    console.log(`[${i + 1}/${rows.length}] ${h.slug}`);
    const { data: row, error: fe } = await sb
      .from("onboarding_hotels")
      .select("id, slug, nome, indirizzo, website, city_name")
      .eq("slug", h.slug)
      .maybeSingle();
    if (fe) throw fe;
    if (!row) {
      console.log("  SKIP: slug non in DB");
      skip++;
      continue;
    }

    const patch = {};
    if (h.indirizzo) patch.indirizzo = h.indirizzo;
    if (h.city && h.city !== row.city_name) {
      patch.city_name = h.city;
      const istat = await resolveCityIstat(h.city);
      if (istat) patch.city_istat = istat;
    }
    if (h.website && !isSuspiciousWebsite(h.website)) {
      if (!row.website || isSuspiciousWebsite(row.website)) patch.website = h.website;
    } else if (h.website) {
      websiteSkipped++;
      console.log(`  ~ website aggregatore ignorato: ${h.website.slice(0, 50)}…`);
    }

    if (h.email) {
      const email = normalizePublicEmail(h.email);
      const websiteForCheck = patch.website ?? row.website ?? h.website;
      const websiteIsAggregator = h.website && isSuspiciousWebsite(h.website);
      if (
        email &&
        !websiteIsAggregator &&
        !isSuspiciousOnboardingEmail(email, websiteForCheck) &&
        !row.email?.trim()
      ) {
        patch.email = email;
      } else if (email && (websiteIsAggregator || isSuspiciousOnboardingEmail(email, websiteForCheck))) {
        console.log(`  ~ email sospetta ignorata: ${email}`);
      }
    }

    if (Object.keys(patch).length === 0) {
      console.log("  — nessun aggiornamento");
      skip++;
      continue;
    }

    const { error: upErr } = await sb.from("onboarding_hotels").update(patch).eq("id", row.id);
    if (upErr) throw upErr;
    ok++;
    console.log(`  ✓ ${Object.keys(patch).join(", ")}`);
  }

  console.log(`\nAggiornati: ${ok} | Saltati: ${skip} | Website aggregatore ignorati: ${websiteSkipped}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
