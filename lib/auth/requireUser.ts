import { createClient } from "@supabase/supabase-js";

export async function requireUser(request: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return { error: "Server non configurato.", status: 503 as const };

  const authHeader = request.headers.get("Authorization");
  if (!authHeader) return { error: "Non autenticato.", status: 401 as const };

  const client = createClient(url, anonKey, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data } = await client.auth.getUser();
  if (!data.user) return { error: "Utente non trovato.", status: 401 as const };

  return { user: data.user, authHeader };
}
