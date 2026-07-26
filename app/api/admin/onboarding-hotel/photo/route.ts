import { NextResponse } from "next/server";
import { logAdminAction } from "@/lib/admin/audit";
import { requireAdminApi } from "@/lib/admin/verify";
import { notifyOnboardingHotelIndexNow } from "@/lib/seo/indexnow-sync";

const MAX_BYTES = 5 * 1024 * 1024;
const MAX_GALLERY_PHOTOS = 4;

function fileExtension(file: File) {
  if (file.type === "image/png") return "png";
  if (file.type === "image/webp") return "webp";
  return "jpg";
}

export async function POST(request: Request) {
  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Form non valido" }, { status: 400 });
  }

  const id = formData.get("id")?.toString().trim();
  const kind = formData.get("kind")?.toString().trim() === "gallery" ? "gallery" : "main";
  const file = formData.get("file");

  if (!id) {
    return NextResponse.json({ error: "ID struttura mancante" }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File immagine mancante" }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Carica solo immagini (JPG, PNG o WebP)" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Immagine troppo grande (max 5 MB)" }, { status: 400 });
  }

  const admin = gate.admin;
  const { data: existing, error: existingError } = await admin
    .from("onboarding_hotels")
    .select("id, nome, main_photo_url, gallery_photo_urls")
    .eq("id", id)
    .maybeSingle();

  if (existingError) {
    return NextResponse.json({ error: existingError.message }, { status: 500 });
  }
  if (!existing) {
    return NextResponse.json({ error: "Struttura onboarding non trovata" }, { status: 404 });
  }

  const currentGallery = Array.isArray(existing.gallery_photo_urls) ? existing.gallery_photo_urls : [];
  if (kind === "gallery" && currentGallery.length >= MAX_GALLERY_PHOTOS) {
    return NextResponse.json(
      { error: `Puoi caricare al massimo ${MAX_GALLERY_PHOTOS} foto aggiuntive.` },
      { status: 400 },
    );
  }

  const path = `onboarding/${id}/${kind}-${Date.now()}.${fileExtension(file)}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  const { error: uploadError } = await admin.storage.from("hotel-photos").upload(path, buffer, {
    contentType: file.type,
    cacheControl: "3600",
    upsert: true,
  });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { data: publicUrlData } = admin.storage.from("hotel-photos").getPublicUrl(path);
  const photoUrl = publicUrlData.publicUrl;

  if (kind === "gallery") {
    const galleryPhotoUrls = [...currentGallery, photoUrl].slice(0, MAX_GALLERY_PHOTOS);
    const { error: updateError } = await admin
      .from("onboarding_hotels")
      .update({ gallery_photo_urls: galleryPhotoUrls })
      .eq("id", id);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    await admin.from("hotel_accounts").update({ gallery_photo_urls: galleryPhotoUrls }).eq("onboarding_hotel_id", id);

    await logAdminAction(admin, request, {
      actor: gate.profile,
      action: "update_onboarding_hotel_gallery_photo",
      targetType: "onboarding",
      targetId: id,
      details: {
        beforeCount: currentGallery.length,
        afterCount: galleryPhotoUrls.length,
        storagePath: path,
      },
    });

    void notifyOnboardingHotelIndexNow(admin, id);

    return NextResponse.json({ ok: true, gallery_photo_urls: galleryPhotoUrls });
  }

  const { error: updateError } = await admin
    .from("onboarding_hotels")
    .update({ main_photo_url: photoUrl })
    .eq("id", id);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  await admin.from("hotel_accounts").update({ main_photo_url: photoUrl }).eq("onboarding_hotel_id", id);

  await logAdminAction(admin, request, {
    actor: gate.profile,
    action: "update_onboarding_hotel_photo",
    targetType: "onboarding",
    targetId: id,
    details: {
      before: existing.main_photo_url,
      after: photoUrl,
      storagePath: path,
    },
  });

  void notifyOnboardingHotelIndexNow(admin, id);

  return NextResponse.json({ ok: true, main_photo_url: photoUrl });
}
