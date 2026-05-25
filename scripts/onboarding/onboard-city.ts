/**
 * CLI — Lancia raccoltaDatiHotel su una o più città.
 *
 * Uso:
 *   npx tsx scripts/onboarding/onboard-city.ts "Roma"
 *   npx tsx scripts/onboarding/onboard-city.ts "Verona" --dry-run
 *   npx tsx scripts/onboarding/onboard-city.ts --top-cities              (top 50 turistiche)
 *   npx tsx scripts/onboarding/onboard-city.ts --top-cities --limit 10   (solo prime 10)
 *   npx tsx scripts/onboarding/onboard-city.ts --from-requests           (solo con richieste attive)
 */

import { resolve } from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: resolve(__dirname, "../../.env.local"), override: true });

import { createClient } from "@supabase/supabase-js";
import { raccoltaDatiHotel, type ComuneRecord } from "../../lib/onboarding/raccoltaDatiHotel";
import { TOP_TOURIST_CITIES } from "../../lib/onboarding/topCities";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const fromRequests = args.includes("--from-requests");
const topCities = args.includes("--top-cities");
const limitIdx = args.indexOf("--limit");
const limit = limitIdx >= 0 ? parseInt(args[limitIdx + 1], 10) : undefined;
const cityName = args.find((a) => !a.startsWith("--") && !(limitIdx >= 0 && args[limitIdx + 1] === a));

const DELAY_BETWEEN_CITIES_MS = 2000;

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function resolveComune(name: string): Promise<ComuneRecord | null> {
  const { data } = await supabase
    .from("comuni_italiani")
    .select("*")
    .ilike("nome", name)
    .limit(1)
    .maybeSingle();
  return data as ComuneRecord | null;
}

async function getComuniFromRequests(): Promise<ComuneRecord[]> {
  const { data: requests } = await supabase
    .from("travel_requests")
    .select("city_name")
    .eq("status", "active")
    .gt("expires_at", new Date().toISOString());

  if (!requests?.length) {
    console.log("Nessuna richiesta attiva trovata.");
    return [];
  }

  const cityNames = [...new Set(requests.map((r) => r.city_name))];
  console.log(`Città con richieste attive: ${cityNames.join(", ")}`);

  const comuni: ComuneRecord[] = [];
  for (const name of cityNames) {
    const comune = await resolveComune(name);
    if (comune) comuni.push(comune);
    else console.warn(`  ⚠ Comune non trovato per "${name}"`);
  }
  return comuni;
}

async function getComuniFromTopCities(): Promise<ComuneRecord[]> {
  const names = limit ? TOP_TOURIST_CITIES.slice(0, limit) : TOP_TOURIST_CITIES;
  console.log(`\n🏙  Top cities selezionate: ${names.length}`);

  const comuni: ComuneRecord[] = [];
  const notFound: string[] = [];

  for (const name of names) {
    const comune = await resolveComune(name);
    if (comune) comuni.push(comune);
    else notFound.push(name);
  }

  if (notFound.length) {
    console.warn(`⚠ Comuni non trovati nel DB: ${notFound.join(", ")}`);
    console.warn("  (Lancia prima: npx tsx scripts/onboarding/seed-comuni.ts)");
  }

  return comuni;
}

async function main() {
  if (!fromRequests && !topCities && !cityName) {
    console.error('Uso: npx tsx scripts/onboarding/onboard-city.ts "NomeCittà" [--dry-run]');
    console.error("      npx tsx scripts/onboarding/onboard-city.ts --top-cities [--limit N] [--dry-run]");
    console.error("      npx tsx scripts/onboarding/onboard-city.ts --from-requests [--dry-run]");
    process.exit(1);
  }

  let comuni: ComuneRecord[];

  if (topCities) {
    comuni = await getComuniFromTopCities();
  } else if (fromRequests) {
    comuni = await getComuniFromRequests();
  } else {
    const comune = await resolveComune(cityName!);
    if (!comune) {
      console.error(`Comune "${cityName}" non trovato nella tabella comuni_italiani.`);
      process.exit(1);
    }
    comuni = [comune];
  }

  if (comuni.length === 0) {
    console.log("Nessun comune da processare.");
    return;
  }

  console.log(`\n📋 Città da scansionare: ${comuni.length}`);
  if (dryRun) console.log("   (modalità dry-run — nulla verrà scritto nel DB)\n");

  let totalInserted = 0;
  let totalSkipped = 0;
  let totalEmails = 0;
  let totalPhones = 0;
  const allErrors: string[] = [];
  const cityResults: { city: string; hotels: number; emails: number; phones: number }[] = [];

  for (let i = 0; i < comuni.length; i++) {
    const comune = comuni[i];
    console.log(`\n[${ i + 1}/${comuni.length}] ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

    const result = await raccoltaDatiHotel(comune, supabase, { dryRun });
    totalInserted += result.inserted;
    totalSkipped += result.skipped;
    allErrors.push(...result.errors);

    // Conta email e telefoni per questa città
    const { data: cityHotels } = dryRun
      ? { data: [] }
      : await supabase
          .from("onboarding_hotels")
          .select("email, phone")
          .eq("city_istat", comune.codice_istat);

    const emails = cityHotels?.filter((h) => h.email).length ?? 0;
    const phones = cityHotels?.filter((h) => h.phone && !h.email).length ?? 0;
    totalEmails += emails;
    totalPhones += phones;

    cityResults.push({ city: comune.nome, hotels: result.inserted, emails, phones });

    if (i < comuni.length - 1) {
      await sleep(DELAY_BETWEEN_CITIES_MS);
    }
  }

  // Report finale
  console.log("\n\n╔═══════════════════════════════════════════════════════════╗");
  console.log("║                   REPORT FINALE                          ║");
  console.log("╠═══════════════════════════════════════════════════════════╣");
  console.log(`║  Città scansionate:  ${String(comuni.length).padStart(4)}                                ║`);
  console.log(`║  Hotel totali:       ${String(totalInserted).padStart(4)}                                ║`);
  console.log(`║  Con email:          ${String(totalEmails).padStart(4)}                                ║`);
  console.log(`║  Solo telefono:      ${String(totalPhones).padStart(4)}                                ║`);
  console.log(`║  Errori/saltati:     ${String(totalSkipped).padStart(4)}                                ║`);
  console.log("╠═══════════════════════════════════════════════════════════╣");

  for (const r of cityResults) {
    const line = `║  ${r.city.padEnd(22)} ${String(r.hotels).padStart(3)} hotel  ${String(r.emails).padStart(2)}📧  ${String(r.phones).padStart(2)}📞  ║`;
    console.log(line);
  }

  console.log("╚═══════════════════════════════════════════════════════════╝");

  if (allErrors.length) {
    console.log(`\nErrori (${allErrors.length}):`);
    allErrors.slice(0, 20).forEach((e) => console.log(`  • ${e}`));
    if (allErrors.length > 20) console.log(`  ... e altri ${allErrors.length - 20}`);
  }
  if (dryRun) console.log("\n(dry-run — nulla è stato scritto nel database)");
}

main().catch(console.error);
