/**
 * Coda traduzioni EN per strutture onboarding (description IT → description_en).
 *
 * Usage:
 *   node scripts/translate-onboarding-descriptions.mjs list [--limit 50]
 *   node scripts/translate-onboarding-descriptions.mjs apply translations.json
 *
 * File apply: [{ "id": "uuid", "description_en": "English text..." }, ...]
 * Dopo che l'agente (o tu) traduce l'output di `list`, salva il JSON e lancia `apply`.
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });

function parseLimit(argv) {
  const idx = argv.indexOf("--limit");
  if (idx === -1) return 50;
  const value = Number(argv[idx + 1]);
  return Number.isFinite(value) && value > 0 ? Math.min(value, 200) : 50;
}

async function listNeedingTranslation(limit) {
  const { data, error } = await sb
    .from("onboarding_hotels")
    .select("id, nome, city_name, description, description_en")
    .not("description", "is", null)
    .or("description_en.is.null,description_en.eq.")
    .order("updated_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  const rows = (data ?? []).filter((row) => {
    const it = String(row.description ?? "").trim();
    const en = String(row.description_en ?? "").trim();
    return it.length > 0 && en.length === 0;
  });

  console.log(JSON.stringify({ count: rows.length, items: rows }, null, 2));
}

async function applyTranslations(items) {
  if (!Array.isArray(items) || items.length === 0) {
    console.error("Nessuna traduzione da applicare.");
    process.exit(1);
  }

  let applied = 0;
  for (const item of items) {
    const id = String(item.id ?? "").trim();
    const descriptionEn = String(item.description_en ?? "").trim();
    if (!id || !descriptionEn) continue;

    const { error: updateError } = await sb
      .from("onboarding_hotels")
      .update({ description_en: descriptionEn })
      .eq("id", id);
    if (updateError) throw updateError;

    const { error: syncError } = await sb
      .from("hotel_accounts")
      .update({ description_en: descriptionEn })
      .eq("onboarding_hotel_id", id);
    if (syncError) throw syncError;

    applied += 1;
    console.log(`✓ ${id} · ${descriptionEn.slice(0, 60)}${descriptionEn.length > 60 ? "…" : ""}`);
  }

  console.log(`\nApplicate ${applied} traduzioni EN.`);
}

const [command, ...rest] = process.argv.slice(2);

if (command === "list") {
  await listNeedingTranslation(parseLimit(rest));
} else if (command === "apply") {
  const filePath = rest[0];
  if (!filePath) {
    console.error("Usage: node scripts/translate-onboarding-descriptions.mjs apply translations.json");
    process.exit(1);
  }
  const raw = readFileSync(resolve(process.cwd(), filePath), "utf8");
  const parsed = JSON.parse(raw);
  const items = Array.isArray(parsed) ? parsed : parsed.items;
  await applyTranslations(items);
} else {
  console.error(`Comando sconosciuto: ${command ?? "(vuoto)"}
Usage:
  node scripts/translate-onboarding-descriptions.mjs list [--limit 50]
  node scripts/translate-onboarding-descriptions.mjs apply translations.json`);
  process.exit(1);
}
