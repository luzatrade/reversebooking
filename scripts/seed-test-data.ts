import { resolve } from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { createClient } from "@supabase/supabase-js";

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const CITIES = [
  { city: "Roma", id: "roma-it", areas: ["Centro Storico", "Trastevere", "Vaticano", "Termini"] },
  { city: "Venezia", id: "venezia-it", areas: ["San Marco", "Dorsoduro", "Cannaregio", "Lido"] },
  { city: "Firenze", id: "firenze-it", areas: ["Duomo", "Oltrarno", "Santa Croce", "San Lorenzo"] },
  { city: "Napoli", id: "napoli-it", areas: ["Centro", "Posillipo", "Chiaia", "Vomero"] },
  { city: "Milano", id: "milano-it", areas: ["Centro", "Navigli", "Brera", "Porta Nuova"] },
  { city: "Amalfi", id: "amalfi-it", areas: ["Costa", "Centro", "Atrani"] },
  { city: "Verona", id: "verona-it", areas: ["Centro", "Arena", "Veronetta"] },
  { city: "Como", id: "como-it", areas: ["Lungolago", "Centro", "Brunate"] },
  { city: "Siena", id: "siena-it", areas: ["Centro", "Piazza del Campo"] },
  { city: "Lecce", id: "lecce-it", areas: ["Centro Storico", "Zona Stazione"] },
  { city: "Matera", id: "matera-it", areas: ["Sassi", "Centro"] },
  { city: "Taormina", id: "taormina-it", areas: ["Centro", "Isola Bella"] },
];

const HOTELS = [
  { name: "Hotel Roma Centro", type: "hotel", city: "Roma", cityId: "roma-it", address: "Via del Corso 100, Roma", area: "Centro Storico", rooms: 45, desc: "Hotel elegante nel cuore di Roma, a pochi passi dalla Fontana di Trevi e dal Pantheon." },
  { name: "B&B Canal Grande", type: "bed_and_breakfast", city: "Venezia", cityId: "venezia-it", address: "Dorsoduro 1234, Venezia", area: "Dorsoduro", rooms: 6, desc: "Incantevole B&B con vista sul Canal Grande, arredamento veneziano autentico." },
  { name: "Palazzo Medici Suites", type: "hotel", city: "Firenze", cityId: "firenze-it", address: "Via dei Calzaiuoli 15, Firenze", area: "Duomo", rooms: 30, desc: "Dimora storica trasformata in boutique hotel di lusso nel centro di Firenze." },
  { name: "Terrazza sul Golfo B&B", type: "bed_and_breakfast", city: "Napoli", cityId: "napoli-it", address: "Via Posillipo 88, Napoli", area: "Posillipo", rooms: 4, desc: "B&B panoramico con terrazza vista Golfo di Napoli e Vesuvio." },
  { name: "Design Hotel Navigli", type: "hotel", city: "Milano", cityId: "milano-it", address: "Alzaia Naviglio Grande 44, Milano", area: "Navigli", rooms: 28, desc: "Hotel di design contemporaneo nel vivace quartiere dei Navigli." },
  { name: "Villa Amalfi Coast", type: "bed_and_breakfast", city: "Amalfi", cityId: "amalfi-it", address: "Via Maestra dei Villaggi 10, Amalfi", area: "Costa", rooms: 8, desc: "Villa esclusiva sulla Costiera Amalfitana con piscina a sfioro e vista mare." },
  { name: "Albergo Arena", type: "hotel", city: "Verona", cityId: "verona-it", address: "Piazza Bra 22, Verona", area: "Centro", rooms: 35, desc: "Hotel storico affacciato sull Arena di Verona, perfetto per gli amanti dell opera." },
  { name: "Lake View Resort", type: "hotel", city: "Como", cityId: "como-it", address: "Via Lungo Lario 5, Como", area: "Lungolago", rooms: 20, desc: "Resort con accesso diretto al lago, spa e ristorante panoramico." },
];

const ADVERTISERS = [
  { first: "Marco", last: "Rossi", type: "private_individual" },
  { first: "Giulia", last: "Bianchi", type: "travel_agency" },
  { first: "Anna", last: "Verdi", type: "company" },
  { first: "Luca", last: "Ferrari", type: "tour_operator" },
  { first: "Sara", last: "Marino", type: "private_individual" },
];

const MEAL_PLANS = ["room_only", "breakfast", "half_board", "full_board"] as const;
const STRUCT_TYPES = ["all", "hotel", "bed_and_breakfast"] as const;

