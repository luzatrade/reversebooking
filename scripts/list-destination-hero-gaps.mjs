// Report hub destinazioni senza hero verificata in cityHeroImages.
// Uso: node scripts/list-destination-hero-gaps.mjs [--top=50]
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const topArg = process.argv.find((arg) => arg.startsWith("--top="));
const topLimit = topArg ? Number.parseInt(topArg.split("=")[1], 10) : 30;

const { createClient } = await import("@supabase/supabase-js");
const { cityGalleries } = await import("./city-galleries.mjs");
const { slugifySeo } = await import("./lib/seo-slug.mjs");

const heroFile = readFileSync(resolve(__dirname, "../data/cityHeroImages.ts"), "utf8");
const cityHeroImages = new Set([...heroFile.matchAll(/"([A-Z]{2}-[A-Z0-9]{3})":/g)].map((match) => match[1]));
const galleryCityIds = new Set(cityGalleries.map((entry) => entry.cityId));

const nameToCityId = new Map();
for (const gallery of cityGalleries) {
  nameToCityId.set(normalize(gallery.cityNameEn), gallery.cityId);
  if (gallery.cityNameIt) nameToCityId.set(normalize(gallery.cityNameIt), gallery.cityId);
}

function normalize(value) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim();
}

function buildDestinationSlug(cityName) {
  return slugifySeo(cityName, 72) || "destinazione";
}

function canonicalCityKey(cityName) {
  return normalize(cityName);
}

function resolveHubCityId(displayName) {
  return nameToCityId.get(normalize(displayName)) ?? null;
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !service) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const admin = createClient(url, service, { auth: { persistSession: false } });
const DESTINATION_MIN_STRUCTURES = 3;
const structuresByHubKey = new Map();

async function ingest(table, mapRow) {
  let from = 0;
  while (true) {
    const { data, error } = await admin
      .from(table)
      .select(mapRow.select)
      .eq("seo_indexable", true)
      .not("slug", "is", null)
      .range(from, from + 999);
    if (error) throw error;

    for (const row of data ?? []) {
      const mapped = mapRow.map(row);
      if (!mapped) continue;
      const hubKey = canonicalCityKey(mapped.cityName);
      const bucket = structuresByHubKey.get(hubKey) ?? {
        slug: buildDestinationSlug(mapped.cityName),
        displayName: mapped.cityName,
        count: 0,
      };
      bucket.count += 1;
      if (mapped.cityName.length > bucket.displayName.length) bucket.displayName = mapped.cityName;
      structuresByHubKey.set(hubKey, bucket);
    }

    if (!data || data.length < 1000) break;
    from += 1000;
  }
}

await ingest("onboarding_hotels", {
  select: "slug, city_name, nome",
  map(row) {
    const cityName = String(row.city_name ?? "").trim();
    if (!cityName) return null;
    return { cityName };
  },
});

await ingest("hotel_accounts", {
  select: "slug, city_name, provider_kind",
  map(row) {
    if (row.provider_kind === "agency") return null;
    const cityName = String(row.city_name ?? "").trim();
    if (!cityName) return null;
    return { cityName };
  },
});

const hubs = [...structuresByHubKey.values()]
  .filter((hub) => hub.count >= DESTINATION_MIN_STRUCTURES)
  .map((hub) => {
    const cityId = resolveHubCityId(hub.displayName);
    const hasHero = Boolean(cityId && cityHeroImages.has(cityId));
    const inGallery = Boolean(cityId && galleryCityIds.has(cityId));
    return { ...hub, cityId, hasHero, inGallery };
  })
  .sort((a, b) => b.count - a.count);

const withHero = hubs.filter((hub) => hub.hasHero);
const withoutHero = hubs.filter((hub) => !hub.hasHero);
const harvestable = withoutHero.filter((hub) => hub.inGallery);

console.log(`Hub destinazioni (≥${DESTINATION_MIN_STRUCTURES} strutture): ${hubs.length}`);
console.log(`Con hero verificata: ${withHero.length}`);
console.log(`Senza hero (placeholder): ${withoutHero.length}`);
console.log(`Senza hero ma in city-galleries (harvest possibile): ${harvestable.length}`);
console.log(`\nTop ${topLimit} hub senza hero:`);
for (const hub of withoutHero.slice(0, topLimit)) {
  const galleryFlag = hub.inGallery ? " [gallery]" : "";
  console.log(
    `  ${hub.displayName.padEnd(28)} ${String(hub.count).padStart(4)} strutture  ${hub.cityId ?? "—"}${galleryFlag}`,
  );
}
