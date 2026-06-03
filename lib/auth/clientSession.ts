import type { SupabaseClient, User } from "@supabase/supabase-js";

type Options = {
  /** When false, skip Auth server if cookies have no session (faster on public pages). Default true. */
  validateWhenNoSession?: boolean;
};

/** Local session read first; validates with Auth server only when needed. */
export async function getAuthUserFast(
  supabase: SupabaseClient,
  options: Options = {},
): Promise<{ user: User | null; error: Error | null }> {
  const validateWhenNoSession = options.validateWhenNoSession ?? true;
  const { data: sessionData } = await supabase.auth.getSession();
  const sessionUser = sessionData.session?.user;
  if (sessionUser) return { user: sessionUser, error: null };

  if (!validateWhenNoSession) return { user: null, error: null };

  const timeoutMs = 5000;
  const result = await Promise.race([
    supabase.auth.getUser(),
    new Promise<{ data: { user: null }; error: Error }>((resolve) =>
      setTimeout(() => resolve({ data: { user: null }, error: new Error("AUTH_TIMEOUT") }), timeoutMs),
    ),
  ]);
  return { user: result.data.user ?? null, error: result.error ?? null };
}
