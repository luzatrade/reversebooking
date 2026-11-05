import type { SupabaseClient } from "@supabase/supabase-js";
import { escapeHtml, sendEmailNotificationQueued } from "@/lib/notifications/email";
import {
  buttonHtml,
  fineprintHtml,
  footerImageHtml,
  highlightHtml,
  noteHtml,
  requestSummaryHtml,
  signatureHtml,
  siteUrl,
  type RequestSummaryPayload,
} from "@/lib/notifications/email-layout";
import { notifyAdminAlertSafe } from "@/lib/notifications/admin-alert";
import {
  fetchOnboardingHotelById,
  notifyOnboardingHotelsByEmail,
} from "@/lib/notifications/onboarding-new-request";
import {
  fetchActivePartnerHotelById,
  fetchActivePartnerHotelsForRequest,
} from "@/lib/notifications/partner-hotels-for-request";

type HotelRow = {
  id: string;
  property_name: string;
  private_notification_email: string | null;
  public_email: string | null;
};

function code(value: string | null | undefined) {
  return value || "RB------";
}

type PartnerRequestPayload = RequestSummaryPayload & { id: string };

/** Pagina della richiesta lato struttura: il partner è già registrato. */
function partnerRequestUrl(requestId: string) {
  return `${siteUrl()}/struttura/annunci/${encodeURIComponent(requestId)}`;
}

function partnerFooterHtml() {
  return `${footerImageHtml()}${fineprintHtml(
    "Ricevi questa email perché la tua struttura ha un account partner su HotelsDrop. Puoi gestire le notifiche dal tuo pannello struttura.",
  )}`;
}

export function buildCityRequestHtml(travelRequest: PartnerRequestPayload) {
  return `<p>Ciao,</p><p>è stata pubblicata una <strong>nuova richiesta di soggiorno</strong> su hotelsdrop.com nella tua zona. Ecco i dettagli:</p>${requestSummaryHtml(travelRequest)}${highlightHtml(
    "Non perdere l’occasione di accogliere questi ospiti: rispondi prima delle altre strutture.",
  )}${buttonHtml(partnerRequestUrl(travelRequest.id), "Vai alla richiesta e invia l’offerta")}${noteHtml(
    "Il viaggiatore riceve la tua proposta in tempo reale e può accettarla direttamente dalla piattaforma.",
  )}${signatureHtml()}${partnerFooterHtml()}`;
}

export function buildDirectRequestHtml(travelRequest: PartnerRequestPayload, hotelName: string) {
  return `<p>Ciao ${escapeHtml(hotelName)},</p><p>un viaggiatore ha inviato una <strong>richiesta diretta</strong> alla tua struttura su hotelsdrop.com: non è una segnalazione generica sulla città, ha scelto proprio <strong>${escapeHtml(hotelName)}</strong>. Ecco i dettagli:</p>${requestSummaryHtml(travelRequest)}${highlightHtml(
    "Rispondi il prima possibile: la richiesta è indirizzata a te.",
  )}${buttonHtml(partnerRequestUrl(travelRequest.id), "Rispondi a questa richiesta")}${noteHtml(
    "Il viaggiatore riceve la tua proposta in tempo reale e può accettarla direttamente dalla piattaforma.",
  )}${signatureHtml()}${partnerFooterHtml()}`;
}

export type DispatchAudience = "all" | "partners" | "onboarding";

export type DispatchNewRequestOptions = {
  /** Non reinserisce le notifiche in-app: utile nei rinvii. */
  emailsOnly?: boolean;
  /** Limita i destinatari a partner registrati o strutture del catalogo. */
  audience?: DispatchAudience;
  /** Calcola i destinatari senza inviare nulla e senza scrivere sul database. */
  dryRun?: boolean;
};

export type DispatchNewRequestResult = {
  notified: number;
  onboardingEmailed: number;
  directHotel: string | null;
  directOnboarding: string | null;
  emailResults: unknown[];
  partnerRecipients: string[];
  onboardingRecipients: string[];
  dryRun: boolean;
};

