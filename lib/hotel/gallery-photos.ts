/** Foto aggiuntive oltre alla principale (profilo struttura, agenzia, catalogo onboarding). */
export const MAX_GALLERY_PHOTOS = 15;

export const MAX_STRUCTURE_PHOTOS = MAX_GALLERY_PHOTOS + 1;

export function galleryPhotoLimitMessage(locale: "it" | "en" = "it") {
  if (locale === "en") {
    return `You can upload up to ${MAX_GALLERY_PHOTOS} additional photos.`;
  }
  return `Puoi caricare al massimo ${MAX_GALLERY_PHOTOS} foto aggiuntive.`;
}
