import { NextResponse } from "next/server";
import { getSessionAndProfile } from "@/lib/auth/session";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import { isSameOrigin } from "@/lib/security/csrf";

export async function requireAdminApi(request?: Request) {
  if (request && !isSameOrigin(request)) {
    return { error: NextResponse.json({ error: "Origine non valida" }, { status: 403 }) };
  }

  const { user, profile } = await getSessionAndProfile();
  if (!user || profile?.role !== "admin") {
    return { error: NextResponse.json({ error: "Non autorizzato" }, { status: 403 }) };
  }
  const admin = createServiceRoleClient();
  if (!admin) {
    return { error: NextResponse.json({ error: "Service role non configurato" }, { status: 503 }) };
  }
  return { admin, profile };
}