function randomPhone() {
  return "+39" + String(3000000000 + Math.floor(Math.random() * 999999999));
}

async function main() {
  console.log("Creazione dati di test...\n");

  // Advertisers
  const advIds: string[] = [];
  for (let i = 0; i < ADVERTISERS.length; i++) {
    const a = ADVERTISERS[i];
    const email = `${a.first.toLowerCase()}.${a.last.toLowerCase()}@example.com`;
    const { data: user, error: ue } = await sb.auth.admin.createUser({ email, password: "TestPass123!", email_confirm: true });
    if (ue || !user?.user) { console.warn("  skip advertiser", email, ue?.message); continue; }

    await sb.from("profiles").insert({ user_id: user.user.id, role: "advertiser", email, phone_number: randomPhone(), email_verified: true, phone_verified: true, account_status: "active" });
    const { data: ap } = await sb.from("advertiser_profiles").insert({ user_id: user.user.id, advertiser_type: a.type, first_name: a.first, last_name: a.last }).select("id").single();
    if (ap) advIds.push(ap.id);
    console.log("  + Advertiser:", a.first, a.last);
  }

  // Hotels
  for (const h of HOTELS) {
    const email = h.name.toLowerCase().replace(/[^a-z0-9]/g, ".").replace(/\.+/g, ".") + "@example.com";
    const { data: user, error: ue } = await sb.auth.admin.createUser({ email, password: "TestPass123!", email_confirm: true });
    if (ue || !user?.user) { console.warn("  skip hotel", email, ue?.message); continue; }

    await sb.from("profiles").insert({ user_id: user.user.id, role: "hotel", email, phone_number: randomPhone(), email_verified: true, phone_verified: true, account_status: "active" });
    await sb.from("hotel_accounts").insert({
      user_id: user.user.id, structure_type: h.type, property_name: h.name,
      cin_code: "IT" + Math.random().toString(36).slice(2, 14).toUpperCase(),
      description: h.desc, full_address: h.address,
      country_code: "IT", country_name: "Italia", city_name: h.city, city_id: h.cityId,
      specific_area: h.area, rooms_quantity: h.rooms, private_notification_email: email,
      account_status: "active", subscription_status: "active", subscription_active: true,
      services: { pool: Math.random() > 0.5, spa: Math.random() > 0.6, garage: Math.random() > 0.4, pets_allowed: Math.random() > 0.5, disabled_access: Math.random() > 0.5 },
      public_email: email, public_phone: "+39 0" + String(10000000 + Math.floor(Math.random() * 89999999)),
    });
    console.log("  + Hotel:", h.name);
  }

  // Travel requests
  let reqCount = 0;
  for (let i = 0; i < 20; i++) {
    const advId = advIds[i % advIds.length];
    if (!advId) continue;
    const c = CITIES[i % CITIES.length];
    const checkIn = new Date(Date.now() + (3 + Math.floor(Math.random() * 30)) * 86400000);
    const nights = 2 + Math.floor(Math.random() * 5);
    const checkOut = new Date(checkIn.getTime() + nights * 86400000);
    const guests = 1 + Math.floor(Math.random() * 4);

    const { error } = await sb.from("travel_requests").insert({
      advertiser_id: advId,
      country_code: "IT", country_name: "Italia",
      city_name: c.city, city_id: c.id,
      preferred_area: c.areas[Math.floor(Math.random() * c.areas.length)],
      preferred_structure_type: STRUCT_TYPES[Math.floor(Math.random() * STRUCT_TYPES.length)],
      check_in: checkIn.toISOString().slice(0, 10),
      check_out: checkOut.toISOString().slice(0, 10),
      guests_count: guests, rooms_count: Math.ceil(guests / 2),
      budget: 60 + Math.floor(Math.random() * 200),
      meal_plan: MEAL_PLANS[Math.floor(Math.random() * MEAL_PLANS.length)],
      status: "active",
      expires_at: new Date(Date.now() + 30 * 86400000).toISOString(),
    });
    if (!error) reqCount++;
    else console.warn("  req error:", error.message);
  }
  console.log("  + Travel requests:", reqCount);

  // Summary
  console.log("\n=== RIEPILOGO ===");
  for (const t of ["profiles", "advertiser_profiles", "hotel_accounts", "travel_requests"]) {
    const { count } = await sb.from(t).select("*", { count: "exact", head: true });
    console.log(`  ${t}: ${count}`);
  }
}

main().catch(console.error);
