import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type Body = {
  offerId?: string;
  message?: string;
};

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Supabase non configurato");
  return createClient(url, key);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  if (!body.offerId || !body.message) {
    return NextResponse.json({ error: "offerId e message sono obbligatori" }, { status: 400 });
  }

  try {
    const supabase = getSupabase();
    const authorization = request.headers.get("authorization");

    const client = authorization
      ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
          global: { headers: { Authorization: authorization } },
        })
      : supabase;

    const { data: offer, error: offerError } = await client
      .from("offers")
      .select("id, hotel_account_id, travel_request_id, hotel_accounts(property_name, user_id, private_notification_email, public_email), travel_requests(city_name, advertiser_profiles(user_id, contact_email))")
      .eq("id", body.offerId)
      .single();

    if (offerError || !offer) {
      return NextResponse.json({ error: "Offerta non trovata" }, { status: 404 });
    }

    const hotelAccount = Array.isArray(offer.hotel_accounts) ? offer.hotel_accounts[0] : offer.hotel_accounts;
    const travelRequest = Array.isArray(offer.travel_requests) ? offer.travel_requests[0] : offer.travel_requests;
    const advertiserProfile = Array.isArray(travelRequest?.advertiser_profiles)
      ? travelRequest?.advertiser_profiles[0]
      : travelRequest?.advertiser_profiles;

    await client.from("notifications").insert([
      {
        recipient_type: "hotel",
        recipient_id: offer.hotel_account_id,
        travel_request_id: offer.travel_request_id,
        title: "Nuovo messaggio in chat",
        message: `Nuovo messaggio per ${travelRequest?.city_name ?? "una richiesta"}: ${body.message.slice(0, 120)}`,
        is_read: false,
      },
      {
        recipient_type: "advertiser",
        recipient_id: offer.travel_request_id,
        travel_request_id: offer.travel_request_id,
        title: "Nuovo messaggio in chat",
        message: `Nuovo messaggio da ${hotelAccount?.property_name ?? "una struttura"}: ${body.message.slice(0, 120)}`,
        is_read: false,
      },
    ]);

    return NextResponse.json({
      ok: true,
      emailReady: false,
      note: "Notifica interna creata. Per l’invio email reale serve configurare un provider come Resend, SendGrid o SMTP.",
      recipients: {
        hotel: hotelAccount?.private_notification_email ?? hotelAccount?.public_email ?? null,
        advertiser: advertiserProfile?.contact_email ?? null,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Errore durante la notifica chat" },
      { status: 500 },
    );
  }
}
