/**
 * Parse numbered Gemini block response → block-002-updates.json
 * Usage: node scripts/parse-gemini-block-response.mjs --response data/gemini-responses/block-002-response-full.md --block data/gemini-master-cards/block-002.json --out data/gemini-responses/block-002-updates.json
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  const overrides = get("--overrides");
  return {
    response: resolve(process.cwd(), get("--response")),
    block: resolve(process.cwd(), get("--block")),
    out: resolve(process.cwd(), get("--out")),
    overrides: overrides ? resolve(process.cwd(), overrides) : null,
  };
}

function parseHotels(text) {
  const sections = text.split(/^### \d+\.\s+/m).slice(1);
  return sections.map((section) => {
    const lines = section.trim().split("\n");
    const nome = lines[0].trim();
    const contactLine = section.match(/\* \*\*Indirizzo:\*\* ([^|]+)\| \*\*Tel:\*\* ([^|]+)\| \*\*Email:\*\* (.+)/);
    const itMatch = section.match(/\* \*\*Descrizione SEO \(IT\):\*\* (.+?)(?=\n\* \*\*SEO Description)/s);
    const enMatch = section.match(/\* \*\*SEO Description \(EN\):\*\* (.+?)(?=\n---|\n### |$)/s);
    if (!contactLine || !itMatch || !enMatch) {
      throw new Error(`Parse fallito per: ${nome}`);
    }
    return {
      nome,
      indirizzo: contactLine[1].trim(),
      phone: contactLine[2].trim(),
      email: contactLine[3].trim(),
      description: itMatch[1].trim(),
      description_en: enMatch[1].trim(),
    };
  });
}

function main() {
  const { response, block, out, overrides } = parseArgs();
  const text = readFileSync(response, "utf8");
  const slugs = JSON.parse(readFileSync(block, "utf8")).hotels.map((h) => h.slug);
  const cityOverrides = overrides ? JSON.parse(readFileSync(overrides, "utf8")) : {};
  const parsed = parseHotels(text);
  if (parsed.length !== slugs.length) {
    throw new Error(`Parsed ${parsed.length} hotels, expected ${slugs.length}`);
  }
  const outData = parsed.map((h, i) => {
    const row = { slug: slugs[i], ...h };
    delete row.nome;
    const city = cityOverrides[String(i + 1)];
    if (city) row.city = city;
    return row;
  });
  writeFileSync(out, JSON.stringify(outData, null, 2) + "\n");
  console.log(`Parsed ${outData.length} hotels → ${out}`);
}

main();
