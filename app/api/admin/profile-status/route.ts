import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/verify";

const ALLOWED = new Set(["pending_verification", "active", "suspended", "banned"]);

export async function POST(request: Request) {
  const gate = await requireAdminApi();
  if ("error" in gate) return gate.error;

  const body = (await request.json()) as { profileId?: string; accountStatus?: string };
  if (!body.profileId || !body.accountStatus || !ALLOWED.has(body.accountStatus)) {
    return NextResponse.json({ error: "Parametri non validi" }, { status: 400 });
  }

  const { error } = await gate.admin
    .from("profiles")
    .update({ account_status: body.accountStatus })
    .eq("id", body.profileId);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
