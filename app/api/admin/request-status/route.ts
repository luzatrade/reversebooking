import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/verify";
import { logAdminAction } from "@/lib/admin/audit";

const ALLOWED = new Set(["active", "expired", "deleted", "completed"]);

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  const body = (await request.json()) as { requestId?: string; status?: string };
  if (!body.requestId || !body.status || !ALLOWED.has(body.status)) {
    return NextResponse.json({ error: "Parametri non validi" }, { status: 400 });
  }

  const { error } = await gate.admin
    .from("travel_requests")
    .update({ status: body.status })
    .eq("id", body.requestId);

  if (error) return NextResponse.json({ error: "Aggiornamento non riuscito" }, { status: 500 });

  await logAdminAction(gate.admin, request, {
    actor: gate.profile,
    action: "request_status_change",
    targetType: "travel_request",
    targetId: body.requestId,
    details: { status: body.status },
  });

  return NextResponse.json({ ok: true });
}
