/**
 * Step 2 — raccoltaDatiHotel(city)
 *
 * Motore doppio: Foursquare (primario, gratis) + Google Places (arricchimento).
 * Deduplica per nome normalizzato, scrapa email dalla homepage, salva in onboarding_hotels.
 */

import { type SupabaseClient } from "@supabase/supabase-js";
import { searchFoursquare } from "./providers/foursquare";
import { searchGoogle, isGoogleConfigured } from "./providers/google";
import { scrapeEmailFromWebsite } from "./scrapeEmail";
import type { ComuneRecord, HotelSearchResult } from "./types";

export type { ComuneRecord };

const DELAY_BETWEEN_SCRAPE_MS = 300;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeKey(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Unisce risultati da più provider, deduplicando per nome normalizzato.
 * Google sovrascrive Foursquare se entrambi trovano lo stesso hotel
 * (Google ha dati migliori: place_id, Maps URL, foto HD).
 */
function mergeResults(
  fsqResults: HotelSearchResult[],
  googleResults: HotelSearchResult[],
): HotelSearchResult[] {
  const map = new Map<string, HotelSearchResult>();

  for (const r of fsqResults) {
    map.set(normalizeKey(r.nome), r);
  }

  for (const r of googleResults) {
    const key = normalizeKey(r.nome);
    const existing = map.get(key);
    if (existing) {
      // Arricchisci Foursquare con dati Google
      existing.google_maps_url = r.google_maps_url ?? existing.google_maps_url;
      existing.main_photo_url = r.main_photo_url ?? existing.main_photo_url;
      existing.website = r.website ?? existing.website;
      existing.phone = r.phone ?? existing.phone;
      existing.indirizzo = r.indirizzo ?? existing.indirizzo;
      existing.source = "google";
      existing.source_id = r.source_id;
    } else {
      map.set(key, r);
    }
  }

  return [...map.values()];
}

export async function raccoltaDatiHotel(
  comune: ComuneRecord,
  supabase: SupabaseClient,
  options?: { skipScraping?: boolean; dryRun?: boolean; skipGoogle?: boolean },
): Promise<{ inserted: number; skipped: number; errors: string[] }> {
  const errors: string[] = [];
  let inserted = 0;
  let skipped = 0;

  console.log(`\n🔍 Ricerca hotel a ${comune.nome} (${comune.sigla_provincia}) ...`);

  // --- Foursquare (primario) ---
  let fsqResults: HotelSearchResult[] = [];
  try {
    fsqResults = await searchFoursquare(comune.nome, comune.lat, comune.lng);
    console.log(`   📍 Foursquare: ${fsqResults.length} risultati`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`   ⚠ Foursquare fallito: ${msg}`);
    errors.push(`Foursquare: ${msg}`);
  }

  // --- Google Places (arricchimento opzionale) ---
  let googleResults: HotelSearchResult[] = [];
  if (!options?.skipGoogle && isGoogleConfigured()) {
    try {
      googleResults = await searchGoogle(comune.nome, comune.provincia, comune.lat, comune.lng);
      console.log(`   📍 Google: ${googleResults.length} risultati`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`   ⚠ Google fallito: ${msg}`);
      // Non blocchiamo: Foursquare basta
    }
  }

  // --- Merge e deduplica ---
  const hotels = mergeResults(fsqResults, googleResults);
  console.log(`   🏨 Totale unici dopo merge: ${hotels.length}`);

  for (const hotel of hotels) {
    if (!options?.skipScraping && hotel.website) {
      try {
        const email = await scrapeEmailFromWebsite(hotel.website);
        if (email) {
          console.log(`   📧 ${hotel.nome}: ${email}`);
          hotel.email = email;
        }
      } catch {
        // best-effort
      }
      await sleep(DELAY_BETWEEN_SCRAPE_MS);
    }

    if (options?.dryRun) {
      console.log(`   [DRY] ${hotel.nome} — ${hotel.indirizzo ?? "no address"} (${hotel.source})`);
      inserted++;
      continue;
    }

    const placeId = hotel.source === "google" ? hotel.source_id : `fsq_${hotel.source_id}`;

    const { error } = await supabase.from("onboarding_hotels").upsert(
      {
        place_id: placeId,
        nome: hotel.nome,
        indirizzo: hotel.indirizzo,
        city_name: comune.nome,
        city_istat: comune.codice_istat,
        lat: hotel.lat,
        lng: hotel.lng,
        google_maps_url: hotel.google_maps_url,
        website: hotel.website,
        phone: hotel.phone,
        email: hotel.email || undefined,
        main_photo_url: hotel.main_photo_url,
      },
      { onConflict: "place_id" },
    );

    if (error) {
      errors.push(`${hotel.nome}: ${error.message}`);
      skipped++;
    } else {
      inserted++;
      console.log(`   ✓ ${hotel.nome} (${hotel.source})`);
    }
  }

  // Aggiorna timestamp scansione
  if (!options?.dryRun) {
    await supabase
      .from("comuni_italiani")
      .update({ last_scraped_at: new Date().toISOString() })
      .eq("codice_istat", comune.codice_istat);
  }

  return { inserted, skipped, errors };
}
