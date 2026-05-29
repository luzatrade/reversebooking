import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/verify";
import { logAdminAction } from "@/lib/admin/audit";

const ALLOWED = new Set(["pending_verification", "active", "suspended", "banned"]);

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  const body = (await request.json()) as { hotelAccountId?: string; accountStatus?: string };
  if (!body.hotelAccountId || !body.accountStatus || !ALLOWED.has(body.accountStatus)) {
    return NextResponse.json({ error: "Parametri non validi" }, { status: 400 });
  }

  const { error } = await gate.admin
    .from("hotel_accounts")
    .update({ account_status: body.accountStatus })
    .eq("id", body.hotelAccountId);

  if (error) return NextResponse.json({ error: "Aggiornamento non riuscito" }, { status: 500 });

  await logAdminAction(gate.admin, request, {
    actor: gate.profile,
    action: "hotel_status_change",
    targetType: "hotel_account",
    targetId: body.hotelAccountId,
    details: { accountStatus: body.accountStatus },
  });

  return NextResponse.json({ ok: true });
}
