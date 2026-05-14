import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { escapeHtml, sendEmailNotification } from "@/lib/notifications/email";

type Body = { offerId?: string; message?: string };
function getClient(request: Request) { const url = process.env.NEXT_PUBLIC_SUPABASE_URL; const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; if (!url || !key) throw new Error("Supabase non configurato"); const authorization = request.headers.get("authorization"); return createClient(url, key, authorization ? { global: { headers: { Authorization: authorization } } } : undefined); }
function code(value: string | null | undefined) { return value || "RB------"; }

export async function POST(request: Request) {
  let body: Body;
  try { body = (await request.json()) as Body; } catch { return NextResponse.json({ error: "JSON non valido" }, { status: 400 }); }
  if (!body.offerId || !body.message) return NextResponse.json({ error: "offerId e message sono obbligatori" }, { status: 400 });

  try {
    const client = getClient(request);
    const { data: offer, error } = await client
      .from("offers")
      .select("id, hotel_account_id, travel_request_id, hotel_accounts(property_name, private_notification_email, public_email), travel_requests(request_code, city_name, preferred_area, advertiser_profiles(contact_email))")
      .eq("id", body.offerId)
      .single();
    if (error || !offer) return NextResponse.json({ error: "Offerta non trovata" }, { status: 404 });

    const hotel = Array.isArray(offer.hotel_accounts) ? offer.hotel_accounts[0] : offer.hotel_accounts;
    const travelRequest = Array.isArray(offer.travel_requests) ? offer.travel_requests[0] : offer.travel_requests;
    const advertiser = Array.isArray(travelRequest?.advertiser_profiles) ? travelRequest?.advertiser_profiles[0] : travelRequest?.advertiser_profiles;
    const preview = body.message.slice(0, 180);
    const city = travelRequest?.city_name ?? "una richiesta";
    const hotelName = hotel?.property_name ?? "una struttura";
    const requestCode = code(travelRequest?.request_code);

    await client.from("notifications").insert([
      { recipient_type: "hotel", recipient_id: offer.hotel_account_id, travel_request_id: offer.travel_request_id, title: "Nuovo messaggio in chat", message: `Codice ${requestCode} · Nuovo messaggio per ${city}: ${preview}`, is_read: false },
      { recipient_type: "advertiser", recipient_id: offer.travel_request_id, travel_request_id: offer.travel_request_id, title: "Nuovo messaggio in chat", message: `Codice ${requestCode} · Nuovo messaggio da ${hotelName}: ${preview}`, is_read: false },
    ]);

    const html = `<p>Hai ricevuto un nuovo messaggio su Reverse Booking.</p><p><strong>Codice richiesta:</strong> ${escapeHtml(requestCode)}</p><p><strong>Richiesta:</strong> ${escapeHtml(city)} ${travelRequest?.preferred_area ? `· ${escapeHtml(travelRequest.preferred_area)}` : ""}</p><p><strong>Messaggio:</strong></p><p>${escapeHtml(preview)}</p>`;
    const results = await Promise.all([
      sendEmailNotification({ to: hotel?.private_notification_email ?? hotel?.public_email, subject: `Nuovo messaggio · ${requestCode}`, html }),
      sendEmailNotification({ to: advertiser?.contact_email, subject: `Nuovo messaggio da ${hotelName} · ${requestCode}`, html }),
    ]);
    return NextResponse.json({ ok: true, results });
  } catch (err) { return NextResponse.json({ error: err instanceof Error ? err.message : "Errore durante la notifica chat" }, { status: 500 }); }
}
