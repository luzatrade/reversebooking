/**
 * Parse Booking structured batch (formato utente: ID, Slug, Descrizione (Italiano), ecc.)
 *
 * Usage:
 *   node scripts/parse-booking-structured-batch.mjs --source paste.md --out updates.json
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
  if (!source) {
    console.error("Usage: node scripts/parse-booking-structured-batch.mjs --source path.md [--out updates.json]");
    process.exit(1);
  }
  return { source: resolve(process.cwd(), source), out: out ? resolve(process.cwd(), out) : null };
}

function cleanBlock(text) {
  return text.replace(/\s+/g, " ").trim();
}

function parseSections(text) {
  const parts = text.split(/(?=^\d+\.\s)/m).filter((p) => /ID:\s*[a-f0-9-]/i.test(p));
  const entries = [];

  for (const section of parts) {
    const idMatch = section.match(/^ID:\s*([a-f0-9-]+)/im) || section.match(/ID:\s*([a-f0-9-]+)/i);
    if (!idMatch) continue;

    const slugMatch = section.match(/^Slug:\s*(.+)$/im);
    const emailMatch = section.match(/^Email:\s*(.*)$/im);
    const addrMatch = section.match(/^Indirizzo:\s*(.+)$/im);

    const itMatch = section.match(
      /Descrizione \(Italiano\):\s*([\s\S]*?)(?=^Description \(English\):|^Servizi \/ Amenities:|$)/im,
    );
    const enMatch = section.match(
      /Description \(English\):\s*([\s\S]*?)(?=^Servizi \/ Amenities:|^Punti di interesse|^Target ideale:|$)/im,
    );

    const description = itMatch ? itMatch[1].trim() : null;
    const description_en = enMatch ? enMatch[1].trim() : null;
    const emailRaw = emailMatch?.[1]?.trim() ?? "";
    const email = emailRaw && !/^vuoto|—|-$/i.test(emailRaw) ? emailRaw : undefined;

    if (!description) {
      console.warn(`Skip ${idMatch[1]}: no IT description`);
      continue;
    }

    entries.push({
      id: idMatch[1],
      slug: slugMatch?.[1]?.trim(),
      description,
      description_en: description_en || undefined,
      email,
      indirizzo: addrMatch ? cleanBlock(addrMatch[1]) : undefined,
    });
  }

  return entries;
}

const { source, out } = parseArgs();
const text = readFileSync(source, "utf8");
const entries = parseSections(text);
console.log(`Parsed ${entries.length} hotels from ${source}`);

if (out) {
  writeFileSync(out, JSON.stringify(entries, null, 2) + "\n");
  console.log(`Written ${out}`);
}
