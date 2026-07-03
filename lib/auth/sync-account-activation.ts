import type { SupabaseClient } from "@supabase/supabase-js";
import type { AccountStatus } from "@/types/app";

export function resolveActiveStatusAfterEmailConfirm(input: {
  role: string;
  phoneVerified: boolean;
  onboardingHotelId: string | null;
}): AccountStatus {
  if (input.role === "hotel" && input.onboardingHotelId && !input.phoneVerified) {
    return "pending_verification";
  }
  return "active";
}

/** Promuove profilo (e hotel collegato) ad active dopo conferma email, se applicabile. */
export async function syncAccountActivation(
  admin: SupabaseClient,
  userId: string,
): Promise<{ activated: boolean; profileStatus: AccountStatus }> {
  const { data: authData, error: authError } = await admin.auth.admin.getUserById(userId);
  if (authError || !authData.user?.email_confirmed_at) {
    return { activated: false, profileStatus: "pending_verification" };
  }

  const [{ data: profile }, { data: hotel }] = await Promise.all([
    admin
      .from("profiles")
      .select("role, phone_verified, account_status, email_verified")
      .eq("user_id", userId)
      .maybeSingle(),
    admin
      .from("hotel_accounts")
      .select("onboarding_hotel_id, account_status")
      .eq("user_id", userId)
      .maybeSingle(),
  ]);

  if (!profile) {
    return { activated: false, profileStatus: "pending_verification" };
  }

  const targetStatus = resolveActiveStatusAfterEmailConfirm({
    role: profile.role,
    phoneVerified: Boolean(profile.phone_verified),
    onboardingHotelId: hotel?.onboarding_hotel_id ?? null,
  });

  const profileNeedsUpdate =
    !profile.email_verified || profile.account_status !== targetStatus;
  const hotelNeedsUpdate = Boolean(hotel && hotel.account_status !== targetStatus);

  if (profileNeedsUpdate) {
    await admin
      .from("profiles")
      .update({ email_verified: true, account_status: targetStatus })
      .eq("user_id", userId);
  }

  if (hotelNeedsUpdate) {
    await admin
      .from("hotel_accounts")
      .update({ account_status: targetStatus })
      .eq("user_id", userId);
  }

  return { activated: targetStatus === "active", profileStatus: targetStatus };
}
