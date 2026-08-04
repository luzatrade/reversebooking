/**
 * Seed ~200 richieste attive solo Italia per vetrina + risposta strutture.
 * ~70 note in inglese/spagnolo; resto italiano. Budget e profili credibili.
 *
 * Usage:
 *   node scripts/seed-italy-showcase-requests.mjs
 *   node scripts/seed-italy-showcase-requests.mjs --count 200 --intl 70
 *
 * Requires: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */

import { resolve } from "path";
import dotenv from "dotenv";
dotenv.config({ path: resolve(process.cwd(), ".env.local"), override: true });

import { createClient } from "@supabase/supabase-js";

const DEMO_DOMAIN = "@richieste.hotelsdrop.com";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const args = process.argv.slice(2);
const countArg = args.find((a, i) => args[i - 1] === "--count");
const intlArg = args.find((a, i) => args[i - 1] === "--intl");
const TOTAL = countArg && Number(countArg) > 0 ? Number(countArg) : 200;
const INTL_COUNT = intlArg && Number(intlArg) > 0 ? Number(intlArg) : 70;

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function randomSuffix(len = 6) {
  let out = "";
  for (let i = 0; i < len; i += 1) out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  return out;
}
function makeRequestCode() {
  return `RB${randomSuffix(6)}`;
}
function randomPhone() {
  return `+39${3}${String(Math.floor(100000000 + Math.random() * 899999999))}`;
}
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function addDays(isoDate, days) {
  const d = new Date(`${isoDate}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}
function fmtDate(daysFromNow, jitter = 14) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + daysFromNow + Math.floor(Math.random() * jitter));
  return d.toISOString().slice(0, 10);
}

function zonedLocalToUtcIso(localDateTime, timeZone = "Europe/Rome") {
  const [datePart, timePart = "00:00:00"] = localDateTime.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute, second] = timePart.split(":").map((v) => Number(v) || 0);
  let utcMs = Date.UTC(year, month - 1, day, hour, minute, second);
  for (let i = 0; i < 4; i += 1) {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    });
    const parts = formatter.formatToParts(new Date(utcMs));
    const read = (type) => Number(parts.find((p) => p.type === type)?.value ?? 0);
    const desired = Date.UTC(year, month - 1, day, hour, minute, second);
    const actual = Date.UTC(read("year"), read("month") - 1, read("day"), read("hour"), read("minute"), read("second"));
    utcMs += desired - actual;
  }
  return new Date(utcMs).toISOString();
}

function expiresAtForCheckOut(checkOut) {
  const nextDay = addDays(checkOut, 1);
  return zonedLocalToUtcIso(`${nextDay}T00:00:00`);
}

/** Città italiane con peso (strutture abbonate + hub turistici). */
const ITALY_CITIES = [
  { city_name: "Reggio Calabria", city_id: "IT-REG", areas: ["Lungomare", "Centro", "Stazione", "Aragonese"], weight: 28 },
  { city_name: "Reggio di Calabria", city_id: "IT-REG", areas: ["Lungomare", "Centro", "Stazione", "Porto"], weight: 6 },
  { city_name: "Pesaro", city_id: "IT-pesaro", areas: ["Centro", "Lungomare", "Baia Flaminia", "Stazione"], weight: 12 },
  { city_name: "Rome", city_id: "IT-ROM", areas: ["Centro Storico", "Trastevere", "Termini", "Prati"], weight: 14 },
  { city_name: "Milan", city_id: "IT-MIL", areas: ["Centro", "Navigli", "Brera", "Porta Garibaldi"], weight: 12 },
  { city_name: "Naples", city_id: "IT-NAP", areas: ["Centro", "Chiaia", "Vomero", "Porto"], weight: 10 },
  { city_name: "Florence", city_id: "IT-FLR", areas: ["Duomo", "Oltrarno", "SMN", "San Lorenzo"], weight: 10 },
  { city_name: "Venice", city_id: "IT-VCE", areas: ["San Marco", "Cannaregio", "Dorsoduro", "Mestre"], weight: 8 },
  { city_name: "Palermo", city_id: "IT-PMO", areas: ["Centro", "Mondello", "Kalsa", "Politeama"], weight: 8 },
  { city_name: "Bari", city_id: "IT-BRI", areas: ["Murattiano", "Lungomare", "Stazione", "Poggiofranco"], weight: 8 },
  { city_name: "Bologna", city_id: "IT-BLQ", areas: ["Centro", "Università", "Fiera", "Stazione"], weight: 6 },
  { city_name: "Turin", city_id: "IT-TRN", areas: ["Centro", "Lingotto", "Porta Susa", "San Salvario"], weight: 6 },
  { city_name: "Verona", city_id: "IT-VRN", areas: ["Centro", "Arena", "Porta Nuova", "Veronetta"], weight: 5 },
  { city_name: "Rimini", city_id: "IT-RMI", areas: ["Marina Centro", "Cesareo", "Fiera", "Rivabella"], weight: 6 },
  { city_name: "Catania", city_id: "IT-CTA", areas: ["Centro", "Etnea", "Ognina", "Porto"], weight: 5 },
  { city_name: "Sorrento", city_id: "IT-SOR", areas: ["Centro", "Marina Grande", "Corso Italia", "Meta"], weight: 4 },
  { city_name: "Amalfi", city_id: "IT-AMF", areas: ["Centro", "Lungomare", "Atrani", "Ravello transfer"], weight: 3 },
  { city_name: "Taormina", city_id: "IT-TAO", areas: ["Centro", "Mazzarò", "Giardini Naxos", "Teatro Antico"], weight: 4 },
  { city_name: "Matera", city_id: "IT-MAT", areas: ["Sassi", "Centro", "Sasso Barisano", "Civita"], weight: 3 },
];

const ADVERTISERS = [
  { slug: "famiglia-rossi", type: "private_individual", first: "Elena", last: "Rossi" },
  { slug: "coppia-bianchi", type: "private_individual", first: "Giulia", last: "Bianchi" },
  { slug: "marco-ferretti", type: "private_individual", first: "Marco", last: "Ferretti" },
  { slug: "chiara-santoro", type: "private_individual", first: "Chiara", last: "Santoro" },
  { slug: "paola-conti", type: "private_individual", first: "Paola", last: "Conti" },
  { slug: "luca-moretti", type: "private_individual", first: "Luca", last: "Moretti" },
  { slug: "weekend-coppia-venezia", type: "private_individual", first: "Matteo", last: "e Francesca" },
  { slug: "famiglia-santoro", type: "private_individual", first: "Salvo", last: "Rizzo" },
  { slug: "liceo-marconi-bo", type: "company", first: "Ufficio", last: "Gite — Liceo Marconi", company: "Liceo Scientifico Marconi" },
  { slug: "istituto-bellini-na", type: "company", first: "Segreteria", last: "Viaggio d'istruzione", company: "Istituto Bellini Napoli" },
  { slug: "weekend-navigli", type: "company", first: "Marco", last: "Team building Milano", company: "StartHub Srl" },
  { slug: "addio-laura-rimini", type: "private_individual", first: "Laura", last: "Comitato addio" },
  { slug: "comitiva-pisa", type: "private_individual", first: "Andrea", last: "Gruppo amici Pisa" },
  { slug: "agenzia-viaggi-verde", type: "travel_agency", first: "Anna", last: "Verde Viaggi", agency: "Verde Viaggi Studio" },
  { slug: "gruppo-ciclismo", type: "tour_operator", first: "Pedal", last: "Italia Tours", operator: "Pedal Italia" },
  { slug: "sarah-mitchell", type: "private_individual", first: "Sarah", last: "Mitchell", langs: ["en"] },
  { slug: "james-emily", type: "private_individual", first: "James", last: "& Emily", langs: ["en"] },
  { slug: "oliver-brown", type: "private_individual", first: "Oliver", last: "Brown", langs: ["en"] },
  { slug: "emma-wilson", type: "company", first: "Emma", last: "Wilson — HR", company: "Northline Consulting", langs: ["en"] },
  { slug: "carlos-rodriguez", type: "private_individual", first: "Carlos", last: "Rodríguez", langs: ["es"] },
  { slug: "laura-martin", type: "private_individual", first: "Laura", last: "Martín", langs: ["es"] },
  { slug: "miguel-santos", type: "private_individual", first: "Miguel", last: "Santos", langs: ["es"] },
  { slug: "viajes-andalucia", type: "travel_agency", first: "Carmen", last: "Viaggi Andalucía", agency: "Viajes Andalucía", langs: ["es"] },
  { slug: "grupo-barcelona", type: "company", first: "Pablo", last: "Grupo amigos", company: "Offsite Barcelona", langs: ["es"] },
];

function buildSchoolTrip({ students, teachers, nights, perStudentNight, teachersPerNight }) {
  const triples = Math.floor(students / 3);
  const remainder = students % 3;
  const rooms = [];
  let idx = 1;
  for (let t = 0; t < triples; t += 1) {
    rooms.push({ room: idx++, room_type: "triple", adults: 3, children: 0, children_ages: [], budget: Math.round(perStudentNight * 3 * nights) });
  }
  if (remainder === 2) {
    rooms.push({ room: idx++, room_type: "twin", adults: 2, children: 0, children_ages: [], budget: Math.round(perStudentNight * 2 * nights) });
  } else if (remainder === 1) {
    rooms.push({ room: idx++, room_type: "double", adults: 2, children: 0, children_ages: [], budget: Math.round(perStudentNight * 2 * nights) });
  }
  for (let d = 0; d < teachers; d += 1) {
    rooms.push({ room: idx++, room_type: "double", adults: 1, children: 0, children_ages: [], budget: Math.round(teachersPerNight * nights) });
  }
  const budget = rooms.reduce((s, r) => s + r.budget, 0);
  return { rooms, guests_count: students + teachers, rooms_count: rooms.length, budget };
}

function buildGroupTrip({ people, nights, perRoomNight }) {
  const roomsNeeded = Math.ceil(people / 2);
  const rooms = [];
  let remaining = people;
  for (let i = 1; i <= roomsNeeded; i += 1) {
    const adults = remaining >= 2 ? 2 : 1;
    remaining -= adults;
    rooms.push({ room: i, room_type: "twin", adults, children: 0, children_ages: [], budget: Math.round(perRoomNight * nights) });
  }
  return { rooms, guests_count: people, rooms_count: rooms.length, budget: rooms.reduce((s, r) => s + r.budget, 0) };
}

function buildFamilyTrip({ adults, children, childAges, nights, roomBudget }) {
  const rooms = [{ room: 1, room_type: children > 0 ? "triple" : "double", adults, children, children_ages: childAges, budget: roomBudget }];
  return { rooms, guests_count: adults + children, rooms_count: 1, budget: roomBudget };
}

function buildSoloTrip({ nights, perNight }) {
  const rooms = [{ room: 1, room_type: "double", adults: 1, children: 0, children_ages: [], budget: Math.round(perNight * nights) }];
  return { rooms, guests_count: 1, rooms_count: 1, budget: rooms[0].budget };
}

function buildCoupleTrip({ nights, perNight }) {
  return buildFamilyTrip({ adults: 2, children: 0, childAges: [], nights, roomBudget: Math.round(perNight * nights) });
}

function notesFor(kind, lang, city, vars) {
  const c = city;
  const it = {
    couple: [
      `Weekend romantico a ${c}, camera matrimoniale. Preferiamo centro storico o zona ben collegata. Check-in flessibile se possibile.`,
      `Coppia per ${vars.nights} notti a ${c}. Colazione inclusa gradita. Budget indicativo per soggiorno completo.`,
    ],
    family: [
      `Famiglia (${vars.adults} adulti + ${vars.children} bambini) per ${vars.nights} notti a ${c}. Camera tripla o family room, zona tranquilla.`,
      `Soggiorno famiglia a ${c}: bambini ${vars.childAges}. Ci serve parcheggio o parcheggio convenzionato se disponibile.`,
    ],
    solo: [
      `Trasferta lavoro a ${c}, ${vars.nights} notte/i. Wi‑Fi stabile, check-out tardivo se possibile. Fattura elettronica.`,
      `Viaggiatore singolo a ${c} per ${vars.nights} notti. Vicino stazione o centro, budget contenuto ma pulizia importante.`,
    ],
    group: [
      `Gruppo di ${vars.people} amici per ${vars.nights} notti a ${c}. Camere doppie/twin, zona vivace ma silenziosa in camera.`,
      `Comitiva ${vars.people} persone a ${c}. Parcheggio o garage gradito. Valutiamo anche più camere nella stessa struttura.`,
    ],
    school: [
      `Gita scolastica a ${c}: ${vars.students} studenti + ${vars.teachers} docenti, ${vars.nights} notti. Mezza pensione o colazione abbondante. Camere triple per ragazzi.`,
      `Classe in visita a ${c}. Necessaria fattura a istituto. Budget max circa ${vars.perStudent}€ a studente.`,
    ],
  };
  const en = {
    couple: [
      `Romantic weekend in ${c} for ${vars.nights} nights. Double room, central area preferred. Late check-in around 8pm if possible.`,
      `Couple trip to ${c}. Breakfast included would be great. Looking for a clean, quiet place near the historic centre.`,
    ],
    family: [
      `Family stay in ${c}: ${vars.adults} adults and ${vars.children} child(ren) for ${vars.nights} nights. Family room or triple, quiet neighbourhood.`,
      `Travelling with kids (ages ${vars.childAges}) to ${c}. Parking nearby is a plus. Flexible checkout if possible.`,
    ],
    solo: [
      `Business trip to ${c}, ${vars.nights} night(s). Need reliable Wi‑Fi and early breakfast. Electronic invoice required.`,
      `Solo traveller in ${c} for ${vars.nights} nights. Close to station or city centre. Mid-range budget, cleanliness matters.`,
    ],
    group: [
      `Group of ${vars.people} friends in ${c} for ${vars.nights} nights. Twin/double rooms, lively area but quiet rooms.`,
      `We are ${vars.people} people visiting ${c}. Prefer same property if possible. Parking or garage appreciated.`,
    ],
    school: [
      `School trip to ${c}: ${vars.students} students + ${vars.teachers} teachers, ${vars.nights} nights. Half board or good breakfast. Triple rooms for students.`,
      `High school class visiting ${c}. Invoice to school required. Budget around €${vars.perStudent} per student per night.`,
    ],
  };
  const es = {
    couple: [
      `Fin de semana romántico en ${c}, ${vars.nights} noches. Habitación doble, zona céntrica. Check-in flexible si es posible.`,
      `Pareja en ${c}. Desayuno incluido sería ideal. Buscamos alojamiento limpio y tranquilo cerca del centro.`,
    ],
    family: [
      `Familia en ${c}: ${vars.adults} adultos y ${vars.children} niño(s), ${vars.nights} noches. Habitación triple o familiar.`,
      `Viaje familiar a ${c} con niños (${vars.childAges}). Aparcamiento cercano es una ventaja.`,
    ],
    solo: [
      `Viaje de trabajo a ${c}, ${vars.nights} noche(s). Wi‑Fi estable y desayuno temprano. Factura electrónica.`,
      `Viajero solo en ${c} por ${vars.nights} noches. Cerca de estación o centro. Presupuesto medio, limpieza importante.`,
    ],
    group: [
      `Grupo de ${vars.people} amigos en ${c}, ${vars.nights} noches. Habitaciones dobles/twin, zona animada pero habitaciones tranquilas.`,
      `Somos ${vars.people} personas en ${c}. Preferimos la misma estructura. Aparcamiento o garaje apreciado.`,
    ],
    school: [
      `Excursión escolar a ${c}: ${vars.students} estudiantes + ${vars.teachers} docentes, ${vars.nights} noches. Media pensión o desayuno abundante.`,
      `Clase visitando ${c}. Factura al instituto. Presupuesto aprox. €${vars.perStudent} por estudiante.`,
    ],
  };
  const pool = (lang === "en" ? en : lang === "es" ? es : it)[kind] ?? it[kind];
  return pick(pool);
}

function buildScenarios() {
  return [
    {
      kind: "couple",
      weight: 22,
      nights: () => pick([2, 3]),
      daysAhead: () => 10 + Math.floor(Math.random() * 40),
      meal: () => pick(["breakfast", "room_only"]),
      structure: (city) => (city.city_id === "IT-pesaro" ? pick(["hotel", "all"]) : pick(["hotel", "bed_and_breakfast", "all"])),
      filters: () => ({ pool: Math.random() > 0.75 }),
      build: (n) => buildCoupleTrip({ nights: n, perNight: pick([95, 110, 125, 145, 165]) }),
      vars: (n, trip) => ({ nights: n, adults: 2, children: 0, childAges: "", people: 2, students: 0, teachers: 0, perStudent: 0 }),
    },
    {
      kind: "family",
      weight: 20,
      nights: () => pick([2, 3, 4]),
      daysAhead: () => 14 + Math.floor(Math.random() * 50),
      meal: () => pick(["breakfast", "half_board"]),
      structure: () => pick(["hotel", "bed_and_breakfast", "all"]),
      filters: () => ({ pets_allowed: Math.random() > 0.85, disabled_access: Math.random() > 0.8 }),
      build: (n) => {
        const child = pick([4, 6, 8, 10]);
        return buildFamilyTrip({ adults: 2, children: 1, childAges: [child], nights: n, roomBudget: pick([240, 280, 320, 380]) });
      },
      vars: (n, trip) => ({ nights: n, adults: 2, children: 1, childAges: trip.rooms[0]?.children_ages?.join(",") ?? "6", people: trip.guests_count, students: 0, teachers: 0, perStudent: 0 }),
    },
    {
      kind: "solo",
      weight: 18,
      nights: () => pick([1, 2, 3]),
      daysAhead: () => 5 + Math.floor(Math.random() * 25),
      meal: () => pick(["room_only", "breakfast"]),
      structure: (city) => (city.city_id === "IT-pesaro" ? pick(["hotel", "all"]) : pick(["hotel", "all"])),
      filters: () => ({ garage: Math.random() > 0.6 }),
      build: (n) => buildSoloTrip({ nights: n, perNight: pick([78, 95, 110, 130]) }),
      vars: (n, trip) => ({ nights: n, adults: 1, children: 0, childAges: "", people: 1, students: 0, teachers: 0, perStudent: 0 }),
    },
    {
      kind: "group",
      weight: 22,
      nights: () => pick([2, 3]),
      daysAhead: () => 12 + Math.floor(Math.random() * 35),
      meal: () => pick(["breakfast", "room_only"]),
      structure: () => pick(["hotel", "all", "apartment"]),
      filters: () => ({ garage: true, beach: Math.random() > 0.5 }),
      build: (n) => buildGroupTrip({ people: pick([8, 10, 12, 14, 16]), nights: n, perRoomNight: pick([85, 95, 110, 125]) }),
      vars: (n, trip) => ({ nights: n, adults: trip.guests_count, children: 0, childAges: "", people: trip.guests_count, students: 0, teachers: 0, perStudent: 0 }),
    },
    {
      kind: "school",
      weight: 12,
      nights: () => pick([3, 4]),
      daysAhead: () => 45 + Math.floor(Math.random() * 70),
      meal: () => pick(["half_board", "breakfast"]),
      structure: () => pick(["hotel", "all"]),
      filters: () => ({ disabled_access: Math.random() > 0.4 }),
      build: (n) => {
        const per = pick([38, 42, 45, 48]);
        return buildSchoolTrip({ students: pick([32, 36, 40, 44]), teachers: pick([3, 4]), nights: n, perStudentNight: per, teachersPerNight: pick([68, 75, 82]) });
      },
      vars: (n, trip) => ({ nights: n, adults: 0, children: 0, childAges: "", people: trip.guests_count, students: trip.guests_count - 4, teachers: 4, perStudent: pick([38, 42, 45]) }),
    },
  ];
}

function expandWeightedCities(total) {
  const slots = [];
  const sum = ITALY_CITIES.reduce((s, c) => s + c.weight, 0);
  for (const city of ITALY_CITIES) {
    const n = Math.max(1, Math.round((city.weight / sum) * total));
    for (let i = 0; i < n; i += 1) slots.push(city);
  }
  return shuffle(slots).slice(0, total);
}

function buildLangPlan(total, intl) {
  const intlN = Math.min(intl, total);
  const enN = Math.floor(intlN / 2);
  const esN = intlN - enN;
  const langs = [];
  for (let i = 0; i < enN; i += 1) langs.push("en");
  for (let i = 0; i < esN; i += 1) langs.push("es");
  for (let i = 0; i < total - intlN; i += 1) langs.push("it");
  return shuffle(langs);
}

function pickScenario(scenarios) {
  const sum = scenarios.reduce((s, x) => s + x.weight, 0);
  let r = Math.random() * sum;
  for (const sc of scenarios) {
    r -= sc.weight;
    if (r <= 0) return sc;
  }
  return scenarios[0];
}

async function findUserByEmail(email) {
  const target = email.toLowerCase();
  let page = 1;
  while (true) {
    const { data, error } = await sb.auth.admin.listUsers({ page, perPage: 200 });
    if (error) throw error;
    const hit = (data.users ?? []).find((u) => u.email?.toLowerCase() === target);
    if (hit) return hit;
    if ((data.users ?? []).length < 200) break;
    page += 1;
  }
  return null;
}

async function ensureAdvertisers() {
  console.log("— Inserzionisti demo —");
  const pool = [];
  const byLang = { it: [], en: [], es: [] };

  for (const adv of ADVERTISERS) {
    const email = `${adv.slug}${DEMO_DOMAIN}`;
    const existing = await findUserByEmail(email);
    let userId = existing?.id;

    if (!userId) {
      const { data: created, error } = await sb.auth.admin.createUser({
        email,
        password: `HdDemo!${randomSuffix(8)}`,
        email_confirm: true,
      });
      if (error || !created?.user) {
        console.warn(`  skip ${email}:`, error?.message);
        continue;
      }
      userId = created.user.id;
      await sb.from("profiles").insert({
        user_id: userId,
        role: "advertiser",
        email,
        phone_number: randomPhone(),
        email_verified: true,
        phone_verified: true,
        account_status: "active",
      });
      const { data: ap, error: apErr } = await sb
        .from("advertiser_profiles")
        .upsert(
          {
            user_id: userId,
            advertiser_type: adv.type,
            first_name: adv.first,
            last_name: adv.last,
            company_name: adv.company ?? null,
            agency_name: adv.agency ?? null,
            operator_name: adv.operator ?? null,
            short_description: adv.type === "company" ? "Richiesta aziendale / istituto" : "Viaggiatore",
          },
          { onConflict: "user_id" },
        )
        .select("id")
        .single();
      if (apErr || !ap?.id) continue;
      pool.push({ id: ap.id, langs: adv.langs ?? ["it"], label: `${adv.first} ${adv.last}` });
      console.log(`  + ${adv.first} ${adv.last}`);
    } else {
      const { data: ap } = await sb.from("advertiser_profiles").select("id").eq("user_id", userId).maybeSingle();
      if (ap?.id) pool.push({ id: ap.id, langs: adv.langs ?? ["it"], label: `${adv.first} ${adv.last}` });
    }
  }

  for (const p of pool) {
    for (const l of p.langs) byLang[l].push(p);
  }
  return { pool, byLang };
}

function pickAdvertiser(byLang, lang, pool) {
  const candidates = byLang[lang]?.length ? byLang[lang] : pool;
  return pick(candidates);
}

async function createRequest(city, scenario, lang, adv) {
  const nights = scenario.nights();
  const checkIn = fmtDate(scenario.daysAhead(), 8);
  const checkOut = addDays(checkIn, nights);
  const trip = scenario.build(nights);
  trip.rooms = trip.rooms.map((room, idx) => ({ ...room, room: idx + 1 }));
  const vars = scenario.vars(nights, trip);

  const payload = {
    request_code: makeRequestCode(),
    advertiser_id: adv.id,
    country_code: "IT",
    country_name: "Italy",
    city_name: city.city_name,
    city_id: city.city_id,
    preferred_area: pick(city.areas),
    preferred_structure_type: scenario.structure(city),
    check_in: checkIn,
    check_out: checkOut,
    guests_count: trip.guests_count,
    rooms_count: trip.rooms_count,
    room_details: trip.rooms,
    preference_filters: scenario.filters(),
    budget: trip.budget,
    meal_plan: scenario.meal(),
    notes: notesFor(scenario.kind, lang, city.city_name, vars),
    visible_contact_email: null,
    visible_contact_phone: null,
    visible_contact_whatsapp: null,
    status: "active",
    expires_at: expiresAtForCheckOut(checkOut),
    target_hotel_account_id: null,
  };

  const { error } = await sb.from("travel_requests").insert(payload);
  if (error) throw error;
  return { kind: scenario.kind, lang, guests: trip.guests_count, budget: trip.budget };
}

async function main() {
  console.log(`HotelsDrop — seed ${TOTAL} richieste Italia (${INTL_COUNT} EN/ES)`);
  const { pool, byLang } = await ensureAdvertisers();
  if (!pool.length) {
    console.error("Nessun inserzionista demo.");
    process.exit(1);
  }

  const cities = expandWeightedCities(TOTAL);
  const langs = buildLangPlan(TOTAL, INTL_COUNT);
  const scenarios = buildScenarios();
  let created = 0;
  const stats = { it: 0, en: 0, es: 0, reggio: 0, pesaro: 0 };

  for (let i = 0; i < TOTAL; i += 1) {
    const city = cities[i] ?? pick(ITALY_CITIES);
    const lang = langs[i];
    const scenario = pickScenario(scenarios);
    const adv = pickAdvertiser(byLang, lang, pool);
    try {
      const row = await createRequest(city, scenario, lang, adv);
      created += 1;
      stats[lang] += 1;
      if (city.city_id === "IT-REG") stats.reggio += 1;
      if (city.city_id === "IT-pesaro") stats.pesaro += 1;
      if (created % 25 === 0 || created <= 5) {
        console.log(`  + ${city.city_name} · ${row.kind} · ${row.lang} · ${row.guests} ospiti · ${row.budget}€`);
      }
    } catch (err) {
      console.warn(`  ! ${city.city_name}:`, err.message ?? err);
    }
  }

  const now = new Date().toISOString();
  const { count } = await sb
    .from("travel_requests")
    .select("id", { count: "exact", head: true })
    .eq("status", "active")
    .gt("expires_at", now)
    .eq("country_code", "IT");

  console.log("\n=== RIEPILOGO ===");
  console.log(`  Create ora: ${created}`);
  console.log(`  Lingue: IT ${stats.it} · EN ${stats.en} · ES ${stats.es}`);
  console.log(`  Reggio: ${stats.reggio} · Pesaro: ${stats.pesaro}`);
  console.log(`  IT attive totali: ${count ?? "?"}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
