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

const sb = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const PASSWORD = "TestPass123!";
const HOTEL_EMAIL = "hotel.test@example.com";
const TRAVELER_EMAIL = "viaggiatore.test@example.com";

async function findUserByEmail(email) {
  let page = 1;
  // eslint-disable-next-line no-constant-condition
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

async function createUser(email) {
  const { data, error } = await sb.auth.admin.createUser({
    email,
    password: PASSWORD,
    email_confirm: true,
  });
  if (error || !data?.user) throw error ?? new Error("createUser fallita");
  return data.user;
}

async function main() {
  console.log("Creazione 2 account di test...\n");

  // --- Hotel ---
  await resetUser(HOTEL_EMAIL);
  const hotelUser = await createUser(HOTEL_EMAIL);
  await sb.from("profiles").insert({
    user_id: hotelUser.id,
    role: "hotel",
    email: HOTEL_EMAIL,
    phone_number: "+393330000001",
    email_verified: true,
    phone_verified: true,
    account_status: "active",
  });
  await sb.from("hotel_accounts").insert({
    user_id: hotelUser.id,
    structure_type: "hotel",
    property_name: "Hotel Test Roma",
    cin_code: "IT" + Math.random().toString(36).slice(2, 14).toUpperCase(),
    description: "Hotel di test nel centro di Roma per verifiche end-to-end.",
    full_address: "Via del Corso 100, Roma",
    country_code: "IT",
    country_name: "Italia",
    city_name: "Roma",
    city_id: "roma-it",
    specific_area: "Centro Storico",
    rooms_quantity: 20,
    private_notification_email: HOTEL_EMAIL,
    public_email: HOTEL_EMAIL,
    public_phone: "+39 06 1234567",
    account_status: "active",
    subscription_status: "active",
    subscription_active: true,
  });
  console.log("  + Hotel:", HOTEL_EMAIL);

  // --- Viaggiatore (advertiser) ---
  await resetUser(TRAVELER_EMAIL);
  const travUser = await createUser(TRAVELER_EMAIL);
  await sb.from("profiles").insert({
    user_id: travUser.id,
    role: "advertiser",
    email: TRAVELER_EMAIL,
    phone_number: "+393330000002",
    email_verified: true,
    phone_verified: true,
    account_status: "active",
  });
  await sb.from("advertiser_profiles").insert({
    user_id: travUser.id,
    advertiser_type: "private_individual",
    first_name: "Viaggiatore",
    last_name: "Test",
    contact_email: TRAVELER_EMAIL,
  });
  console.log("  + Viaggiatore:", TRAVELER_EMAIL);

  console.log("\n=== CREDENZIALI ===");
  console.log("  Hotel       ->", HOTEL_EMAIL, "/", PASSWORD);
  console.log("  Viaggiatore ->", TRAVELER_EMAIL, "/", PASSWORD);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("ERRORE:", e?.message ?? e);
    process.exit(1);
  });
