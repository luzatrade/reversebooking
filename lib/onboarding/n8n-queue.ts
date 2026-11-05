import type { SupabaseClient } from "@supabase/supabase-js";
import {
  importN8nDescriptionBatch,
  type N8nImportPayload,
  type N8nImportReport,
} from "@/lib/onboarding/n8n-descriptions";

const QUEUE_ACTION = "n8n_description_queue";

export type QueueRow = {
  id: string;
  batch_id: string;
  source: string | null;
  status: string;
  hotels: N8nImportPayload["hotels"];
  report: N8nImportReport | null;
  error_message: string | null;
  created_at: string;
  processed_at: string | null;
};

type QueueDetails = {
  status: "pending" | "processing" | "done" | "failed";
  batch_id: string;
  source?: string;
  hotels: N8nImportPayload["hotels"];
  report?: N8nImportReport;
  error_message?: string;
  processed_at?: string;
};

function rowFromAudit(entry: {
  id: string;
  target_id: string | null;
  details: QueueDetails | null;
  created_at: string;
}): QueueRow {
  const d = entry.details ?? ({} as QueueDetails);
  return {
    id: entry.id,
    batch_id: d.batch_id ?? entry.target_id ?? "",
    source: d.source ?? null,
    status: d.status ?? "pending",
    hotels: d.hotels ?? [],
    report: d.report ?? null,
    error_message: d.error_message ?? null,
    created_at: entry.created_at,
    processed_at: d.processed_at ?? null,
  };
}

export async function enqueueN8nDescriptionBatch(
  admin: SupabaseClient,
  payload: N8nImportPayload,
): Promise<{ id: string; batchId: string; hotelCount: number }> {
  const batchId = payload.batch_id?.trim() || new Date().toISOString();
  const hotels = payload.hotels ?? [];

  const details: QueueDetails = {
    status: "pending",
    batch_id: batchId,
    source: payload.source ?? "n8n",
    hotels,
  };

  const { data, error } = await admin
    .from("admin_audit_log")
    .insert({
      action: QUEUE_ACTION,
      target_type: "batch",
      target_id: batchId,
      details,
    })
    .select("id")
    .single();

  if (error) throw error;

  return { id: data.id, batchId, hotelCount: hotels.length };
}

export async function listPendingN8nQueues(admin: SupabaseClient, limit = 20): Promise<QueueRow[]> {
  const { data, error } = await admin
    .from("admin_audit_log")
    .select("id, target_id, details, created_at")
    .eq("action", QUEUE_ACTION)
    .order("created_at", { ascending: true })
    .limit(limit * 3);

  if (error) throw error;

  const pending = (data ?? [])
    .filter((row) => (row.details as QueueDetails | null)?.status === "pending")
    .slice(0, limit);

  return pending.map((row) => rowFromAudit(row as Parameters<typeof rowFromAudit>[0]));
}

async function patchQueueDetails(
  admin: SupabaseClient,
  queueId: string,
  patch: Partial<QueueDetails>,
) {
  const { data: row, error: fetchErr } = await admin
    .from("admin_audit_log")
    .select("details")
    .eq("id", queueId)
    .maybeSingle();

  if (fetchErr) throw fetchErr;
  if (!row) throw new Error(`Queue item non trovato: ${queueId}`);

  const details = { ...(row.details as QueueDetails), ...patch };

  const { error } = await admin.from("admin_audit_log").update({ details }).eq("id", queueId);
  if (error) throw error;
}

export async function processN8nQueueItem(admin: SupabaseClient, queueId: string): Promise<N8nImportReport> {
  const { data: row, error: fetchErr } = await admin
    .from("admin_audit_log")
    .select("id, target_id, details, created_at")
    .eq("id", queueId)
    .maybeSingle();

  if (fetchErr) throw fetchErr;
  if (!row) throw new Error(`Queue item non trovato: ${queueId}`);

  const details = row.details as QueueDetails;
  if (details?.status !== "pending") {
    throw new Error(`Queue item ${queueId} non è pending (${details?.status})`);
  }

  await patchQueueDetails(admin, queueId, { status: "processing" });

  const payload: N8nImportPayload = {
    batch_id: details.batch_id,
    source: details.source,
    hotels: details.hotels,
  };

  try {
    const report = await importN8nDescriptionBatch(admin, payload, { withContacts: true });
    const finalStatus = report.invalid.length > 0 || report.imported.length === 0 ? "failed" : "done";

    await patchQueueDetails(admin, queueId, {
      status: finalStatus,
      report,
      error_message:
        report.invalid.length > 0
          ? `invalid: ${report.invalid.map((i) => i.slug).join(", ")}`
          : undefined,
      processed_at: new Date().toISOString(),
    });

    return report;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Errore import";
    await patchQueueDetails(admin, queueId, {
      status: "failed",
      error_message: message,
      processed_at: new Date().toISOString(),
    });
    throw err;
  }
}

export async function processAllPendingN8nQueues(admin: SupabaseClient, limit = 5) {
  const pending = await listPendingN8nQueues(admin, limit);
  const results: Array<{ queueId: string; batchId: string; imported: number; invalid: number }> = [];

  for (const item of pending) {
    const report = await processN8nQueueItem(admin, item.id);
    results.push({
      queueId: item.id,
      batchId: item.batch_id,
      imported: report.imported.length,
      invalid: report.invalid.length,
    });
  }

  return results;
}
