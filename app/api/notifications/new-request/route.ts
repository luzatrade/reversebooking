import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { escapeHtml, sendEmailNotification } from "@/lib/notifications/email";

type Body = { requestId?: string };

function getClient() {
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

  if (!body.requestId) return NextResponse.json({ error: "requestId obbligatorio" }, { status: 400 });

  try {
    const supabase = getClient();
    const { data: travelRequest, error: requestError } = await supabase
      .from("travel_requests")
      .select("id, city_id, city_name, preferred_area, check_in, check_out, guests_count, rooms_count, budget")
      .eq("id", body.requestId)
      .single();

    if (requestError || !travelRequest) return NextResponse.json({ error: "Richiesta non trovata" }, { status: 404 });

    const { data: hotels, error: hotelsError } = await supabase
      .from("hotel_accounts")
      .select("id, property_name, private_notification_email, public_email")
      .eq("city_id", travelRequest.city_id)
      .eq("account_status", "active")
      .eq("subscription_active", true);

    if (hotelsError) return NextResponse.json({ error: hotelsError.message }, { status: 500 });

    const hotelRows = hotels ?? [];
    if (hotelRows.length) {
      await supabase.from("notifications").insert(
        hotelRows.map((hotel) => ({
          recipient_type: "hotel",
          recipient_id: hotel.id,
          travel_request_id: travelRequest.id,
          title: "Nuova inserzione nella tua città",
          message: `Nuova richiesta a ${travelRequest.city_name}${travelRequest.preferred_area ? ` · ${travelRequest.preferred_area}` : ""}.`,
          is_read: false,
        })),
      );
    }

    const html = `<p>È stata pubblicata una nuova richiesta nella tua città.</p><p><strong>Città:</strong> ${escapeHtml(travelRequest.city_name)}</p><p><strong>Zona:</strong> ${escapeHtml(travelRequest.preferred_area ?? "Non specificata")}</p><p><strong>Date:</strong> ${escapeHtml(travelRequest.check_in)} → ${escapeHtml(travelRequest.check_out)}</p><p><strong>Ospiti:</strong> ${travelRequest.guests_count} · <strong>Camere:</strong> ${travelRequest.rooms_count}</p>`;

    const results = await Promise.all(
      hotelRows.map((hotel) =>
        sendEmailNotification({
          to: hotel.private_notification_email ?? hotel.public_email,
          subject: `Nuova richiesta a ${travelRequest.city_name}`,
          html,
        }),
      ),
    );

    return NextResponse.json({ ok: true, notified: hotelRows.length, results });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Errore notifica nuova richiesta" }, { status: 500 });
  }
}
