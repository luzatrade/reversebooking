import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth/requireUser";
import { updatePartnerHotelCity } from "@/lib/hotel/partner-update-city";
import { createServiceRoleClient } from "@/lib/supabase/admin";

type Body = {
  hotelId?: string;
  countryCode?: string;
  countryName?: string;
  cityName?: string;
  cityId?: string;
};

export async function POST(request: Request) {
  const auth = await requireUser(request);
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const admin = createServiceRoleClient();
  if (!admin) {
    return NextResponse.json({ error: "Server non configurato." }, { status: 503 });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const hotelId = body.hotelId?.trim();
  if (!hotelId) {
    return NextResponse.json({ error: "ID struttura mancante" }, { status: 400 });
  }

  try {
    const result = await updatePartnerHotelCity(admin, {
      hotelId,
      userId: auth.user.id,
      countryCode: body.countryCode ?? "",
      countryName: body.countryName ?? "",
      cityName: body.cityName ?? "",
      cityId: body.cityId ?? "",
    });
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Aggiornamento città non riuscito";
    const status = message === "Non autorizzato" ? 403 : message === "Struttura non trovata" ? 404 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
