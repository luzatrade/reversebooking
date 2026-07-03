import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth/requireUser";
import {
  resolveHotelAddressSuggestion,
  resolveHotelPlace,
  searchHotelAddresses,
  type AddressSearchSuggestion,
} from "@/lib/hotel/searchHotelAddress";
import { createServiceRoleClient } from "@/lib/supabase/admin";

type SearchAddressBody = {
  query?: string;
  propertyName?: string;
  cityName?: string;
  countryName?: string;
  countryCode?: string;
  cityId?: string;
  placeId?: string;
  suggestion?: AddressSearchSuggestion;
};

async function requireHotelUser(request: Request) {
  const auth = await requireUser(request);
  if ("error" in auth) {
    return { error: NextResponse.json({ error: auth.error }, { status: auth.status }) };
  }

  const admin = createServiceRoleClient();
  if (!admin) {
    return { error: NextResponse.json({ error: "Server non configurato." }, { status: 503 }) };
  }

  const { data: profile } = await admin
    .from("profiles")
    .select("role")
    .eq("user_id", auth.user.id)
    .maybeSingle();

  if (profile?.role !== "hotel") {
    return { error: NextResponse.json({ error: "Accesso riservato alle strutture ricettive." }, { status: 403 }) };
  }

  return { auth };
}

export async function POST(request: Request) {
  const guard = await requireHotelUser(request);
  if ("error" in guard && guard.error) return guard.error;

  let body: SearchAddressBody;
  try {
    body = (await request.json()) as SearchAddressBody;
  } catch {
    return NextResponse.json({ error: "Body JSON non valido." }, { status: 400 });
  }

  const placeId = body.placeId?.trim() || body.suggestion?.placeId?.trim();
  if (placeId || body.suggestion) {
    const resolved = body.suggestion
      ? await resolveHotelAddressSuggestion(body.suggestion)
      : await resolveHotelPlace(placeId!);

    if (!resolved.ok) {
      return NextResponse.json({ error: resolved.error }, { status: 422 });
    }

    return NextResponse.json({
      ok: true,
      mode: "resolve",
      fullAddress: resolved.fullAddress,
      latitude: resolved.latitude,
      longitude: resolved.longitude,
      googleMapsUrl: resolved.googleMapsUrl,
      source: resolved.source,
    });
  }

  const query = body.query?.trim();
  if (!query || query.length < 3) {
    return NextResponse.json({ error: "Inserisci almeno 3 caratteri per cercare l'indirizzo." }, { status: 400 });
  }

  const suggestions = await searchHotelAddresses({
    query,
    propertyName: body.propertyName,
    cityName: body.cityName,
    countryName: body.countryName,
    countryCode: body.countryCode,
    cityId: body.cityId,
  });

  return NextResponse.json({
    ok: true,
    mode: "search",
    suggestions,
  });
}
