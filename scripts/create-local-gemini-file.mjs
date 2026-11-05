/**
 * Crea local-gemini/BLOCCO-NNN.md — un file da copiare sul PC.
 *
 * Usage:
 *   node scripts/create-local-gemini-file.mjs --block 001
 *   node scripts/create-local-gemini-file.mjs --block 002
 */

import { mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../local-gemini");

function parseBlock() {
  const eq = process.argv.find((a) => a.startsWith("--block="));
  const idx = process.argv.indexOf("--block");
  const raw = eq ? eq.split("=")[1] : idx !== -1 ? process.argv[idx + 1] : null;
  if (!raw) {
    console.error("Servono --block 001 (o --block=001)");
    process.exit(1);
  }
  const n = Number.parseInt(raw, 10);
  if (!Number.isFinite(n) || n < 1) {
    console.error("Numero blocco non valido");
    process.exit(1);
  }
  return String(n).padStart(3, "0");
}

const blockId = parseBlock();
const exportScript = resolve(__dirname, "export-missing-description-blocks.mjs");

const result = spawnSync(process.execPath, [exportScript, "--block", blockId, "--stdout"], {
  encoding: "utf8",
  env: process.env,
});

if (result.status !== 0) {
  console.error(result.stderr || result.stdout);
  process.exit(result.status ?? 1);
}

const promptBody = result.stdout.replace(/^[^\n]*\n/, "").trim();

const content = [
  `# HotelsDrop — Blocco ${blockId} (copia su PC → Gemini → incolla risposta qui o in Cursor)`,
  "",
  "## Come usare",
  "",
  "1. Copia da `--- COPIA IN GEMINI DA QUI ---` fino a `--- FINE COPIA ---`",
  "2. Incolla in Gemini (con ricerca web)",
  "3. Incolla il JSON di risposta nella sezione RISPOSTA sotto, o nel chat Cursor",
  "",
  "---",
  "",
  "--- COPIA IN GEMINI DA QUI ---",
  "",
  promptBody,
  "",
  "--- FINE COPIA ---",
  "",
  "---",
  "",
  "## RISPOSTA GEMINI (incolla qui)",
  "",
  "```json",
  "{",
  "  \"updates\": [],",
  "  \"not_found\": []",
  "}",
  "```",
  "",
].join("\n");

mkdirSync(OUT_DIR, { recursive: true });
const outPath = resolve(OUT_DIR, `BLOCCO-${blockId}.md`);
writeFileSync(outPath, content, "utf8");
console.log(`Creato: ${outPath}`);
