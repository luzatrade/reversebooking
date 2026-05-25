import type { User } from "@supabase/supabase-js";
import { tryCreateClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/utils/env";
import type { UserRole } from "@/types/app";

export type ProfileRow = {
  id: string;
  user_id: string;
  role: UserRole;
  email: string;
  phone_number: string;
  account_status: string;
  created_at: string;
};

export async function getSessionAndProfile(): Promise<{
  user: User | null;
  profile: ProfileRow | null;
}> {
  if (!isSupabaseConfigured()) {
    return { user: null, profile: null };
  }
  const supabase = await tryCreateClient();
  if (!supabase) return { user: null, profile: null };

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { user: null, profile: null };

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, user_id, role, email, phone_number, account_status, created_at")
    .eq("user_id", user.id)
    .maybeSingle();

  return { user, profile: profile as ProfileRow | null };
}
