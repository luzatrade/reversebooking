/**
 * Reset dati test legacy e popola ~38 Drop demo realistici (solo richieste + inserzionisti).
 * Non crea hotel demo. Usa city_id canonici (world-cities.ts).
 *
 * Usage:
 *   node scripts/seed-demo-drops.mjs
 *   node scripts/seed-demo-drops.mjs --fill-all --min-per-city 7
 *   node scripts/seed-demo-drops.mjs --add-italy 3
 *   node scripts/seed-demo-drops.mjs --add-city "Reggio di Calabria" --count 10
 * Requires: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY in .env.local
 */

import { resolve } from "path";
import dotenv from "dotenv";
dotenv.config({ path: resolve(process.cwd(), ".env.local"), override: true });

import { createClient } from "@supabase/supabase-js";

const DEMO_DOMAIN = "@richieste.hotelsdrop.com";
const LEGACY_TEST_SUFFIXES = ["@example.com", "@test.com"];

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const sb = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const args = process.argv.slice(2);
const fillAll = args.includes("--fill-all");
const addItalyArg = args.find((a, i) => args[i - 1] === "--add-italy");
const ADD_ITALY_COUNT =
  addItalyArg && Number.isFinite(Number(addItalyArg)) && Number(addItalyArg) > 0 ? Number(addItalyArg) : null;
const addCityArg = args.find((a, i) => args[i - 1] === "--add-city");
const addCityCountArg = args.find((a, i) => args[i - 1] === "--count");
const ADD_CITY_COUNT =
  addCityCountArg && Number.isFinite(Number(addCityCountArg)) && Number(addCityCountArg) > 0
    ? Number(addCityCountArg)
    : null;
const minPerCityArg = args.find((a, i) => args[i - 1] === "--min-per-city");
const MIN_PER_CITY = minPerCityArg && Number.isFinite(Number(minPerCityArg)) ? Number(minPerCityArg) : 7;

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
const COUNTRY_TIMEZONE = {
  IT: "Europe/Rome",
  FR: "Europe/Paris",
  GB: "Europe/London",
  DE: "Europe/Berlin",
  ES: "Europe/Madrid",
  NL: "Europe/Amsterdam",
  PT: "Europe/Lisbon",
  AE: "Asia/Dubai",
  TR: "Europe/Istanbul",
  US: "America/New_York",
};

function timezoneForLocation(countryCode, cityId) {
  if (cityId?.startsWith("US-LAX")) return "America/Los_Angeles";
  return COUNTRY_TIMEZONE[countryCode?.toUpperCase()] ?? "UTC";
}

function zonedLocalToUtcIso(localDateTime, timeZone) {
  const [datePart, timePart = "00:00:00"] = localDateTime.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute, second] = timePart.split(":").map((value) => Number(value) || 0);
  let utcMs = Date.UTC(year, month - 1, day, hour, minute, second);
  for (let attempt = 0; attempt < 4; attempt += 1) {
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
    const read = (type) => Number(parts.find((part) => part.type === type)?.value ?? 0);
    const desired = Date.UTC(year, month - 1, day, hour, minute, second);
    const actual = Date.UTC(read("year"), read("month") - 1, read("day"), read("hour"), read("minute"), read("second"));
    utcMs += desired - actual;
  }
  return new Date(utcMs).toISOString();
}

