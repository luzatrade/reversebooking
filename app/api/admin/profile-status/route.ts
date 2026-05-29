import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/verify";
import { logAdminAction } from "@/lib/admin/audit";

const ALLOWED = new Set(["pending_verification", "active", "suspended", "banned"]);

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  const body = (await request.json()) as { profileId?: string; accountStatus?: string };
  if (!body.profileId || !body.accountStatus || !ALLOWED.has(body.accountStatus)) {
    return NextResponse.json({ error: "Parametri non validi" }, { status: 400 });
  }

  const { error } = await gate.admin
    .from("profiles")
    .update({ account_status: body.accountStatus })
    .eq("id", body.profileId);

  if (error) return NextResponse.json({ error: "Aggiornamento non riuscito" }, { status: 500 });

  await logAdminAction(gate.admin, request, {
    actor: gate.profile,
    action: "profile_status_change",
    targetType: "profile",
    targetId: body.profileId,
    details: { accountStatus: body.accountStatus },
  });

  return NextResponse.json({ ok: true });
}
