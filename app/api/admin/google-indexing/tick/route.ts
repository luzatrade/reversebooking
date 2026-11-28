import { NextResponse } from "next/server";
import { logAdminAction } from "@/lib/admin/audit";
import { requireAdminApi } from "@/lib/admin/verify";
import { googleIndexingDailyLimit, isGoogleIndexingConfigured, publishGoogleUrlNotification } from "@/lib/seo/google-indexing";
import { logGoogleIndexingResult, pickNextGoogleIndexingUrl } from "@/lib/seo/google-indexing-queue";

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  if (!isGoogleIndexingConfigured()) {
    return NextResponse.json(
      { ok: false, error: "GOOGLE_INDEXING_SERVICE_ACCOUNT_JSON non configurata su Vercel" },
      { status: 503 },
    );
  }

  const pick = await pickNextGoogleIndexingUrl();
  if (!pick) {
    return NextResponse.json({
      ok: true,
      skipped: true,
      message: "Nessun URL (quota 24h o schema/coda)",
      dailyLimit: googleIndexingDailyLimit(),
    });
  }

  const result = await publishGoogleUrlNotification(pick.url);
  await logGoogleIndexingResult(pick, result);

  await logAdminAction(gate.admin, request, {
    actor: gate.profile,
    action: "google_indexing_tick",
    targetType: "seo",
    targetId: "google-indexing",
    details: { url: pick.url, ok: result.ok, source: pick.source, tier: pick.tier },
  });

  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        url: pick.url,
        source: pick.source,
        tier: pick.tier,
        status: result.status,
        error: result.error,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    url: pick.url,
    source: pick.source,
    tier: pick.tier,
    status: result.status,
    dailyLimit: googleIndexingDailyLimit(),
  });
}