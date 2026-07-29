import type { SupabaseClient } from "@supabase/supabase-js";
import { onboardingCitySearchNames, supabaseCityNameOrFilter } from "@/lib/onboarding/city-match";
import { escapeHtml, sendEmailNotification } from "@/lib/notifications/email";
import { appUrl } from "@/lib/utils/env";

export type TravelRequestNotifyPayload = {
  id: string;
  request_code: string | null;
  city_id: string | null;
  city_name: string;
  country_code?: string | null;
  preferred_area: string | null;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
};

export type OnboardingNotifyRow = {
  id: string;
  nome: string;
  email: string;
  city_name: string;
};

function requestCode(value: string | null | undefined) {
  return value || "RB------";
}

function registerUrl(onboardingId: string) {
  return `${appUrl()}/registrazione?mode=partner&onboarding=${encodeURIComponent(onboardingId)}`;
}

function subscriptionNoteHtml() {
  return `<p style="margin-top:16px;padding:12px 14px;background:#fff7ed;border-radius:12px;color:#9a3412;font-size:14px;line-height:1.5"><strong>Per rispondere al viaggiatore</strong> serve un abbonamento HotelsDrop attivo. L’email è solo informativa: senza abbonamento non puoi inviare offerte né interagire sulla piattaforma.</p>`;
}

function ctaHtml(onboardingId: string) {
  const href = registerUrl(onboardingId);
  return `<p style="margin-top:20px"><a href="${href}" style="display:inline-block;background:#0f4c81;color:#fff;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:9999px">Attiva abbonamento e rispondi</a></p><p style="margin-top:8px;font-size:12px;color:#71717a">Se non hai ancora un account partner, la registrazione partirà dal profilo della tua struttura.</p>`;
}

function requestSummaryHtml(travelRequest: TravelRequestNotifyPayload) {
  const code = requestCode(travelRequest.request_code);
  return `<p><strong>Codice richiesta:</strong> ${escapeHtml(code)}</p><p><strong>Città:</strong> ${escapeHtml(travelRequest.city_name)}</p><p><strong>Zona:</strong> ${escapeHtml(travelRequest.preferred_area ?? "Non specificata")}</p><p><strong>Date:</strong> ${escapeHtml(travelRequest.check_in)} → ${escapeHtml(travelRequest.check_out)}</p><p><strong>Ospiti:</strong> ${travelRequest.guests_count} · <strong>Camere:</strong> ${travelRequest.rooms_count}</p>`;
}

export function buildOnboardingCityRequestHtml(
  travelRequest: TravelRequestNotifyPayload,
  onboardingId: string,
  hotelName: string,
) {
  return `<p>Ciao ${escapeHtml(hotelName)},</p><p>È stata pubblicata una <strong>nuova richiesta di soggiorno</strong> nella tua zona su HotelsDrop.</p>${requestSummaryHtml(travelRequest)}${subscriptionNoteHtml()}${ctaHtml(onboardingId)}`;
}

export function buildOnboardingDirectRequestHtml(
  travelRequest: TravelRequestNotifyPayload,
  onboardingId: string,
  hotelName: string,
) {
  return `<p>Ciao ${escapeHtml(hotelName)},</p><p>Un viaggiatore ha inviato una <strong>richiesta diretta</strong> alla tua struttura <strong>${escapeHtml(hotelName)}</strong> su HotelsDrop.</p>${requestSummaryHtml(travelRequest)}${subscriptionNoteHtml()}${ctaHtml(onboardingId)}`;
}

async function activeSubscribedOnboardingIds(admin: SupabaseClient): Promise<Set<string>> {
  const { data } = await admin
    .from("hotel_accounts")
    .select("onboarding_hotel_id")
    .eq("account_status", "active")
    .eq("subscription_active", true)
    .not("onboarding_hotel_id", "is", null);

  return new Set(
    (data ?? [])
      .map((row) => row.onboarding_hotel_id as string | null)
      .filter((id): id is string => Boolean(id)),
  );
}

