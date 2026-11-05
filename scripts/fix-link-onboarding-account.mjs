/**
 * Collega hotel_accounts placeholder a onboarding_hotels per un utente esistente.
 * Usage: node scripts/fix-link-onboarding-account.mjs --email=info@example.it
 */

import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

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

async function main() {
  const emailArg = process.argv.find((a) => a.startsWith("--email="))?.slice("--email=".length)?.toLowerCase();
  const userIdArg = process.argv.find((a) => a.startsWith("--user-id="))?.slice("--user-id=".length);
  const onboardingIdArg = process.argv.find((a) => a.startsWith("--onboarding-id="))?.slice("--onboarding-id=".length);

  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  let userId = userIdArg;
  let email = emailArg;

  if (email && !userId) {
    const { data: users } = await sb.auth.admin.listUsers({ page: 1, perPage: 1000 });
    const user = users.users.find((u) => u.email?.toLowerCase() === email);
    if (!user) throw new Error(`Utente non trovato: ${email}`);
    userId = user.id;
    email = user.email?.toLowerCase() ?? email;
  }

  if (!userId) throw new Error("Serve --email= o --user-id=");

  const { data: authUser } = await sb.auth.admin.getUserById(userId);
  const meta = authUser?.user?.user_metadata ?? {};
  const onboardingId =
    onboardingIdArg ||
    (typeof meta.onboarding_hotel_id === "string" ? meta.onboarding_hotel_id.trim() : null);

  if (!onboardingId) throw new Error("onboarding_hotel_id non trovato");

  const { data: onboarding, error: obErr } = await sb
    .from("onboarding_hotels")
    .select("*")
    .eq("id", onboardingId)
    .maybeSingle();
  if (obErr || !onboarding) throw new Error("Onboarding non trovato");

  if (onboarding.status === "claimed" && onboarding.claimed_by !== userId) {
    throw new Error("Onboarding già rivendicato da altro utente");
  }

  const { data: existingHotel } = await sb
    .from("hotel_accounts")
    .select("id, city_id, property_name, onboarding_hotel_id")
    .eq("user_id", userId)
    .maybeSingle();

  const placeholderNames = new Set(["", "Nuova struttura", "Struttura da completare", "Struttura test"]);
  const isPlaceholder =
    existingHotel &&
    !existingHotel.onboarding_hotel_id &&
    (placeholderNames.has((existingHotel.property_name ?? "").trim()) ||
      existingHotel.city_id === "3164527" ||
      existingHotel.city_id === "IT-PENDING");

  if (isPlaceholder) {
    const { error: delErr } = await sb.from("hotel_accounts").delete().eq("user_id", userId);
    if (delErr) throw delErr;
  }

  const structureType = meta.structure_type ?? "bed_and_breakfast";
  const phone = normPhone(onboarding.phone);

  const hotelData = {
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

  const { error: hErr } = await sb.from("hotel_accounts").upsert(hotelData, { onConflict: "user_id" });
  if (hErr) throw hErr;

  await sb
    .from("onboarding_hotels")
    .update({ status: "pending_verification", claimed_by: userId })
    .eq("id", onboardingId)
    .in("status", ["unclaimed", "pending_verification"]);

  await sb
    .from("profiles")
    .update({ phone_number: phone ?? `+39${userId.replace(/-/g, "").slice(0, 10)}`, phone_verified: false })
    .eq("user_id", userId);

  const { data: hotel } = await sb
    .from("hotel_accounts")
    .select("property_name, city_name, onboarding_hotel_id, public_phone, account_status, main_photo_url")
    .eq("user_id", userId)
    .single();

  console.log("OK", { userId, email, onboardingId, hotel });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