/** Mezzanotte (24:00) al termine del giorno checkout nel fuso del paese. */
function expiresAtForCheckOut(checkOut, countryCode, cityId) {
  const timezone = timezoneForLocation(countryCode, cityId);
  const nextDay = addDays(checkOut, 1);
  return zonedLocalToUtcIso(`${nextDay}T00:00:00`, timezone);
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

/** Peso richieste per città (principali = più Drop). */
const CITY_WEIGHTS = [
  { city_name: "Rome", city_id: "IT-ROM", country_code: "IT", country_name: "Italy", areas: ["Centro Storico", "Trastevere", "Termini", "Prati"], count: 5 },
  { city_name: "Milan", city_id: "IT-MIL", country_code: "IT", country_name: "Italy", areas: ["Centro", "Navigli", "Brera", "Fiera Milano City"], count: 5 },
  { city_name: "Florence", city_id: "IT-FLR", country_code: "IT", country_name: "Italy", areas: ["Duomo", "Oltrarno", "Santa Maria Novella", "San Lorenzo"], count: 4 },
  { city_name: "Venice", city_id: "IT-VCE", country_code: "IT", country_name: "Italy", areas: ["San Marco", "Cannaregio", "Dorsoduro", "Mestre"], count: 3 },
  { city_name: "Naples", city_id: "IT-NAP", country_code: "IT", country_name: "Italy", areas: ["Centro", "Chiaia", "Vomero", "Porto"], count: 3 },
  { city_name: "Rimini", city_id: "IT-RMI", country_code: "IT", country_name: "Italy", areas: ["Marina Centro", "Cesareo", "Fiera", "Rivabella"], count: 3 },
  { city_name: "Bologna", city_id: "IT-BLQ", country_code: "IT", country_name: "Italy", areas: ["Centro", "Università", "Fiera", "Stazione"], count: 3 },
  { city_name: "Verona", city_id: "IT-VRN", country_code: "IT", country_name: "Italy", areas: ["Centro", "Arena", "Porta Nuova", "Veronetta"], count: 2 },
  { city_name: "Palermo", city_id: "IT-PMO", country_code: "IT", country_name: "Italy", areas: ["Centro", "Mondello", "Kalsa", "Politeama"], count: 2 },
  { city_name: "Catania", city_id: "IT-CTA", country_code: "IT", country_name: "Italy", areas: ["Centro", "Etnea", "Ognina", "Porto"], count: 2 },
  { city_name: "Bari", city_id: "IT-BRI", country_code: "IT", country_name: "Italy", areas: ["Murattiano", "Lungomare", "Stazione", "Poggiofranco"], count: 2 },
  { city_name: "Turin", city_id: "IT-TRN", country_code: "IT", country_name: "Italy", areas: ["Centro", "Lingotto", "Porta Susa", "San Salvario"], count: 2 },
  { city_name: "Jesolo", city_id: "IT-JES", country_code: "IT", country_name: "Italy", areas: ["Piazza Mazzini", "Pineta", "Lido est", "Stazione"], count: 1 },
  { city_name: "Taormina", city_id: "IT-TAO", country_code: "IT", country_name: "Italy", areas: ["Centro", "Mazzarò", "Giardini Naxos"], count: 1 },
  // Secondarie — compaiono se ci sono hotel reali in quelle città (boost)
  { city_name: "Matera", city_id: "IT-MAT", country_code: "IT", country_name: "Italy", areas: ["Sassi", "Centro", "Sasso Barisano"], count: 0 },
  { city_name: "Cagliari", city_id: "IT-CAG", country_code: "IT", country_name: "Italy", areas: ["Marina", "Castello", "Poetto"], count: 0 },
  { city_name: "Como", city_id: "IT-CMO", country_code: "IT", country_name: "Italy", areas: ["Lungolago", "Brunate", "Stazione"], count: 0 },
  { city_name: "Siena", city_id: "IT-SIE", country_code: "IT", country_name: "Italy", areas: ["Centro", "Campo", "Stazione"], count: 0 },
];

const ADVERTISERS = [
  { slug: "liceo-marconi-bo", type: "company", first: "Ufficio", last: "Gite — Liceo Marconi", company: "Liceo Scientifico Marconi" },
  { slug: "istituto-bellini-na", type: "company", first: "Segreteria", last: "Viaggio d'istruzione", company: "Istituto Bellini Napoli" },
  { slug: "scuola-media-parma", type: "company", first: "Coordinamento", last: "Gite scolastiche", company: "Scuola Media G. Verdi Parma" },
  { slug: "collegio-san-carlo", type: "travel_agency", first: "Gruppo", last: "Scolastico San Carlo", agency: "Collegio San Carlo — Uff. viaggi" },
  { slug: "addio-laura-rimini", type: "private_individual", first: "Laura", last: "Comitato addio" },
  { slug: "comitiva-pisa", type: "private_individual", first: "Andrea", last: "Gruppo amici Pisa" },
  { slug: "weekend-navigli", type: "company", first: "Marco", last: "Team building Milano", company: "StartHub Srl" },
  { slug: "addio-celibato-vr", type: "private_individual", first: "Simone", last: "Addio al celibato" },
  { slug: "gruppo-ciclismo", type: "tour_operator", first: "Pedal", last: "Italia Tours", operator: "Pedal Italia" },
  { slug: "famiglia-rossi", type: "private_individual", first: "Elena", last: "Rossi" },
  { slug: "coppia-bianchi", type: "private_individual", first: "Giulia", last: "Bianchi" },
  { slug: "business-ferrari", type: "company", first: "Luca", last: "Ferrari — HR", company: "LogiTrans SpA" },
  { slug: "famiglia-conti", type: "private_individual", first: "Paola", last: "Conti" },
  { slug: "agenzia-viaggi-verde", type: "travel_agency", first: "Anna", last: "Verde Viaggi", agency: "Verde Viaggi Studio" },
  { slug: "consulting-roma", type: "company", first: "Davide", last: "Moretti", company: "Moretti Consulting" },
  { slug: "famiglia-santoro", type: "private_individual", first: "Chiara", last: "Santoro" },
  { slug: "torino-congress", type: "company", first: "Sara", last: "Eventi Torino", company: "Politecnico — Uff. congressi" },
  { slug: "weekend-coppia-venezia", type: "private_individual", first: "Matteo", last: "e Francesca" },
  { slug: "gruppo-londra", type: "company", first: "James", last: "Corporate Travel", company: "Northbridge Ltd" },
  { slug: "famiglia-amsterdam", type: "private_individual", first: "Sophie", last: "Van Dijk" },
  { slug: "scuola-barcellona", type: "company", first: "Colegio", last: "Montserrat", company: "Institut Montserrat" },
  { slug: "addio-praga", type: "private_individual", first: "Tereza", last: "Gruppo amiche" },
  { slug: "congresso-dubai", type: "company", first: "Omar", last: "Events MENA", company: "Gulf Summit Org" },
  { slug: "trek-santorini", type: "tour_operator", first: "Eleni", last: "Aegean Trails", operator: "Aegean Trails" },
  { slug: "coppia-istanbul", type: "private_individual", first: "Aylin", last: "Demir" },
  { slug: "gruppo-tokyo", type: "company", first: "Kenji", last: "Team offsite", company: "Sakura Tech" },
  { slug: "famiglia-lisbona", type: "private_individual", first: "Rita", last: "Costa" },
  { slug: "gruppo-ravello", type: "private_individual", first: "Claudia", last: "Matrimonio Ravello" },
  { slug: "scuola-messina", type: "company", first: "Dirigente", last: "Liceo Vittorio Emanuele", company: "Liceo V.E. Messina" },
  { slug: "weekend-portofino", type: "private_individual", first: "Federico", last: "Gruppo vela" },
  { slug: "gruppo-cinque-terre", type: "travel_agency", first: "Marina", last: "Liguria Walks", agency: "Liguria Walks" },
  { slug: "famiglia-merano", type: "private_individual", first: "Helmut", last: "Weber" },
  { slug: "corporate-munich", type: "company", first: "Anna", last: "Schmidt HR", company: "Bayern Logistics GmbH" },
  { slug: "gruppo-osaka", type: "tour_operator", first: "Yuki", last: "Kansai Tours", operator: "Kansai Tours" },
  { slug: "coppia-newyork", type: "private_individual", first: "Emily", last: "Brooks" },
  { slug: "gruppo-bolzano", type: "company", first: "Thomas", last: "Alpine Meeting", company: "Dolomiti Events" },
  { slug: "famiglia-agrigento", type: "private_individual", first: "Salvo", last: "Rizzo" },
  { slug: "gruppo-perugia", type: "private_individual", first: "Giorgio", last: "Umbria Jazz friends" },
  { slug: "scuola-catanzaro", type: "company", first: "Prof.", last: "De Luca", company: "ITIS Catanzaro" },
  { slug: "weekend-positano", type: "private_individual", first: "Valentina", last: "Addio al nubilato" },
  { slug: "gruppo-matera", type: "travel_agency", first: "Lucia", last: "Sud Experience", agency: "Sud Experience" },
  { slug: "famiglia-ravenna", type: "private_individual", first: "Marco", last: "Ferretti" },
  { slug: "business-vienna", type: "company", first: "Karl", last: "Huber", company: "Wien Consulting" },
  { slug: "gruppo-phuket", type: "tour_operator", first: "Somchai", last: "Island Holidays", operator: "Island Holidays" },
  { slug: "famiglia-cebu", type: "private_individual", first: "Maria", last: "Santos" },
  { slug: "gruppo-manila", type: "company", first: "Jose", last: "Trade fair team", company: "Pacific Expo" },
];

function cityTarget(city_name, city_id, country_code, country_name, areas) {
  return { city_name, city_id, country_code, country_name, areas };
}

/** Destinazioni vetrina + internazionali: almeno MIN_PER_CITY richieste attive ciascuna. */
const FILL_TARGET_CITIES = [
  cityTarget("Rome", "IT-ROM", "IT", "Italy", ["Centro Storico", "Trastevere", "Termini", "Prati"]),
  cityTarget("Milan", "IT-MIL", "IT", "Italy", ["Centro", "Navigli", "Brera", "Porta Garibaldi"]),
  cityTarget("Florence", "IT-FLR", "IT", "Italy", ["Duomo", "Oltrarno", "SMN", "San Lorenzo"]),
  cityTarget("Venice", "IT-VCE", "IT", "Italy", ["San Marco", "Cannaregio", "Dorsoduro", "Mestre"]),
  cityTarget("Naples", "IT-NAP", "IT", "Italy", ["Centro", "Chiaia", "Vomero", "Porto"]),
  cityTarget("Turin", "IT-TRN", "IT", "Italy", ["Centro", "Lingotto", "Porta Susa", "San Salvario"]),
  cityTarget("Palermo", "IT-PMO", "IT", "Italy", ["Centro", "Mondello", "Kalsa", "Politeama"]),
  cityTarget("Genoa", "IT-GOA", "IT", "Italy", ["Centro", "Porto Antico", "Carignano", "Stazione Brignole"]),
  cityTarget("Bologna", "IT-BLQ", "IT", "Italy", ["Centro", "Università", "Fiera", "Stazione"]),
  cityTarget("Bari", "IT-BRI", "IT", "Italy", ["Murattiano", "Lungomare", "Stazione", "Poggiofranco"]),
  cityTarget("Catania", "IT-CTA", "IT", "Italy", ["Centro", "Etnea", "Ognina", "Porto"]),
  cityTarget("Verona", "IT-VRN", "IT", "Italy", ["Centro", "Arena", "Porta Nuova", "Veronetta"]),
  cityTarget("Rimini", "IT-RMI", "IT", "Italy", ["Marina Centro", "Cesareo", "Fiera", "Rivabella"]),
  cityTarget("Siena", "IT-SIE", "IT", "Italy", ["Centro", "Campo", "Stazione", "San Domenico"]),
  cityTarget("Pisa", "IT-PSA", "IT", "Italy", ["Centro", "Piazza dei Miracoli", "Stazione", "Lungarno"]),
  cityTarget("Siracusa", "IT-SIR", "IT", "Italy", ["Ortigia", "Centro", "Lungomare", "Neapolis"]),
  cityTarget("Reggio di Calabria", "IT-REG", "IT", "Italy", ["Lungomare", "Centro", "Stazione", "Aragonese"]),
  cityTarget("Sorrento", "IT-SOR", "IT", "Italy", ["Centro", "Marina Grande", "Corso Italia", "Meta"]),
  cityTarget("Amalfi", "IT-AMF", "IT", "Italy", ["Centro", "Lungomare", "Atrani", "Ravello transfer"]),
  cityTarget("Padua", "IT-PAD", "IT", "Italy", ["Centro", "Basilica", "Stazione", "Prato della Valle"]),
  cityTarget("Trieste", "IT-TRS", "IT", "Italy", ["Centro", "Città Vecchia", "Barcola", "Stazione"]),
  cityTarget("Perugia", "IT-PEG", "IT", "Italy", ["Centro storico", "MiniMetro", "Stazione", "Elce"]),
  cityTarget("Lecce", "IT-LCC", "IT", "Italy", ["Centro barocco", "Stazione", "Porto", "San Cataldo"]),
  cityTarget("Cagliari", "IT-CAG", "IT", "Italy", ["Marina", "Castello", "Poetto", "Stazione"]),
  cityTarget("Taormina", "IT-TAO", "IT", "Italy", ["Centro", "Mazzarò", "Giardini Naxos", "Teatro Antico"]),
  cityTarget("Como", "IT-CMO", "IT", "Italy", ["Lungolago", "Brunate", "Stazione", "Lago"]),
  cityTarget("Salerno", "IT-SAL", "IT", "Italy", ["Centro", "Lungomare", "Stazione", "Luci del artista"]),
  cityTarget("Ravello", "IT-RVL", "IT", "Italy", ["Centro", "Villa Rufolo", "Scala", "Minori"]),
  cityTarget("Portofino", "IT-POF", "IT", "Italy", ["Porto", "Piazzetta", "Parco", "San Fruttuoso"]),
  cityTarget("Merano", "IT-MER", "IT", "Italy", ["Centro", "Terme", "Tappeiner", "Quadrilatero"]),
  cityTarget("Bolzano", "IT-BZO", "IT", "Italy", ["Centro", "Stazione", "Gries", "Oltradige"]),
  cityTarget("Urbino", "IT-URB", "IT", "Italy", ["Centro storico", "Università", "Mercatale", "Borgo Mercatale"]),
  cityTarget("Messina", "IT-MSN", "IT", "Italy", ["Centro", "Lungomare", "Stazione", "Ganzirri"]),
  cityTarget("Catanzaro", "IT-CZZ", "IT", "Italy", ["Centro", "Lungomare", "Stazione", "Corso Mazzini"]),
  cityTarget("Ravenna", "IT-RAV", "IT", "Italy", ["Centro", "Mosaic district", "Stazione", "Marina"]),
  cityTarget("Cinque Terre", "IT-CQT", "IT", "Italy", ["Monterosso", "Vernazza", "Manarola", "Riomaggiore"]),
  cityTarget("Positano", "IT-POS", "IT", "Italy", ["Centro", "Spiaggia Grande", "Viale Pasitea", "Nocelle"]),
  cityTarget("Matera", "IT-MAT", "IT", "Italy", ["Sassi", "Centro", "Sasso Barisano", "Civita"]),
  cityTarget("Alberobello", "IT-ABB", "IT", "Italy", ["Trulli", "Centro", "Aia Piccola", "Monti"]),
  cityTarget("Capri", "IT-CAP", "IT", "Italy", ["Piazzetta", "Marina Grande", "Anacapri", "Faraglioni area"]),
  cityTarget("Bergamo", "IT-BGY", "IT", "Italy", ["Città Alta", "Città Bassa", "Stazione", "Orio area"]),
  cityTarget("Parma", "IT-PMF", "IT", "Italy", ["Centro", "Duomo", "Stazione", "Oltretorrente"]),
  cityTarget("Olbia", "IT-OLB", "IT", "Italy", ["Centro", "Porto", "Pittulongu", "Aeroporto"]),
  cityTarget("Agrigento", "IT-AGR", "IT", "Italy", ["Valle dei Templi", "Centro", "San Leone", "Stazione"]),
  cityTarget("Jesolo", "IT-JES", "IT", "Italy", ["Piazza Mazzini", "Pineta", "Lido est", "Stazione"]),
  cityTarget("London", "GB-LON", "GB", "United Kingdom", ["Westminster", "Covent Garden", "South Bank", "Kensington"]),
  cityTarget("Paris", "FR-PAR", "FR", "France", ["Marais", "Saint-Germain", "Opéra", "Montmartre"]),
  cityTarget("Lyon", "FR-LYN", "FR", "France", ["Presqu'île", "Vieux Lyon", "Part-Dieu", "Confluence"]),
  cityTarget("Madrid", "ES-MAD", "ES", "Spain", ["Sol", "Malasaña", "Salamanca", "Atocha"]),
  cityTarget("Barcelona", "ES-BCN", "ES", "Spain", ["Gothic Quarter", "Eixample", "Barceloneta", "Gràcia"]),
  cityTarget("Amsterdam", "NL-AMS", "NL", "Netherlands", ["Centrum", "Jordaan", "Museum Quarter", "De Pijp"]),
  cityTarget("Berlin", "DE-BER", "DE", "Germany", ["Mitte", "Prenzlauer Berg", "Charlottenburg", "Kreuzberg"]),
  cityTarget("Munich", "DE-MUC", "DE", "Germany", ["Altstadt", "Schwabing", "Maxvorstadt", "Hauptbahnhof"]),
  cityTarget("Lisbon", "PT-LIS", "PT", "Portugal", ["Baixa", "Alfama", "Chiado", "Belém"]),
  cityTarget("Prague", "CZ-PRG", "CZ", "Czech Republic", ["Old Town", "Mala Strana", "Wenceslas Square", "Vinohrady"]),
  cityTarget("Vienna", "AT-VIE", "AT", "Austria", ["Innere Stadt", "Leopoldstadt", "Mariahilf", "Landstraße"]),
  cityTarget("Istanbul", "TR-IST", "TR", "Turkey", ["Sultanahmet", "Beyoğlu", "Kadıköy", "Taksim"]),
  cityTarget("Santorini", "GR-JTR", "GR", "Greece", ["Fira", "Oia", "Imerovigli", "Kamari"]),
  cityTarget("Dubai", "AE-DXB", "AE", "United Arab Emirates", ["Downtown", "Marina", "Deira", "JBR"]),
  cityTarget("New York", "US-NYC", "US", "United States", ["Midtown", "SoHo", "Upper West Side", "Financial District"]),
  cityTarget("Tokyo", "JP-TYO", "JP", "Japan", ["Shinjuku", "Shibuya", "Ginza", "Asakusa"]),
  cityTarget("Osaka", "JP-OSA", "JP", "Japan", ["Namba", "Umeda", "Shinsaibashi", "Tennoji"]),
  cityTarget("Bangkok", "TH-BKK", "TH", "Thailand", ["Sukhumvit", "Old City", "Silom", "Riverside"]),
  cityTarget("Phuket", "TH-HKT", "TH", "Thailand", ["Patong", "Old Town", "Kata", "Kamala"]),
  cityTarget("Manila", "PH-MNL", "PH", "Philippines", ["Makati", "BGC", "Intramuros", "Malate"]),
  cityTarget("Cebu", "PH-CEB", "PH", "Philippines", ["IT Park", "Lahug", "Mactan", "Downtown"]),
];

function buildSchoolTrip({ students, teachers, nights, perStudentNight, teachersPerNight }) {
  const triples = Math.floor(students / 3);
  const remainder = students % 3;
  const rooms = [];
  let idx = 1;
  for (let t = 0; t < triples; t += 1) {
    rooms.push({
      room: idx++,
      room_type: "triple",
      adults: 3,
      children: 0,
      children_ages: [],
      budget: Math.round(perStudentNight * 3 * nights),
    });
  }
  if (remainder === 2) {
    rooms.push({ room: idx++, room_type: "twin", adults: 2, children: 0, children_ages: [], budget: Math.round(perStudentNight * 2 * nights) });
  } else if (remainder === 1) {
    rooms.push({ room: idx++, room_type: "double", adults: 2, children: 0, children_ages: [], budget: Math.round(perStudentNight * 2 * nights) });
  }
  for (let d = 0; d < teachers; d += 1) {
    rooms.push({
      room: idx++,
      room_type: "double",
      adults: 1,
      children: 0,
      children_ages: [],
      budget: Math.round(teachersPerNight * nights),
    });
  }
  const guests = students + teachers;
  const budget = rooms.reduce((s, r) => s + r.budget, 0);
  return { rooms, guests_count: guests, rooms_count: rooms.length, budget };
}

function buildGroupTrip({ people, nights, perRoomNight, twin = true }) {
  const roomsNeeded = Math.ceil(people / 2);
  const rooms = [];
  let remaining = people;
  for (let i = 1; i <= roomsNeeded; i += 1) {
    const adults = remaining >= 2 ? 2 : 1;
    remaining -= adults;
    rooms.push({
      room: i,
      room_type: twin ? "twin" : "double",
      adults,
      children: 0,
      children_ages: [],
      budget: Math.round(perRoomNight * nights),
    });
  }
  const budget = rooms.reduce((s, r) => s + r.budget, 0);
  return { rooms, guests_count: people, rooms_count: rooms.length, budget };
}

function buildFamilyTrip({ adults, children, childAges, nights, roomBudget }) {
  const rooms = [
    {
      room: 1,
      room_type: children > 0 ? "triple" : "double",
      adults,
      children,
      children_ages: childAges,
      budget: roomBudget,
    },
  ];
  return {
    rooms,
    guests_count: adults + children,
    rooms_count: 1,
    budget: roomBudget,
  };
}

function buildBusinessTrip({ nights, perNight }) {
  const rooms = [{ room: 1, room_type: "double", adults: 1, children: 0, children_ages: [], budget: Math.round(perNight * nights) }];
  return { rooms, guests_count: 1, rooms_count: 1, budget: rooms[0].budget };
}

/** Template Drop — verranno mescolati e assegnati alle città pesate. */
function buildDropTemplates() {
  return [
    {
      kind: "school",
      nights: () => 3 + Math.floor(Math.random() * 2),
      daysAhead: () => 45 + Math.floor(Math.random() * 80),
      meal: () => pick(["half_board", "breakfast", "room_only"]),
      structure: () => pick(["hotel", "bed_and_breakfast", "all"]),
      filters: () => ({ disabled_access: Math.random() > 0.5, garage: Math.random() > 0.6 }),
      notes: (city) =>
        `Gita scolastica di ${pick([3, 4, 5])} notti a ${city}. Cerchiamo mezza pensione o B&B con colazione se ben collegati ai mezzi. Budget indicativo max ${pick([42, 45, 48, 50])}€ a studente. Necessarie camere triple/quadruple per ragazzi e singole o doppie per docenti.`,
      build: (nights) => buildSchoolTrip({
        students: pick([32, 36, 38, 42, 45, 48]),
        teachers: pick([3, 4, 5]),
        nights,
        perStudentNight: pick([38, 42, 45, 48]),
        teachersPerNight: pick([65, 72, 78]),
      }),
    },
    {
      kind: "school",
      nights: () => 4,
      daysAhead: () => 60 + Math.floor(Math.random() * 50),
      meal: () => "half_board",
      structure: () => "hotel",
      filters: () => ({ disabled_access: true, pool: false }),
      notes: (city) =>
        `Classe quarta liceo in visita a ${city}. Priorità strutture con mensa o mezza pensione e possibilità fattura a istituto. Gruppo di circa 40 studenti con 4 accompagnatori.`,
      build: (nights) => buildSchoolTrip({ students: 40, teachers: 4, nights, perStudentNight: 44, teachersPerNight: 70 }),
    },
    {
      kind: "group",
      nights: () => pick([2, 3, 4]),
      daysAhead: () => 20 + Math.floor(Math.random() * 40),
      meal: () => pick(["breakfast", "room_only"]),
      structure: () => pick(["hotel", "apartment", "all"]),
      filters: () => ({ garage: true, beach: Math.random() > 0.4, pets_allowed: false }),
      notes: (city) =>
        `Gruppo di ${pick([10, 12, 14, 16, 18])} amici per ${pick(["weekend lungo", "fiera", "evento"])} a ${city}. Ci serve parcheggio o parcheggio convenzionato e posizione comoda per uscire la sera. Valutiamo anche appartamenti della stessa struttura.`,
      build: (nights) => buildGroupTrip({ people: pick([10, 12, 14, 16]), nights, perRoomNight: pick([85, 95, 110, 125]) }),
    },
    {
      kind: "group",
      nights: () => 2,
      daysAhead: () => 14 + Math.floor(Math.random() * 21),
      meal: () => "breakfast",
      structure: () => "hotel",
      filters: () => ({ garage: true }),
      notes: (city) =>
        `Addio al nubilato/celibato a ${city}, 8 ragazze/uomini. Camere doppie con letti separati se possibile. Zona vivace ma senza eccessivo rumore in camera.`,
      build: (nights) => buildGroupTrip({ people: 8, nights, perRoomNight: 115, twin: true }),
    },
    {
      kind: "individual",
      nights: () => pick([2, 3]),
      daysAhead: () => 10 + Math.floor(Math.random() * 35),
      meal: () => pick(["breakfast", "room_only"]),
      structure: () => pick(["hotel", "bed_and_breakfast", "all"]),
      filters: () => ({ pool: Math.random() > 0.7, disabled_access: false }),
      notes: (city) =>
        `Coppia con bambino di ${pick([4, 6, 8, 10])} anni cerca camera tripla per weekend a ${city}. Gradita colazione inclusa e posizione comoda a piedi per il centro.`,
      build: (nights) => buildFamilyTrip({ adults: 2, children: 1, childAges: [pick([4, 6, 8, 10])], nights, roomBudget: pick([220, 265, 290, 320]) }),
    },
    {
      kind: "individual",
      nights: () => 2,
      daysAhead: () => 7 + Math.floor(Math.random() * 20),
      meal: () => "breakfast",
      structure: () => "hotel",
      filters: () => ({}),
      notes: (city) =>
        `Weekend romantico a ${city}, camera matrimoniale con check-in flessibile se possibile. Preferiamo struttura in centro storico.`,
      build: (nights) => buildFamilyTrip({ adults: 2, children: 0, childAges: [], nights, roomBudget: pick([180, 210, 240]) }),
    },
    {
      kind: "individual",
      nights: () => pick([1, 2, 3]),
      daysAhead: () => 5 + Math.floor(Math.random() * 25),
      meal: () => "room_only",
      structure: () => "hotel",
      filters: () => ({ garage: Math.random() > 0.5 }),
      notes: (city) =>
        `Trasferta lavoro a ${city}, 1 notte. Serve Wi‑Fi stabile, colazione presto e fattura elettronica. Vicino centro o stazione.`,
      build: (nights) => buildBusinessTrip({ nights, perNight: pick([95, 110, 130, 145]) }),
    },
    {
      kind: "individual",
      nights: () => 3,
      daysAhead: () => 30 + Math.floor(Math.random() * 45),
      meal: () => "breakfast",
      structure: () => "bed_and_breakfast",
      filters: () => ({ pets_allowed: true }),
      notes: (city) =>
        `Famiglia con cane di piccola taglia (4 kg), 2 adulti. B&B o hotel pet friendly a ${city}. Budget contenuto ma pulizia importante.`,
      build: (nights) => buildFamilyTrip({ adults: 2, children: 0, childAges: [], nights, roomBudget: pick([195, 225, 255]) }),
    },
  ];
}

function expandCitySlots() {
  const slots = [];
  for (const city of CITY_WEIGHTS) {
    for (let i = 0; i < city.count; i += 1) slots.push(city);
  }
  return shuffle(slots);
}

function isLegacyTestEmail(email) {
  const lower = (email ?? "").toLowerCase();
  return LEGACY_TEST_SUFFIXES.some((s) => lower.endsWith(s)) || lower.endsWith(DEMO_DOMAIN);
}

async function listUsersByEmailFilter() {
  const users = [];
  let page = 1;
  while (true) {
    const { data, error } = await sb.auth.admin.listUsers({ page, perPage: 200 });
    if (error) throw error;
    users.push(...(data.users ?? []));
    if ((data.users ?? []).length < 200) break;
    page += 1;
  }
  return users.filter((u) => isLegacyTestEmail(u.email));
}

async function deleteUserCascade(userId) {
  const { data: adv } = await sb.from("advertiser_profiles").select("id").eq("user_id", userId).maybeSingle();
  if (adv?.id) {
    const { data: reqs } = await sb.from("travel_requests").select("id").eq("advertiser_id", adv.id);
    const reqIds = (reqs ?? []).map((r) => r.id);
    if (reqIds.length) {
      await sb.from("offers").delete().in("travel_request_id", reqIds);
      await sb.from("notifications").delete().in("travel_request_id", reqIds);
      await sb.from("travel_requests").delete().in("id", reqIds);
    }
    await sb.from("advertiser_profiles").delete().eq("id", adv.id);
  }
  const { data: hotel } = await sb.from("hotel_accounts").select("id").eq("user_id", userId).maybeSingle();
  if (hotel?.id) {
    await sb.from("offers").delete().eq("hotel_account_id", hotel.id);
    await sb.from("notifications").delete().eq("recipient_id", hotel.id);
    await sb.from("hotel_accounts").delete().eq("id", hotel.id);
  }
  await sb.from("profiles").delete().eq("user_id", userId);
  await sb.auth.admin.deleteUser(userId);
}

async function cleanupLegacyAndDemo() {
  console.log("\n— Pulizia dati test / demo precedenti —");
  const users = await listUsersByEmailFilter();
  console.log(`  Utenti test/demo da rimuovere: ${users.length}`);
  for (const user of users) {
    try {
      await deleteUserCascade(user.id);
      console.log(`  - rimosso ${user.email}`);
    } catch (err) {
      console.warn(`  ! skip ${user.email}:`, err.message ?? err);
    }
  }

  const { data: orphanReqs } = await sb
    .from("travel_requests")
    .select("id, city_id")
    .or("city_id.like.%-it,city_id.like.%-IT");
  const legacyCityIds = (orphanReqs ?? []).filter((r) => /-[a-z]+-it$/i.test(r.city_id));
  if (legacyCityIds.length) {
    const ids = legacyCityIds.map((r) => r.id);
    await sb.from("offers").delete().in("travel_request_id", ids);
    await sb.from("travel_requests").delete().in("id", ids);
    console.log(`  - rimosse ${ids.length} richieste con city_id legacy (es. roma-it)`);
  }
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
  console.log("\n— Inserzionisti demo —");
  const pool = [];
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
        console.warn(`  ! skip advertiser ${email}:`, error?.message);
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
            short_description:
              adv.type === "company"
                ? "Richiesta istituzionale / aziendale"
                : adv.type === "travel_agency"
                  ? "Agenzia viaggi"
                  : "Viaggiatore privato",
          },
          { onConflict: "user_id" },
        )
        .select("id")
        .single();
      if (apErr || !ap) {
        const { data: fallback } = await sb.from("advertiser_profiles").select("id").eq("user_id", userId).maybeSingle();
        if (!fallback?.id) {
          console.warn(`  ! profile error ${email}:`, apErr?.message);
          continue;
        }
        pool.push({ id: fallback.id, label: `${adv.first} ${adv.last}` });
        console.log(`  = ${adv.first} ${adv.last} (profilo esistente)`);
        continue;
      }
      pool.push({ id: ap.id, label: `${adv.first} ${adv.last}` });
      console.log(`  + ${adv.first} ${adv.last}`);
    } else {
      const { data: ap } = await sb.from("advertiser_profiles").select("id").eq("user_id", userId).maybeSingle();
      if (ap?.id) {
        pool.push({ id: ap.id, label: `${adv.first} ${adv.last}` });
        console.log(`  = ${adv.first} ${adv.last} (esistente)`);
      }
    }
  }
  return pool;
}