function normalizeEmail(value: string | null | undefined) {
  return value?.trim().toLowerCase() ?? "";
}

export async function fetchOnboardingHotelsForCity(
  admin: SupabaseClient,
  travelRequest: Pick<TravelRequestNotifyPayload, "city_id" | "city_name" | "country_code">,
): Promise<OnboardingNotifyRow[]> {
  const cityNames = onboardingCitySearchNames({
    cityId: travelRequest.city_id,
    cityName: travelRequest.city_name,
    countryCode: travelRequest.country_code,
  });
  if (!cityNames.length) return [];

  const cityFilter = supabaseCityNameOrFilter(cityNames);
  const { data, error } = await admin
    .from("onboarding_hotels")
    .select("id, nome, email, city_name")
    .not("email", "is", null)
    .or(cityFilter)
    .limit(500);

  if (error) throw error;

  const skipIds = await activeSubscribedOnboardingIds(admin);
  const seenEmails = new Set<string>();

  return (data ?? [])
    .filter((row) => {
      const email = normalizeEmail(row.email);
      if (!email || seenEmails.has(email)) return false;
      if (skipIds.has(row.id)) return false;
      seenEmails.add(email);
      return true;
    })
    .map((row) => ({
      id: row.id,
      nome: row.nome,
      email: row.email!.trim(),
      city_name: row.city_name,
    }));
}

export async function fetchOnboardingHotelById(
  admin: SupabaseClient,
  onboardingId: string,
): Promise<OnboardingNotifyRow | null> {
  const { data, error } = await admin
    .from("onboarding_hotels")
    .select("id, nome, email, city_name")
    .eq("id", onboardingId)
    .maybeSingle();

  if (error) throw error;
  if (!data?.email?.trim()) return null;

  const skipIds = await activeSubscribedOnboardingIds(admin);
  if (skipIds.has(data.id)) return null;

  return {
    id: data.id,
    nome: data.nome,
    email: data.email.trim(),
    city_name: data.city_name,
  };
}

export async function notifyOnboardingHotelsByEmail(
  admin: SupabaseClient,
  travelRequest: TravelRequestNotifyPayload,
  options?: { directOnboardingId?: string | null },
): Promise<{ emailed: number; directOnboardingId: string | null }> {
  const emailJobs: Array<Promise<unknown>> = [];
  const emailedIds = new Set<string>();
  let directOnboarding: OnboardingNotifyRow | null = null;

  if (options?.directOnboardingId) {
    directOnboarding = await fetchOnboardingHotelById(admin, options.directOnboardingId);
    if (directOnboarding) {
      emailedIds.add(directOnboarding.id);
      const code = requestCode(travelRequest.request_code);
      emailJobs.push(
        sendEmailNotification({
          to: directOnboarding.email,
          subject: `Richiesta diretta ${code} · ${directOnboarding.nome} — attiva l’abbonamento per rispondere`,
          html: buildOnboardingDirectRequestHtml(travelRequest, directOnboarding.id, directOnboarding.nome),
        }),
      );
    }
  }

  const cityRows = await fetchOnboardingHotelsForCity(admin, travelRequest);
  for (const row of cityRows) {
    if (emailedIds.has(row.id)) continue;
    emailedIds.add(row.id);
    const code = requestCode(travelRequest.request_code);
    emailJobs.push(
      sendEmailNotification({
        to: row.email,
        subject: `Nuova richiesta ${code} a ${travelRequest.city_name} — attiva l’abbonamento per rispondere`,
        html: buildOnboardingCityRequestHtml(travelRequest, row.id, row.nome),
      }),
    );
  }

  if (emailJobs.length) {
    await Promise.all(emailJobs);
  }

  return { emailed: emailedIds.size, directOnboardingId: directOnboarding?.id ?? null };
}
