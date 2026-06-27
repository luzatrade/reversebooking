import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth/requireUser";
import { extractCoordsFromGoogleMapsLink } from "@/lib/hotel/extractGoogleMapsCoords";
import { createServiceRoleClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const auth = await requireUser(request);
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const admin = createServiceRoleClient();
  if (!admin) {
    return NextResponse.json({ error: "Server non configurato." }, { status: 503 });
  }

  const { data: profile } = await admin
    .from("profiles")
    .select("role")
    .eq("user_id", auth.user.id)
    .maybeSingle();

  if (profile?.role !== "hotel") {
    return NextResponse.json({ error: "Accesso riservato alle strutture ricettive." }, { status: 403 });
  }

  let body: { url?: string };
  try {
    body = (await request.json()) as { url?: string };
  } catch {
    return NextResponse.json({ error: "Body JSON non valido." }, { status: 400 });
  }

  const url = body.url?.trim();
  if (!url) {
    return NextResponse.json({ error: "URL Google Maps mancante." }, { status: 400 });
  }

  const result = await extractCoordsFromGoogleMapsLink(url);
  if (!result.ok) {
    return NextResponse.json(
      {
        error: result.error,
        finalUrl: result.finalUrl,
        hint: "Usa il link copiato da Condividi in Google Maps (maps.app.goo.gl o @lat,lng). Evita i link con solo ?cid=.",
      },
      { status: 422 },
    );
  }

  return NextResponse.json({
    ok: true,
    latitude: result.coords.latitude,
    longitude: result.coords.longitude,
    source: result.source,
    finalUrl: result.finalUrl,
  });
}
