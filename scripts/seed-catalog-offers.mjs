// Seed demo catalog offers for showcase testing.
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

function code(prefix) {
  const a = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += a[Math.floor(Math.random() * a.length)];
  return `${prefix}${s}`;
}

const checkIn = new Date();
checkIn.setDate(checkIn.getDate() + 14);
const checkOut = new Date(checkIn);
checkOut.setDate(checkOut.getDate() + 2);
const d = (x) => x.toISOString().slice(0, 10);

const { data: structure } = await admin
  .from("hotel_accounts")
  .select("id, property_name, city_id, city_name, country_code, structure_type")
  .eq("provider_kind", "structure")
  .eq("city_id", "IT-ROM")
  .maybeSingle();

const { data: agency } = await admin
  .from("hotel_accounts")
  .select("id, property_name")
  .eq("provider_kind", "agency")
  .limit(1)
  .maybeSingle();

if (structure) {
  const offerCode = code("CO");
  const { data: row, error } = await admin
    .from("catalog_offers")
    .insert({
      offer_code: offerCode,
      provider_id: structure.id,
      provider_kind: "structure",
      offer_kind: "hotel_vacancy",
      title_it: "Weekend romantico a Roma",
      title_en: "Romantic weekend in Rome",
      status: "published",
      date_mode: "fixed",
      check_in: d(checkIn),
      check_out: d(checkOut),
      published_at: new Date().toISOString(),
    })
    .select("id")
    .single();
  if (error) {
    console.error("hotel offer:", error.message);
  } else {
    await admin.from("catalog_offer_destinations").insert({
      catalog_offer_id: row.id,
      city_id: "IT-ROM",
      country_code: "IT",
      city_name: "Rome",
      role: "primary",
      sort_order: 0,
    });
    await admin.from("hotel_offer_details").insert({
      catalog_offer_id: row.id,
      accommodation_type: structure.structure_type ?? "hotel",
      board_basis: "breakfast",
      pricing_model: "total_package",
      price_amount: 189,
      min_stay_nights: 2,
      max_occupancy_per_room: 2,
      cancellation_policy_it: "Cancellazione gratuita fino a 48 ore prima.",
      cancellation_policy_en: "Free cancellation up to 48 hours before arrival.",
      city_tax: "excluded",
      perks: [{ key: "wifi", label_it: "Wi-Fi gratuito", label_en: "Free Wi-Fi" }],
      is_weekend_offer: true,
    });
    await admin.from("hotel_offer_rooms").insert({
      catalog_offer_id: row.id,
      room_type: "double",
      rooms_available: 3,
      max_occupancy: 2,
      sort_order: 0,
    });
    console.log("✓ Hotel offer", offerCode, "→ IT-ROM");
  }
}

if (agency) {
  const offerCode = code("CO");
  const { data: row, error } = await admin
    .from("catalog_offers")
    .insert({
      offer_code: offerCode,
      provider_id: agency.id,
      provider_kind: "agency",
      offer_kind: "agency_package",
      title_it: "Capodanno a Roma — 4 giorni",
      title_en: "New Year in Rome — 4 days",
      status: "published",
      date_mode: "fixed",
      check_in: d(checkIn),
      check_out: new Date(checkOut.getTime() + 2 * 86400000).toISOString().slice(0, 10),
      published_at: new Date().toISOString(),
    })
    .select("id")
    .single();
  if (error) {
    console.error("agency offer:", error.message);
  } else {
    await admin.from("catalog_offer_destinations").insert([
      { catalog_offer_id: row.id, city_id: "IT-ROM", country_code: "IT", city_name: "Rome", role: "primary", sort_order: 0, nights_at_destination: 3 },
      { catalog_offer_id: row.id, city_id: "IT-FLR", country_code: "IT", city_name: "Florence", role: "stop", sort_order: 1, nights_at_destination: 1 },
    ]);
    await admin.from("agency_offer_details").insert({
      catalog_offer_id: row.id,
      trip_type: "leisure",
      duration_days: 4,
      duration_nights: 3,
      target_type: "individual",
      date_type: "fixed",
      primary_hotel_name: "Hotel 4* centro",
      hotel_category: "4*",
      transport_modes: ["train"],
      base_price_per_person: 420,
      single_supplement: 80,
      payment_terms_it: "Acconto 30%, saldo 30 giorni prima.",
      payment_terms_en: "30% deposit, balance 30 days before.",
      cancellation_terms_it: "Penali secondo condizioni agenzia.",
      cancellation_terms_en: "Penalties per agency terms.",
    });
    await admin.from("agency_offer_itinerary_days").insert([
      { catalog_offer_id: row.id, day_number: 1, title_it: "Arrivo a Roma", title_en: "Arrival in Rome", description_it: "Transfer e check-in.", description_en: "Transfer and check-in.", meal_plan: "breakfast", sort_order: 0 },
      { catalog_offer_id: row.id, day_number: 2, title_it: "Roma antica", title_en: "Ancient Rome", description_it: "Colosseo e Foro.", description_en: "Colosseum and Forum.", meal_plan: "half_board", sort_order: 1 },
      { catalog_offer_id: row.id, day_number: 3, title_it: "Firenze", title_en: "Florence", description_it: "Giornata a Firenze.", description_en: "Day trip to Florence.", meal_plan: "half_board", sort_order: 2 },
      { catalog_offer_id: row.id, day_number: 4, title_it: "Partenza", title_en: "Departure", description_it: "Check-out e rientro.", description_en: "Check-out and return.", meal_plan: "breakfast", sort_order: 3 },
    ]);
    await admin.from("agency_offer_price_tiers").insert([
      { catalog_offer_id: row.id, tier_kind: "individual", min_pax: 1, max_pax: 1, price_per_person: 420, label_it: "Individuale", label_en: "Individual", sort_order: 0 },
      { catalog_offer_id: row.id, tier_kind: "group", min_pax: 10, max_pax: 15, price_per_person: 390, label_it: "Gruppo 10-15", label_en: "Group 10-15", sort_order: 1 },
    ]);
    await admin.from("agency_offer_inclusions").insert([
      { catalog_offer_id: row.id, kind: "included", label_it: "Hotel 4* e colazioni", label_en: "4* hotel and breakfasts", sort_order: 0 },
      { catalog_offer_id: row.id, kind: "excluded", label_it: "Tassa di soggiorno", label_en: "City tax", sort_order: 0 },
    ]);
    console.log("✓ Agency offer", offerCode, "→ IT-ROM + IT-FLR");
  }
}

const { count } = await admin.from("catalog_offers").select("*", { count: "exact", head: true });
console.log("Total catalog offers:", count);
