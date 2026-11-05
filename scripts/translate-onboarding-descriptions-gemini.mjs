/**
 * Traduce description → description_en per strutture onboarding (Gemini).
 *
 *   GEMINI_API_KEY=... node scripts/translate-onboarding-descriptions-gemini.mjs
 *   ... --dry-run
 *   ... --apply
 */
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { geminiGenerateContent } from "./lib/gemini-client.mjs";
import { buildEnglishSeoPrompt, parseJsonField } from "./lib/seo-description-prompt.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

if (!process.env.GEMINI_API_KEY?.trim()) {
  process.env.GEMINI_API_KEY =
    process.env.geminiapi?.trim() || process.env.apigeminigoogle?.trim() || "";
}

const APPLY = process.argv.includes("--apply");
const DRY_RUN = process.argv.includes("--dry-run") || !APPLY;
const LIMIT = (() => {
  const idx = process.argv.indexOf("--limit");
  if (idx === -1) return 200;
  const n = Number(process.argv[idx + 1]);
  return Number.isFinite(n) && n > 0 ? n : 200;
})();
const DELAY_MS = Number(process.env.GEMINI_DELAY_MS ?? 350);
const CONCURRENCY = 3;

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

const { data, error } = await sb
  .from("onboarding_hotels")
  .select("id, nome, city_name, description, description_en")
  .not("description", "is", null)
  .or("description_en.is.null,description_en.eq.")
  .order("updated_at", { ascending: false })
  .limit(LIMIT);

if (error) throw error;

const rows = (data ?? []).filter((row) => {
  const it = String(row.description ?? "").trim();
  const en = String(row.description_en ?? "").trim();
  return it.length >= 40 && en.length === 0;
});

console.log(`Strutture da tradurre: ${rows.length}${DRY_RUN ? " (dry-run)" : ""}`);

async function translateOne(row) {
  const { system, user } = buildEnglishSeoPrompt(row, row.description);
  const raw = await geminiGenerateContent({ system, user, temperature: 0.4, maxOutputTokens: 900 });
  const parsed = parseJsonField(raw, "description_en");
  const descriptionEn = String(parsed ?? "").trim();
  if (descriptionEn.length < 40) throw new Error("Traduzione troppo corta");
  return descriptionEn;
}

let applied = 0;
let failed = 0;

for (let i = 0; i < rows.length; i += CONCURRENCY) {
  const chunk = rows.slice(i, i + CONCURRENCY);
  await Promise.all(
    chunk.map(async (row) => {
      try {
        const descriptionEn = await translateOne(row);
        console.log(`✓ ${row.nome} (${row.city_name}) — ${descriptionEn.length} char`);
        if (!DRY_RUN) {
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
    }),
  );
  if (i + CONCURRENCY < rows.length) await sleep(DELAY_MS);
}

console.log(`\nFatto: ${DRY_RUN ? "0" : applied} applicate, ${failed} errori`);
