import { createServiceRoleClient } from "@/lib/supabase/admin";

/**
 * Estrae l'IP del client dagli header della richiesta (dietro proxy/CDN).
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

type RateLimitOptions = {
  /** Categoria del limite (es. "register", "chat-email"). */
  key: string;
  /** Identificatore del soggetto limitato (IP o user id). */
  identifier: string;
  /** Numero massimo di richieste consentite nella finestra. */
  max: number;
  /** Ampiezza della finestra in secondi. */
  windowSeconds: number;
};

/**
 * Verifica e consuma una unità del rate limit, atomico e condiviso tra istanze
 * (backed da Postgres tramite la funzione check_rate_limit). Politica
 * FAIL-OPEN: in caso di errore o configurazione mancante consente la richiesta,
 * per non bloccare utenti reali.
 */
export async function rateLimit(opts: RateLimitOptions): Promise<{ allowed: boolean }> {
  const admin = createServiceRoleClient();
  if (!admin) return { allowed: true };
  try {
    const { data, error } = await admin.rpc("check_rate_limit", {
      p_key: `${opts.key}:${opts.identifier}`,
      p_max: opts.max,
      p_window_seconds: opts.windowSeconds,
    });
    if (error) return { allowed: true };
    return { allowed: data === true };
  } catch {
    return { allowed: true };
  }
}

/** Risposta JSON standard 429 (Too Many Requests). */
export function tooManyRequestsResponse(message = "Troppe richieste. Riprova tra qualche minuto.") {
  return Response.json({ error: message }, { status: 429 });
}
