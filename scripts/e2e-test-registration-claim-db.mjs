/**
 * E2E DB test: hook placeholder → old upsert fails → new delete+claim succeeds.
 * Runs against production Supabase (same DB as www.hotelsdrop.com).
 */

import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const ONBOARDING_ID = "b4948a9d-7e25-4358-ba66-ed3e747967dc";
const ONBOARDING_NAME = "Alla Riva Camere Verona";

function normPhone(raw) {
  if (!raw?.trim()) return null;
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("39") && d.length > 10) d = d.slice(2);
  if (d.length === 10) return `+39${d}`;
  if (d.length >= 9 && d.length <= 11) return `+39${d}`;
  return null;
}

function cityId(cityName) {
  return `${String(cityName).toLowerCase().replace(/ +/g, "-")}-it`;
}

function buildHotelFromOnboarding(userId, email, onboarding, structureType) {
  return {
    user_id: userId,
    onboarding_hotel_id: onboarding.id,
    structure_type: structureType,
    property_name: onboarding.nome,
    cin_code: `ONB-${userId.slice(0, 8)}`,
    description: onboarding.description ?? null,
    description_en: onboarding.description_en ?? null,
    full_address: onboarding.indirizzo || onboarding.city_name,
    country_code: "IT",
    country_name: "Italia",
    city_name: onboarding.city_name,
    city_id: cityId(onboarding.city_name),
    specific_area: onboarding.indirizzo,
    rooms_quantity: 1,
    private_notification_email: email,
    public_email: onboarding.email,
    public_phone: onboarding.phone,
    main_photo_url: onboarding.main_photo_url,
    gallery_photo_urls: onboarding.gallery_photo_urls ?? [],
    google_maps_url: onboarding.google_maps_url,
    slug: onboarding.slug ?? null,
    seo_indexable: onboarding.seo_indexable ?? false,
    subscription_status: "active",
    subscription_active: true,
    account_status: "pending_verification",
  };
}

function isPlaceholder(hotel) {
  if (!hotel || hotel.onboarding_hotel_id) return false;
  const name = hotel.property_name?.trim() ?? "";
  return (
    name === "" ||
    name === "Nuova struttura" ||
    name === "Struttura da completare" ||
    name === "Struttura test" ||
    hotel.city_id === "3164527" ||
    hotel.city_id === "IT-PENDING"
  );
}

async function cleanup(sb, userId, onboardingId) {
  await sb
    .from("onboarding_hotels")
    .update({ status: "unclaimed", claimed_by: null })
    .eq("id", onboardingId);
  await sb.from("hotel_accounts").delete().eq("user_id", userId);
  await sb.from("profiles").delete().eq("user_id", userId);
  await sb.auth.admin.deleteUser(userId).catch(() => undefined);
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Missing Supabase secrets");

  const sb = createClient(url, key, { auth: { persistSession: false } });
  const email = `e2e-db-${Date.now()}@cursor-test.invalid`;
  const structureType = "bed_and_breakfast";

  console.log("=== E2E DB registration claim (production Supabase) ===");
  console.log({ email, onboardingId: ONBOARDING_ID });

  const { data: onboarding, error: obErr } = await sb
    .from("onboarding_hotels")
    .select("*")
    .eq("id", ONBOARDING_ID)
    .single();
  if (obErr || !onboarding) throw obErr ?? new Error("onboarding missing");
  if (onboarding.status !== "unclaimed") throw new Error(`onboarding status ${onboarding.status}`);

  const { data: created, error: createError } = await sb.auth.admin.createUser({
    email,
    password: "E2eTestPass10",
    email_confirm: true,
    user_metadata: {
      account_kind: "struttura",
      structure_type: structureType,
      role: "hotel",
      onboarding_hotel_id: ONBOARDING_ID,
    },
  });
  if (createError) throw createError;
  const userId = created.user?.id;
  if (!userId) throw new Error("no user id");

  const { data: hookHotel } = await sb
    .from("hotel_accounts")
    .select("property_name, city_id, onboarding_hotel_id")
    .eq("user_id", userId)
    .maybeSingle();

  console.log("1) After Supabase hook:", hookHotel);
  if (!isPlaceholder(hookHotel)) {
    throw new Error("Expected hook placeholder row");
  }

  const hotelData = buildHotelFromOnboarding(userId, email, onboarding, structureType);
  const { error: oldUpsertError } = await sb.from("hotel_accounts").upsert(hotelData, { onConflict: "user_id" });
  console.log(
    "2) Old upsert (no delete) error:",
    oldUpsertError?.message ?? "none (unexpected success)",
  );

  const { data: midHotel } = await sb
    .from("hotel_accounts")
    .select("property_name, onboarding_hotel_id")
    .eq("user_id", userId)
    .maybeSingle();
  console.log("   Row after failed upsert:", midHotel);

  if (isPlaceholder(midHotel)) {
    const { error: delErr } = await sb.from("hotel_accounts").delete().eq("user_id", userId);
    if (delErr) throw delErr;
    console.log("3) Deleted placeholder before claim (new fix path)");
  }

  const { error: newUpsertError } = await sb.from("hotel_accounts").upsert(hotelData, { onConflict: "user_id" });
  if (newUpsertError) throw newUpsertError;

  await sb
    .from("onboarding_hotels")
    .update({ status: "pending_verification", claimed_by: userId })
    .eq("id", ONBOARDING_ID)
    .in("status", ["unclaimed", "pending_verification"]);

  const { data: finalHotel } = await sb
    .from("hotel_accounts")
    .select("property_name, city_id, onboarding_hotel_id, account_status")
    .eq("user_id", userId)
    .maybeSingle();
  const { data: finalOb } = await sb
    .from("onboarding_hotels")
    .select("status, claimed_by")
    .eq("id", ONBOARDING_ID)
    .single();

  console.log("4) After new fix path:", finalHotel, finalOb);

  const pass =
    oldUpsertError != null &&
    finalHotel?.property_name === ONBOARDING_NAME &&
    finalHotel?.onboarding_hotel_id === ONBOARDING_ID &&
    (finalHotel?.account_status === "pending_verification" || finalHotel?.account_status === "active") &&
    finalOb?.status === "pending_verification" &&
    finalOb?.claimed_by === userId;

  console.log(pass ? "✓ E2E DB PASS" : "✗ E2E DB FAIL");

  await cleanup(sb, userId, ONBOARDING_ID);
  if (!pass) process.exit(1);
}

main().catch(async (e) => {
  console.error(e);
  process.exit(1);
});
