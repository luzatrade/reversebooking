import type { SupabaseClient, User } from "@supabase/supabase-js";

/** Local session read first; validates with Auth server only if cookies are empty. */
export async function getAuthUserFast(supabase: SupabaseClient): Promise<{ user: User | null; error: Error | null }> {
  const { data: sessionData } = await supabase.auth.getSession();
  const sessionUser = sessionData.session?.user;
  if (sessionUser) return { user: sessionUser, error: null };

  const { data: authData, error } = await supabase.auth.getUser();
  return { user: authData.user ?? null, error: error ?? null };
}
