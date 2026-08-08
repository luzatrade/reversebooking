import { NextResponse } from "next/server";
import { isCronAuthorized } from "@/lib/cron/auth";
import {
  exportMissingDescriptionHotels,
  importN8nDescriptionBatch,
  type N8nImportPayload,
} from "@/lib/onboarding/n8n-descriptions";
import {
  enqueueN8nDescriptionBatch,
  listPendingN8nQueues,
  processAllPendingN8nQueues,
  processN8nQueueItem,
} from "@/lib/onboarding/n8n-queue";
import { createServiceRoleClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function GET(request: Request) {
  if (!isCronAuthorized(request)) return unauthorized();

  const admin = createServiceRoleClient();
  if (!admin) {
    return NextResponse.json({ error: "Service role non configurato" }, { status: 500 });
  }

  const url = new URL(request.url);
  const limit = Number.parseInt(url.searchParams.get("limit") ?? "10", 10);

  if (url.searchParams.get("queue") === "pending") {
    try {
      const pending = await listPendingN8nQueues(admin, limit);
      return NextResponse.json({
        ok: true,
        count: pending.length,
        queue: pending,
        ranAt: new Date().toISOString(),
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Errore lista coda";
      return NextResponse.json({ error: message }, { status: 500 });
    }
  }

  try {
    const hotels = await exportMissingDescriptionHotels(admin, limit);
    return NextResponse.json({
      ok: true,
      count: hotels.length,
      criteria: "main_photo_url + indirizzo presenti, description IT vuota",
      hotels,
      ranAt: new Date().toISOString(),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Errore export";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!isCronAuthorized(request)) return unauthorized();

  const admin = createServiceRoleClient();
  if (!admin) {
    return NextResponse.json({ error: "Service role non configurato" }, { status: 500 });
  }

  const url = new URL(request.url);
  const validateOnly = url.searchParams.get("validate_only") === "true";
  const queueOnly = url.searchParams.get("queue") === "true";
  const processQueue = url.searchParams.get("process_queue") === "true";
  const queueId = url.searchParams.get("queue_id");

  if (processQueue) {
    try {
      if (queueId) {
        const report = await processN8nQueueItem(admin, queueId);
        return NextResponse.json({
          ok: report.invalid.length === 0,
          queueId,
          imported: report.imported.length,
          invalid: report.invalid.length,
          report,
          ranAt: new Date().toISOString(),
        });
      }
      const results = await processAllPendingN8nQueues(admin, 5);
      return NextResponse.json({
        ok: true,
        processed: results.length,
        results,
        ranAt: new Date().toISOString(),
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Errore process queue";
      return NextResponse.json({ error: message }, { status: 500 });
    }
  }

  let body: N8nImportPayload;
  try {
    body = (await request.json()) as N8nImportPayload;
  } catch {
    return badRequest("JSON non valido");
  }

  if (!body.hotels?.length) {
    return badRequest("Serve { hotels: [...] } con almeno un hotel");
  }

  if (queueOnly) {
    try {
      const queued = await enqueueN8nDescriptionBatch(admin, body);
      return NextResponse.json({
        ok: true,
        queued: true,
        queueId: queued.id,
        batchId: queued.batchId,
        hotelCount: queued.hotelCount,
        message: "Batch in coda per revisione agente — non ancora sul sito",
        ranAt: new Date().toISOString(),
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Errore enqueue";
      return NextResponse.json({ error: message }, { status: 500 });
    }
  }

  try {
    const report = await importN8nDescriptionBatch(admin, body, {
      validateOnly,
      withContacts: true,
    });

    const status = validateOnly && report.invalid.length > 0 ? 422 : 200;

    return NextResponse.json({
      ok: report.invalid.length === 0,
      validateOnly,
      batchId: report.batchId,
      imported: report.imported.length,
      invalid: report.invalid.length,
      skipped: report.skipped.length,
      report,
      ranAt: new Date().toISOString(),
    }, { status });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Errore import";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