async function boostHotelCities(slots) {
  const { data: hotels } = await sb
    .from("hotel_accounts")
    .select("city_id, city_name, subscription_active, account_status")
    .eq("account_status", "active")
    .eq("subscription_active", true);
  if (!hotels?.length) return slots.slice(0, 38);

  const counts = new Map();
  for (const h of hotels) {
    if (!h.city_id) continue;
    counts.set(h.city_id, (counts.get(h.city_id) ?? 0) + 1);
  }
  console.log("\n— Hotel reali attivi per città —");
  for (const [id, n] of counts.entries()) {
    console.log(`  ${id}: ${n} struttura/e`);
  }

  const extra = [];
  for (const [cityId] of counts.entries()) {
    const base = CITY_WEIGHTS.find((c) => c.city_id === cityId && c.count > 0);
    const secondary = CITY_WEIGHTS.find((c) => c.city_id === cityId);
    const city = base ?? secondary;
    if (city) extra.push(city);
  }
  const merged = shuffle([...slots, ...extra]);
  return merged.slice(0, 38);
}

async function createDrop(city, tpl, adv) {
  const nights = tpl.nights();
  const checkIn = fmtDate(tpl.daysAhead(), 10);
  const checkOut = addDays(checkIn, nights);
  const trip = tpl.build(nights);
  trip.rooms = trip.rooms.map((room, idx) => ({ ...room, room: idx + 1 }));

  const payload = {
    request_code: makeRequestCode(),
    advertiser_id: adv.id,
    country_code: city.country_code,
    country_name: city.country_name,
    city_name: city.city_name,
    city_id: city.city_id,
    preferred_area: pick(city.areas),
    preferred_structure_type: tpl.structure(),
    check_in: checkIn,
    check_out: checkOut,
    guests_count: trip.guests_count,
    rooms_count: trip.rooms_count,
    room_details: trip.rooms,
    preference_filters: tpl.filters(),
    budget: trip.budget,
    meal_plan: tpl.meal(),
    notes: tpl.notes(city.city_name),
    visible_contact_email: null,
    visible_contact_phone: null,
    visible_contact_whatsapp: null,
    status: "active",
    expires_at: expiresAtForCheckOut(checkOut, city.country_code, city.city_id),
    target_hotel_account_id: null,
  };

  const { error } = await sb.from("travel_requests").insert(payload);
  if (error) throw error;
  return { kind: tpl.kind, guests: trip.guests_count, budget: trip.budget };
}

