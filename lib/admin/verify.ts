import { NextResponse } from "next/server";
import { getSessionAndProfile } from "@/lib/auth/session";
import { createServiceRoleClient } from "@/lib/supabase/admin";

export async function requireAdminApi() {
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
