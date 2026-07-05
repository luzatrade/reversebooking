#!/usr/bin/env node
/** Ripara account agency: metadata agenzia ma profilo/hotel_accounts mancanti o errati. */
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
if (!url || !serviceKey) {
  console.error("Missing Supabase env");
  process.exit(1);
}

const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

const { data: authUsers, error: listError } = await admin.auth.admin.listUsers({ perPage: 1000 });
if (listError) {
  console.error(listError.message);
  process.exit(1);
}

let fixed = 0;
for (const user of authUsers.users ?? []) {
  const meta = user.user_metadata ?? {};
  const isAgencyMeta = meta.role === "agency" || meta.account_kind === "agenzia";
  if (!isAgencyMeta) continue;

  const { data: hotel } = await admin
    .from("hotel_accounts")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  const email = user.email ?? "";

  if (hotel?.id) {
    await admin
      .from("profiles")
      .update({ role: "agency", email })
      .eq("user_id", user.id);
    continue;
  }

  const { data: existingProfile } = await admin
    .from("profiles")
    .select("user_id, phone_number")
    .eq("user_id", user.id)
    .maybeSingle();

  if (existingProfile) {
    const { error: profileError } = await admin
      .from("profiles")
      .update({ role: "agency", email, email_verified: Boolean(user.email_confirmed_at), account_status: "active" })
      .eq("user_id", user.id);
    if (profileError) {
      console.error(`FAIL profile ${email}: ${profileError.message}`);
      continue;
    }
  } else {
    const { error: profileError } = await admin.from("profiles").insert({
      user_id: user.id,
      role: "agency",
      email,
      phone_number: `+39${user.id.replaceAll("-", "").slice(0, 10)}`,
      email_verified: Boolean(user.email_confirmed_at),
      phone_verified: false,
      account_status: "active",
    });
    if (profileError) {
      console.error(`FAIL profile ${email}: ${profileError.message}`);
      continue;
    }
  }

  const { error: hotelError } = await admin.from("hotel_accounts").upsert(
    {
      user_id: user.id,
      provider_kind: "agency",
      structure_type: "hotel",
      property_name: "Nuova agenzia",
      cin_code: null,
      cun_code: null,
      description: null,
      full_address: "Indirizzo da completare",
      country_code: "IT",
      country_name: "Italia",
      city_name: "Da completare",
      city_id: "IT-PENDING",
      specific_area: null,
      rooms_quantity: 1,
      private_notification_email: email,
      public_email: null,
      public_phone: null,
      main_photo_url: null,
      subscription_status: "active",
      subscription_active: true,
      account_status: "active",
    },
    { onConflict: "user_id" },
  );

  if (hotelError) {
    console.error(`FAIL hotel ${email}: ${hotelError.message}`);
    continue;
  }

  await admin.from("advertiser_profiles").upsert(
    {
      user_id: user.id,
      advertiser_type: "travel_agency",
      first_name: "Agenzia",
      last_name: "Viaggi",
      agency_name: "Nuova agenzia",
      short_description: "Profilo agenzia creato automaticamente.",
      contact_email: email,
    },
    { onConflict: "user_id" },
  );

  fixed += 1;
  console.log(`Fixed agency account: ${email}`);
}

console.log(`Done. Repaired ${fixed} account(s).`);
