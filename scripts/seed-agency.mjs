import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });

const PASSWORD = "TestPass123!";
const AGENCY_EMAIL = "agenzia.test@example.com";

async function findUserByEmail(email) {
  let page = 1;
  while (true) {
    const { data, error } = await sb.auth.admin.listUsers({ page, perPage: 200 });
    if (error) throw error;
    const match = data.users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
    if (match) return match;
    if (data.users.length < 200) return null;
    page += 1;
  }
}

async function resetUser(email) {
  const existing = await findUserByEmail(email);
  if (existing) {
    await sb.from("user_consents").delete().eq("user_id", existing.id);
    await sb.from("offers").delete().eq("hotel_account_id", existing.id);
    await sb.from("hotel_accounts").delete().eq("user_id", existing.id);
    await sb.from("advertiser_profiles").delete().eq("user_id", existing.id);
    await sb.from("profiles").delete().eq("user_id", existing.id);
    await sb.auth.admin.deleteUser(existing.id);
    console.log("  (rimosso account preesistente:", email, ")");
  }
}

async function main() {
  console.log("Creazione agenzia di test...\n");
  await resetUser(AGENCY_EMAIL);

  const { data, error } = await sb.auth.admin.createUser({ email: AGENCY_EMAIL, password: PASSWORD, email_confirm: true });
  if (error || !data?.user) throw error ?? new Error("createUser fallita");
  const user = data.user;

  await sb.from("profiles").insert({
    user_id: user.id,
    role: "agency",
    email: AGENCY_EMAIL,
    phone_number: "+393330000009",
    email_verified: true,
    phone_verified: true,
    account_status: "active",
  });

  // Lato fornitore (profilo completo così appare nello slider e può offrire).
  await sb.from("hotel_accounts").insert({
    user_id: user.id,
    provider_kind: "agency",
    structure_type: "hotel",
    property_name: "Agenzia Viaggi Test Roma",
    cun_code: "CUN-TEST-0001",
    description: "Agenzia di test a Roma per verifiche end-to-end del nuovo account agenzia.",
    full_address: "Via del Tritone 50, Roma",
    country_code: "IT",
    country_name: "Italia",
    city_name: "Roma",
    city_id: "roma-it",
    specific_area: "Centro",
    rooms_quantity: 1,
    private_notification_email: AGENCY_EMAIL,
    public_email: AGENCY_EMAIL,
    public_phone: "+39 06 7654321",
    main_photo_url: null,
    account_status: "active",
    subscription_status: "active",
    subscription_active: true,
  });

  // Lato acquirente (può pubblicare richieste alle strutture).
  await sb.from("advertiser_profiles").insert({
    user_id: user.id,
    advertiser_type: "travel_agency",
    first_name: "Agenzia",
    last_name: "Test",
    agency_name: "Agenzia Viaggi Test Roma",
    contact_email: AGENCY_EMAIL,
  });

  console.log("  + Agenzia:", AGENCY_EMAIL, "/", PASSWORD);
  console.log("\nOK. Login con", AGENCY_EMAIL, "->", PASSWORD);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("ERRORE:", e?.message ?? e);
    process.exit(1);
  });
