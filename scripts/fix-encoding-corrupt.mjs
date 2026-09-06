/**
 * Corregge testi con carattere � (UTF-8 corrotto) su onboarding, hotel e comuni.
 *
 *   node scripts/fix-encoding-corrupt.mjs
 *   node scripts/fix-encoding-corrupt.mjs --apply
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const APPLY = process.argv.includes("--apply");
const BAD = /\uFFFD|�/;

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(url, key, { auth: { persistSession: false } });

const ONBOARDING_FIELDS = ["nome", "city_name", "indirizzo", "description", "description_en"];
const HOTEL_FIELDS = ["property_name", "city_name", "full_address", "description", "description_en", "specific_area"];

function norm(v) {
  return v.normalize("NFD").replace(/\p{M}/gu, "").replace(/'/g, "").toLowerCase().trim();
}

function questuraToItalian(allCaps) {
  return allCaps
    .split(/(\s+|\/|-)/)
    .map((token) => {
      if (!token.trim() || /^[\s/-]$/.test(token)) return token;
      let w = token.toLowerCase();
      w = w.replace(/([aeiou])'$/i, (_, v) => {
        const map = { a: "à", e: "è", i: "ì", o: "ò", u: "ù" };
        return map[v.toLowerCase()] ?? v;
      });
      if (/^d'[a-z]/i.test(w)) {
        return `d'${w.charAt(2).toLowerCase()}${w.slice(3)}`;
      }
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join("");
}

const comuniJson = JSON.parse(readFileSync(resolve(__dirname, "../public/data/comuni.json"), "utf8"));
const comuneByNorm = new Map();
for (const row of comuniJson) {
  const display = questuraToItalian(row.name);
  comuneByNorm.set(norm(row.name), display);
  comuneByNorm.set(norm(display), display);
}

const MANUAL = {
  "Al�": "Alì",
  "Al� Terme": "Alì Terme",
  "Alm�": "Almè",
  "Arsi�": "Arsiè",
  "Barzan�": "Barzanò",
  "Carr�": "Carrù",
  "Arqu� Petrarca": "Arquà Petrarca",
  "Arqu� Polesine": "Arquà Polesine",
  "Antey-Saint-Andr�": "Antey-Saint-André",
  "Appiano sulla strada del vino/Eppan an der Weinstra�e":
    "Appiano sulla strada del vino/Eppan an der Weinstraße",
  "Caldaro sulla strada del vino/Kaltern an der Weinstra�e":
    "Caldaro sulla strada del vino/Kaltern an der Weinstraße",
  "Cefal�": "Cefalù",
  "Cefal� Diana": "Cefalù Diana",
  "Agli�": "Agliè",
  "Bascap�": "Bascapè",
  "Baselga di Pin�": "Baselga di Pinè",
  "Basic�": "Basicò",
  "Bastia Mondov�": "Bastia Mondovì",
  "Bianz�": "Bianzè",
  "Bidon�": "Bidonò",
  "Buddus�": "Buddusò",
  "Canicatt�": "Canicattì",
  "Cant�": "Cantù",
  "Card�": "Cardè",
  "Cesar�": "Cesarò",
  "Forza d'Agr�": "Forza d'Agrò",
  "Frazzan�": "Frazzanò",
  "Weinstra�e": "Weinstraße",
  "Belv�": "Belvì",
  "Cavagli�": "Cavaglià",
  "San Giovanni di Fassa-S�n Jan": "San Giovanni di Fassa-Sèn Jan",
  "Saint-Rh�my-en-Bosses": "Saint-Rhémy-en-Bosses",
  "Rh�mes-Saint-Georges": "Rhêmes-Saint-Georges",
  "Rh�mes-Notre-Dame": "Rhêmes-Notre-Dame",
  "Trinit� d'Agultu e Vignola": "Trinità d'Agultu e Vignola",
  "Mazzarr� Sant'Andrea": "Mazzarrà Sant'Andrea",
  "San Nicol� d'Arcidano": "San Nicolò d'Arcidano",
  "Citt� Sant'Angelo": "Città Sant'Angelo",
  "Cimin�": "Ciminà",
  "Cir�": "Cirò",
  "Codogn�": "Codognè",
  "Cont�": "Contà",
  "Das�": "Dasà",
  "Doberd� del Lago-Doberdob": "Doberdò del Lago-Doberdob",
  "Duino Aurisina-Devin Nabre�ina": "Duino Aurisina/Devinska Nabrežina",
  "Erb�": "Erbè",
  "Fiè Allo Sciliar/V�ls am Schlern": "Fiè allo Sciliar/Völs am Schlern",
  "Foss�": "Fossò",
  "Funes/Villn��": "Funes/Villnöß",
  "Lod�": "Lodè",
  "Luson/L�sen": "Luson/Lüsen",
  "Mal�": "Malé",
  "Mazz�": "Mazzè",
  "Melicucc�": "Melicuccà",
  "Meltina/M�lten": "Meltina/Mölten",
  "Mer�": "Merì",
  "Mont�": "Montù",
  "Muggi�": "Muggiò",
  "Nughedu San Nicol�": "Nughedu San Nicolò",
  "Onan�": "Onanì",
  "Pal�": "Palù",
  "Pat�": "Patù",
  "Plat�": "Platì",
  "Rio di Pusteria/M�hlbach": "Rio di Pusteria/Mühlbach",
  "Ros�": "Rosà",
  "Sal�": "Salù",
  "San Floriano del Collio-�teverjan": "San Floriano del Collio/Števerjan",
  "Santa Cristina Valgardena/St. Christina in Gr�den":
    "Santa Cristina Valgardena/St. Christina in Gröden",
  "Selva dei Molini/M�hlwald": "Selva dei Molini/Mühlwald",
  "Selva di Val Gardena/Wolkenstein in Gr�den": "Selva di Val Gardena/Wolkenstein in Gröden",
  "Tubre/Taufers im M�nstertal": "Tubre/Taufers im Münstertal",
  "Verano/V�ran": "Verano/Vöran",
  "Verr�s": "Verrès",
  "Vi�": "Viù",
};

function resolveToken(value) {
  if (!value?.includes("�")) return value;
  if (MANUAL[value]) return MANUAL[value];

  const parts = value.split("/");
  const fixed = parts.map((part) => {
    const p = part.trim();
    if (!p.includes("�")) return p;
    if (MANUAL[p]) return MANUAL[p];

    const prefix = norm(p.split("�")[0]);
    const suffix = norm(p.split("�").slice(1).join(""));
    const candidates = [...comuneByNorm.entries()].filter(([k]) => {
      if (!k.startsWith(prefix)) return false;
      const rest = k.slice(prefix.length);
      if (suffix) return rest === suffix || rest.endsWith(suffix);
      return rest.length <= 2;
    });
    if (candidates.length === 1) return candidates[0][1];
    return p;
  });
  return fixed.join("/");
}

function buildReplacementMap(values) {
  const map = new Map(Object.entries(MANUAL));
  for (const value of values) {
    if (!value?.includes("�")) continue;
    const fixed = resolveToken(value);
    if (fixed && fixed !== value && !fixed.includes("�")) {
      map.set(value, fixed);
    }
  }
  return [...map.entries()].sort((a, b) => b[0].length - a[0].length);
}

function fixItalianParticles(text) {
  return text
    .replace(/\b(Di|Del|Della|Dei|Delle|Da|In|Su|E|La|Lo|Le|Gli|I)\b/g, (m) => m.toLowerCase())
    .replace(/Sant'([a-z])/g, (_, c) => `Sant'${c.toUpperCase()}`)
    .replace(/D'([A-Z])/g, (_, c) => `d'${c.toLowerCase()}`);
}

function applyReplacements(text, replacements) {
  if (!text || !BAD.test(text)) return text;
  let out = text;
  for (const [from, to] of replacements) {
    if (out.includes(from)) out = out.split(from).join(to);
  }
  if (out.includes("�")) out = resolveToken(out);
  out = fixItalianParticles(out);
  return out;
}

async function fetchAll(table, select) {
  const rows = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await sb.from(table).select(select).range(from, from + 999);
    if (error) throw error;
    if (!data?.length) break;
    rows.push(...data);
    if (data.length < 1000) break;
  }
  return rows;
}

function patchRow(row, fields, replacements) {
  const patch = {};
  for (const field of fields) {
    const value = row[field];
    if (typeof value !== "string" || !BAD.test(value)) continue;
    const next = applyReplacements(value, replacements);
    if (next !== value) patch[field] = next;
  }
  return Object.keys(patch).length ? patch : null;
}

const onboarding = await fetchAll("onboarding_hotels", `id, ${ONBOARDING_FIELDS.join(", ")}`);
const hotels = await fetchAll("hotel_accounts", `id, ${HOTEL_FIELDS.join(", ")}`);
const comuni = await fetchAll("comuni_italiani", "id, nome");

const seedValues = [];
for (const row of [...onboarding, ...hotels, ...comuni]) {
  for (const v of Object.values(row)) {
    if (typeof v === "string" && BAD.test(v)) seedValues.push(v);
  }
}
const replacements = buildReplacementMap(seedValues);

console.log(`\n[fix-encoding-corrupt] ${replacements.length} sostituzioni mappate${APPLY ? "" : " (DRY RUN)"}\n`);
for (const [from, to] of replacements.slice(0, 30)) {
  console.log(`  ${JSON.stringify(from)} → ${JSON.stringify(to)}`);
}
if (replacements.length > 30) console.log(`  … +${replacements.length - 30} altre`);

let obUpdates = 0;
let hotelUpdates = 0;
let comuneUpdates = 0;

for (const row of onboarding) {
  const patch = patchRow(row, ONBOARDING_FIELDS, replacements);
  if (!patch) continue;
  obUpdates += 1;
  if (APPLY) {
    const { error } = await sb.from("onboarding_hotels").update(patch).eq("id", row.id);
    if (error) throw error;
  }
}

for (const row of hotels) {
  const patch = patchRow(row, HOTEL_FIELDS, replacements);
  if (!patch) continue;
  hotelUpdates += 1;
  if (APPLY) {
    const { error } = await sb.from("hotel_accounts").update(patch).eq("id", row.id);
    if (error) throw error;
  }
}

for (const row of comuni) {
  const patch = patchRow(row, ["nome"], replacements);
  if (!patch) continue;
  comuneUpdates += 1;
  if (APPLY) {
    const { error } = await sb.from("comuni_italiani").update(patch).eq("id", row.id);
    if (error) throw error;
  }
}

console.log(`\nOnboarding: ${obUpdates} record`);
console.log(`Hotel accounts: ${hotelUpdates} record`);
console.log(`Comuni: ${comuneUpdates} record`);

if (!APPLY) {
  console.log("\nAggiungi --apply per scrivere su Supabase.");
} else {
  // verify
  const left = [];
  for (const row of await fetchAll("onboarding_hotels", `id, ${ONBOARDING_FIELDS.join(", ")}`)) {
    if (Object.values(row).some((v) => typeof v === "string" && BAD.test(v))) left.push(row.id);
  }
  console.log(`\nVerifica onboarding con � residui: ${left.length}`);
}
