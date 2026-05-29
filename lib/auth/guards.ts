import { redirect } from "next/navigation";
import { getSessionAndProfile, type ProfileRow } from "@/lib/auth/session";
import type { User } from "@supabase/supabase-js";
import type { UserRole } from "@/types/app";

const BLOCKED_STATUSES = new Set(["suspended", "banned"]);

export function isBlockedAccount(status: string | null | undefined): boolean {
  return BLOCKED_STATUSES.has(status ?? "");
}

export async function requireRole(role: UserRole): Promise<{ user: User; profile: ProfileRow }> {
  const { user, profile } = await getSessionAndProfile();
  if (!user) redirect("/login?redirect=/console/dashboard");
  if (!profile || profile.role !== role) redirect("/");
  if (isBlockedAccount(profile.account_status)) redirect("/account?blocked=1");
  return { user, profile };
}
