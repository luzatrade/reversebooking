import type { User } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { UserRole } from "@/types/app";

const VALID_ROLES = new Set<UserRole>(["hotel", "agency", "admin", "advertiser"]);

export function roleFromUserMetadata(user: User | null | undefined): UserRole | null {
  const role = user?.user_metadata?.role;
  return typeof role === "string" && VALID_ROLES.has(role as UserRole) ? (role as UserRole) : null;
}

/** Prefer JWT metadata; fall back to profiles only when needed (legacy accounts). */
export async function resolveLoginRole(
  supabase: SupabaseClient,
  user: User,
): Promise<UserRole | null> {
  const metaRole = roleFromUserMetadata(user);
  if (metaRole) return metaRole;

  const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", user.id).maybeSingle();
  const role = profile?.role;
  return typeof role === "string" && VALID_ROLES.has(role as UserRole) ? (role as UserRole) : null;
}
