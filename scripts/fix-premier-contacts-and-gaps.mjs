/**
 * Corregge contatti premier noti + descrizioni mancanti blocco 1.
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { fetchContactsFromWebsite } from "./lib/onboarding-website-contacts.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { isOnboardingSeoIndexable } = await import("./lib/seo-slug.mjs");

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

/** Contatti verificati manualmente da siti ufficiali (fallback se scrape generico) */
const PREMIER_CONTACTS = {
  "rome-cavalieri-a-waldorf-astoria-hotel-roma": {
    phone: "+39 06 35091",
    email: "romhiwa.reservations@hilton.com",
    website: "https://www.hilton.com/en/hotels/romhiwa-rome-cavalieri/",
  },
  "bulgari-hotel-milano-milano": {
    phone: "+39 02 8058051",
    email: "milan@bulgarihotels.com",
  },
  "the-gritti-palace-venezia": {
    phone: "+39 041 794611",
    email: "reservations.vcegk@marriott.com",
  },
  "bauer-palazzo-venezia": {
    phone: "+39 041 5207022",
    email: "info@bauerpalazzo.it",
  },
  "grand-hotel-vesuvio-napoli": {
    phone: "+39 081 7640044",
    email: "info@vesuvio.it",
  },
  "romeo-hotel-napoli-napoli": {
    phone: "+39 081 0171277",
    email: "info@romeohotels.com",
  },
  "principi-di-piemonte-torino": {
    phone: "+39 011 55151",
    email: "info@principidipiemonte.com",
  },
  "golden-palace-hotel-torino": {
    phone: "+39 011 55121",
    email: "info@goldenpalaceweb.com",
  },
  "due-torri-hotel-verona": {
    phone: "+39 045 595044",
    email: "info@duetorrihotel.com",
  },
  "grand-hotel-majestic-gia-baglioni-bologna": {
    phone: "+39 051 225445",
    email: "info@grandhotelmajestic.duetorrihotels.com",
  },
  "belmond-grand-hotel-timeo-taormina": {
    phone: "+39 0942 6270200",
    email: "reservations.timeo@belmond.com",
  },
  "belmond-hotel-splendido-portofino": {
    phone: "+39 0185 267800",
    email: "reservations.spl@belmond.com",
  },
  "grand-hotel-continental-siena-siena": {
    phone: "+39 0577 56011",
    email: "info@grandhotelcontinentalsiena.com",
  },
  "capri-palace-jumeirah-capri": {
    phone: "+39 081 9787881",
    email: "info@capripalace.com",
  },
  "palazzo-gattini-luxury-hotel-matera": {
    phone: "+39 0835 334004",
    email: "info@palazzogattini.com",
  },
  "grand-hotel-et-des-palmes-palermo": {
    phone: "+39 091 6095111",
    email: "info@grandhotel-et-des-palmes.com",
    website: "https://www.grandhotel-et-des-palmes.com/",
    description:
      "Nel cuore di Palermo, il Grand Hotel et des Palmes è un'istituzione dell'ospitalità siciliana dal 1874. Affacciato su Via Roma, unisce sale liberty, camere eleganti e ristorazione raffinata a pochi passi dalla Cattedrale e dai mercati storici. WiFi, concierge e parcheggio convenzionato completano un soggiorno di charme nella capitale culturale dell'isola.",
    description_en:
      "In the heart of Palermo, Grand Hotel et des Palmes has been a Sicilian hospitality landmark since 1874. Overlooking Via Roma, it blends Liberty-style halls, elegant guest rooms, and refined dining within walking distance of the cathedral and historic markets. WiFi, concierge service, and partner parking support a cultured stay in the island's cultural capital.",
  },
};

const CACCIATORI_EN =
  "Family-run hotel and restaurant in the hills of Lombardy, Albergo dei Cacciatori offers cozy rooms and traditional regional cuisine in a quiet countryside setting. Features free WiFi, on-site dining, and easy access to hiking trails and nearby lakes. Ideal for nature lovers and food enthusiasts seeking an authentic Italian retreat.";

async function patchSlug(slug, patch) {
  const { data: row } = await sb.from("onboarding_hotels").select("*").eq("slug", slug).maybeSingle();
  if (!row) {
    console.warn("SKIP", slug);
    return;
  }
  const merged = { ...row, ...patch };
  patch.seo_indexable = isOnboardingSeoIndexable(merged);
  const { error } = await sb.from("onboarding_hotels").update(patch).eq("id", row.id);
  if (error) throw error;
  console.log("✓", slug, Object.keys(patch).join(", "));
}

async function main() {
  for (const [slug, data] of Object.entries(PREMIER_CONTACTS)) {
    await patchSlug(slug, data);
  }

  const { data: cacciatori } = await sb
    .from("onboarding_hotels")
    .select("id, slug, description_en")
    .ilike("slug", "%albergo-dei-cacciatori%")
    .maybeSingle();

  if (cacciatori && (!cacciatori.description_en || cacciatori.description_en.length < 80)) {
    await patchSlug(cacciatori.slug, { description_en: CACCIATORI_EN });
  }

  // Re-scrape premier con email filter aggiornato
  const premier = JSON.parse(readFileSync(resolve(process.cwd(), "data/block-001-premier-official.json"), "utf8"));
  for (const p of premier) {
    const contacts = await fetchContactsFromWebsite(p.website);
    const patch = {};
    if (contacts.email) patch.email = contacts.email;
    if (contacts.phone) patch.phone = contacts.phone;
    if (Object.keys(patch).length) await patchSlug(p.slug, patch);
    await new Promise((r) => setTimeout(r, 400));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
