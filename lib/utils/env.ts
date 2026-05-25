export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.length &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length,
  );
}

export function isServiceRoleConfigured(): boolean {
  return Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY?.length);
}

export function appUrl(): string {
  return (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000").replace(/\/$/, "");
}
