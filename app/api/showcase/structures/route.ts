import { NextResponse } from "next/server";
import { fetchCatalogStructureCount } from "@/lib/showcase/catalogCounts";
import { fetchShowcaseStructures } from "@/lib/showcase/homeData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityId = searchParams.get("city_id")?.trim() || null;
  const cityName = searchParams.get("city")?.trim() || null;
  const countryCode = searchParams.get("country_code")?.trim() || null;
  const cityOptions = { cityId, cityName, countryCode };

  try {
    const [hotels, structureCount] = await Promise.all([
      fetchShowcaseStructures(cityOptions),
      fetchCatalogStructureCount(cityOptions),
    ]);
    return NextResponse.json({ hotels, structureCount });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Impossibile caricare le strutture" },
      { status: 500 },
    );
  }
}
