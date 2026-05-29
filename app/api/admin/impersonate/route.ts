import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/verify";
import { logAdminAction } from "@/lib/admin/audit";

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
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback`,
    },
  });

  if (linkError || !linkData) {
    return NextResponse.json(
      { error: linkError?.message ?? "Impossibile generare link" },
      { status: 500 },
    );
  }

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
    actionLink: linkData.properties?.action_link,
  });
}
