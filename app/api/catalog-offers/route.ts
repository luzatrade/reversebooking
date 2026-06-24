import { NextResponse } from "next/server";
import { fetchCatalogOffersForCity, fetchRandomCatalogOffers } from "@/lib/catalog-offers/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityId = searchParams.get("cityId")?.trim();
  const kind = searchParams.get("kind");
  const random = searchParams.get("random") === "1";
  const offerKind =
    kind === "hotel_vacancy" || kind === "agency_package" ? kind : undefined;

  try {
    if (random) {
      const offers = await fetchRandomCatalogOffers(offerKind);
      return NextResponse.json({ offers });
    }

    if (!cityId) {
      return NextResponse.json({ error: "cityId required" }, { status: 400 });
    }

    const offers = await fetchCatalogOffersForCity(cityId, offerKind);
    return NextResponse.json({ offers });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to load offers" },
      { status: 500 },
    );
  }
}
