import { NextResponse } from "next/server";
import { adminGlobalSearch } from "@/lib/admin/search";
import { requireAdminApi } from "@/lib/admin/verify";

export async function GET(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() ?? "";
  const limit = Math.min(Number(searchParams.get("limit") ?? 8), 20);

  if (q.length < 2) {
    return NextResponse.json({ query: q, results: [], total: 0 });
  }

  const payload = await adminGlobalSearch(q, limit);
  return NextResponse.json(payload);
}
