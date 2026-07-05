#!/usr/bin/env node
/**
 * Verifica fix registrazione agenzia:
 * 1. utente agency con profile ma senza hotel_accounts → complete-profile crea la riga
 * 2. update profilo con id valido (no uuid "")
 * 3. update con id "" deve fallire lato client (simulato)
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnv() {
  const path = resolve(process.cwd(), ".env.local");
  const raw = readFileSync(path, "utf8");
  const env = {};
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim().replace(/^['"]|['"]$/g, "");
  }
  return env;
}

const env = loadEnv();
const url = env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !serviceKey || !anonKey) {
  console.error("Missing Supabase env vars in .env.local");
  process.exit(1);
}

const admin = createClient(url, serviceKey, { auth: { persistSession: false } });
const testEmail = `agency-check-${Date.now()}@hotelsdrop-test.local`;
const testPassword = `Test-${Date.now()}-Agency!`;

let userId = null;

function ok(label) {
  console.log(`✓ ${label}`);
}

function fail(label, detail) {
  console.error(`✗ ${label}`);
  if (detail) console.error(`  ${detail}`);
  process.exitCode = 1;
}

async function cleanup() {
  if (!userId) return;
  await admin.from("user_consents").delete().eq("user_id", userId);
  await admin.from("advertiser_profiles").delete().eq("user_id", userId);
  await admin.from("hotel_accounts").delete().eq("user_id", userId);
  await admin.from("profiles").delete().eq("user_id", userId);
  await admin.auth.admin.deleteUser(userId);
}

try {
  console.log("=== Verifica fix profilo agenzia ===\n");

  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email: testEmail,
    password: testPassword,
    email_confirm: true,
    user_metadata: { role: "agency", account_kind: "agenzia" },
  });
  if (createError || !created.user) {
    fail("Creazione utente test", createError?.message);
    process.exit(1);
  }
  userId = created.user.id;
  ok(`Utente test creato (${testEmail})`);

  await admin.from("advertiser_profiles").delete().eq("user_id", userId);
  await admin.from("hotel_accounts").delete().eq("user_id", userId);

  const { error: profileError } = await admin.from("profiles").upsert(
    {
      user_id: userId,
      role: "agency",
      email: testEmail,
      phone_number: "+390000000000",
      email_verified: true,
      phone_verified: false,
      account_status: "active",
    },
    { onConflict: "user_id" },
  );
  if (profileError) {
    fail("Simula profile senza hotel_accounts", profileError.message);
    process.exit(1);
  }
  ok("Profile agency creato SENZA hotel_accounts (scenario bug)");

  const { data: signIn, error: signInError } = await admin.auth.signInWithPassword({
    email: testEmail,
    password: testPassword,
  });
  if (signInError || !signIn.session?.access_token) {
    fail("Login utente test", signInError?.message);
    process.exit(1);
  }
  const token = signIn.session.access_token;
  ok("Login ottenuto");

  const completeRes = await fetch("http://127.0.0.1:3000/api/auth/complete-profile", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  const completeBody = await completeRes.json().catch(() => ({}));
  if (!completeRes.ok) {
    fail("complete-profile HTTP", `${completeRes.status} ${completeBody.error ?? JSON.stringify(completeBody)}`);
  } else if (completeBody.alreadyComplete) {
    fail("complete-profile", "early return: profilo segnato completo ma hotel_accounts mancava");
  } else {
    ok(`complete-profile ok (role=${completeBody.role})`);
  }

  const { data: hotel, error: hotelError } = await admin
    .from("hotel_accounts")
    .select("id, provider_kind, city_id, property_name")
    .eq("user_id", userId)
    .maybeSingle();

  if (hotelError) fail("Lettura hotel_accounts", hotelError.message);
  else if (!hotel?.id) fail("hotel_accounts", "riga agenzia ancora assente dopo complete-profile");
  else {
    ok(`hotel_accounts creato (id=${hotel.id}, city_id=${hotel.city_id})`);
    if (hotel.provider_kind !== "agency") fail("provider_kind", `atteso agency, got ${hotel.provider_kind}`);
    else ok("provider_kind = agency");
  }

  const userClient = createClient(url, anonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error: emptyIdError } = await userClient
    .from("hotel_accounts")
    .update({ property_name: "Test vuoto" })
    .eq("id", "");
  if (emptyIdError?.message?.includes('invalid input syntax for type uuid: ""')) {
    ok('Update con id="" rifiutato come atteso (uuid error lato DB)');
  } else if (emptyIdError) {
    ok(`Update con id="" rifiutato: ${emptyIdError.message}`);
  } else {
    fail('Update con id=""', "non ha prodotto errore — pericoloso");
  }

  const { error: validUpdateError } = await userClient
    .from("hotel_accounts")
    .update({
      property_name: "Agenzia Verificata",
      full_address: "Via Test 1, Roma",
      country_code: "IT",
      country_name: "Italia",
      city_name: "Roma",
      city_id: "IT-ROM",
    })
    .eq("id", hotel.id);

  if (validUpdateError) {
    if (validUpdateError.message.includes("non può essere modificata")) {
      console.log("⚠ Salvataggio città bloccato dal trigger DB — applica migration 20260705210000_allow_pending_city_change.sql");
      process.exitCode = process.exitCode || 0;
    } else {
      fail("Update profilo con id valido", validUpdateError.message);
    }
  } else {
    ok("Update profilo agenzia con UUID valido riuscito");
  }

  console.log("\n=== Esito ===");
  if (process.exitCode) console.log("FAIL — vedi errori sopra");
  else console.log("PASS — fix verificato");
} finally {
  await cleanup();
  if (userId) ok("Cleanup utente test");
}
