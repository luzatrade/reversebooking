import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const HOTEL_EMAIL = "hotel.test@example.com";
const TRAVELER_EMAIL = "viaggiatore.test@example.com";

// Trova l'advertiser_profile del viaggiatore
const { data: travProfile } = await sb.from("profiles").select("user_id").eq("email", TRAVELER_EMAIL).single();
const { data: adv } = await sb.from("advertiser_profiles").select("id").eq("user_id", travProfile.user_id).single();

// Ultime richieste del viaggiatore
const { data: reqs } = await sb
  .from("travel_requests")
  .select("id, request_code, city_id, city_name, country_code, country_name, preferred_area, preferred_structure_type, status")
  .eq("advertiser_id", adv.id)
  .order("created_at", { ascending: false });

console.log("Richieste del viaggiatore:");
for (const r of reqs ?? []) {
  console.log(`  ${r.request_code} | city_id=${r.city_id} | city_name=${r.city_name} | tipo=${r.preferred_structure_type} | status=${r.status}`);
}

const target = reqs?.[0];
if (!target) {
  console.error("Nessuna richiesta trovata: crea prima una richiesta dal viaggiatore.");
  process.exit(1);
}

// Allinea l'hotel alla città della richiesta + imposta foto principale
const { data: hotelProfile } = await sb.from("profiles").select("user_id").eq("email", HOTEL_EMAIL).single();
const { error: upErr } = await sb
  .from("hotel_accounts")
  .update({
    main_photo_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    city_id: target.city_id,
    city_name: target.city_name,
    country_code: target.country_code,
    country_name: target.country_name,
    structure_type: "hotel",
    account_status: "active",
    subscription_status: "active",
    subscription_active: true,
  })
  .eq("user_id", hotelProfile.user_id);

if (upErr) {
  console.error("Errore update hotel:", upErr.message);
  process.exit(1);
}

console.log(`\nHotel allineato a city_id=${target.city_id} (${target.city_name}) + foto impostata.`);
console.log("Ora l'hotel dovrebbe vedere la richiesta", target.request_code, "e poter inviare offerte.");
process.exit(0);
