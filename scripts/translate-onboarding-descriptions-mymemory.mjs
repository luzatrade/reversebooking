/**
 * Traduce description IT → description_en via MyMemory (fallback se Gemini bloccato).
 *
 *   node scripts/translate-onboarding-descriptions-mymemory.mjs --apply
 */
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const APPLY = process.argv.includes("--apply");
const DELAY_MS = 1200;

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(url, key, { auth: { persistSession: false } });

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function translateText(text) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  const out = [];
  for (const paragraph of paragraphs) {
    let remaining = paragraph.trim();
    while (remaining.length > 0) {
      let slice = remaining.slice(0, 450);
      if (remaining.length > 450) {
        const cut = slice.lastIndexOf(". ");
        if (cut > 120) slice = slice.slice(0, cut + 1);
      }
      const q = encodeURIComponent(slice.trim());
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${q}&langpair=it|en`);
      const data = await res.json();
      if (data.responseStatus !== 200) {
        throw new Error(data.responseDetails || `HTTP ${data.responseStatus}`);
      }
      const translated = String(data.responseData?.translatedText ?? "").trim();
      if (translated.includes("MYMEMORY WARNING")) throw new Error(translated);
      out.push(translated);
      remaining = remaining.slice(slice.length).trim();
      await sleep(300);
    }
  }
  return out.join("\n\n");
}

const { data, error } = await sb
  .from("onboarding_hotels")
  .select("id, nome, description, description_en")
  .not("description", "is", null)
  .or("description_en.is.null,description_en.eq.")
  .limit(200);

if (error) throw error;

const rows = (data ?? []).filter((row) => {
  const it = String(row.description ?? "").trim();
  const en = String(row.description_en ?? "").trim();
  return it.length >= 40 && en.length === 0;
});

console.log(`Da tradurre: ${rows.length}${APPLY ? "" : " (dry-run)"}`);

let applied = 0;
let failed = 0;

for (const row of rows) {
  try {
    const descriptionEn = await translateText(String(row.description).trim());
    if (descriptionEn.length < 40) throw new Error("Traduzione troppo corta");
    console.log(`✓ ${row.nome} (${descriptionEn.length} char)`);
    if (APPLY) {
      const { error: upErr } = await sb
        .from("onboarding_hotels")
        .update({ description_en: descriptionEn })
        .eq("id", row.id);
      if (upErr) throw upErr;
      await sb.from("hotel_accounts").update({ description_en: descriptionEn }).eq("onboarding_hotel_id", row.id);
      applied += 1;
    }
  } catch (err) {
    failed += 1;
    console.warn(`✗ ${row.nome}: ${err instanceof Error ? err.message : err}`);
  }
  await sleep(DELAY_MS);
}

console.log(`\nFatto: ${APPLY ? applied : 0} applicate, ${failed} errori`);