async function countActiveRequestsForCity(cityId) {
  const { count, error } = await sb
    .from("travel_requests")
    .select("*", { count: "exact", head: true })
    .eq("status", "active")
    .gt("expires_at", new Date().toISOString())
    .eq("city_id", cityId);
  if (error) throw error;
  return count ?? 0;
}

function pickTemplateForKind(templates, kind) {
  const pool =
    kind === "group"
      ? templates.filter((tpl) => tpl.kind === "group" || tpl.kind === "school")
      : templates.filter((tpl) => tpl.kind === "individual");
  return pick(pool.length ? pool : templates);
}

function buildKindMix(needed) {
  const mix = [];
  const groups = Math.ceil(needed / 2);
  const individuals = needed - groups;
  for (let i = 0; i < groups; i += 1) mix.push("group");
  for (let i = 0; i < individuals; i += 1) mix.push("individual");
  return shuffle(mix);
}

async function fillAllCities(advertiserPool) {
  console.log(`\n— Fill richieste demo (min ${MIN_PER_CITY} per città, ${FILL_TARGET_CITIES.length} destinazioni) —`);
  const templates = buildDropTemplates();
  let created = 0;
  let citiesOk = 0;

  for (const city of FILL_TARGET_CITIES) {
    const existing = await countActiveRequestsForCity(city.city_id);
    const needed = Math.max(0, MIN_PER_CITY - existing);
    if (!needed) {
      citiesOk += 1;
      console.log(`  = ${city.city_name}: ${existing}/${MIN_PER_CITY}`);
      continue;
    }

    console.log(`  → ${city.city_name}: ${existing}/${MIN_PER_CITY}, +${needed}`);
    const kinds = buildKindMix(needed);
    for (let i = 0; i < needed; i += 1) {
      const tpl = pickTemplateForKind(templates, kinds[i]);
      const adv = pick(advertiserPool);
      if (!adv) continue;
      try {
        const row = await createDrop(city, tpl, adv);
        created += 1;
        console.log(`     + ${row.kind} · ${row.guests} ospiti · ${row.budget}€`);
      } catch (err) {
        console.warn(`     ! ${city.city_name}:`, err.message ?? err);
      }
    }
  }

  console.log(`\n  Città già a target: ${citiesOk}/${FILL_TARGET_CITIES.length}`);
  return created;
}

