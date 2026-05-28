import { NextResponse } from "next/server";
import type { User } from "@supabase/supabase-js";
import { tryCreateClient } from "@/lib/supabase/server";
import { isSameOrigin } from "@/lib/security/csrf";

/**
 * Gate per le route API chiamate dal browser via fetch same-origin.
 * - Verifica l'origine (mitigazione CSRF).
 * - Richiede una sessione utente valida (cookie Supabase inviati automaticamente).
 *
 * Restituisce { user } oppure { error } con la risposta HTTP già pronta.
 */
export async function requireApiUser(
  request: Request,
): Promise<{ user: User } | { error: NextResponse }> {
  if (!isSameOrigin(request)) {
    return { error: NextResponse.json({ error: "Origine non valida" }, { status: 403 }) };
  }

  const supabase = await tryCreateClient();
  if (!supabase) {
    return { error: NextResponse.json({ error: "Server non configurato" }, { status: 503 }) };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: NextResponse.json({ error: "Non autenticato" }, { status: 401 }) };
  }

  return { user };
}
