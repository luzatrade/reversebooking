import { NextResponse } from "next/server";
import { fetchCatalogOffersForCity } from "@/lib/catalog-offers/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityId = searchParams.get("cityId")?.trim();
  const kind = searchParams.get("kind");

  if (!cityId) {
    return NextResponse.json({ error: "cityId required" }, { status: 400 });
  }

  try {
    const offerKind =
      kind === "hotel_vacancy" || kind === "agency_package" ? kind : undefined;
    const offers = await fetchCatalogOffersForCity(cityId, offerKind);
    return NextResponse.json({ offers });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to load offers" },
      { status: 500 },
    );
  }
}