async function addItalyRequests(advertiserPool, count) {
  const italianCities = FILL_TARGET_CITIES.filter((city) => city.country_code === "IT");
  console.log(`\n— Aggiunta ${count} richieste per città italiana (${italianCities.length} città, solo insert) —`);
  const templates = buildDropTemplates();
  let created = 0;

  for (const city of italianCities) {
    const existing = await countActiveRequestsForCity(city.city_id);
    console.log(`  → ${city.city_name}: ${existing} attive, +${count}`);
    const kinds = buildKindMix(count);
    for (let i = 0; i < count; i += 1) {
      const tpl = pickTemplateForKind(templates, kinds[i]);
      const adv = pick(advertiserPool);
      if (!adv) continue;
      try {
        const row = await createDrop(city, tpl, adv);
        created += 1;
        console.log(`     + ${row.kind} · ${row.guests} ospiti · ${row.budget}€`);
      } catch (err) {
        console.warn(`     ! ${city.city_name}:`, err.message ?? err);
      }
    }
  }

  return created;
}

function resolveTargetCity(name) {
  const normalized = name.trim().toLowerCase();
  const direct = FILL_TARGET_CITIES.find((city) => city.city_name.toLowerCase() === normalized);
  if (direct) return direct;
  const aliases = {
    "reggio calabria": "Reggio di Calabria",
    reggio: "Reggio di Calabria",
  };
  const mapped = aliases[normalized];
  if (mapped) return FILL_TARGET_CITIES.find((city) => city.city_name === mapped) ?? null;
  return null;
}

