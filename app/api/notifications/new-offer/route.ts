import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/api";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import { company } from "@/lib/legal/company";
import { escapeHtml, sendEmailNotification } from "@/lib/notifications/email";
import { notifyAdminAlertSafe } from "@/lib/notifications/admin-alert";
import { rateLimit, tooManyRequestsResponse } from "@/lib/security/rate-limit";
import { isUuid } from "@/lib/offers/booking-voucher";
import { resolveOfferParticipant } from "@/lib/offers/participants";

type Body = { offerId?: string };
function code(value: string | null | undefined) { return value || "RB------"; }

export async function POST(request: Request) {
  const gate = await requireApiUser(request);
  if ("error" in gate) return gate.error;

  const limit = await rateLimit({ key: "notify-new-offer", identifier: gate.user.id, max: 30, windowSeconds: 600 });
  if (!limit.allowed) return tooManyRequestsResponse();

  let body: Body;
  try { body = (await request.json()) as Body; } catch { return NextResponse.json({ error: "JSON non valido" }, { status: 400 }); }
  if (!isUuid(body.offerId)) return NextResponse.json({ error: "offerId obbligatorio" }, { status: 400 });

  try {
    const supabase = createServiceRoleClient();
    if (!supabase) return NextResponse.json({ error: "Server non configurato" }, { status: 503 });

    const participant = await resolveOfferParticipant(supabase, body.offerId, gate.user.id);
    if (participant !== "hotel") {
      return NextResponse.json({ error: "Offerta non trovata" }, { status: 404 });
    }

    const { data: offer, error } = await supabase
      .from("offers")
      .select("id, offer_code, total_price, hotel_accounts(property_name), travel_requests(id, request_code, city_name, preferred_area, advertiser_profiles(contact_email))")
      .eq("id", body.offerId)
      .single();

    if (error || !offer) return NextResponse.json({ error: "Offerta non trovata" }, { status: 404 });

    const hotel = Array.isArray(offer.hotel_accounts) ? offer.hotel_accounts[0] : offer.hotel_accounts;
    const travelRequest = Array.isArray(offer.travel_requests) ? offer.travel_requests[0] : offer.travel_requests;
    const advertiser = Array.isArray(travelRequest?.advertiser_profiles) ? travelRequest?.advertiser_profiles[0] : travelRequest?.advertiser_profiles;
    const requestCode = code(travelRequest?.request_code);
    const offerCodeValue = code(offer.offer_code as string | null);
    const city = travelRequest?.city_name ?? "una richiesta";
    const hotelName = hotel?.property_name ?? "Una struttura";

    const html = `<p>Hai ricevuto una nuova offerta su ${company.companyName}.</p><p><strong>Codice offerta:</strong> ${escapeHtml(offerCodeValue)}</p><p><strong>Codice richiesta:</strong> ${escapeHtml(requestCode)}</p><p><strong>Struttura:</strong> ${escapeHtml(hotelName)}</p><p><strong>Richiesta:</strong> ${escapeHtml(city)} ${travelRequest?.preferred_area ? `· ${escapeHtml(travelRequest.preferred_area)}` : ""}</p><p><strong>Importo proposta:</strong> ${escapeHtml(String(offer.total_price))} €</p>`;

    const result = await sendEmailNotification({
      to: advertiser?.contact_email,
      subject: `Nuova offerta ${offerCodeValue} · richiesta ${requestCode}`,
      html,
    });

    notifyAdminAlertSafe({
      subject: `[HotelsDrop] Nuova offerta · ${offerCodeValue}`,
      title: "Nuova offerta inviata",
      lines: [
        { label: "Codice offerta", value: offerCodeValue },
        { label: "Codice richiesta", value: requestCode },
        { label: "Struttura", value: hotelName },
        { label: "Destinazione", value: city },
        { label: "Zona", value: travelRequest?.preferred_area },
        { label: "Importo", value: `${offer.total_price} €` },
        { label: "Inserzionista", value: advertiser?.contact_email },
      ],
      consolePath: `/console/offerte?q=${encodeURIComponent(offerCodeValue)}`,
    });

    return NextResponse.json({ ok: true, result });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Errore notifica nuova offerta" }, { status: 500 });
  }
}
