// Crea dati minimi per verificare il badge "confronto budget" sulla dashboard
// inserzionista, poi stampa gli ID/URL. La richiesta è creata come "expired"
// (NON compare in vetrina pubblica) ma resta visibile al proprietario.
// Pulizia: node scripts/seed-badge-test.mjs --cleanup
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
const admin = createClient(url, service, { auth: { persistSession: false } });

const ADV_EMAIL = "viaggiatore.test@example.com";
const HOTEL_EMAIL = "hotel.test@example.com";
const REQUEST_CODE = "RBBADGE1";
const OFFER_CODE = "OFBADGE1";
const cleanup = process.argv.includes("--cleanup");

async function userIdByEmail(email) {
  // cerca tra i profiles (email salvata lì)
  const { data } = await admin.from("profiles").select("user_id, email").eq("email", email).maybeSingle();
  return data?.user_id ?? null;
}

const advUserId = await userIdByEmail(ADV_EMAIL);
const hotelUserId = await userIdByEmail(HOTEL_EMAIL);
if (!advUserId || !hotelUserId) {
  console.error("Impossibile trovare gli account di test:", { advUserId, hotelUserId });
  process.exit(1);
}

const { data: adv } = await admin.from("advertiser_profiles").select("id").eq("user_id", advUserId).maybeSingle();
const { data: hotel } = await admin.from("hotel_accounts").select("id, city_name, city_id, country_code, country_name, structure_type").eq("user_id", hotelUserId).maybeSingle();
if (!adv || !hotel) { console.error("Profili mancanti:", { adv, hotel }); process.exit(1); }

if (cleanup) {
  const { data: req } = await admin.from("travel_requests").select("id").eq("request_code", REQUEST_CODE).maybeSingle();
  if (req) {
    await admin.from("offers").delete().eq("travel_request_id", req.id);
    await admin.from("notifications").delete().eq("travel_request_id", req.id);
    await admin.from("travel_requests").delete().eq("id", req.id);
    console.log("Pulizia completata: richiesta/offerte/notifiche di test rimosse.");
  } else {
    console.log("Niente da pulire.");
  }
  process.exit(0);
}

// Rimuovo eventuali residui precedenti
{
  const { data: req } = await admin.from("travel_requests").select("id").eq("request_code", REQUEST_CODE).maybeSingle();
  if (req) {
    await admin.from("offers").delete().eq("travel_request_id", req.id);
    await admin.from("notifications").delete().eq("travel_request_id", req.id);
    await admin.from("travel_requests").delete().eq("id", req.id);
  }
}

const BUDGET_PER_ROOM = 50;
const ROOMS = 3; // totale indicativo = 150
const OFFER_TOTAL = 200; // -> badge AMBER "+50€ sopra il budget"

const { data: newReq, error: reqErr } = await admin
  .from("travel_requests")
  .insert({
    request_code: REQUEST_CODE,
    advertiser_id: adv.id,
    country_code: hotel.country_code || "IT",
    country_name: hotel.country_name || "Italia",
    city_name: hotel.city_name || "Roma",
    city_id: hotel.city_id || "roma-it",
    preferred_area: "Centro (test badge)",
    preferred_structure_type: "all",
    check_in: "2026-07-10",
    check_out: "2026-07-12",
    guests_count: 4,
    rooms_count: ROOMS,
    room_details: [
      { room: 1, room_type: "double", adults: 2, children: 0, children_ages: [] },
      { room: 2, room_type: "double", adults: 1, children: 0, children_ages: [] },
      { room: 3, room_type: "double", adults: 1, children: 0, children_ages: [] },
    ],
    preference_filters: {},
    budget: BUDGET_PER_ROOM,
    meal_plan: "breakfast",
    notes: "Richiesta di test per verifica badge budget.",
    status: "expired", // non compare in vetrina pubblica
    expires_at: "2026-07-09T23:59:00+02:00",
  })
  .select("id")
  .single();
if (reqErr) { console.error("Errore creazione richiesta:", reqErr.message); process.exit(1); }

const { data: newOffer, error: offErr } = await admin
  .from("offers")
  .insert({
    offer_code: OFFER_CODE,
    travel_request_id: newReq.id,
    hotel_account_id: hotel.id,
    total_price: OFFER_TOTAL,
    description: "Offerta di test per verifica badge (sopra budget).",
    conditions: "Solo test.",
    meal_plan_included: "breakfast",
    expires_at: "2026-07-08T23:59:00+02:00",
    status: "pending",
  })
  .select("id")
  .single();
if (offErr) { console.error("Errore creazione offerta:", offErr.message); process.exit(1); }

console.log("SEED OK");
console.log("  request_id:", newReq.id, "(status=expired, non pubblica)");
console.log("  offer_id  :", newOffer.id);
console.log("  budget/camera:", BUDGET_PER_ROOM, "x", ROOMS, "camere = totale indicativo", BUDGET_PER_ROOM * ROOMS);
console.log("  offerta totale:", OFFER_TOTAL, "-> atteso badge AMBER '+50€ sopra il budget'");
console.log("  URL dettaglio offerta: https://hotelsdrop.com/inserzionista/offerte/" + newOffer.id);
