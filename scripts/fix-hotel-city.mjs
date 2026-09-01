/**
 * Corregge manualmente città + slug per una struttura (onboarding + hotel collegato).
 *
 *   node scripts/fix-hotel-city.mjs --email=info@example.it --city=Compiano
 *   node scripts/fix-hotel-city.mjs --onboarding-id=uuid --city=Compiano --apply
 */
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { buildStructureSlugBase, resolveUniqueSlug } from "./lib/seo-slug.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const APPLY = process.argv.includes("--apply");
const emailArg = process.argv.find((a) => a.startsWith("--email="))?.slice("--email=".length)?.toLowerCase();
const onboardingIdArg = process.argv.find((a) => a.startsWith("--onboarding-id="))?.slice("--onboarding-id=".length);
const hotelIdArg = process.argv.find((a) => a.startsWith("--hotel-id="))?.slice("--hotel-id=".length);
const cityArg = process.argv.find((a) => a.startsWith("--city="))?.slice("--city=".length);

if (!cityArg?.trim()) {
  console.error("Serve --city=NomeComune");
  process.exit(1);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(url, key, { auth: { persistSession: false } });

function cityId(cityName, countryCode = "IT") {
  const slug = cityName
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${countryCode}-${slug}`;
}

async function loadUsedSlugs(excludeHotelId, excludeOnboardingId) {
  const used = new Set();
  for (const table of ["onboarding_hotels", "hotel_accounts"]) {
    let from = 0;
    while (true) {
      const { data, error } = await sb.from(table).select("id, slug").not("slug", "is", null).range(from, from + 999);
      if (error) throw error;
      for (const row of data ?? []) {
        if (table === "hotel_accounts" && row.id === excludeHotelId) continue;
        if (table === "onboarding_hotels" && row.id === excludeOnboardingId) continue;
        if (row.slug) used.add(row.slug);
      }
      if (!data || data.length < 1000) break;
      from += 1000;
    }
  }
  return used;
}

async function resolveOnboardingId() {
  if (onboardingIdArg) return onboardingIdArg;
  if (hotelIdArg) {
    const { data, error } = await sb.from("hotel_accounts").select("onboarding_hotel_id").eq("id", hotelIdArg).maybeSingle();
    if (error) throw error;
    return data?.onboarding_hotel_id ?? null;
  }
  if (emailArg) {
    const { data: users } = await sb.auth.admin.listUsers({ page: 1, perPage: 1000 });
    const user = users.users.find((u) => u.email?.toLowerCase() === emailArg);
    if (!user) throw new Error(`Utente non trovato: ${emailArg}`);
    const { data: hotel, error } = await sb
      .from("hotel_accounts")
      .select("id, onboarding_hotel_id")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error) throw error;
    if (!hotel) throw new Error("Hotel non trovato per utente");
    return { onboardingId: hotel.onboarding_hotel_id, hotelId: hotel.id };
  }
  throw new Error("Serve --email=, --onboarding-id= o --hotel-id=");
}

const target = await resolveOnboardingId();
const onboardingId = typeof target === "string" ? target : target.onboardingId;
const presetHotelId = typeof target === "object" ? target.hotelId : hotelIdArg;

if (!onboardingId) throw new Error("onboarding_hotel_id non trovato");

const { data: onboarding, error: obErr } = await sb
  .from("onboarding_hotels")
  .select("id, nome, slug, slug_previous, city_name, indirizzo")
  .eq("id", onboardingId)
  .maybeSingle();
if (obErr || !onboarding) throw new Error("Onboarding non trovato");

const { data: hotel, error: hErr } = await sb
  .from("hotel_accounts")
  .select("id, property_name, slug, slug_previous, city_name, city_id, onboarding_hotel_id")
  .eq("onboarding_hotel_id", onboardingId)
  .maybeSingle();
if (hErr) throw hErr;

const hotelRow = hotel ?? (presetHotelId ? { id: presetHotelId } : null);
const newCityName = cityArg.trim();
const newCityId = cityId(newCityName);
const propertyName = hotel?.property_name ?? onboarding.nome;
const used = await loadUsedSlugs(hotelRow?.id ?? null, onboarding.id);
const newSlug = resolveUniqueSlug(buildStructureSlugBase(propertyName, newCityName), used, null);

console.log("=== Anteprima correzione città ===");
console.log(`Onboarding: ${onboarding.nome} (${onboarding.id})`);
console.log(`  city: ${onboarding.city_name} → ${newCityName}`);
console.log(`  slug: ${onboarding.slug ?? "∅"} → ${newSlug}`);
if (hotel) {
  console.log(`Hotel: ${hotel.property_name} (${hotel.id})`);
  console.log(`  city: ${hotel.city_name} / ${hotel.city_id} → ${newCityName} / ${newCityId}`);
  console.log(`  slug: ${hotel.slug ?? "∅"} → ${newSlug}`);
}

if (!APPLY) {
  console.log("\nAggiungi --apply per scrivere.");
  process.exit(0);
}

const onboardingPrev = Array.isArray(onboarding.slug_previous) ? onboarding.slug_previous : [];
const onboardingPayload = {
  city_name: newCityName,
  slug: newSlug,
  slug_previous: onboarding.slug && onboarding.slug !== newSlug ? [...new Set([...onboardingPrev, onboarding.slug])] : onboardingPrev,
};

const { error: obUpErr } = await sb.from("onboarding_hotels").update(onboardingPayload).eq("id", onboarding.id);
if (obUpErr) throw obUpErr;

  if (hotel) {
    const hotelPrev = Array.isArray(hotel.slug_previous) ? hotel.slug_previous : [];
    const hotelSlugPayload = {
      slug: newSlug,
      slug_previous: hotel.slug && hotel.slug !== newSlug ? [...new Set([...hotelPrev, hotel.slug])] : hotelPrev,
    };

    const { error: rpcErr } = await sb.rpc("admin_sync_hotel_location_from_onboarding", {
      p_onboarding_id: onboarding.id,
    });

    if (rpcErr?.message.includes("Could not find the function")) {
      const hotelPayload = {
        city_name: newCityName,
        city_id: newCityId,
        country_code: "IT",
        country_name: "Italia",
        ...hotelSlugPayload,
      };
      const { error: hUpErr } = await sb.from("hotel_accounts").update(hotelPayload).eq("id", hotel.id);
      if (hUpErr?.message.includes("non può essere modificata")) {
        const { error: partialErr } = await sb
          .from("hotel_accounts")
          .update({ city_name: newCityName, ...hotelSlugPayload })
          .eq("id", hotel.id);
        if (partialErr) throw partialErr;
        console.warn(
          "⚠ city_id non aggiornato (trigger DB): esegui npm run supabase:push per applicare le migration RPC.",
        );
      } else if (hUpErr) {
        throw hUpErr;
      }
    } else if (rpcErr) {
      throw rpcErr;
    } else {
      const { error: slugErr } = await sb.from("hotel_accounts").update(hotelSlugPayload).eq("id", hotel.id);
      if (slugErr) throw slugErr;
    }
  }

console.log("\n✓ Correzione applicata.");
