/**
 * Step 3 — Assegna claim token e invia inviti a hotel unclaimed.
 *
 * Logica:
 *  1. Prende tutti gli hotel unclaimed senza token e con email
 *  2. Genera un claim token per ciascuno
 *  3. Invia l'email di invito
 *  4. Segna invite_sent_at nel record
 */

import { type SupabaseClient } from "@supabase/supabase-js";
import { generateClaimToken } from "./claimToken";
import { sendClaimInvite } from "./inviteEmail";

const BATCH_SIZE = 50;
const DELAY_BETWEEN_EMAILS_MS = 500;

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export type AssignResult = {
  processed: number;
  invited: number;
  skippedNoEmail: number;
  errors: string[];
};

/**
 * Processa hotel unclaimed: assegna token e manda inviti.
 * Se cityIstat è specificato, processa solo quella città.
 */
export async function assignClaimTokensAndInvite(
  supabase: SupabaseClient,
  options?: { cityIstat?: string; dryRun?: boolean; limit?: number },
): Promise<AssignResult> {
  let query = supabase
    .from("onboarding_hotels")
    .select("id, nome, email, city_name, city_istat, claim_token, invite_sent_at")
    .eq("status", "unclaimed")
    .is("claim_token", null)
    .order("created_at", { ascending: true })
    .limit(options?.limit ?? BATCH_SIZE);

  if (options?.cityIstat) {
    query = query.eq("city_istat", options.cityIstat);
  }

  const { data: hotels, error } = await query;
  if (error) {
    return { processed: 0, invited: 0, skippedNoEmail: 0, errors: [error.message] };
  }
  if (!hotels?.length) {
    console.log("Nessun hotel unclaimed da processare.");
    return { processed: 0, invited: 0, skippedNoEmail: 0, errors: [] };
  }

  const result: AssignResult = {
    processed: hotels.length,
    invited: 0,
    skippedNoEmail: 0,
    errors: [],
  };

  for (const hotel of hotels) {
    // Genera token
    const { token, expiresAt } = generateClaimToken();

    if (options?.dryRun) {
      console.log(`[DRY] ${hotel.nome} — email: ${hotel.email ?? "MANCANTE"}`);
      if (!hotel.email) result.skippedNoEmail++;
      else result.invited++;
      continue;
    }

    // Salva token nel DB
    const { error: updateError } = await supabase
      .from("onboarding_hotels")
      .update({
        claim_token: token,
        claim_token_expires_at: expiresAt.toISOString(),
      })
      .eq("id", hotel.id);

    if (updateError) {
      result.errors.push(`${hotel.nome}: ${updateError.message}`);
      continue;
    }

    // Se non c'è email, salviamo il token ma non mandiamo l'invito
    if (!hotel.email) {
      result.skippedNoEmail++;
      console.log(`   ⏭ ${hotel.nome} — no email, token salvato`);
      continue;
    }

    // Invio email
    const emailResult = await sendClaimInvite({
      hotelName: hotel.nome,
      hotelEmail: hotel.email,
      cityName: hotel.city_name,
      claimToken: token,
    });

    if (emailResult.ok) {
      await supabase
        .from("onboarding_hotels")
        .update({ invite_sent_at: new Date().toISOString() })
        .eq("id", hotel.id);
      result.invited++;
      console.log(`   ✉️ ${hotel.nome} → ${hotel.email}`);
    } else {
      result.errors.push(`${hotel.nome} (email): ${emailResult.reason ?? "unknown"}`);
    }

    await sleep(DELAY_BETWEEN_EMAILS_MS);
  }

  return result;
}
