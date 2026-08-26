/**
 * Export email pulite in batch da 150 (limite Aruba per messaggio).
 * Formato BCC: virgola + spazio — pronto copia/incolla in webmail Aruba.
 *
 * Usage:
 *   node scripts/export-aruba-email-paste.mjs
 *   node scripts/export-aruba-email-paste.mjs --source data/onboarding-resend-outreach.csv
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import { normalizePublicEmail } from "./lib/onboarding-email.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const BATCH_SIZE = 150;

const sourceArg = process.argv.find((a) => a.startsWith("--source="));
const sourcePath = sourceArg
  ? resolve(ROOT, sourceArg.slice("--source=".length))
  : resolve(ROOT, "data/onboarding-resend-outreach.csv");

const outDir = resolve(ROOT, "data/outreach-aruba-paste");

function parseCsvEmails(csvText) {
  const text = csvText.replace(/^\uFEFF/, "");
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const header = lines[0].split(",");
  const emailIdx = header.indexOf("email");
  if (emailIdx === -1) throw new Error("CSV senza colonna email");
  const emails = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const firstComma = line.indexOf(",");
    const raw = emailIdx === 0 ? line.slice(0, firstComma === -1 ? line.length : firstComma) : line.split(",")[emailIdx];
    emails.push(raw?.trim() ?? "");
  }
  return emails;
}

function cleanForPaste(raw) {
  let s = String(raw ?? "").trim();
  if (!s) return null;
  try {
    s = decodeURIComponent(s.replace(/\+/g, "%20"));
  } catch {
    /* keep original */
  }
  s = s.replace(/^\/+/, "").trim();
  return normalizePublicEmail(s);
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function main() {
  const csv = readFileSync(sourcePath, "utf8");
  const rawEmails = parseCsvEmails(csv);

  const seen = new Set();
  const clean = [];
  let skipped = 0;
  for (const raw of rawEmails) {
    const email = cleanForPaste(raw);
    if (!email) {
      skipped += 1;
      continue;
    }
    if (seen.has(email)) continue;
    seen.add(email);
    clean.push(email);
  }

  mkdirSync(outDir, { recursive: true });

  const batches = chunk(clean, BATCH_SIZE);
  const indexLines = [];

  for (let i = 0; i < batches.length; i++) {
    const n = String(i + 1).padStart(2, "0");
    const batch = batches[i];
    const commaPaste = batch.join(", ");
    const fileComma = resolve(outDir, `batch-${n}-bcc-virgola.txt`);
    const fileLines = resolve(outDir, `batch-${n}-bcc-righe.txt`);

    writeFileSync(fileComma, `${commaPaste}\n`, "utf8");
    writeFileSync(fileLines, `${batch.join("\n")}\n`, "utf8");

    indexLines.push(
      `Batch ${n}: ${batch.length} email → batch-${n}-bcc-virgola.txt (copia tutto) oppure batch-${n}-bcc-righe.txt (una per riga)`
    );
  }

  writeFileSync(resolve(outDir, "LEGGIMI.txt"), [
    "HotelsDrop — lista BCC per Aruba Webmail",
    "=======================================",
    "",
    `Email valide uniche: ${clean.length}`,
    `Batch: ${batches.length} (max ${BATCH_SIZE} destinatari per messaggio — limite Aruba)`,
    `Saltate / non valide: ${skipped}`,
    "",
    "COME USARE",
    "----------",
    "1. Apri batch-01-bcc-virgola.txt",
    "2. Ctrl+A → Ctrl+C (copia tutto)",
    "3. In Aruba Webmail → Nuovo messaggio → campo BCC → incolla",
    "4. Ripeti per batch-02, batch-03, ... fino all'ultimo",
    "",
    "Formato: virgola + spazio (es. info@hotel.it, reception@bb.it)",
    "Alternativa: batch-XX-bcc-righe.txt se la webmail accetta una email per riga",
    "",
    "LIMITE ARUBA: max 150 destinatari per singolo messaggio.",
    "",
    "INDICE BATCH",
    "------------",
    ...indexLines,
    "",
  ].join("\n"), "utf8");

  writeFileSync(resolve(ROOT, "data/outreach-email-only.txt"), `${clean.join("\n")}\n`, "utf8");
  writeFileSync(resolve(ROOT, "data/outreach-email-only.csv"), `email\n${clean.join("\n")}\n`, "utf8");

  console.log(`Source: ${sourcePath}`);
  console.log(`Valid unique emails: ${clean.length}`);
  console.log(`Batches: ${batches.length}`);
  console.log(`Output: ${outDir}`);
}

main();
