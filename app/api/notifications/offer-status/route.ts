import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/api";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import { escapeHtml, sendEmailNotification } from "@/lib/notifications/email";
import { notifyAdminAlertSafe } from "@/lib/notifications/admin-alert";
import { rateLimit, tooManyRequestsResponse } from "@/lib/security/rate-limit";

type Body = { offerId?: string; status?: "accepted" | "rejected" };
function code(value: string | null | undefined) { return value || "RB------"; }

export async function POST(request: Request) {
  const gate = await requireApiUser(request);
  if ("error" in gate) return gate.error;

  const limit = await rateLimit({ key: "notify-offer-status", identifier: gate.user.id, max: 30, windowSeconds: 600 });
  if (!limit.allowed) return tooManyRequestsResponse();

  let body: Body;
  try { body = (await request.json()) as Body; } catch { return NextResponse.json({ error: "JSON non valido" }, { status: 400 }); }
  if (!body.offerId || !body.status) return NextResponse.json({ error: "offerId e status sono obbligatori" }, { status: 400 });

  try {
    const supabase = createServiceRoleClient();
    if (!supabase) return NextResponse.json({ error: "Server non configurato" }, { status: 503 });
    const { data: offer, error } = await supabase
      .from("offers")
      .select("id, hotel_account_id, travel_request_id, total_price, hotel_accounts(property_name, private_notification_email, public_email), travel_requests(request_code, city_name, preferred_area, advertiser_profiles(contact_email))")
      .eq("id", body.offerId)
      .single();
    if (error || !offer) return NextResponse.json({ error: "Offerta non trovata" }, { status: 404 });

    const hotel = Array.isArray(offer.hotel_accounts) ? offer.hotel_accounts[0] : offer.hotel_accounts;
    const travelRequest = Array.isArray(offer.travel_requests) ? offer.travel_requests[0] : offer.travel_requests;
    const advertiser = Array.isArray(travelRequest?.advertiser_profiles) ? travelRequest?.advertiser_profiles[0] : travelRequest?.advertiser_profiles;
    const requestCode = code(travelRequest?.request_code);
    const isAccepted = body.status === "accepted";
    const title = isAccepted ? "Offerta accettata" : "Offerta rifiutata";
    const city = travelRequest?.city_name ?? "una richiesta";
    const hotelName = hotel?.property_name ?? "la struttura";
    const message = isAccepted ? `La tua offerta ${requestCode} per ${city} è stata accettata. Ora puoi aprire la chat.` : `La tua offerta ${requestCode} per ${city} è stata rifiutata.`;

    await supabase.from("notifications").insert({ recipient_type: "hotel", recipient_id: offer.hotel_account_id, travel_request_id: offer.travel_request_id, title, message, is_read: false });

    const htmlHotel = `<p>${escapeHtml(message)}</p><p><strong>Codice richiesta:</strong> ${escapeHtml(requestCode)}</p><p><strong>Richiesta:</strong> ${escapeHtml(city)} ${travelRequest?.preferred_area ? `· ${escapeHtml(travelRequest.preferred_area)}` : ""}</p><p><strong>Importo proposta:</strong> ${escapeHtml(String(offer.total_price))} €</p>`;
    const htmlAdvertiser = `<p>Hai ${isAccepted ? "accettato" : "rifiutato"} l’offerta di ${escapeHtml(hotelName)}.</p><p><strong>Codice richiesta:</strong> ${escapeHtml(requestCode)}</p><p><strong>Richiesta:</strong> ${escapeHtml(city)}</p>`;

    const results = await Promise.all([
      sendEmailNotification({ to: hotel?.private_notification_email ?? hotel?.public_email, subject: `${title} · ${requestCode}`, html: htmlHotel }),
      sendEmailNotification({ to: advertiser?.contact_email, subject: `Hai ${isAccepted ? "accettato" : "rifiutato"} un’offerta · ${requestCode}`, html: htmlAdvertiser }),
    ]);

    notifyAdminAlertSafe({
      subject: `[HotelsDrop] ${title} · ${requestCode}`,
      title,
      lines: [
        { label: "Codice richiesta", value: requestCode },
        { label: "Struttura", value: hotelName },
        { label: "Destinazione", value: city },
        { label: "Zona", value: travelRequest?.preferred_area },
        { label: "Importo", value: `${offer.total_price} €` },
        { label: "Inserzionista", value: advertiser?.contact_email },
      ],
      consolePath: `/console/offerte?q=${encodeURIComponent(requestCode)}`,
    });

    return NextResponse.json({ ok: true, results });
  } catch (err) { return NextResponse.json({ error: err instanceof Error ? err.message : "Errore notifica stato offerta" }, { status: 500 }); }
}
