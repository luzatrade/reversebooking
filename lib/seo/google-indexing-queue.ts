import type { SupabaseClient } from "@supabase/supabase-js";
import { localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";
import { listAllDestinationHubs } from "@/lib/seo/destination-queries";
import { googleIndexingDailyLimit } from "@/lib/seo/google-indexing";
import { listGoogleIndexingEntityUrls } from "@/lib/seo/google-indexing-entity-urls";
import { structureIndexNowUrls } from "@/lib/seo/indexnow";
import { createServiceRoleClient } from "@/lib/supabase/admin";

const COOLDOWN_DAYS = 14;

export type GoogleIndexingPick = {
  url: string;
  tier: number;
  source: "pending" | "entity" | "hub" | "hotel";
};

function cooldownBeforeIso(): string {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - COOLDOWN_DAYS);
  return date.toISOString();
}

async function countSubmissionsLast24h(admin: SupabaseClient): Promise<number> {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { count, error } = await admin
    .from("seo_google_indexing_log")
    .select("id", { count: "exact", head: true })
    .gte("notified_at", since)
    .eq("ok", true);
  if (error) {
    console.warn("[google-indexing] count 24h:", error.message);
    return googleIndexingDailyLimit();
  }
  return count ?? 0;
}

async function wasRecentlyNotified(admin: SupabaseClient, url: string): Promise<boolean> {
  const { data, error } = await admin
    .from("seo_google_indexing_log")
    .select("notified_at")
    .eq("url", url)
    .eq("ok", true)
    .gte("notified_at", cooldownBeforeIso())
    .limit(1)
    .maybeSingle();
  if (error) return false;
  return Boolean(data);
}

async function pickPending(admin: SupabaseClient): Promise<GoogleIndexingPick | null> {
  const { data, error } = await admin
    .from("seo_google_indexing_pending")
    .select("url, priority")
    .order("priority", { ascending: true })
    .order("created_at", { ascending: true })
    .limit(30);

  if (error || !data?.length) return null;

  for (const row of data) {
    if (!row.url) continue;
    if (await wasRecentlyNotified(admin, row.url)) {
      await admin.from("seo_google_indexing_pending").delete().eq("url", row.url);
      continue;
    }
    return { url: row.url, tier: row.priority ?? 1, source: "pending" };
  }
  return null;
}

function mixBucket(tick: number): "entity" | "hub" | "hotel" {
  const slot = tick % 20;
  if (slot < 3) return "entity";
  if (slot < 8) return "hub";
  return "hotel";
}

async function pickEntity(admin: SupabaseClient, tick: number): Promise<GoogleIndexingPick | null> {
  const pool = listGoogleIndexingEntityUrls();
  if (!pool.length) return null;
  const start = tick % pool.length;
  for (let i = 0; i < pool.length; i += 1) {
    const url = pool[(start + i) % pool.length];
    if (!(await wasRecentlyNotified(admin, url))) {
      return { url, tier: 0, source: "entity" };
    }
  }
  return null;
}

async function pickHub(admin: SupabaseClient, tick: number): Promise<GoogleIndexingPick | null> {
  const hubs = await listAllDestinationHubs();
  if (!hubs.length) return null;
  const hub = hubs[(tick + hubs.length * 3) % hubs.length];
  const useEn = tick % 2 === 1;
  const internal = useEn ? `/destinations/${hub.slug}` : `/destinazioni/${hub.slug}`;
  const locale = useEn ? "en" : "it";
  const url = canonicalUrl(localizedPath(locale, internal));
  if (await wasRecentlyNotified(admin, url)) return null;
  return { url, tier: 2, source: "hub" };
}

async function pickHotel(admin: SupabaseClient, tick: number): Promise<GoogleIndexingPick | null> {
  const table = tick % 2 === 0 ? "onboarding_hotels" : "hotel_accounts";
  const { data, error } = await admin.from(table).select("slug").eq("seo_indexable", true).limit(400);
  if (error || !data?.length) return null;

  const slugs = [...new Set(data.map((r) => r.slug).filter(Boolean) as string[])];
  if (!slugs.length) return null;

  const start = (tick * 17 + slugs.length) % slugs.length;
  for (let i = 0; i < Math.min(slugs.length, 40); i += 1) {
    const slug = slugs[(start + i) % slugs.length];
    const locale = (tick + i) % 2 === 0 ? "it" : "en";
    const urls = structureIndexNowUrls(slug);
    const url = urls.find((u) => u.includes(`/${locale}/`)) ?? urls[0];
    if (url && !(await wasRecentlyNotified(admin, url))) {
      return { url, tier: 3, source: "hotel" };
    }
  }
  return null;
}

async function pickMix(admin: SupabaseClient): Promise<GoogleIndexingPick | null> {
  const tick = Math.floor(Date.now() / (15 * 60 * 1000));
  const order: Array<"entity" | "hub" | "hotel"> = [];
  const primary = mixBucket(tick);
  order.push(primary, ...(["entity", "hub", "hotel"] as const).filter((b) => b !== primary));

  for (const bucket of order) {
    const pick =
      bucket === "entity"
        ? await pickEntity(admin, tick)
        : bucket === "hub"
          ? await pickHub(admin, tick)
          : await pickHotel(admin, tick);
    if (pick) return pick;
  }
  return null;
}

/** Sceglie al massimo 1 URL se sotto il tetto rolling 24h. */
export async function pickNextGoogleIndexingUrl(): Promise<GoogleIndexingPick | null> {
  const admin = createServiceRoleClient();
  if (!admin) return null;

  const used = await countSubmissionsLast24h(admin);
  if (used >= googleIndexingDailyLimit()) return null;

  const pending = await pickPending(admin);
  if (pending) return pending;

  return pickMix(admin);
}

export async function logGoogleIndexingResult(
  pick: GoogleIndexingPick,
  result: { ok: boolean; status?: number; error?: string },
): Promise<void> {
  const admin = createServiceRoleClient();
  if (!admin) return;

  await admin.from("seo_google_indexing_log").insert({
    url: pick.url,
    ok: result.ok,
    http_status: result.status ?? null,
    tier: pick.tier,
    error_message: result.error?.slice(0, 500) ?? null,
  });

  if (pick.source === "pending" && result.ok) {
    await admin.from("seo_google_indexing_pending").delete().eq("url", pick.url);
  }
}

export async function enqueueGoogleIndexingUrls(urls: string[], priority = 1): Promise<void> {
  const admin = createServiceRoleClient();
  if (!admin) return;
  const unique = [...new Set(urls.map((u) => u.trim()).filter(Boolean))];
  if (!unique.length) return;

  const rows = unique.map((url) => ({ url, priority }));
  const { error } = await admin.from("seo_google_indexing_pending").upsert(rows, {
    onConflict: "url",
    ignoreDuplicates: false,
  });
  if (error) console.warn("[google-indexing] enqueue:", error.message);
}