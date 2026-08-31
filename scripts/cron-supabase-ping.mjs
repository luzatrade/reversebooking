#!/usr/bin/env node
/**
 * Test keep-alive Supabase: probe DB locale + opzionale ping produzione.
 *
 *   node scripts/cron-supabase-ping.mjs           # solo DB locale
 *   node scripts/cron-supabase-ping.mjs --prod  # anche GET produzione (serve CRON_SECRET)
 */
import { createClient } from "@supabase/supabase-js";

const prod = process.argv.includes("--prod");
const baseUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://www.hotelsdrop.com";

async function probeDb() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !key) {
    console.error("✗ Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }

  const admin = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const started = Date.now();
  const { error: probeError } = await admin.from("hotel_accounts").select("id").limit(1).maybeSingle();
  if (probeError) {
    console.error("✗ DB probe fallito:", probeError.message);
    process.exit(1);
  }

  const { count, error: countError } = await admin
    .from("onboarding_hotels")
    .select("id", { count: "exact", head: true });

  console.log("✓ DB raggiungibile", `(${(Date.now() - started)}ms)`);
  if (countError) console.warn("  count onboarding_hotels:", countError.message);
  else console.log("  onboarding_hotels:", count);
}

async function pingProd() {
  const secret = process.env.CRON_SECRET?.trim();
  if (!secret) {
    console.error("✗ CRON_SECRET mancante — imposta su Vercel e in .env.local per test --prod");
    process.exit(1);
  }

  const url = `${baseUrl}/api/cron/supabase-ping`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${secret}` },
  });
  const body = await res.text();
  let json;
  try {
    json = JSON.parse(body);
  } catch {
    json = body;
  }

  if (!res.ok) {
    console.error(`✗ Ping produzione HTTP ${res.status}:`, json);
    process.exit(1);
  }

  console.log("✓ Ping produzione OK:", json);
}

console.log("\n[cron-supabase-ping]\n");
await probeDb();
if (prod) await pingProd();
console.log("");
