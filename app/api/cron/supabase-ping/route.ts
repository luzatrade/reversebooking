import { NextResponse } from "next/server";
import { isCronAuthorized } from "@/lib/cron/auth";
import { createServiceRoleClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Ping leggero per evitare pausa progetto Supabase Free per inattività. */
async function handleSupabasePing() {
  const admin = createServiceRoleClient();
  if (!admin) {
    return NextResponse.json(
      { ok: false, error: "Supabase non configurato (URL o service role mancante)" },
      { status: 500 },
    );
  }

  const started = Date.now();
  const { error: probeError } = await admin.from("hotel_accounts").select("id").limit(1).maybeSingle();

  if (probeError) {
    return NextResponse.json(
      {
        ok: false,
        error: probeError.message,
        code: probeError.code,
        hint: probeError.hint,
        elapsedMs: Date.now() - started,
        ranAt: new Date().toISOString(),
      },
      { status: 503 },
    );
  }

  const { count, error: countError } = await admin
    .from("onboarding_hotels")
    .select("id", { count: "exact", head: true });

  return NextResponse.json({
    ok: true,
    db: "reachable",
    onboardingHotels: countError ? null : count,
    onboardingCountError: countError?.message ?? null,
    elapsedMs: Date.now() - started,
    ranAt: new Date().toISOString(),
  });
}

export async function GET(request: Request) {
  if (!isCronAuthorized(request)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }
  return handleSupabasePing();
}

export async function POST(request: Request) {
  if (!isCronAuthorized(request)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }
  return handleSupabasePing();
}
