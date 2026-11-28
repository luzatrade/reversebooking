import { googleIndexingDailyLimit, isGoogleIndexingConfigured } from "@/lib/seo/google-indexing";
import { createServiceRoleClient } from "@/lib/supabase/admin";

export type GoogleIndexingDashboard = {
  configured: boolean;
  dailyLimit: number;
  schemaReady: boolean;
  ok24h: number;
  pendingCount: number;
  tier7d: { tier: number; count: number }[];
  recent: {
    id: string;
    url: string;
    ok: boolean;
    http_status: number | null;
    tier: number | null;
    notified_at: string;
    error_message: string | null;
  }[];
};

export async function getGoogleIndexingDashboard(): Promise<GoogleIndexingDashboard> {
  const admin = createServiceRoleClient();
  const empty: GoogleIndexingDashboard = {
    configured: isGoogleIndexingConfigured(),
    dailyLimit: googleIndexingDailyLimit(),
    schemaReady: false,
    ok24h: 0,
    pendingCount: 0,
    tier7d: [],
    recent: [],
  };
  if (!admin) return empty;

  const since24 = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const since7d = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const logProbe = await admin.from("seo_google_indexing_log").select("id").limit(1);
  if (logProbe.error) return empty;
  empty.schemaReady = true;

  const [ok24, pending, recent, tierRows] = await Promise.all([
    admin
      .from("seo_google_indexing_log")
      .select("id", { count: "exact", head: true })
      .eq("ok", true)
      .gte("notified_at", since24),
    admin.from("seo_google_indexing_pending").select("url", { count: "exact", head: true }),
    admin
      .from("seo_google_indexing_log")
      .select("id, url, ok, http_status, tier, notified_at, error_message")
      .order("notified_at", { ascending: false })
      .limit(40),
    admin
      .from("seo_google_indexing_log")
      .select("tier")
      .eq("ok", true)
      .gte("notified_at", since7d),
  ]);

  empty.ok24h = ok24.count ?? 0;
  empty.pendingCount = pending.count ?? 0;
  empty.recent = (recent.data ?? []) as GoogleIndexingDashboard["recent"];

  const byTier = new Map<number, number>();
  for (const row of tierRows.data ?? []) {
    const t = Number(row.tier ?? 3);
    byTier.set(t, (byTier.get(t) ?? 0) + 1);
  }
  empty.tier7d = [...byTier.entries()]
    .map(([tier, count]) => ({ tier, count }))
    .sort((a, b) => a.tier - b.tier);

  return empty;
}

export function googleIndexingTierLabel(tier: number | null): string {
  switch (tier) {
    case 0:
      return "Entity";
    case 1:
      return "Priorità";
    case 2:
      return "Hub";
    case 3:
      return "Hotel";
    default:
      return "—";
  }
}