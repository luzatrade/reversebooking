/**
 * Parse block 004 Gemini master cards → block-004-updates.json
 * Usage: node scripts/build-block-004-updates.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const RESPONSE = resolve(ROOT, "data/gemini-responses/block-004-response-full.md");
const BLOCK = resolve(ROOT, "data/gemini-master-cards/block-004.json");
const OUT = resolve(ROOT, "data/gemini-responses/block-004-updates.json");

const AMENITY_IT = [
  [/free (private )?parking/i, "Parcheggio privato gratuito"],
  [/complimentary wi-?fi/i, "WiFi gratuito"],
  [/free wi-?fi/i, "WiFi gratuito"],
  [/high-speed wi-?fi/i, "WiFi ad alta velocità"],
  [/air[- ]conditioned/i, "Aria condizionata"],
  [/outdoor swimming pool/i, "Piscina all'aperto"],
  [/swimming pool/i, "Piscina"],
  [/on-site restaurant/i, "Ristorante in loco"],
  [/farm-to-table/i, "Cucina a km zero"],
  [/pet-friendly/i, "Animali ammessi"],
  [/daily breakfast/i, "Colazione giornaliera"],
  [/private garden/i, "Giardino privato"],
  [/panoramic/i, "Vista panoramica"],
  [/equestrian/i, "Maneggio"],
  [/glamping/i, "Glamping"],
  [/wellness/i, "Area benessere"],
  [/sauna/i, "Sauna"],
];

function translateAmenityLine(line) {
  for (const [re, it] of AMENITY_IT) {
    if (re.test(line)) return it;
  }
  return line
    .replace(/\bFree\b/gi, "Gratuito")
    .replace(/\bPrivate\b/gi, "Privato")
    .replace(/\bComplimentary\b/gi, "Gratuito")
    .replace(/\bOn-site\b/gi, "In loco")
    .replace(/\bOutdoor\b/gi, "All'aperto")
    .replace(/\bGarden\b/gi, "Giardino")
    .replace(/\bRestaurant\b/gi, "Ristorante")
    .replace(/\bBreakfast\b/gi, "Colazione")
    .replace(/\bWiFi\b/gi, "WiFi")
    .replace(/\bParking\b/gi, "Parcheggio")
    .replace(/\bRooms\b/gi, "Camere")
    .replace(/\bRoom\b/gi, "Camera");
}

function parseGps(text) {
  const m = text.match(/Lat\.\s*([-\d.]+),\s*Long\.\s*([-\d.]+)/i);
  if (!m) return null;
  return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) };
}

function parseHotels(text) {
  return text
    .split(/^### \d+\.\s+/m)
    .slice(1)
    .map((section) => {
      const laScena = section.match(/\*\*La Scena:\*\*\s*([\s\S]*?)(?=\n\*\*Property Overview\*\*)/)?.[1]?.trim() ?? "";
      const propertyOverview =
        section.match(/\*\*Property Overview\*\*\s*([\s\S]*?)(?=\n\*\*Key Amenities\*\*)/)?.[1]?.trim() ?? "";
      const amenitiesBlock =
        section.match(/\*\*Key Amenities\*\*\s*([\s\S]*?)(?=\n\*\*Location)/)?.[1]?.trim() ?? "";
      const locationBlock =
        section.match(/\*\*Location[^*]*\*\*\s*([\s\S]*?)(?=\n---|\n### |$)/)?.[1]?.trim() ?? "";

      const indirizzo = locationBlock.match(/\*\*Indirizzo:\*\*\s*(.+)/)?.[1]?.trim() ?? null;
      const amenities = [...amenitiesBlock.matchAll(/^\*\s+(.+)$/gm)].map((m) => m[1].trim());
      const attractions = [
        ...locationBlock.matchAll(/^\*\s+(?!(\*\*Indirizzo|\*\*Coordinate|\*\*Telefono|\*\*Email))(.+)$/gm),
      ].map((m) => m[2].trim());

      const descriptionEn = [
        propertyOverview,
        amenities.length ? `Key Amenities:\n${amenities.map((a) => `- ${a}`).join("\n")}` : "",
        attractions.length
          ? `Location & Nearby Attractions:\n${attractions.map((a) => `- ${a}`).join("\n")}`
          : "",
      ]
        .filter(Boolean)
        .join("\n\n");

      const description = [
        laScena,
        amenities.length
          ? `Servizi principali:\n${amenities.map((a) => `- ${translateAmenityLine(a)}`).join("\n")}`
          : "",
        attractions.length
          ? `Posizione e attrazioni vicine:\n${attractions.map((a) => `- ${a}`).join("\n")}`
          : "",
      ]
        .filter(Boolean)
        .join("\n\n");

      return { indirizzo, description, description_en: descriptionEn };
    });
}

function main() {
  const text = readFileSync(RESPONSE, "utf8");
  const seeds = JSON.parse(readFileSync(BLOCK, "utf8")).hotels;
  const parsed = parseHotels(text);

  if (parsed.length !== seeds.length) {
    throw new Error(`Parsed ${parsed.length} hotels, expected ${seeds.length}`);
  }

  const rows = seeds.map((seed, i) => ({
    slug: seed.slug,
    indirizzo: parsed[i].indirizzo ?? seed.indirizzo,
    description: parsed[i].description,
    description_en: parsed[i].description_en,
  }));

  writeFileSync(OUT, JSON.stringify(rows, null, 2) + "\n");
  console.log(`Wrote ${rows.length} hotels → ${OUT}`);
}

main();
