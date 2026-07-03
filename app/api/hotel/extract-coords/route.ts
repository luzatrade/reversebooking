import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth/requireUser";
import { extractCoordsFromGoogleMapsLink } from "@/lib/hotel/extractGoogleMapsCoords";
import { geocodeHotelAddress } from "@/lib/hotel/geocodeAddress";
import { createServiceRoleClient } from "@/lib/supabase/admin";

type ExtractCoordsBody = {
  url?: string;
  address?: string;
  propertyName?: string;
  cityName?: string;
  countryName?: string;
  countryCode?: string;
};

export async function POST(request: Request) {
  const auth = await requireUser(request);
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const admin = createServiceRoleClient();
  if (!admin) {
    return NextResponse.json({ error: "Server non configurato." }, { status: 503 });
  }

  const { data: profile } = await admin
    .from("profiles")
    .select("role")
    .eq("user_id", auth.user.id)
    .maybeSingle();

  if (profile?.role !== "hotel") {
    return NextResponse.json({ error: "Accesso riservato alle strutture ricettive." }, { status: 403 });
  }

  let body: ExtractCoordsBody;
  try {
    body = (await request.json()) as ExtractCoordsBody;
  } catch {
    return NextResponse.json({ error: "Body JSON non valido." }, { status: 400 });
  }

  const url = body.url?.trim();
  if (url) {
    const result = await extractCoordsFromGoogleMapsLink(url);
    if (!result.ok) {
      return NextResponse.json(
        {
          error: result.error,
          finalUrl: result.finalUrl,
          hint: "Usa il link copiato da Condividi in Google Maps (maps.app.goo.gl o @lat,lng). Evita i link con solo ?cid=.",
        },
        { status: 422 },
      );
    }

    return NextResponse.json({
      ok: true,
      method: "link",
      latitude: result.coords.latitude,
      longitude: result.coords.longitude,
      source: result.source,
      finalUrl: result.finalUrl,
    });
  }

  const address = body.address?.trim();
  if (!address) {
    return NextResponse.json(
      { error: "Fornisci un URL Google Maps oppure un indirizzo completo." },
      { status: 400 },
    );
  }

  const result = await geocodeHotelAddress({
    address,
    propertyName: body.propertyName,
    cityName: body.cityName,
    countryName: body.countryName,
    countryCode: body.countryCode,
  });

  if (!result.ok) {
    return NextResponse.json(
      {
        error: result.error,
        hint: "Controlla via, numero civico, città e paese. Per massima precisione usa il link Google Maps.",
      },
      { status: 422 },
    );
  }

  return NextResponse.json({
    ok: true,
    method: "address",
    latitude: result.coords.latitude,
    longitude: result.coords.longitude,
    source: result.source,
    formattedAddress: result.formattedAddress,
  });
}
