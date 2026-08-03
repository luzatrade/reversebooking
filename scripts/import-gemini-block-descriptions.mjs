/**
 * Importa descrizioni SEO da risposta Gemini (blocco N).
 * Usage: node scripts/import-gemini-block-descriptions.mjs --file data/gemini-responses/block-002-updates.json
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { isOnboardingSeoIndexable } = await import("./lib/seo-slug.mjs");

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

function parseArgs() {
  const i = process.argv.indexOf("--file");
  if (i === -1 || !process.argv[i + 1]) {
    console.error("Servono --file path/to/updates.json");
    process.exit(1);
  }
  return {
    file: resolve(process.cwd(), process.argv[i + 1]),
    withContacts: process.argv.includes("--with-contacts"),
  };
}

async function resolveCityIstat(cityName) {
  if (!cityName) return null;
  const { data } = await sb.from("comuni_italiani").select("codice_istat, nome").ilike("nome", cityName).maybeSingle();
  return data?.codice_istat ?? null;
}

async function resolveCanonicalCityName(cityName) {
  if (!cityName) return null;
  const { data } = await sb.from("comuni_italiani").select("nome").ilike("nome", cityName).maybeSingle();
  return data?.nome ?? cityName;
}

async function updateHotel(hotel, { withContacts }) {
  const { data: row, error: fetchErr } = await sb
    .from("onboarding_hotels")
    .select("id, nome, city_name, indirizzo, slug, status, main_photo_url, description, description_en")
    .eq("slug", hotel.slug)
    .maybeSingle();

  if (fetchErr) throw fetchErr;
  if (!row) {
    console.warn(`  SKIP: slug non trovato → ${hotel.slug}`);
    return null;
  }

  const cityName = hotel.city ? await resolveCanonicalCityName(hotel.city) : row.city_name;
  const cityIstat = hotel.city ? await resolveCityIstat(hotel.city) : undefined;

  const patch = {
    description: hotel.description,
    description_en: hotel.description_en,
    indirizzo: hotel.indirizzo ?? row.indirizzo,
  };
  if (withContacts) {
    if (hotel.phone) patch.phone = hotel.phone;
    if (hotel.email) patch.email = hotel.email;
  }
  if (cityName) patch.city_name = cityName;
  if (cityIstat) patch.city_istat = cityIstat;

  const seoRow = { ...row, ...patch };
  patch.seo_indexable = isOnboardingSeoIndexable(seoRow);

  const { data: updated, error } = await sb
    .from("onboarding_hotels")
    .update(patch)
    .eq("id", row.id)
    .select("id, nome, slug, seo_indexable, description, description_en, phone, email")
    .single();

  if (error) throw error;
  return updated;
}

async function main() {
  const { file, withContacts } = parseArgs();
  const hotels = JSON.parse(readFileSync(file, "utf8"));
  console.log(
    `Import Gemini descriptions: ${hotels.length} hotel da ${file}` +
      (withContacts ? " (con contatti)" : " (solo descrizioni + indirizzo)") +
      "\n"
  );

  let ok = 0;
  let skip = 0;
  for (const [i, hotel] of hotels.entries()) {
    console.log(`[${i + 1}/${hotels.length}] ${hotel.slug}`);
    try {
      const row = await updateHotel(hotel, { withContacts });
      if (!row) {
        skip++;
        continue;
      }
      ok++;
      console.log(`  ✓ ${row.nome} | SEO: ${row.seo_indexable}`);
      console.log(`  IT: ${(row.description ?? "").slice(0, 70)}…`);
    } catch (err) {
      console.error(`  ERRORE: ${err.message}`);
      process.exitCode = 1;
    }
  }
  console.log(`\nCompletati: ${ok} | Saltati: ${skip}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
