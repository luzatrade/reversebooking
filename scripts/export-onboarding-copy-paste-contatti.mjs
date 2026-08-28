/**
 * Export tab-separated per copia/incolla (Excel, Google Sheets).
 * Colonne: Nome | Email | URL HotelsDrop | Cellulare
 * Solo numeri mobile italiani (+39 3xx); i fissi non vengono inseriti.
 * Solo strutture con email e cellulare valido.
 *
 * Usage:
 *   node scripts/export-onboarding-copy-paste-contatti.mjs
 *   node scripts/export-onboarding-copy-paste-contatti.mjs --with-email-only
 *     (include righe con email anche senza cellulare — colonna cellulare vuota)
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { createClient } from "@supabase/supabase-js";

const withEmailOnly = process.argv.includes("--with-email-only");

function norm(v) {
  const s = (v ?? "").toString().trim();
  return s.length ? s : null;
}

/** Italia: cellulare inizia con 3 (no 0 area fisso). */
function isMobilePhone(phone) {
  if (!phone?.trim()) return false;
  let d = phone.replace(/\D/g, "");
  if (d.startsWith("39") && d.length > 10) d = d.slice(2);
  if (d.startsWith("0")) return false;
  return d.length >= 9 && d.length <= 11 && d.startsWith("3");
}

function formatMobile(phone) {
  let d = phone.replace(/\D/g, "");
  if (d.startsWith("39") && d.length > 10) d = d.slice(2);
  if (d.length === 10 && d.startsWith("3")) return `+39 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`;
  return phone.trim();
}

function hotelsdropUrl(row) {
  const slug = norm(row.slug);
  if (!slug) return null;
  return `https://www.hotelsdrop.com/hotel/${slug}`;
}

function escCell(v) {
  const s = v == null ? "" : String(v);
  return s.replace(/\t/g, " ").replace(/\r?\n/g, " ");
}

async function main() {
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  const rows = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await sb
      .from("onboarding_hotels")
      .select("nome, email, phone, website, slug")
      .order("city_name")
      .order("nome")
      .range(from, from + 999);
    if (error) throw error;
    if (!data?.length) break;
    rows.push(...data);
    if (data.length < 1000) break;
  }

  const out = [];
  for (const row of rows) {
    const email = norm(row.email);
    if (!email) continue;
    const url = hotelsdropUrl(row);
    if (!url) continue;
    const mobile = isMobilePhone(row.phone) ? formatMobile(row.phone) : null;
    if (!withEmailOnly && !mobile) continue;
    out.push({
      nome: norm(row.nome) ?? "",
      email,
      url,
      cellulare: mobile ?? "",
    });
  }

  const header = ["Nome struttura", "Email", "URL HotelsDrop", "Cellulare"];
  const lines = [
    header.join("\t"),
    ...out.map((r) => [escCell(r.nome), escCell(r.email), escCell(r.url), escCell(r.cellulare)].join("\t")),
  ];
  const tsv = lines.join("\n") + "\n";
  const outPath = resolve(__dirname, "../data/onboarding-copy-paste-contatti.tsv");
  writeFileSync(outPath, "\uFEFF" + tsv, "utf8");

  console.log(`Export ${out.length} righe → ${outPath}`);
  console.log(`(solo email + cellulare; fissi esclusi)`);
  if (withEmailOnly) console.log("Modalità --with-email-only: incluse anche righe senza cellulare");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
