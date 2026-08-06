import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/api";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import { dispatchNewTravelRequestNotifications } from "@/lib/notifications/dispatch-new-request";
import { rateLimit, tooManyRequestsResponse } from "@/lib/security/rate-limit";

type Body = { requestId?: string };

export async function POST(request: Request) {
  const gate = await requireApiUser(request);
  if ("error" in gate) return gate.error;

  const limit = await rateLimit({ key: "notify-new-request", identifier: gate.user.id, max: 20, windowSeconds: 600 });
  if (!limit.allowed) return tooManyRequestsResponse();

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }
  if (!body.requestId) return NextResponse.json({ error: "requestId obbligatorio" }, { status: 400 });

  try {
    const supabase = createServiceRoleClient();
    if (!supabase) return NextResponse.json({ error: "Server non configurato" }, { status: 503 });

    const { data: advertiser } = await supabase
      .from("advertiser_profiles")
      .select("id")
      .eq("user_id", gate.user.id)
      .maybeSingle();

    const { data: travelRequest } = await supabase
      .from("travel_requests")
      .select("advertiser_id")
      .eq("id", body.requestId)
      .maybeSingle();

    if (!travelRequest || !advertiser || travelRequest.advertiser_id !== advertiser.id) {
      return NextResponse.json({ error: "Richiesta non autorizzata" }, { status: 403 });
    }

    const result = await dispatchNewTravelRequestNotifications(supabase, body.requestId);

    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Errore notifica nuova richiesta" }, { status: 500 });
  }
}
