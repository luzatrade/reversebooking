import { redirect } from "next/navigation";
import { getSessionAndProfile, type ProfileRow } from "@/lib/auth/session";
import type { User } from "@supabase/supabase-js";
import type { UserRole } from "@/types/app";

export async function requireRole(role: UserRole): Promise<{ user: User; profile: ProfileRow }> {
  const { user, profile } = await getSessionAndProfile();
  if (!user) redirect("/login?redirect=/console/dashboard");
  if (!profile || profile.role !== role) redirect("/");
  return { user, profile };
}
