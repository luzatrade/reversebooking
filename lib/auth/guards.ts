import { redirect } from "next/navigation";
import { getSessionAndProfile, type ProfileRow } from "@/lib/auth/session";
import type { User } from "@supabase/supabase-js";
import type { UserRole } from "@/types/app";
import { tryCreateClient } from "@/lib/supabase/server";

const BLOCKED_STATUSES = new Set(["suspended", "banned"]);

export function isBlockedAccount(status: string | null | undefined): boolean {
  return BLOCKED_STATUSES.has(status ?? "");
}

/**
 * True se l'utente ha un secondo fattore verificato ma la sessione corrente non
 * è ancora elevata (aal1). Fail-open: in caso di errore restituisce false, così
 * un bug qui non può bloccare l'accesso (no lockout).
 */
async function mfaUpgradeRequired(): Promise<boolean> {
  try {
    const supabase = await tryCreateClient();
    if (!supabase) return false;
    const { data, error } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if (error || !data) return false;
    return data.currentLevel === "aal1" && data.nextLevel === "aal2";
  } catch {
    return false;
  }
}

export async function requireRole(role: UserRole): Promise<{ user: User; profile: ProfileRow }> {
  const { user, profile } = await getSessionAndProfile();
  if (!user) redirect("/login?redirect=/console/dashboard");
  if (!profile || profile.role !== role) redirect("/");
  if (isBlockedAccount(profile.account_status)) redirect("/account?blocked=1");
  if (await mfaUpgradeRequired()) redirect("/login?redirect=/console/dashboard&mfa=1");
  return { user, profile };
}
