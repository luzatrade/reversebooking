import type { SupabaseClient } from "@supabase/supabase-js";
import { getClientIp } from "@/lib/security/rate-limit";
import type { ProfileRow } from "@/lib/auth/session";

type AuditParams = {
  /** Profilo dell'admin che esegue l'azione (da requireAdminApi). */
  actor: ProfileRow | null | undefined;
  /** Identificativo dell'azione (es. "impersonate", "hotel_status_change"). */
  action: string;
  targetType?: string | null;
  targetId?: string | null;
  details?: Record<string, unknown> | null;
};

/**
 * Registra un'azione amministrativa nell'audit log. Best-effort: in caso di
 * errore NON blocca l'azione (l'audit non deve impedire l'operatività).
 */
export async function logAdminAction(
  admin: SupabaseClient,
  request: Request,
  params: AuditParams,
): Promise<void> {
  try {
    await admin.from("admin_audit_log").insert({
      actor_user_id: params.actor?.user_id ?? null,
      actor_email: params.actor?.email ?? null,
      action: params.action,
      target_type: params.targetType ?? null,
      target_id: params.targetId ?? null,
      details: params.details ?? null,
      ip_address: getClientIp(request),
      user_agent: request.headers.get("user-agent"),
    });
  } catch {
    // best-effort
  }
}
