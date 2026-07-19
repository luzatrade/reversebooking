import { NextResponse } from "next/server";
import { logAdminAction } from "@/lib/admin/audit";
import { requireAdminApi } from "@/lib/admin/verify";
import { MAX_GALLERY_PHOTOS } from "@/lib/hotel/gallery-photos";
import { normalizePhoneE164 } from "@/lib/phone/normalize";

const ALLOWED_STATUSES = new Set(["unclaimed", "pending_verification", "claimed"]);

type Body = {
  id?: string;
  nome?: string;
  indirizzo?: string | null;
  city_name?: string;
  email?: string | null;
  phone?: string | null;
  website?: string | null;
  google_maps_url?: string | null;
  main_photo_url?: string | null;
  gallery_photo_urls?: string[];
  status?: string;
  resetClaim?: boolean;
};

function cleanOptionalText(value: string | null | undefined) {
  if (value === null) return null;
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function normalizeGalleryUrls(value: string[] | undefined) {
  if (value === undefined) return undefined;
  return value
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, MAX_GALLERY_PHOTOS);
}

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const id = body.id?.trim();
  if (!id) {
    return NextResponse.json({ error: "ID struttura mancante" }, { status: 400 });
  }

  const admin = gate.admin;
  const { data: existing, error: existingError } = await admin
    .from("onboarding_hotels")
    .select("id, nome, status, claimed_by")
    .eq("id", id)
    .maybeSingle();

  if (existingError) {
    return NextResponse.json({ error: existingError.message }, { status: 500 });
  }
  if (!existing) {
    return NextResponse.json({ error: "Struttura onboarding non trovata" }, { status: 404 });
  }

  const updates: Record<string, unknown> = {};

  if (body.nome !== undefined) {
    const nome = body.nome.trim();
    if (!nome) return NextResponse.json({ error: "Il nome struttura è obbligatorio" }, { status: 400 });
    updates.nome = nome;
  }

  if (body.indirizzo !== undefined) updates.indirizzo = cleanOptionalText(body.indirizzo);
  if (body.city_name !== undefined) {
    const cityName = body.city_name.trim();
    if (!cityName) return NextResponse.json({ error: "La città è obbligatoria" }, { status: 400 });
    updates.city_name = cityName;
  }
  if (body.email !== undefined) updates.email = cleanOptionalText(body.email);
  if (body.website !== undefined) updates.website = cleanOptionalText(body.website);
  if (body.google_maps_url !== undefined) updates.google_maps_url = cleanOptionalText(body.google_maps_url);
  if (body.main_photo_url !== undefined) updates.main_photo_url = cleanOptionalText(body.main_photo_url);
  if (body.gallery_photo_urls !== undefined) {
    const gallery = normalizeGalleryUrls(body.gallery_photo_urls);
    if (!gallery) {
      return NextResponse.json({ error: "Galleria foto non valida" }, { status: 400 });
    }
    updates.gallery_photo_urls = gallery;
  }

  if (body.phone !== undefined) {
    const rawPhone = cleanOptionalText(body.phone);
    if (rawPhone && !normalizePhoneE164(rawPhone)) {
      return NextResponse.json(
        { error: "Telefono non valido. Usa un numero italiano, es. +39 334 1234567" },
        { status: 400 },
      );
    }
    updates.phone = rawPhone;
  }

  if (body.resetClaim) {
    updates.status = "unclaimed";
    updates.claimed_by = null;
  } else if (body.status !== undefined) {
    if (!ALLOWED_STATUSES.has(body.status)) {
      return NextResponse.json({ error: "Stato non valido" }, { status: 400 });
    }
    updates.status = body.status;
    if (body.status === "unclaimed") updates.claimed_by = null;
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "Nessun campo da aggiornare" }, { status: 400 });
  }

  const { error: updateError } = await admin.from("onboarding_hotels").update(updates).eq("id", id);
  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  const hotelSync: Record<string, unknown> = {};
  if (updates.nome !== undefined) hotelSync.property_name = updates.nome;
  if (updates.indirizzo !== undefined) {
    hotelSync.full_address = updates.indirizzo ?? existing.nome;
    hotelSync.specific_area = updates.indirizzo;
  }
  if (updates.email !== undefined) hotelSync.public_email = updates.email;
  if (updates.phone !== undefined) hotelSync.public_phone = updates.phone;
  if (updates.main_photo_url !== undefined) hotelSync.main_photo_url = updates.main_photo_url;
  if (updates.gallery_photo_urls !== undefined) hotelSync.gallery_photo_urls = updates.gallery_photo_urls;

  if (Object.keys(hotelSync).length > 0) {
    const { error: syncError } = await admin.from("hotel_accounts").update(hotelSync).eq("onboarding_hotel_id", id);
    if (syncError) {
      return NextResponse.json({ error: syncError.message }, { status: 500 });
    }
  }

  await logAdminAction(admin, request, {
    actor: gate.profile,
    action: "update_onboarding_hotel",
    targetType: "onboarding",
    targetId: id,
    details: {
      before: { nome: existing.nome, status: existing.status, claimed_by: existing.claimed_by },
      updates,
      syncedHotelAccount: Object.keys(hotelSync),
    },
  });

  return NextResponse.json({ ok: true });
}
