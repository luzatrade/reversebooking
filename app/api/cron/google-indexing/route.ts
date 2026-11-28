import { NextResponse } from "next/server";
import { isCronAuthorized } from "@/lib/cron/auth";
import { googleIndexingDailyLimit, isGoogleIndexingConfigured, publishGoogleUrlNotification } from "@/lib/seo/google-indexing";
import { logGoogleIndexingResult, pickNextGoogleIndexingUrl } from "@/lib/seo/google-indexing-queue";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  if (!isCronAuthorized(request)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }

  if (!isGoogleIndexingConfigured()) {
    return NextResponse.json({
      ok: false,
      skipped: true,
      message: "GOOGLE_INDEXING_SERVICE_ACCOUNT_JSON mancante",
    });
  }

  const pick = await pickNextGoogleIndexingUrl();
  if (!pick) {
    return NextResponse.json({
      ok: true,
      skipped: true,
      message: "Nessun URL (quota 24h o pool vuoto)",
      dailyLimit: googleIndexingDailyLimit(),
      ranAt: new Date().toISOString(),
    });
  }

  const result = await publishGoogleUrlNotification(pick.url);
  await logGoogleIndexingResult(pick, result);

  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        url: pick.url,
        tier: pick.tier,
        source: pick.source,
        status: result.status,
        error: result.error,
        ranAt: new Date().toISOString(),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    url: pick.url,
    tier: pick.tier,
    source: pick.source,
    status: result.status,
    dailyLimit: googleIndexingDailyLimit(),
    ranAt: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  return GET(request);
}