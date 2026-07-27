import { NextResponse } from "next/server";
import { purgeExpiredMarketplaceContent } from "@/lib/lifecycle/purge-expired-content";
import { createServiceRoleClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isAuthorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET?.trim();
  if (!secret) return false;

  const authHeader = request.headers.get("authorization");
  if (authHeader === `Bearer ${secret}`) return true;

  const url = new URL(request.url);
  return url.searchParams.get("secret") === secret;
}

async function handlePurge() {
  const admin = createServiceRoleClient();
  if (!admin) {
    return NextResponse.json({ error: "Service role non configurato" }, { status: 500 });
  }

  const result = await purgeExpiredMarketplaceContent(admin);
  return NextResponse.json({ ok: true, ...result, ranAt: new Date().toISOString() });
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }
  return handlePurge();
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }
  return handlePurge();
}
