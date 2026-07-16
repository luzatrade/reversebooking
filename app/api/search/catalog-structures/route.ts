import { NextResponse } from "next/server";
import { searchCatalogStructures } from "@/lib/catalog/searchStructures";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const limitRaw = Number(searchParams.get("limit") ?? 6);
  const limit = Number.isFinite(limitRaw) ? Math.min(Math.max(limitRaw, 1), 12) : 6;

  if (q.trim().length < 2) {
    return NextResponse.json({ structures: [] });
  }

  try {
    const structures = await searchCatalogStructures(q, limit);
    return NextResponse.json({ structures });
  } catch (error) {
    console.error("[catalog-structures]", error);
    return NextResponse.json({ structures: [], error: "search_failed" }, { status: 500 });
  }
}
