/**
 * Audit notifiche email per nuove richieste (partner + onboarding + Resend).
 *
 * Usage:
 *   npx tsx scripts/audit-new-request-notifications.ts
 *   npx tsx scripts/audit-new-request-notifications.ts --city Roma
 *   npx tsx scripts/audit-new-request-notifications.ts --request-id <uuid>
 */

import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";
import { resolveNotificationEmailFrom } from "@/lib/email/from";
import { fetchOnboardingHotelsForCity } from "@/lib/notifications/onboarding-new-request";
import { fetchActivePartnerHotelsForRequest } from "@/lib/notifications/partner-hotels-for-request";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const cityArg = process.argv.find((a) => a.startsWith("--city="));
const cityFlag = process.argv.indexOf("--city");
const cityFilter =
  cityArg?.split("=")[1] ??
  (cityFlag !== -1 && process.argv[cityFlag + 1] && !process.argv[cityFlag + 1].startsWith("--")
    ? process.argv[cityFlag + 1]
    : null);

const reqIdArg = process.argv.find((a) => a.startsWith("--request-id="));
const reqIdFlag = process.argv.indexOf("--request-id");
const requestId =
  reqIdArg?.split("=")[1] ??
  (reqIdFlag !== -1 && process.argv[reqIdFlag + 1] && !process.argv[reqIdFlag + 1].startsWith("--")
    ? process.argv[reqIdFlag + 1]
    : null);

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: { persistSession: false },
});

function partnerEmail(row: { private_notification_email?: string | null; public_email?: string | null }) {
  return (row.private_notification_email ?? row.public_email ?? "").trim();
}

async function loadRequest() {
  if (requestId) {
    const { data, error } = await sb
      .from("travel_requests")
      .select("id, request_code, city_id, city_name, country_code, status, created_at")
      .eq("id", requestId)
      .maybeSingle();
    if (error) throw error;
    if (!data) throw new Error("Richiesta non trovata");
    return data;
  }

  let q = sb
    .from("travel_requests")
    .select("id, request_code, city_id, city_name, country_code, status, created_at")
    .eq("status", "active")
    .order("created_at", { ascending: false })
    .limit(1);

  if (cityFilter) q = q.ilike("city_name", cityFilter);

  const { data, error } = await q.maybeSingle();
  if (error) throw error;
  if (!data) throw new Error("Nessuna richiesta attiva trovata");
  return data;
}

async function testResend() {
  const key = process.env.RESEND_API_KEY?.trim();
  const from = resolveNotificationEmailFrom();
  if (!key) {
    return { ok: false, reason: "RESEND_API_KEY non configurata — le email NON partono" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: process.env.ADMIN_NOTIFY_EMAIL?.trim() || "info@hotelsdrop.com",
      subject: "[HotelsDrop audit] test Resend (ignora)",
      html: "<p>Test automatico audit — puoi ignorare.</p>",
    }),
  });

  const text = await response.text();
  if (!response.ok) {
    return { ok: false, reason: `Resend HTTP ${response.status}: ${text.slice(0, 200)}` };
  }
  return { ok: true, reason: "Email di test inviata via Resend" };
}

async function main() {
  console.log("=== Audit notifiche nuova richiesta ===\n");

  const resend = await testResend();
  console.log("Resend:", resend.ok ? "✓ OK" : "✗ BLOCCATO");
  console.log("  ", resend.reason);
  console.log("  from:", resolveNotificationEmailFrom());
  console.log("");

  const travelRequest = await loadRequest();
  console.log("Richiesta campione:", travelRequest.request_code, travelRequest.city_name, travelRequest.city_id);
  console.log("  id:", travelRequest.id);
  console.log("  created:", travelRequest.created_at);
  console.log("");

  const partners = await fetchActivePartnerHotelsForRequest(sb, travelRequest);
  const onboarding = await fetchOnboardingHotelsForCity(sb, travelRequest);

  console.log(`Partner notificati (in-app + email): ${partners.length}`);
  for (const p of partners) {
    console.log(`  · ${p.property_name} → ${partnerEmail(p) || "(senza email)"}`);
  }
  console.log("");

  console.log(`Onboarding solo email: ${onboarding.length}`);
  for (const o of onboarding.slice(0, 8)) {
    console.log(`  · ${o.nome} → ${o.email}`);
  }
  if (onboarding.length > 8) console.log(`  … +${onboarding.length - 8} altre`);
  console.log("");

  const { count: newReqNotifs } = await sb
    .from("notifications")
    .select("*", { count: "exact", head: true })
    .ilike("title", "%Nuova richiesta%");

  const { count: totalRequests } = await sb.from("travel_requests").select("*", { count: "exact", head: true });

  console.log("Storico DB:");
  console.log(`  travel_requests totali: ${totalRequests}`);
  console.log(`  notifications 'Nuova richiesta': ${newReqNotifs} (seed non chiama l'API notifiche)`);
  console.log("");

  const { data: activePartners } = await sb
    .from("hotel_accounts")
    .select("id, property_name, city_id, city_name")
    .eq("subscription_active", true)
    .eq("account_status", "active");

  console.log("Partner attivi (city_id):");
  for (const p of activePartners ?? []) {
    console.log(`  · ${p.property_name}: ${p.city_name} / city_id=${p.city_id}`);
  }

  if (!resend.ok) {
    console.log("\n⚠ Azione: aggiungi RESEND_API_KEY su Vercel e Cursor Secrets.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
