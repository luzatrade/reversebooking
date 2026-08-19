import { NextResponse} from "next/server";
import { requireApiUser } from "@/lib/auth/api";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import { company } from "@/lib/legal/company";
import { escapeHtml, sendEmailNotification} from "@/lib/notifications/email";
import { rateLimit, tooManyRequestsResponse } from "@/lib/security/rate-limit";
import { isUuid } from "@/lib/offers/booking-voucher";
import { resolveOfferParticipant } from "@/lib/offers/participants";

type Body = { offerId?: string; message?: string};
function code(value: string | null | undefined) { return value || "RB------";}

export async function POST(request: Request) {
  const gate = await requireApiUser(request);
  if ("error" in gate) return gate.error;

  const limit = await rateLimit({ key: "chat-email", identifier: gate.user.id, max: 30, windowSeconds: 300 });
  if (!limit.allowed) return tooManyRequestsResponse();

  let body: Body;
  try { body = (await request.json()) as Body;} catch { return NextResponse.json({ error: "JSON non valido"}, { status: 400});}
  if (!isUuid(body.offerId) || !body.message) return NextResponse.json({ error: "offerId e message sono obbligatori"}, { status: 400});

  try {
    const client = createServiceRoleClient();
    if (!client) return NextResponse.json({ error: "Server non configurato"}, { status: 503});

    const participant = await resolveOfferParticipant(client, body.offerId, gate.user.id);
    if (!participant) {
      return NextResponse.json({ error: "Offerta non trovata"}, { status: 404});
    }

    const { data: offer, error} = await client
      .from("offers")
      .select("id, hotel_account_id, travel_request_id, hotel_accounts(property_name, private_notification_email, public_email), travel_requests(request_code, city_name, preferred_area, advertiser_profiles(contact_email))")
      .eq("id", body.offerId)
      .single();
    if (error || !offer) return NextResponse.json({ error: "Offerta non trovata"}, { status: 404});

    const hotel = Array.isArray(offer.hotel_accounts) ? offer.hotel_accounts[0] : offer.hotel_accounts;
    const travelRequest = Array.isArray(offer.travel_requests) ? offer.travel_requests[0] : offer.travel_requests;
    const advertiser = Array.isArray(travelRequest?.advertiser_profiles) ? travelRequest?.advertiser_profiles[0] : travelRequest?.advertiser_profiles;
    const preview = body.message.slice(0, 180);
    const city = travelRequest?.city_name ?? "una richiesta";
    const hotelName = hotel?.property_name ?? "una struttura";
    const requestCode = code(travelRequest?.request_code);

    await client.from("notifications").insert([
      { recipient_type: "hotel", recipient_id: offer.hotel_account_id, travel_request_id: offer.travel_request_id, title: "Nuovo messaggio in chat", message: `Codice ${requestCode} · Nuovo messaggio per ${city}: ${preview}`, is_read: false},
      { recipient_type: "advertiser", recipient_id: offer.travel_request_id, travel_request_id: offer.travel_request_id, title: "Nuovo messaggio in chat", message: `Codice ${requestCode} · Nuovo messaggio da ${hotelName}: ${preview}`, is_read: false},
    ]);

    const html = `<p>Hai ricevuto un nuovo messaggio su ${company.companyName}.</p><p><strong>Codice richiesta:</strong> ${escapeHtml(requestCode)}</p><p><strong>Richiesta:</strong> ${escapeHtml(city)} ${travelRequest?.preferred_area ? `· ${escapeHtml(travelRequest.preferred_area)}` : ""}</p><p><strong>Messaggio:</strong></p><p>${escapeHtml(preview)}</p>`;
    const results = await Promise.all([
      sendEmailNotification({ to: hotel?.private_notification_email ?? hotel?.public_email, subject: `Nuovo messaggio · ${requestCode}`, html}),
      sendEmailNotification({ to: advertiser?.contact_email, subject: `Nuovo messaggio da ${hotelName} · ${requestCode}`, html}),
    ]);
    return NextResponse.json({ ok: true, results});
 } catch (err) { return NextResponse.json({ error: err instanceof Error ? err.message : "Errore durante la notifica chat"}, { status: 500});}
}
