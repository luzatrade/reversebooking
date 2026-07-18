import { NextResponse } from "next/server";
import { resolveOnboardingEnterUserIdAsync } from "@/lib/admin/data";
import { requireAdminApi } from "@/lib/admin/verify";
import { logAdminAction } from "@/lib/admin/audit";
import { dashboardPathForRole } from "@/lib/auth/redirectAfterLogin";
import type { UserRole } from "@/types/app";

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  const body = (await request.json()) as { userId?: string; onboardingId?: string };
  let userId = body.userId?.trim() ?? "";
  const onboardingId = body.onboardingId?.trim() ?? "";

  if (!userId && onboardingId) {
    userId = (await resolveOnboardingEnterUserIdAsync(onboardingId)) ?? "";
  }

  if (!userId) {
    return NextResponse.json(
      {
        error: onboardingId
          ? "Struttura onboarding senza account partner. Usa «Modifica» per il catalogo."
          : "userId mancante",
      },
      { status: onboardingId ? 404 : 400 },
    );
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
    targetType: onboardingId ? "onboarding_hotel" : "user",
    targetId: onboardingId || userId,
    details: { email: profile.email, role: profile.role, userId, onboardingId: onboardingId || null },
  });

  return NextResponse.json({
    email: profile.email,
    role: profile.role,
    redirectUrl,
  });
}
