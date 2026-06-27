import type { SupabaseClient } from "@supabase/supabase-js";
import { extractCoordsFromGoogleMapsLink } from "@/lib/hotel/extractGoogleMapsCoords";

export type UpdateHotelCoordsResult =
  | {
      ok: true;
      hotelId: string;
      coords: { latitude: number; longitude: number };
      finalUrl: string;
      source: "place_pin" | "at_sign" | "query_param";
      skipped?: false;
    }
  | {
      ok: true;
      hotelId: string;
      skipped: true;
      reason: string;
    }
  | {
      ok: false;
      hotelId: string;
      error: string;
      finalUrl?: string;
    };

type HotelCoordsRow = {
  id: string;
  property_name: string;
  google_maps_url: string | null;
  latitude: number | null;
  longitude: number | null;
};

export async function updateHotelCoordsFromMapsUrl(
  supabase: SupabaseClient,
  hotelId: string,
  options?: {
    force?: boolean;
    googleMapsUrl?: string | null;
  },
): Promise<UpdateHotelCoordsResult> {
  const { data: hotel, error: fetchError } = await supabase
    .from("hotel_accounts")
    .select("id, property_name, google_maps_url, latitude, longitude")
    .eq("id", hotelId)
    .maybeSingle();

  if (fetchError) {
    return { ok: false, hotelId, error: fetchError.message };
  }
  if (!hotel) {
    return { ok: false, hotelId, error: "Hotel non trovato" };
  }

  const row = hotel as HotelCoordsRow;
  const mapsUrl = (options?.googleMapsUrl ?? row.google_maps_url)?.trim() ?? "";
  if (!mapsUrl) {
    return { ok: false, hotelId, error: "google_maps_url mancante" };
  }

  const hasCoords =
    row.latitude != null &&
    row.longitude != null &&
    Number.isFinite(Number(row.latitude)) &&
    Number.isFinite(Number(row.longitude));

  if (hasCoords && !options?.force) {
    return {
      ok: true,
      hotelId,
      skipped: true,
      reason: "Coordinate già presenti (usa force per sovrascrivere)",
    };
  }

  const extracted = await extractCoordsFromGoogleMapsLink(mapsUrl);
  if (!extracted.ok) {
    return {
      ok: false,
      hotelId,
      error: extracted.error,
      finalUrl: extracted.finalUrl,
    };
  }

  const { error: updateError } = await supabase
    .from("hotel_accounts")
    .update({
      latitude: extracted.coords.latitude,
      longitude: extracted.coords.longitude,
    })
    .eq("id", hotelId);

  if (updateError) {
    return { ok: false, hotelId, error: updateError.message, finalUrl: extracted.finalUrl };
  }

  return {
    ok: true,
    hotelId,
    coords: extracted.coords,
    finalUrl: extracted.finalUrl,
    source: extracted.source,
  };
}

export async function backfillHotelCoordsFromMaps(
  supabase: SupabaseClient,
  options?: {
    force?: boolean;
    limit?: number;
    hotelId?: string;
    delayMs?: number;
    onProgress?: (message: string) => void;
  },
): Promise<{
  processed: number;
  updated: number;
  skipped: number;
  failed: number;
  results: UpdateHotelCoordsResult[];
}> {
  let query = supabase
    .from("hotel_accounts")
    .select("id, property_name, google_maps_url, latitude, longitude")
    .not("google_maps_url", "is", null)
    .neq("google_maps_url", "")
    .order("updated_at", { ascending: true });

  if (options?.hotelId) {
    query = query.eq("id", options.hotelId);
  }

  if (options?.limit && options.limit > 0) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;
  if (error) {
    throw new Error(error.message);
  }

  const rows = (data ?? []) as HotelCoordsRow[];
  const results: UpdateHotelCoordsResult[] = [];
  let updated = 0;
  let skipped = 0;
  let failed = 0;

  for (const row of rows) {
    const hasCoords =
      row.latitude != null &&
      row.longitude != null &&
      Number.isFinite(Number(row.latitude)) &&
      Number.isFinite(Number(row.longitude));

    if (hasCoords && !options?.force) {
      skipped += 1;
      results.push({
        ok: true,
        hotelId: row.id,
        skipped: true,
        reason: "Coordinate già presenti",
      });
      options?.onProgress?.(`SKIP ${row.property_name} — coordinate già presenti`);
      continue;
    }

    const result = await updateHotelCoordsFromMapsUrl(supabase, row.id, {
      force: options?.force,
      googleMapsUrl: row.google_maps_url,
    });
    results.push(result);

    if (result.ok && result.skipped) {
      skipped += 1;
      options?.onProgress?.(`SKIP ${row.property_name} — ${result.reason}`);
    } else if (result.ok) {
      updated += 1;
      options?.onProgress?.(
        `OK   ${row.property_name} → ${result.coords.latitude}, ${result.coords.longitude} (${result.source})`,
      );
    } else {
      failed += 1;
      options?.onProgress?.(`FAIL ${row.property_name} — ${result.error}`);
    }

    if (options?.delayMs && options.delayMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, options.delayMs));
    }
  }

  return {
    processed: rows.length,
    updated,
    skipped,
    failed,
    results,
  };
}
