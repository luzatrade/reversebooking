import { NextResponse } from "next/server";
import { logAdminAction } from "@/lib/admin/audit";
import { registerPartnerFromOnboarding } from "@/lib/admin/register-structure-from-onboarding";
import { requireAdminApi } from "@/lib/admin/verify";
import { dashboardPathForRole } from "@/lib/auth/redirectAfterLogin";
import { notifyHotelAccountIndexNow } from "@/lib/seo/indexnow-sync";

type Body = {
  onboardingId?: string;
  email?: string;
  password?: string;
  structureType?: string;
  openDashboard?: boolean;
};

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const result = await registerPartnerFromOnboarding(gate.admin, {
    onboardingId: body.onboardingId ?? "",
    email: body.email ?? "",
    password: body.password ?? "",
    structureType: body.structureType,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  await logAdminAction(gate.admin, request, {
    actor: gate.profile,
    action: "register_partner_from_onboarding",
    targetType: "onboarding_hotel",
    targetId: body.onboardingId ?? null,
    details: {
      userId: result.userId,
      hotelAccountId: result.hotelAccountId,
      email: result.email,
    },
  });

  void notifyHotelAccountIndexNow(gate.admin, result.hotelAccountId);

  let redirectUrl: string | null = null;

  if (body.openDashboard) {
    const { data: linkData, error: linkError } = await gate.admin.auth.admin.generateLink({
      type: "magiclink",
      email: result.email,
    });
    const tokenHash = linkData?.properties?.hashed_token;
    if (!linkError && tokenHash) {
      redirectUrl = `/auth/impersonate?${new URLSearchParams({
        token_hash: tokenHash,
        next: dashboardPathForRole("hotel"),
      }).toString()}`;
    }
  }

  return NextResponse.json({
    userId: result.userId,
    hotelAccountId: result.hotelAccountId,
    email: result.email,
    redirectUrl,
  });
}
