/**
 * Importa descrizioni SEO da risposta Gemini (blocco N).
 *
 * Accetta:
 * - Nuovo formato: { "updates": [...], "not_found": [...] }
 * - Legacy: array di hotel in updates.json
 *
 * Usage:
 *   node scripts/import-gemini-block-descriptions.mjs --file data/gemini-responses/block-001-response.json
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname, basename } from "path";
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
    console.error("Servono --file path/to/response.json");
    process.exit(1);
  }
  return {
    file: resolve(process.cwd(), process.argv[i + 1]),
    withContacts: process.argv.includes("--with-contacts"),
  };
}

function parseGeminiPayload(raw) {
  if (Array.isArray(raw)) {
    return { updates: raw, not_found: [] };
  }
  if (raw && typeof raw === "object") {
    return {
      updates: Array.isArray(raw.updates) ? raw.updates : [],
      not_found: Array.isArray(raw.not_found) ? raw.not_found : [],
    };
  }
  throw new Error("Formato JSON non valido: array o { updates, not_found }");
}

function hasVerifiedDescription(hotel) {
  const it = (hotel.description ?? "").trim();
  const en = (hotel.description_en ?? "").trim();
  return it.length > 0 || en.length > 0;
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
  if (!hasVerifiedDescription(hotel)) {
    console.warn(`  SKIP: nessuna descrizione verificata per ${hotel.slug}`);
    return null;
  }

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

  const patch = {};
  if ((hotel.description ?? "").trim()) patch.description = hotel.description.trim();
  if ((hotel.description_en ?? "").trim()) patch.description_en = hotel.description_en.trim();
  if (hotel.indirizzo?.trim()) patch.indirizzo = hotel.indirizzo.trim();

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

function writeNotFoundReport(sourceFile, notFound) {
  if (!notFound.length) return null;

  const outDir = resolve(__dirname, "../data/gemini-responses");
  mkdirSync(outDir, { recursive: true });

  const base = basename(sourceFile).replace(/\.json$/i, "");
  const outPath = resolve(outDir, `${base}-not-found.json`);
  writeFileSync(
    outPath,
    JSON.stringify(
      {
        sourceFile: basename(sourceFile),
        exportedAt: new Date().toISOString(),
        count: notFound.length,
        not_found: notFound,
      },
      null,
      2,
    ),
    "utf8",
  );
  return outPath;
}

async function main() {
  const { file, withContacts } = parseArgs();
  const raw = JSON.parse(readFileSync(file, "utf8"));
  const { updates, not_found } = parseGeminiPayload(raw);

  console.log(
    `Import Gemini: ${updates.length} in updates, ${not_found.length} in not_found` +
      (withContacts ? " (con contatti)" : "") +
      `\nFile: ${file}\n`,
  );

  let ok = 0;
  let skip = 0;
  for (const [i, hotel] of updates.entries()) {
    console.log(`[${i + 1}/${updates.length}] ${hotel.slug}`);
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

  const notFoundPath = writeNotFoundReport(file, not_found);
  console.log(`\nCompletati: ${ok} | Saltati: ${skip}`);
  if (not_found.length) {
    console.log(`Non trovati / senza testo verificabile: ${not_found.length}`);
    if (notFoundPath) console.log(`Report: ${notFoundPath}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
