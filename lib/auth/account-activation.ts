import type { User } from "@supabase/supabase-js";
import type { AccountStatus } from "@/types/app";

export function isEmailConfirmed(user: Pick<User, "email_confirmed_at"> | null | undefined): boolean {
  return Boolean(user?.email_confirmed_at);
}

/** Stato profilo in base alla conferma email (prima di altre verifiche telefono/onboarding). */
export function profileStatusForEmailConfirmation(emailConfirmed: boolean): AccountStatus {
  return emailConfirmed ? "active" : "pending_verification";
}

export function hotelStatusForEmailConfirmation(emailConfirmed: boolean): AccountStatus {
  return emailConfirmed ? "active" : "pending_verification";
}
