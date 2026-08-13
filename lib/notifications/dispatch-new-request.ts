import type { SupabaseClient } from "@supabase/supabase-js";
import { escapeHtml, sendEmailNotification } from "@/lib/notifications/email";
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

function buildCityRequestHtml(travelRequest: {
  request_code: string | null;
  city_name: string;
  preferred_area: string | null;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
}) {
  const requestCode = code(travelRequest.request_code);
  return `<p>È stata pubblicata una nuova richiesta nella tua zona.</p><p><strong>Codice richiesta:</strong> ${escapeHtml(requestCode)}</p><p><strong>Città:</strong> ${escapeHtml(travelRequest.city_name)}</p><p><strong>Zona:</strong> ${escapeHtml(travelRequest.preferred_area ?? "Non specificata")}</p><p><strong>Date:</strong> ${escapeHtml(travelRequest.check_in)} → ${escapeHtml(travelRequest.check_out)}</p><p><strong>Ospiti:</strong> ${travelRequest.guests_count} · <strong>Camere:</strong> ${travelRequest.rooms_count}</p>`;
}

function buildDirectRequestHtml(
  travelRequest: {
    request_code: string | null;
    city_name: string;
    preferred_area: string | null;
    check_in: string;
    check_out: string;
    guests_count: number;
    rooms_count: number;
  },
  hotelName: string,
) {
  const requestCode = code(travelRequest.request_code);
  return `<p>Un viaggiatore ha inviato una <strong>richiesta diretta</strong> alla tua struttura <strong>${escapeHtml(hotelName)}</strong>.</p><p><strong>Codice richiesta:</strong> ${escapeHtml(requestCode)}</p><p><strong>Città:</strong> ${escapeHtml(travelRequest.city_name)}</p><p><strong>Zona:</strong> ${escapeHtml(travelRequest.preferred_area ?? "Non specificata")}</p><p><strong>Date:</strong> ${escapeHtml(travelRequest.check_in)} → ${escapeHtml(travelRequest.check_out)}</p><p><strong>Ospiti:</strong> ${travelRequest.guests_count} · <strong>Camere:</strong> ${travelRequest.rooms_count}</p>`;
}

export type DispatchNewRequestResult = {
  notified: number;
  onboardingEmailed: number;
  directHotel: string | null;
  directOnboarding: string | null;
  emailResults: unknown[];
};

export async function dispatchNewTravelRequestNotifications(
  supabase: SupabaseClient,
  requestId: string,
  options?: { emailsOnly?: boolean },
): Promise<DispatchNewRequestResult> {
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
  const emailJobs: Array<Promise<unknown>> = [];

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
    emailJobs.push(
      sendEmailNotification({
        to: hotel.private_notification_email ?? hotel.public_email,
        subject: `Nuova richiesta ${requestCode} a ${travelRequest.city_name}`,
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
    emailJobs.push(
      sendEmailNotification({
        to: targetHotel.private_notification_email ?? targetHotel.public_email,
        subject: `Richiesta diretta ${requestCode} · ${targetHotel.property_name}`,
        html: buildDirectRequestHtml(travelRequest, targetHotel.property_name),
      }),
    );
  }

  if (!options?.emailsOnly && notificationRows.length) {
    await supabase.from("notifications").insert(notificationRows);
  }

  const emailResults = await Promise.all(emailJobs);
  const onboardingResult = await notifyOnboardingHotelsByEmail(supabase, travelRequest, {
    directOnboardingId,
  });

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
    emailResults,
  };
}
