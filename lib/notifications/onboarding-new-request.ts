import type { SupabaseClient } from "@supabase/supabase-js";
import { onboardingCitySearchNames, supabaseCityNameOrFilter } from "@/lib/onboarding/city-match";
import { escapeHtml, sendEmailNotificationQueued } from "@/lib/notifications/email";
import {
  COMPANY_EMAIL,
  buttonHtml,
  fineprintHtml,
  footerImageHtml,
  highlightHtml,
  noteHtml,
  requestCodeLabel,
  requestSummaryHtml,
  signatureHtml,
  siteUrl,
} from "@/lib/notifications/email-layout";

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

const requestCode = requestCodeLabel;

function registerUrl(onboardingId: string) {
  return `${siteUrl()}/registrazione?mode=partner&onboarding=${encodeURIComponent(onboardingId)}`;
}

/** Pagina della richiesta lato partner: passa dal login e poi vi atterra. */
function requestUrl(requestId: string) {
  return `${siteUrl()}/struttura/annunci/${encodeURIComponent(requestId)}`;
}

/** Disiscrizione via email: nessuna infrastruttura, gestita dal team. */
export function unsubscribeMailto(onboardingId: string) {
  const subject = encodeURIComponent("Cancellami dalle segnalazioni HotelsDrop");
  const body = encodeURIComponent(
    `Non desidero più ricevere segnalazioni di nuove richieste.\n\nRiferimento struttura: ${onboardingId}`,
  );
  return `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
}

function freeLaunchHtml() {
  return `<p style="margin-top:20px;padding:14px 16px;background:#ecfdf5;border-radius:12px;color:#065f46;font-size:14px;line-height:1.6"><strong>In fase di lancio: gratis per tutti.</strong> HotelsDrop è totalmente gratuito sia per le strutture che per i viaggiatori. Nessun abbonamento, nessuna carta di credito, nessuna commissione: il viaggiatore prenota direttamente da te.</p>`;
}

function ctaHtml(onboardingId: string, requestId: string, label: string) {
  return `${buttonHtml(registerUrl(onboardingId), label)}${noteHtml(
    `Il profilo della tua struttura è già nel nostro catalogo: ti bastano pochi minuti per completarlo e rispondere.<br />Hai già un account partner? <a href="${requestUrl(requestId)}" style="color:#0f4c81;font-weight:600">Vai alla richiesta</a>`,
  )}`;
}

function footerHtml(onboardingId: string) {
  return `${footerImageHtml()}${fineprintHtml(
    `Ricevi questa email perché la tua struttura è presente nel catalogo HotelsDrop. Se non vuoi più ricevere segnalazioni di nuove richieste, <a href="${unsubscribeMailto(onboardingId)}" style="color:#71717a">cancellati qui</a>.`,
  )}`;
}

export function buildOnboardingCityRequestHtml(
  travelRequest: TravelRequestNotifyPayload,
  onboardingId: string,
  hotelName: string,
) {
  return `<p>Ciao ${escapeHtml(hotelName)},</p><p>è stata pubblicata una <strong>nuova richiesta di soggiorno</strong> su hotelsdrop.com nella tua zona. Ecco i dettagli:</p>${requestSummaryHtml(travelRequest)}${highlightHtml("Non perdere l’occasione di accogliere questi ospiti.")}${freeLaunchHtml()}${ctaHtml(onboardingId, travelRequest.id, "Registrati e invia la tua offerta")}${signatureHtml()}${footerHtml(onboardingId)}`;
}

export function buildOnboardingDirectRequestHtml(
  travelRequest: TravelRequestNotifyPayload,
  onboardingId: string,
  hotelName: string,
) {
  return `<p>Ciao ${escapeHtml(hotelName)},</p><p>un viaggiatore ha inviato una <strong>richiesta diretta</strong> alla tua struttura su hotelsdrop.com: non è una segnalazione generica sulla città, ha scelto proprio <strong>${escapeHtml(hotelName)}</strong>. Ecco i dettagli:</p>${requestSummaryHtml(travelRequest)}${highlightHtml("Non perdere l’occasione di accogliere questi ospiti.")}${freeLaunchHtml()}${ctaHtml(onboardingId, travelRequest.id, "Rispondi a questa richiesta")}${signatureHtml()}${footerHtml(onboardingId)}`;
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
  options?: { directOnboardingId?: string | null; dryRun?: boolean },
): Promise<{ emailed: number; directOnboardingId: string | null; recipients: string[]; emailResults: unknown[] }> {
  const dryRun = options?.dryRun === true;
  const emailResults: unknown[] = [];
  const emailedIds = new Set<string>();
  const recipients: string[] = [];
  let directOnboarding: OnboardingNotifyRow | null = null;

  if (options?.directOnboardingId) {
    directOnboarding = await fetchOnboardingHotelById(admin, options.directOnboardingId);
    if (directOnboarding) {
      emailedIds.add(directOnboarding.id);
      recipients.push(directOnboarding.email);
      const code = requestCode(travelRequest.request_code);
      if (!dryRun) {
        emailResults.push(
          await sendEmailNotificationQueued({
            to: directOnboarding.email,
            subject: `Richiesta diretta ${code} — ${travelRequest.city_name}`,
            html: buildOnboardingDirectRequestHtml(travelRequest, directOnboarding.id, directOnboarding.nome),
            headers: { "List-Unsubscribe": `<${unsubscribeMailto(directOnboarding.id)}>` },
          }),
        );
      }
    }
  }

  const cityRows = await fetchOnboardingHotelsForCity(admin, travelRequest);
  for (const row of cityRows) {
    if (emailedIds.has(row.id)) continue;
    emailedIds.add(row.id);
    recipients.push(row.email);
    if (dryRun) continue;

    const code = requestCode(travelRequest.request_code);
    emailResults.push(
      await sendEmailNotificationQueued({
        to: row.email,
        subject: `Nuova richiesta soggiorno ${code} — ${travelRequest.city_name}`,
        html: buildOnboardingCityRequestHtml(travelRequest, row.id, row.nome),
        headers: { "List-Unsubscribe": `<${unsubscribeMailto(row.id)}>` },
      }),
    );
  }

  return {
    emailed: emailedIds.size,
    directOnboardingId: directOnboarding?.id ?? null,
    recipients,
    emailResults,
  };
}
