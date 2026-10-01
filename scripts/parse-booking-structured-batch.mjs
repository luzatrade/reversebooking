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

function parseEmail(raw) {
  const emailRaw = raw?.trim() ?? "";
  return emailRaw &&
    !/^vuoto|—|-$/i.test(emailRaw) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRaw)
    ? emailRaw
    : undefined;
}

function parseLegacySection(section) {
  const idMatch = section.match(/^ID:\s*([a-f0-9-]+)/im) || section.match(/ID:\s*([a-f0-9-]+)/i);
  if (!idMatch) return null;

  const slugMatch = section.match(/^Slug:\s*(.+)$/im);
  // \s* must not cross lines — otherwise empty Email: absorbs "Descrizione (Italiano):"
  const emailMatch = section.match(/^Email:\s*([^\n\r]*)$/im);
  const addrMatch = section.match(/^Indirizzo:\s*(.+)$/im);

  const itMatch = section.match(
    /Descrizione \(Italiano\):\s*([\s\S]*?)(?=^Description \(English\):|^Servizi \/ Amenities:|$)/im,
  );
  const enMatch = section.match(
    /Description \(English\):\s*([\s\S]*?)(?=^Servizi \/ Amenities:|^Punti di interesse|^Target ideale:|$)/im,
  );

  const description = itMatch ? itMatch[1].trim() : null;
  if (!description) return null;

  return {
    id: idMatch[1],
    slug: slugMatch?.[1]?.trim(),
    description,
    description_en: enMatch ? enMatch[1].trim() : undefined,
    email: parseEmail(emailMatch?.[1]),
    indirizzo: addrMatch ? cleanBlock(addrMatch[1]) : undefined,
  };
}

/** Gemini markdown bullets: * **ID:** uuid, * **Descrizione Italiano (Stile Booking.com SEO):** ... */
function parseMarkdownBulletSection(section) {
  const idMatch =
    section.match(/\*\s*\*\*ID:\*\*\s*([a-f0-9-]+)/i) || section.match(/ID:\s*([a-f0-9-]+)/i);
  if (!idMatch) return null;

  const slugMatch = section.match(/\*\s*\*\*Slug:\*\*\s*(.+)/i) || section.match(/^Slug:\s*(.+)$/im);
  const emailMatch =
    section.match(/\*\s*\*\*Email:\*\*\s*([^\n\r*]+)/i) || section.match(/^Email:\s*([^\n\r]*)$/im);
  const addrMatch =
    section.match(/\*\s*\*\*Indirizzo:\*\*\s*(.+)/i) || section.match(/^Indirizzo:\s*(.+)$/im);

  const itMatch = section.match(
    /Descrizione Italiano \(Stile Booking\.com SEO\):\*\*\s*([\s\S]*?)(?=\*\s*\*\*Descrizione Inglese|$)/i,
  );
  const enMatch = section.match(
    /Descrizione Inglese \(Booking\.com Style SEO\):\*\*\s*([\s\S]*?)(?=^---|\*\*\d+\.|$)/i,
  );

  const description = itMatch ? itMatch[1].trim() : null;
  if (!description) return null;

  return {
    id: idMatch[1],
    slug: slugMatch?.[1]?.trim(),
    description,
    description_en: enMatch ? enMatch[1].trim() : undefined,
    email: parseEmail(emailMatch?.[1]),
    indirizzo: addrMatch ? cleanBlock(addrMatch[1]) : undefined,
  };
}

function splitSections(text) {
  const isMarkdownBullets = /\*\s*\*\*ID:\*\*/i.test(text);
  if (isMarkdownBullets) {
    return text.split(/(?=\*\*\d+\.\s)/m).filter((p) => /\*\s*\*\*ID:\*\*/i.test(p));
  }
  return text.split(/(?=^\d+\.\s)/m).filter((p) => /ID:\s*[a-f0-9-]/i.test(p));
}

function parseSections(text) {
  const parts = splitSections(text);
  const entries = [];

  for (const section of parts) {
    const entry = /\*\s*\*\*ID:\*\*/i.test(section)
      ? parseMarkdownBulletSection(section)
      : parseLegacySection(section);

    if (!entry) {
      const id = section.match(/ID:\s*([a-f0-9-]+)/i)?.[1];
      if (id) console.warn(`Skip ${id}: no IT description`);
      continue;
    }

    entries.push(entry);
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
