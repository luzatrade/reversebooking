/**
 * Export email pulite in batch per Aruba Webmail (copia/incolla BCC).
 * Formato Aruba CCN: virgola + spazio su una riga
 *   info@bbcontradalunga.it, casalarosaabbadialariana@gmail.com, info@villaonedo.com
 *
 * Usage:
 *   node scripts/export-aruba-email-paste.mjs
 *   node scripts/export-aruba-email-paste.mjs --batch=50
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import { normalizePublicEmail } from "./lib/onboarding-email.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const batchArg = process.argv.find((a) => a.startsWith("--batch="));
const BATCH_SIZE = batchArg ? Number(batchArg.slice("--batch=".length)) : 50;

const sourceArg = process.argv.find((a) => a.startsWith("--source="));
const sourcePath = sourceArg
  ? resolve(ROOT, sourceArg.slice("--source=".length))
  : resolve(ROOT, "data/onboarding-resend-outreach.csv");

const TEST_THREE_CCN = [
  "info@bbcontradalunga.it",
  "casalarosaabbadialariana@gmail.com",
  "info@villaonedo.com",
];

const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

function decodeHtmlEntities(s) {
  return s
    .replace(/&quot;/gi, "")
    .replace(/&gt;/gi, "")
    .replace(/&lt;/gi, "")
    .replace(/&amp;/gi, "&")
    .replace(/&#0*39;/gi, "'");
}

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
    const raw =
      emailIdx === 0
        ? line.slice(0, firstComma === -1 ? line.length : firstComma)
        : line.split(",")[emailIdx];
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
    /* keep */
  }

  s = decodeHtmlEntities(s);
  s = s.replace(/^mailto:/i, "").split("?")[0]?.trim() ?? "";
  s = s.replace(/^(e-?mail\s*:\s*)/i, "");
  s = s.replace(/^#+/, "");
  s = s.replace(/^https?:\/\//i, "");
  s = s.replace(/^\/+/, "");
  s = s.replace(/\\+$/g, "");
  s = s.replace(/\\/g, "");
  s = s.trim().toLowerCase();

  let email = normalizePublicEmail(s);
  if (!email) {
    const hit = s.match(EMAIL_RE)?.[0];
    email = normalizePublicEmail(hit);
  }
  if (!email) return null;

  if (email.endsWith("itt") && email.includes("@yahoo.")) return null;

  return email;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function writeBatches(clean, batchSize, subdir) {
  const dir = subdir ? resolve(outDir, subdir) : outDir;
  mkdirSync(dir, { recursive: true });

  const batches = chunk(clean, batchSize);
  const indexLines = [];

  for (let i = 0; i < batches.length; i++) {
    const n = String(i + 1).padStart(2, "0");
    const batch = batches[i];
    const commaPaste = batch.join(", ");
    writeFileSync(resolve(dir, `batch-${n}-bcc-virgola.txt`), `${commaPaste}\n`, "utf8");
    writeFileSync(resolve(dir, `batch-${n}-bcc-righe.txt`), `${batch.join("\n")}\n`, "utf8");
    indexLines.push(`Batch ${n}: ${batch.length} email`);
  }

  return { batches: batches.length, indexLines, dir };
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
  for (const name of readdirSync(outDir)) {
    if (/^batch-\d+-bcc-/.test(name)) {
      rmSync(resolve(outDir, name), { force: true });
    }
  }
  for (const name of ["safe-50", "max-150"]) {
    const p = resolve(outDir, name);
    try {
      rmSync(p, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }

  const safe = writeBatches(clean, BATCH_SIZE, "safe-50");
  const max = writeBatches(clean, 150, "max-150");

  writeFileSync(
    resolve(outDir, "test-3-email.txt"),
    `${TEST_THREE_CCN.join(", ")}\n`,
    "utf8"
  );

  writeFileSync(
    resolve(outDir, "LEGGIMI.txt"),
    [
      "HotelsDrop — lista BCC per Aruba Webmail",
      "=======================================",
      "",
      `Email valide uniche: ${clean.length}`,
      `Saltate / non valide: ${skipped}`,
      "",
      "SE OTTIENI ERRORE 5601 / command unrecognized",
      "------------------------------------------------",
      "1. Prova PRIMA test-3-email.txt (3 destinatari) — se fallisce è la casella Aruba, non la lista",
      "2. Usa batch in safe-50/ (50 destinatari, più stabile in webmail)",
      "3. Controlla il testo COMPLETO dell'errore (SMTP disabilitato, dominio scaduto, spam...)",
      "4. Non superare ~250 invii ogni 20 minuti",
      "5. Mittente: usa la casella con cui sei loggato, o autorizza info@hotelsdrop.com da Webmail",
      "",
      "COME USARE (campo CCN)",
      "----------------------",
      "Formato OBBLIGATORIO — virgola + spazio, una riga:",
      "  info@bbcontradalunga.it, casalarosaabbadialariana@gmail.com, info@villaonedo.com",
      "",
      "1. Apri safe-50/batch-01-bcc-virgola.txt",
      "2. Ctrl+A → Ctrl+C",
      "3. Aruba Webmail → CCN → incolla",
      "4. Usa solo file *-bcc-virgola.txt (NON *-bcc-righe.txt)",
      "5. Ripeti per batch-02, ...",
      "",
      `safe-50: ${safe.batches} batch da max ${BATCH_SIZE} (CONSIGLIATO)`,
      `max-150: ${max.batches} batch da max 150 (limite legale Aruba)`,
      "",
      "INDICE safe-50",
      "-------------",
      ...safe.indexLines,
      "",
    ].join("\n"),
    "utf8"
  );

  writeFileSync(resolve(ROOT, "data/outreach-email-only.txt"), `${clean.join("\n")}\n`, "utf8");
  writeFileSync(resolve(ROOT, "data/outreach-email-only.csv"), `email\n${clean.join("\n")}\n`, "utf8");

  console.log(`Source: ${sourcePath}`);
  console.log(`Valid unique emails: ${clean.length}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`safe-50 batches: ${safe.batches}`);
  console.log(`max-150 batches: ${max.batches}`);
}

main();