export async function dispatchNewTravelRequestNotifications(
  supabase: SupabaseClient,
  requestId: string,
  options?: DispatchNewRequestOptions,
): Promise<DispatchNewRequestResult> {
  const audience: DispatchAudience = options?.audience ?? "all";
  const dryRun = options?.dryRun === true;
  const includePartners = audience === "all" || audience === "partners";
  const includeOnboarding = audience === "all" || audience === "onboarding";
  const { data: travelRequest, error: requestError } = await supabase
    .from("travel_requests")
    .select(
      "id, request_code, city_id, city_name, country_code, preferred_area, preferred_structure_type, preference_filters, check_in, check_out, guests_count, rooms_count, budget, target_hotel_account_id",
    )
    .eq("id", requestId)
    .single();

  if (requestError || !travelRequest) {
    throw new Error(requestError?.message ?? "Richiesta non trovata");
  }

  const requestCode = code(travelRequest.request_code);
  const hotelRows = await fetchActivePartnerHotelsForRequest(supabase, {
    city_id: travelRequest.city_id,
    city_name: travelRequest.city_name,
    country_code: travelRequest.country_code,
    preference_filters: travelRequest.preference_filters as Record<string, boolean> | null,
    preferred_structure_type: travelRequest.preferred_structure_type as string | null,
  });

  const targetHotelId = travelRequest.target_hotel_account_id as string | null;
  let targetHotel: HotelRow | null = null;
  let directOnboardingId: string | null = null;

  if (targetHotelId) {
    targetHotel = await fetchActivePartnerHotelById(supabase, targetHotelId);
    if (!targetHotel) {
      const directOnboarding = await fetchOnboardingHotelById(supabase, targetHotelId);
      if (directOnboarding) directOnboardingId = directOnboarding.id;
    }
  }

  const notificationRows: Array<Record<string, unknown>> = [];
  const emailResults: unknown[] = [];
  const partnerRecipients: string[] = [];

  if (includePartners) {
    for (const hotel of hotelRows) {
      if (targetHotel && hotel.id === targetHotel.id) continue;
      notificationRows.push({
        recipient_type: "hotel",
        recipient_id: hotel.id,
        travel_request_id: travelRequest.id,
        title: "Nuova richiesta nella tua zona",
        message: `Codice ${requestCode} · Nuova richiesta a ${travelRequest.city_name}${travelRequest.preferred_area ? ` · ${travelRequest.preferred_area}` : ""}.`,
        is_read: false,
      });

      const to = hotel.private_notification_email ?? hotel.public_email;
      if (to?.trim()) partnerRecipients.push(to.trim());
      if (dryRun) continue;

      emailResults.push(
        await sendEmailNotificationQueued({
          to,
          subject: `Nuova richiesta soggiorno ${requestCode} — ${travelRequest.city_name}`,
          html: buildCityRequestHtml(travelRequest),
        }),
      );
    }

    if (targetHotel) {
      notificationRows.push({
        recipient_type: "hotel",
        recipient_id: targetHotel.id,
        travel_request_id: travelRequest.id,
        title: "Richiesta diretta alla tua struttura",
        message: `Codice ${requestCode} · Un viaggiatore ha inviato una richiesta direttamente a ${targetHotel.property_name}.`,
        is_read: false,
      });

      const to = targetHotel.private_notification_email ?? targetHotel.public_email;
      if (to?.trim()) partnerRecipients.push(to.trim());
      if (!dryRun) {
        emailResults.push(
          await sendEmailNotificationQueued({
            to,
            subject: `Richiesta diretta ${requestCode} — ${travelRequest.city_name}`,
            html: buildDirectRequestHtml(travelRequest, targetHotel.property_name),
          }),
        );
      }
    }
  }

  if (!dryRun && !options?.emailsOnly && notificationRows.length) {
    await supabase.from("notifications").insert(notificationRows);
  }

  const onboardingResult = includeOnboarding
    ? await notifyOnboardingHotelsByEmail(supabase, travelRequest, {
        directOnboardingId,
        dryRun,
      })
    : { emailed: 0, directOnboardingId: null, recipients: [] as string[], emailResults: [] as unknown[] };

  const allEmailResults = [...emailResults, ...onboardingResult.emailResults];

  if (dryRun) {
    return {
      notified: notificationRows.length,
      onboardingEmailed: onboardingResult.emailed,
      directHotel: targetHotel?.id ?? null,
      directOnboarding: onboardingResult.directOnboardingId,
      emailResults: allEmailResults,
      partnerRecipients,
      onboardingRecipients: onboardingResult.recipients,
      dryRun: true,
    };
  }

  notifyAdminAlertSafe({
    subject: `[HotelsDrop] Nuovo annuncio · ${travelRequest.city_name}`,
    title: "Nuovo annuncio viaggio pubblicato",
    lines: [
      { label: "Codice", value: requestCode },
      { label: "Città", value: travelRequest.city_name },
      { label: "Zona", value: travelRequest.preferred_area },
      { label: "Check-in", value: travelRequest.check_in },
      { label: "Check-out", value: travelRequest.check_out },
      { label: "Ospiti", value: String(travelRequest.guests_count) },
      { label: "Camere", value: String(travelRequest.rooms_count) },
      { label: "Budget", value: travelRequest.budget != null ? `${travelRequest.budget} €` : null },
      {
        label: "Richiesta diretta",
        value: targetHotel?.property_name ?? (directOnboardingId ? "Onboarding (email)" : "No (broadcast città)"),
      },
      { label: "Strutture partner notificate", value: String(notificationRows.length) },
      { label: "Onboarding email", value: String(onboardingResult.emailed) },
    ],
    consolePath: `/console/annunci?q=${encodeURIComponent(requestCode)}`,
  });

  return {
    notified: notificationRows.length,
    onboardingEmailed: onboardingResult.emailed,
    directHotel: targetHotel?.id ?? null,
    directOnboarding: onboardingResult.directOnboardingId,
    emailResults: allEmailResults,
    partnerRecipients,
    onboardingRecipients: onboardingResult.recipients,
    dryRun: false,
  };
}
