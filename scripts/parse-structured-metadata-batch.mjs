/**
 * Parse Gemini structured metadata cards (### **N. Name**, * **Slug:**, ecc.)
 *
 * Usage:
 *   node scripts/parse-structured-metadata-batch.mjs --source paste.md --from 631 --to 665 --out meta.json
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  const source = get("--source");
  const out = get("--out");
  const from = Number.parseInt(get("--from") ?? "1", 10);
  const to = Number.parseInt(get("--to") ?? String(from), 10);
  if (!source || !out) {
    console.error(
      "Usage: node scripts/parse-structured-metadata-batch.mjs --source paste.md --from N --to M --out meta.json",
    );
    process.exit(1);
  }
  return { source: resolve(process.cwd(), source), out: resolve(process.cwd(), out), from, to };
}

function field(section, name) {
  const re = new RegExp(`\\*\\s*\\*${name}:\\*\\*\\s*(.+?)(?=\\n\\*\\s*\\*|\\n---|$)`, "is");
  const m = section.match(re);
  if (!m) return null;
  let v = m[1].trim();
  const link = v.match(/\[([^\]]*)\]\(([^)]+)\)/);
  if (link) v = link[2].trim();
  v = v.replace(/^`([^`]+)`$/, "$1").trim();
  if (!v || v === "—" || v === "-") return null;
  return v;
}

function parseSection(section) {
  const numMatch = section.match(/###\s*\*\*(\d+)\./);
  if (!numMatch) return null;
  const n = Number.parseInt(numMatch[1], 10);
  const id = field(section, "ID")?.replace(/`/g, "");
  const slug = field(section, "Slug")?.replace(/`/g, "");
  if (!slug) return null;
  const cityRaw = field(section, "Comune / Provincia");
  const city = cityRaw?.split("/")[0]?.trim() ?? null;
  return {
    structureNumber: n,
    id,
    slug,
    nome: field(section, "Nome"),
    city,
    indirizzo: field(section, "Indirizzo"),
    website: field(section, "Sito Web"),
    email: field(section, "Email"),
  };
}

const { source, out, from, to } = parseArgs();
const text = readFileSync(source, "utf8");
const sections = text.split(/(?=###\s*\*\*\d+\.)/m).filter((s) => /###\s*\*\*\d+\./.test(s));
const entries = [];

for (const section of sections) {
  const row = parseSection(section);
  if (!row) continue;
  if (row.structureNumber < from || row.structureNumber > to) continue;
  entries.push(row);
}

writeFileSync(out, JSON.stringify(entries, null, 2) + "\n");
console.log(`Parsed ${entries.length} structures (${from}-${to}) → ${out}`);
