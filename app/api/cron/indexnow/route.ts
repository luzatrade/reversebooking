import { NextResponse } from "next/server";
import { isCronAuthorized } from "@/lib/cron/auth";
import { collectIndexNowBatchUrls } from "@/lib/seo/indexnow-batch";
import { getIndexNowKeyLocation, notifyIndexNow } from "@/lib/seo/indexnow";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

async function handleIndexNowBatch() {
  const urls = await collectIndexNowBatchUrls();
  if (!urls.length) {
    return NextResponse.json({ ok: true, submitted: 0, message: "Nessun URL da inviare" });
  }

  const result = await notifyIndexNow(urls);
  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        submitted: result.submitted,
        status: result.status,
        error: result.error,
        keyLocation: getIndexNowKeyLocation(),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    submitted: result.submitted,
    status: result.status ?? 202,
    totalUrls: urls.length,
    keyLocation: getIndexNowKeyLocation(),
    ranAt: new Date().toISOString(),
  });
}

export async function GET(request: Request) {
  if (!isCronAuthorized(request)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }
  return handleIndexNowBatch();
}

export async function POST(request: Request) {
  if (!isCronAuthorized(request)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }
  return handleIndexNowBatch();
}
