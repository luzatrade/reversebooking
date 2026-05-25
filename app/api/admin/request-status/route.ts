import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/verify";

const ALLOWED = new Set(["active", "expired", "deleted", "completed"]);

export async function POST(request: Request) {
  const gate = await requireAdminApi();
  if ("error" in gate) return gate.error;

  const body = (await request.json()) as { requestId?: string; status?: string };
  if (!body.requestId || !body.status || !ALLOWED.has(body.status)) {
    return NextResponse.json({ error: "Parametri non validi" }, { status: 400 });
  }

  const { error } = await gate.admin
    .from("travel_requests")
    .update({ status: body.status })
    .eq("id", body.requestId);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
