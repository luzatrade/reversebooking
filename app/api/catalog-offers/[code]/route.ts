import { NextResponse } from "next/server";
import { fetchCatalogOfferByCode } from "@/lib/catalog-offers/queries";

export async function GET(_request: Request, context: { params: Promise<{ code: string }> }) {
  const { code } = await context.params;
  try {
    const offer = await fetchCatalogOfferByCode(code);
    if (!offer) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ offer });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to load offer" },
      { status: 500 },
    );
  }
}
