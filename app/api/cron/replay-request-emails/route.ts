import { NextResponse } from "next/server";
import { isCronAuthorized } from "@/lib/cron/auth";
import {
  dispatchNewTravelRequestNotifications,
  type DispatchAudience,
} from "@/lib/notifications/dispatch-new-request";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import { getResendApiKey } from "@/lib/notifications/resend-env";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

function isAuthorized(request: Request): boolean {
  if (isCronAuthorized(request)) return true;

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const authHeader = request.headers.get("authorization");
  if (serviceKey && authHeader === `Bearer ${serviceKey}`) return true;

  return false;
}

function parseAudience(value: string | null): DispatchAudience {
  if (value === "partners" || value === "onboarding") return value;
  return "all";
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }

  const admin = createServiceRoleClient();
  if (!admin) {
    return NextResponse.json({ error: "Service role non configurato" }, { status: 503 });
  }

  if (!getResendApiKey()) {
    return NextResponse.json({ error: "RESEND_API_KEY non configurata" }, { status: 503 });
  }

  const url = new URL(request.url);
  const dryRun = url.searchParams.get("dryRun") === "1" || url.searchParams.get("dry-run") === "1";
  const emailsOnly = url.searchParams.get("withNotifications") !== "1";
  const audience = parseAudience(url.searchParams.get("audience"));
  const sinceDays = Math.max(1, Math.min(30, Number(url.searchParams.get("sinceDays") ?? url.searchParams.get("since-days") ?? "7") || 7));

  const today = new Date().toISOString().slice(0, 10);
  const sinceIso = new Date(Date.now() - sinceDays * 86400000).toISOString();

  const { data: requests, error } = await admin
    .from("travel_requests")
    .select("id, request_code, city_name, check_in, created_at")
    .eq("status", "active")
    .gte("check_in", today)
    .gte("created_at", sinceIso)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const results: Array<Record<string, unknown>> = [];
  let totalRecipients = 0;
  let totalSent = 0;

  for (const row of requests ?? []) {
    const result = await dispatchNewTravelRequestNotifications(admin, row.id, {
      emailsOnly,
      audience,
      dryRun,
    });

    const sent = result.emailResults.filter(
      (item) => item && typeof item === "object" && "ok" in item && (item as { ok: boolean }).ok,
    ).length;

    const recipients = result.partnerRecipients.length + result.onboardingRecipients.length;
    totalRecipients += recipients;
    totalSent += sent;

    const failures = result.emailResults
      .filter((item) => !item || typeof item !== "object" || !("ok" in item) || !(item as { ok: boolean }).ok)
      .slice(0, 3)
      .map((item) => item);

    results.push({
      requestCode: row.request_code,
      cityName: row.city_name,
      checkIn: row.check_in,
      recipients,
      emailsSent: sent,
      partnerRecipients: result.partnerRecipients.length,
      onboardingRecipients: result.onboardingRecipients.length,
      sampleFailures: failures,
    });
  }

  return NextResponse.json({
    ok: true,
    dryRun,
    sinceDays,
    audience,
    requests: results.length,
    totalRecipients,
    totalEmailsSent: totalSent,
    results,
    ranAt: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  return GET(request);
}
