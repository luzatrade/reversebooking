/**
 * Backfill latitude/longitude su hotel_accounts partendo da google_maps_url.
 *
 * Usage:
 *   npx tsx scripts/backfill-hotel-coords-from-maps.ts
 *   npx tsx scripts/backfill-hotel-coords-from-maps.ts --dry-run
 *   npx tsx scripts/backfill-hotel-coords-from-maps.ts --force
 *   npx tsx scripts/backfill-hotel-coords-from-maps.ts --limit 20
 *   npx tsx scripts/backfill-hotel-coords-from-maps.ts --id <hotel_uuid>
 *   npx tsx scripts/backfill-hotel-coords-from-maps.ts --url "https://maps.app.goo.gl/..."
 *
 * Requires: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY in .env.local
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { extractCoordsFromGoogleMapsLink } from "../lib/hotel/extractGoogleMapsCoords";
import { backfillHotelCoordsFromMaps } from "../lib/hotel/updateHotelCoordsFromMaps";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");
const limitArg = args.find((a) => a.startsWith("--limit"));
const limit = limitArg ? Number(limitArg.split("=")[1] ?? args[args.indexOf("--limit") + 1]) : undefined;
const idArg = args.find((a) => a.startsWith("--id"));
const hotelId = idArg ? (idArg.includes("=") ? idArg.split("=")[1] : args[args.indexOf("--id") + 1]) : undefined;
const urlArg = args.find((a) => a.startsWith("--url"));
const testUrl = urlArg ? (urlArg.includes("=") ? urlArg.split("=")[1] : args[args.indexOf("--url") + 1]) : undefined;

const sb = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function main() {
  if (testUrl) {
    console.log(`Test URL: ${testUrl}`);
    const result = await extractCoordsFromGoogleMapsLink(testUrl);
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  if (dryRun) {
    let query = sb
      .from("hotel_accounts")
      .select("id, property_name, google_maps_url, latitude, longitude")
      .not("google_maps_url", "is", null)
      .neq("google_maps_url", "")
      .order("updated_at", { ascending: true });

    if (hotelId) query = query.eq("id", hotelId);
    if (limit && limit > 0) query = query.limit(limit);

    const { data, error } = await query;
    if (error) {
      console.error(error.message);
      process.exit(1);
    }

    console.log(`Dry-run: ${data?.length ?? 0} hotel con google_maps_url`);
    for (const row of data ?? []) {
      const hasCoords = row.latitude != null && row.longitude != null;
      const action = hasCoords && !force ? "SKIP (coords presenti)" : "UPDATE";
      console.log(`- [${action}] ${row.property_name} | ${row.google_maps_url}`);
    }
    process.exit(0);
  }

  console.log(
    `Backfill coordinate da Google Maps${force ? " (force)" : ""}${hotelId ? ` hotel=${hotelId}` : ""}${limit ? ` limit=${limit}` : ""}…`,
  );

  const summary = await backfillHotelCoordsFromMaps(sb, {
    force,
    limit,
    hotelId,
    delayMs: 400,
    onProgress: (message) => console.log(message),
  });

  console.log("\n--- Riepilogo ---");
  console.log(`Processati: ${summary.processed}`);
  console.log(`Aggiornati: ${summary.updated}`);
  console.log(`Saltati:    ${summary.skipped}`);
  console.log(`Falliti:    ${summary.failed}`);

  process.exit(summary.failed > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
