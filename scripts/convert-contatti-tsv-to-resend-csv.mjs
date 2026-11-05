/**
 * Converte onboarding-copy-paste-contatti.tsv → CSV per import Resend Audiences.
 *
 * Colonne: email, first_name, profile_url
 * Usage: node scripts/convert-contatti-tsv-to-resend-csv.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function escCsv(v) {
  const s = String(v ?? "").replace(/\r/g, "").trim();
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

const tsvPath = resolve(__dirname, "../data/onboarding-copy-paste-contatti.tsv");
const raw = readFileSync(tsvPath, "utf8").replace(/^\uFEFF/, "");
const lines = raw.split(/\r?\n/).filter(Boolean);

const rows = [];
for (let i = 1; i < lines.length; i++) {
  const parts = lines[i].split("\t");
  if (parts.length < 3) continue;
  const [nome, email, url, phone] = parts;
  if (!email?.trim() || !url?.trim()) continue;
  rows.push({
    email: email.trim(),
    first_name: nome?.trim() ?? "",
    profile_url: url.trim(),
    phone: phone?.trim() ?? "",
  });
}

const header = ["email", "first_name", "profile_url"];
const csvLines = [
  header.join(","),
  ...rows.map((r) => [escCsv(r.email), escCsv(r.first_name), escCsv(r.profile_url)].join(",")),
];

const csvPath = resolve(__dirname, "../data/onboarding-resend-outreach.csv");
writeFileSync(csvPath, `\uFEFF${csvLines.join("\n")}\n`, "utf8");

// Optional: full CSV with phone for your records (not required by Resend)
const fullHeader = ["email", "first_name", "profile_url", "phone"];
const fullLines = [
  fullHeader.join(","),
  ...rows.map((r) =>
    [escCsv(r.email), escCsv(r.first_name), escCsv(r.profile_url), escCsv(r.phone)].join(","),
  ),
];
const fullPath = resolve(__dirname, "../data/onboarding-resend-outreach-with-phone.csv");
writeFileSync(fullPath, `\uFEFF${fullLines.join("\n")}\n`, "utf8");

console.log(`Resend CSV: ${rows.length} righe → ${csvPath}`);
console.log(`Con telefono: ${fullPath}`);
