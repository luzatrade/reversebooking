/**
 * E2E: registrazione + claim onboarding (placeholder hook → complete-profile fix).
 * Usage: node scripts/e2e-test-registration-claim.mjs [--preview-url=https://...]
 */

import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const ONBOARDING_ID = "b4948a9d-7e25-4358-ba66-ed3e747967dc";
const ONBOARDING_NAME = "Alla Riva Camere Verona";

async function main() {
  const previewArg = process.argv.find((a) => a.startsWith("--preview-url="));
  const previewBase = previewArg?.slice("--preview-url=".length)?.replace(/\/$/, "") ?? null;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) throw new Error("Missing Supabase secrets");

  const sb = createClient(url, serviceKey, { auth: { persistSession: false } });
  const stamp = Date.now();
  const testEmail = `e2e-claim-${stamp}@cursor-test.invalid`;
  const password = "E2eTestPass10";

  console.log("=== E2E registration claim test ===");
  console.log({ testEmail, onboardingId: ONBOARDING_ID, previewBase });

  const { data: onboardingBefore } = await sb
    .from("onboarding_hotels")
    .select("id, nome, status, claimed_by")
    .eq("id", ONBOARDING_ID)
    .single();
  if (onboardingBefore?.status !== "unclaimed") {
    throw new Error(`Onboarding not unclaimed: ${onboardingBefore?.status}`);
  }

  const { data: created, error: createError } = await sb.auth.admin.createUser({
    email: testEmail,
    password,
    email_confirm: true,
    user_metadata: {
      account_kind: "struttura",
      structure_type: "bed_and_breakfast",
      role: "hotel",
      onboarding_hotel_id: ONBOARDING_ID,
    },
  });
  if (createError) throw createError;
  const userId = created.user?.id;
  if (!userId) throw new Error("No user id");

  const { data: hotelAfterHook } = await sb
    .from("hotel_accounts")
    .select("property_name, city_id, onboarding_hotel_id, account_status")
    .eq("user_id", userId)
    .maybeSingle();

  console.log("After auth hook (if any):", hotelAfterHook ?? "no hotel_accounts row");

  const { data: linkData, error: linkError } = await sb.auth.admin.generateLink({
    type: "magiclink",
    email: testEmail,
  });
  if (linkError) throw linkError;

  const actionLink = linkData.properties?.action_link;
  const hashedToken = linkData.properties?.hashed_token;
  if (!hashedToken && !actionLink) throw new Error("No magic link token");

  let tokenHash = hashedToken;
  if (!tokenHash && actionLink) {
    const linkUrl = new URL(actionLink);
    tokenHash =
      linkUrl.searchParams.get("token_hash") ??
      linkUrl.hash.match(/token_hash=([^&]+)/)?.[1] ??
      null;
  }
  if (!tokenHash) throw new Error("No token_hash in action link");

  const { data: otpData, error: otpError } = await sb.auth.verifyOtp({
    token_hash: tokenHash,
    type: "magiclink",
  });
  if (otpError) throw otpError;
  const accessToken = otpData.session?.access_token;
  if (!accessToken) throw new Error("No session after OTP");

  const completeProfileBase = previewBase ?? "http://127.0.0.1:3000";
  const completeRes = await fetch(`${completeProfileBase}/api/auth/complete-profile`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ onboardingHotelId: ONBOARDING_ID }),
  });
  const completeBody = await completeRes.json();
  console.log("complete-profile:", completeRes.status, completeBody);

  if (!completeRes.ok || !completeBody.ok) {
    throw new Error(`complete-profile failed: ${JSON.stringify(completeBody)}`);
  }

  const { data: hotelAfterClaim } = await sb
    .from("hotel_accounts")
    .select("property_name, city_id, onboarding_hotel_id, account_status, public_phone")
    .eq("user_id", userId)
    .maybeSingle();

  const { data: onboardingAfter } = await sb
    .from("onboarding_hotels")
    .select("status, claimed_by")
    .eq("id", ONBOARDING_ID)
    .single();

  const success =
    hotelAfterClaim?.property_name === ONBOARDING_NAME &&
    hotelAfterClaim?.onboarding_hotel_id === ONBOARDING_ID &&
    hotelAfterClaim?.account_status === "pending_verification" &&
    onboardingAfter?.status === "pending_verification" &&
    onboardingAfter?.claimed_by === userId;

  console.log("After claim:", { hotelAfterClaim, onboardingAfter });
  console.log(success ? "✓ E2E PASS" : "✗ E2E FAIL");

  // Cleanup: release onboarding + delete test user
  await sb
    .from("onboarding_hotels")
    .update({ status: "unclaimed", claimed_by: null })
    .eq("id", ONBOARDING_ID)
    .eq("claimed_by", userId);
  await sb.from("hotel_accounts").delete().eq("user_id", userId);
  await sb.from("profiles").delete().eq("user_id", userId);
  await sb.auth.admin.deleteUser(userId);

  if (!success) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