async function addCityRequests(advertiserPool, cityName, count) {
  const city = resolveTargetCity(cityName);
  if (!city) throw new Error(`Città non configurata nel seed: ${cityName}`);
  console.log(`\n— Aggiunta ${count} richieste a ${city.city_name} (solo insert) —`);
  const templates = buildDropTemplates();
  const existing = await countActiveRequestsForCity(city.city_id);
  console.log(`  Attive ora: ${existing}`);
  let created = 0;
  const kinds = buildKindMix(count);
  for (let i = 0; i < count; i += 1) {
    const tpl = pickTemplateForKind(templates, kinds[i]);
    const adv = pick(advertiserPool);
    if (!adv) continue;
    try {
      const row = await createDrop(city, tpl, adv);
      created += 1;
      console.log(`  + ${row.kind} · ${row.guests} ospiti · ${row.budget}€`);
    } catch (err) {
      console.warn(`  ! ${city.city_name}:`, err.message ?? err);
    }
  }
  return created;
}

async function seedDrops(advertiserPool) {
  console.log("\n— Creazione Drop —");
  let templates = buildDropTemplates();
  let slots = expandCitySlots();
  slots = await boostHotelCities(slots);
  slots = slots.slice(0, 38);

  while (templates.length < slots.length) {
    templates = [...templates, ...buildDropTemplates()];
  }
  templates = shuffle(templates);

  let created = 0;
  for (let i = 0; i < slots.length; i += 1) {
    const city = slots[i];
    const tpl = templates[i];
    const adv = advertiserPool[i % advertiserPool.length];
    if (!adv) continue;

    try {
      const row = await createDrop(city, tpl, adv);
      created += 1;
      console.log(`  + ${city.city_name} · ${row.kind} · ${row.guests} ospiti · RB…`);
    } catch (err) {
      console.warn(`  ! Drop ${city.city_name}:`, err.message ?? err);
    }
  }
  return created;
}

