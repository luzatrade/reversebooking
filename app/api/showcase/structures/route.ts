import { NextResponse } from "next/server";
import { fetchShowcaseStructures } from "@/lib/showcase/homeData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityId = searchParams.get("city_id")?.trim() || null;
  const cityName = searchParams.get("city")?.trim() || null;
  const countryCode = searchParams.get("country_code")?.trim() || null;

  try {
    const hotels = await fetchShowcaseStructures({ cityId, cityName, countryCode });
    return NextResponse.json({ hotels });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Impossibile caricare le strutture" },
      { status: 500 },
    );
  }
}
