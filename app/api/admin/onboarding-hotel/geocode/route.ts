import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/verify";
import { geocodeHotelAddress } from "@/lib/hotel/geocodeAddress";
import { extractCoordsFromGoogleMapsLink } from "@/lib/hotel/extractGoogleMapsCoords";

type Body = {
  address?: string;
  propertyName?: string;
  cityName?: string;
  googleMapsUrl?: string;
};

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const googleMapsUrl = body.googleMapsUrl?.trim();
  if (googleMapsUrl) {
    const result = await extractCoordsFromGoogleMapsLink(googleMapsUrl);
    if (!result.ok) {
      return NextResponse.json(
        {
          error: result.error,
          hint: "Usa il link Condividi da Google Maps oppure geocodifica dall'indirizzo.",
        },
        { status: 422 },
      );
    }
    return NextResponse.json({
      ok: true,
      latitude: result.coords.latitude,
      longitude: result.coords.longitude,
      method: "link",
    });
  }

  const address = body.address?.trim();
  if (!address) {
    return NextResponse.json({ error: "Indirizzo o link Google Maps obbligatorio." }, { status: 400 });
  }

  const result = await geocodeHotelAddress({
    address,
    propertyName: body.propertyName?.trim() || undefined,
    cityName: body.cityName?.trim() || undefined,
    countryName: "Italia",
    countryCode: "IT",
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 422 });
  }

  return NextResponse.json({
    ok: true,
    latitude: result.coords.latitude,
    longitude: result.coords.longitude,
    method: "address",
    formattedAddress: result.formattedAddress,
  });
}