async function summary() {
  const { count: reqActive } = await sb
    .from("travel_requests")
    .select("*", { count: "exact", head: true })
    .eq("status", "active");
  const { count: advCount } = await sb.from("advertiser_profiles").select("*", { count: "exact", head: true });
  const { count: hotelCount } = await sb
    .from("hotel_accounts")
    .select("*", { count: "exact", head: true })
    .eq("subscription_active", true);
  console.log("\n=== RIEPILOGO ===");
  console.log(`  Richieste attive totali: ${reqActive ?? "?"}`);
  console.log(`  Inserzionisti totali: ${advCount ?? "?"}`);
  console.log(`  Hotel abbonati: ${hotelCount ?? "?"}`);
}

async function main() {
  console.log("HotelsDrop — seed Drop demo realistici");
  const pool = await ensureAdvertisers();
  if (!pool.length) {
    console.error("Nessun inserzionista demo creato. Interrompo.");
    process.exit(1);
  }

  if (fillAll) {
    const n = await fillAllCities(pool);
    console.log(`\nRichieste create in questo fill: ${n}`);
    await summary();
    return;
  }

  if (ADD_ITALY_COUNT) {
    const n = await addItalyRequests(pool, ADD_ITALY_COUNT);
    console.log(`\nRichieste aggiunte (Italia): ${n}`);
    await summary();
    return;
  }

  if (addCityArg && ADD_CITY_COUNT) {
    const n = await addCityRequests(pool, addCityArg, ADD_CITY_COUNT);
    console.log(`\nRichieste aggiunte (${addCityArg}): ${n}`);
    await summary();
    return;
  }

  await cleanupLegacyAndDemo();
  const n = await seedDrops(pool);
  console.log(`\nDrop creati: ${n}`);
  await summary();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
