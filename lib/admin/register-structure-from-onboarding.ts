import type { SupabaseClient } from "@supabase/supabase-js";
import {
  buildHotelFromOnboarding,
  completeOnboardingClaim,
  loadOnboardingHotel,
  type OnboardingHotelRow,
} from "@/lib/hotel/onboarding-claim";
import { PRIVACY_VERSION, TERMS_VERSION } from "@/lib/legal/company";

export type RegisterPartnerInput = {
  onboardingId: string;
  email: string;
  password: string;
  structureType?: string;
};

export type RegisterPartnerResult =
  | { ok: true; userId: string; hotelAccountId: string; email: string }
  | { ok: false; error: string; status: number };

function normalizeStructureType(value: string | undefined) {
  if (value === "bed_and_breakfast" || value === "apartment") return value;
  return "hotel";
}

async function findExistingPartner(
  admin: SupabaseClient,
  onboardingId: string,
): Promise<{ userId: string; hotelAccountId: string } | null> {
  const { data: linked } = await admin
    .from("hotel_accounts")
    .select("id, user_id")
    .eq("onboarding_hotel_id", onboardingId)
    .maybeSingle();

  if (linked?.user_id) {
    return { userId: linked.user_id, hotelAccountId: linked.id };
  }

  const { data: onboarding } = await admin
    .from("onboarding_hotels")
    .select("claimed_by, status")
    .eq("id", onboardingId)
    .maybeSingle();

  if (!onboarding?.claimed_by || onboarding.status === "unclaimed") return null;

  const { data: account } = await admin
    .from("hotel_accounts")
    .select("id, user_id")
    .eq("user_id", onboarding.claimed_by)
    .maybeSingle();

  if (!account?.user_id) return null;
  return { userId: account.user_id, hotelAccountId: account.id };
}

export async function registerPartnerFromOnboarding(
  admin: SupabaseClient,
  input: RegisterPartnerInput,
): Promise<RegisterPartnerResult> {
  const onboardingId = input.onboardingId.trim();
  const email = input.email.trim().toLowerCase();
  const password = input.password;
  const structureType = normalizeStructureType(input.structureType);

  if (!onboardingId) return { ok: false, error: "ID onboarding mancante.", status: 400 };
  if (!email) return { ok: false, error: "Email obbligatoria.", status: 400 };
  if (password.length < 8) return { ok: false, error: "Password minimo 8 caratteri.", status: 400 };

  const existingPartner = await findExistingPartner(admin, onboardingId);
  if (existingPartner) {
    return {
      ok: false,
      error: "Esiste già un account partner collegato. Usa «Dashboard struttura».",
      status: 409,
    };
  }

  const onboarding = await loadOnboardingHotel(admin, onboardingId);
  if (!onboarding) return { ok: false, error: "Struttura onboarding non trovata.", status: 404 };
  if (onboarding.status === "claimed") {
    return { ok: false, error: "Catalogo già marcato come rivendicato. Verifica account collegato.", status: 409 };
  }
  if (onboarding.status === "pending_verification" && onboarding.claimed_by) {
    return {
      ok: false,
      error: "Rivendica in corso da un altro account. Usa «Ripristina rivendica» prima di crearne uno nuovo.",
      status: 409,
    };
  }

  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      role: "hotel",
      account_kind: "struttura",
      structure_type: structureType,
      onboarding_hotel_id: onboardingId,
    },
  });

  if (createError) {
    return { ok: false, error: createError.message, status: 400 };
  }

  const userId = created.user?.id;
  if (!userId) return { ok: false, error: "Creazione utente fallita.", status: 500 };

  try {
    await createPartnerRecords(admin, userId, email, onboarding, structureType);
  } catch (error) {
    await admin.auth.admin.deleteUser(userId).catch(() => undefined);
    const message = error instanceof Error ? error.message : "Registrazione partner non riuscita.";
    return { ok: false, error: message, status: 500 };
  }

  const { data: hotelAccount } = await admin
    .from("hotel_accounts")
    .select("id")
    .eq("user_id", userId)
    .maybeSingle();

  if (!hotelAccount?.id) {
    return { ok: false, error: "Account struttura non creato.", status: 500 };
  }

  return { ok: true, userId, hotelAccountId: hotelAccount.id, email };
}

async function createPartnerRecords(
  admin: SupabaseClient,
  userId: string,
  email: string,
  onboarding: OnboardingHotelRow,
  structureType: string,
) {
  const { error: profileError } = await admin.from("profiles").upsert(
    {
      user_id: userId,
      role: "hotel",
      email,
      phone_number: onboarding.phone,
      email_verified: true,
      phone_verified: false,
      account_status: "active",
    },
    { onConflict: "user_id" },
  );
  if (profileError) throw new Error(profileError.message);

  const hotelData = {
    ...buildHotelFromOnboarding(userId, email, onboarding, structureType),
    account_status: "active",
    subscription_status: "active",
    subscription_active: true,
  };

  const { error: hotelError } = await admin.from("hotel_accounts").upsert(hotelData, { onConflict: "user_id" });
  if (hotelError) throw new Error(hotelError.message);

  await completeOnboardingClaim(admin, onboarding.id, userId);

  const { error: consentError } = await admin.from("user_consents").insert({
    user_id: userId,
    terms_accepted: true,
    privacy_accepted: true,
    marketing_accepted: false,
    terms_version: TERMS_VERSION,
    privacy_version: PRIVACY_VERSION,
    ip_address: null,
    user_agent: "admin-console-register-partner",
  });
  if (consentError && consentError.code !== "23505") {
    throw new Error(consentError.message);
  }
}
