import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/verify";
import { logAdminAction } from "@/lib/admin/audit";
import { dashboardPathForRole } from "@/lib/auth/redirectAfterLogin";
import type { UserRole } from "@/types/app";

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  const { userId } = (await request.json()) as { userId?: string };
  if (!userId) {
    return NextResponse.json({ error: "userId mancante" }, { status: 400 });
  }

  const admin = gate.admin;

  const { data: profile } = await admin
    .from("profiles")
    .select("role, email")
    .eq("user_id", userId)
    .maybeSingle();
  if (!profile) {
    return NextResponse.json({ error: "Utente non trovato" }, { status: 404 });
  }

  const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({
    type: "magiclink",
    email: profile.email,
  });

  const tokenHash = linkData?.properties?.hashed_token;
  if (linkError || !tokenHash) {
    return NextResponse.json(
      { error: linkError?.message ?? "Impossibile generare token di accesso" },
      { status: 500 },
    );
  }

  const nextPath = dashboardPathForRole(profile.role as UserRole);
  const redirectUrl = `/auth/impersonate?${new URLSearchParams({
    token_hash: tokenHash,
    next: nextPath,
  }).toString()}`;

  await logAdminAction(admin, request, {
    actor: gate.profile,
    action: "impersonate",
    targetType: "user",
    targetId: userId,
    details: { email: profile.email, role: profile.role },
  });

  return NextResponse.json({
    email: profile.email,
    role: profile.role,
    redirectUrl,
  });
}
