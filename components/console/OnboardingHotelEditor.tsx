"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { DeleteButton } from "@/components/console/DeleteButton";
import { HotelLocationPicker } from "@/components/hotels/HotelLocationPicker";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";

type OnboardingHotel = {
  id: string;
  place_id: string;
  nome: string;
  indirizzo: string | null;
  city_name: string;
  lat: number | null;
  lng: number | null;
  description: string | null;
  description_en: string | null;
  email: string | null;
  phone: string | null;
  website: string | null;
  google_maps_url: string | null;
  main_photo_url: string | null;
  gallery_photo_urls: string[] | null;
  status: string;
  claimed_by: string | null;
};

type LinkedHotelAccount = {
  id: string;
  user_id: string;
  property_name: string;
  public_phone: string | null;
  public_email: string | null;
  account_status: string;
  subscription_active: boolean;
};

const inputClass =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-[#0f4c81]/20 focus:border-[#0f4c81] focus:ring-2";
const MAX_GALLERY_PHOTOS = 4;

export function OnboardingHotelEditor({
  hotel,
  linkedAccount,
}: {
  hotel: OnboardingHotel;
  linkedAccount: LinkedHotelAccount | null;
}) {
  const router = useRouter();
  const [form, setForm] = useState({
    nome: hotel.nome,
    indirizzo: hotel.indirizzo ?? "",
    city_name: hotel.city_name,
    lat: hotel.lat != null ? String(hotel.lat) : "",
    lng: hotel.lng != null ? String(hotel.lng) : "",
    description: hotel.description ?? "",
    description_en: hotel.description_en ?? "",
    email: hotel.email ?? "",
    phone: hotel.phone ?? "",
    website: hotel.website ?? "",
    google_maps_url: hotel.google_maps_url ?? "",
    status: hotel.status,
  });
  const [saving, setSaving] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [geocoding, setGeocoding] = useState(false);
  const [mainPhotoUrl, setMainPhotoUrl] = useState(hotel.main_photo_url ?? "");
  const [galleryPhotoUrls, setGalleryPhotoUrls] = useState<string[]>(hotel.gallery_photo_urls ?? []);
  const [resettingClaim, setResettingClaim] = useState(false);
  const [calling, setCalling] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function uploadPhoto(event: ChangeEvent<HTMLInputElement>, kind: "main" | "gallery") {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (kind === "gallery" && galleryPhotoUrls.length >= MAX_GALLERY_PHOTOS) {
      setError(`Puoi caricare al massimo ${MAX_GALLERY_PHOTOS} foto aggiuntive.`);
      return;
    }

    setUploadingPhoto(true);
    setError(null);
    setSuccess(null);

    try {
      const payload = new FormData();
      payload.append("id", hotel.id);
      payload.append("kind", kind);
      payload.append("file", file);

      const res = await fetch("/api/admin/onboarding-hotel/photo", {
        method: "POST",
        body: payload,
      });
      const data = (await res.json()) as {
        error?: string;
        main_photo_url?: string;
        gallery_photo_urls?: string[];
      };
      if (!res.ok) throw new Error(data.error ?? "Caricamento foto non riuscito");

      if (kind === "gallery") {
        setGalleryPhotoUrls(data.gallery_photo_urls ?? []);
        setSuccess("Foto aggiuntiva caricata.");
      } else {
        setMainPhotoUrl(data.main_photo_url ?? "");
        setSuccess("Foto principale aggiornata.");
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Caricamento foto non riuscito");
    } finally {
      setUploadingPhoto(false);
    }
  }

  async function removeMainPhoto() {
    setUploadingPhoto(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/admin/onboarding-hotel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: hotel.id, main_photo_url: null }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Rimozione foto non riuscita");

      setMainPhotoUrl("");
      setSuccess("Foto principale rimossa.");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Rimozione foto non riuscita");
    } finally {
      setUploadingPhoto(false);
    }
  }

  async function removeGalleryPhoto(index: number) {
    const nextGallery = galleryPhotoUrls.filter((_, photoIndex) => photoIndex !== index);
    setUploadingPhoto(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/admin/onboarding-hotel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: hotel.id, gallery_photo_urls: nextGallery }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Rimozione foto non riuscita");

      setGalleryPhotoUrls(nextGallery);
      setSuccess("Foto aggiuntiva rimossa.");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Rimozione foto non riuscita");
    } finally {
      setUploadingPhoto(false);
    }
  }

  async function geocodeLocation(mode: "address" | "link") {
    setGeocoding(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch("/api/admin/onboarding-hotel/geocode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          mode === "link"
            ? { googleMapsUrl: form.google_maps_url.trim() }
            : {
                address: form.indirizzo.trim(),
                propertyName: form.nome.trim(),
                cityName: form.city_name.trim(),
              },
        ),
      });
      const data = (await res.json()) as {
        error?: string;
        hint?: string;
        latitude?: number;
        longitude?: number;
      };
      if (!res.ok) throw new Error(data.hint ?? data.error ?? "Geocodifica non riuscita");
      if (data.latitude == null || data.longitude == null) {
        throw new Error("Coordinate non trovate");
      }
      setForm((current) => ({
        ...current,
        lat: String(data.latitude),
        lng: String(data.longitude),
      }));
      setSuccess("Coordinate aggiornate. Salva per confermare.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Geocodifica non riuscita");
    } finally {
      setGeocoding(false);
    }
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/admin/onboarding-hotel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: hotel.id,
          nome: form.nome,
          indirizzo: form.indirizzo || null,
          city_name: form.city_name,
          lat: form.lat.trim() ? Number(form.lat) : null,
          lng: form.lng.trim() ? Number(form.lng) : null,
          description: form.description.trim() || null,
          description_en: form.description_en.trim() || null,
          email: form.email || null,
          phone: form.phone || null,
          website: form.website || null,
          google_maps_url: form.google_maps_url || null,
          status: form.status,
        }),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean; warning?: string | null };
      if (!res.ok) throw new Error(data.error ?? "Salvataggio non riuscito");
      setSuccess(
        data.warning ??
          "Modifiche salvate. Se hai cambiato il telefono, la struttura può riprovare la rivendica con verifica vocale.",
      );
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Salvataggio non riuscito");
    } finally {
      setSaving(false);
    }
  }

  async function triggerVerifyCall() {
    if (!form.phone.trim()) {
      setError("Inserisci un telefono valido prima di inviare la chiamata.");
      return;
    }

    if (form.phone.trim() !== (hotel.phone ?? "").trim()) {
      setError("Salva prima le modifiche al telefono, poi invia la chiamata Twilio.");
      return;
    }

    const confirmed = window.confirm(
      `Inviare ora la chiamata Twilio al numero indicato (${form.phone})? Chi risponde riceverà il codice vocale.`,
    );
    if (!confirmed) return;

    setCalling(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/admin/onboarding-hotel/verify-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: hotel.id }),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean; phone?: string; message?: string };
      if (!res.ok) throw new Error(data.error ?? "Chiamata non avviata");
      setSuccess(
        data.message ??
          `Chiamata Twilio avviata verso ${data.phone ?? form.phone}. Il codice va inserito dal partner nella dashboard struttura.`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Chiamata non avviata");
    } finally {
      setCalling(false);
    }
  }

  async function resetClaim() {
    const confirmed = window.confirm(
      "Ripristinare la rivendica? La struttura tornerà disponibile e il partner dovrà registrarsi/verificare di nuovo.",
    );
    if (!confirmed) return;

    setResettingClaim(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/admin/onboarding-hotel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: hotel.id, resetClaim: true }),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean };
      if (!res.ok) throw new Error(data.error ?? "Reset non riuscito");
      setForm((current) => ({ ...current, status: "unclaimed" }));
      setSuccess("Rivendica ripristinata. Aggiorna il telefono se necessario, poi chiedi al partner di ripartire da «Rivendica profilo».");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Reset non riuscito");
    } finally {
      setResettingClaim(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-950 sm:px-5">
        <p className="font-semibold">Profilo catalogo (onboarding)</p>
        <p className="mt-2 leading-relaxed">
          Qui imposti la <strong>descrizione pubblica</strong>, telefono, email, indirizzo e foto quando la struttura non
          ha ancora un account partner. La descrizione compare nel profilo catalogo, in vetrina e nelle pagine SEO.
        </p>
      </div>

      {linkedAccount ? (
        <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm text-zinc-700 sm:px-5">
          <p className="font-semibold text-zinc-900">Account partner collegato</p>
          <p className="mt-2">
            {linkedAccount.property_name} · stato {linkedAccount.account_status}
            {linkedAccount.subscription_active ? " · abbonamento attivo" : ""}
          </p>
          <p className="mt-1 break-all text-zinc-500">User ID: {linkedAccount.user_id}</p>
          <Link href={`/console/strutture?q=${encodeURIComponent(linkedAccount.property_name)}`} className="mt-3 inline-block font-semibold text-[#0f4c81] hover:underline">
            Apri in Strutture
          </Link>
        </div>
      ) : null}

      {error ? <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
      {success ? <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{success}</p> : null}

      <form onSubmit={save} className="space-y-6">
        <section
          id="descrizione"
          className="scroll-mt-24 rounded-2xl border-2 border-[#0f4c81]/25 bg-[#f8fbff] p-4 sm:p-6"
        >
          <h2 className="text-sm font-semibold text-zinc-900">Descrizioni pubbliche</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Italiano e inglese per profilo catalogo, vetrina homepage e pagine SEO /hotel/… e /en/hotel/…
          </p>
          <div className="mt-4 grid gap-5 lg:grid-cols-2">
            <label className="block text-sm font-medium">
              Descrizione (italiano)
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={8}
                placeholder="Descrivi la struttura in italiano…"
                className={`${inputClass} resize-y`}
              />
              <span className="mt-1 block text-xs font-normal text-zinc-500">
                {form.description.trim()
                  ? `${form.description.trim().length} caratteri`
                  : "Vuota: in italiano comparirà un testo generico automatico."}
              </span>
            </label>
            <label className="block text-sm font-medium">
              Description (English)
              <textarea
                value={form.description_en}
                onChange={(e) => setForm({ ...form, description_en: e.target.value })}
                rows={8}
                placeholder="Describe the property in English…"
                className={`${inputClass} resize-y`}
              />
              <span className="mt-1 block text-xs font-normal text-zinc-500">
                {form.description_en.trim()
                  ? `${form.description_en.trim().length} characters`
                  : "Empty: English pages fall back to Italian or auto-generated copy."}
              </span>
            </label>
          </div>
          <p className="mt-4 rounded-xl bg-white/80 px-3 py-2 text-xs text-zinc-600">
            Puoi compilare entrambe a mano. Per tradurre in batch le strutture con solo italiano, chiedi all&apos;agente:
            «traduci le descrizioni onboarding».
          </p>
        </section>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium md:col-span-2">
              Nome struttura
              <input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} required className={inputClass} />
            </label>
            <label className="block text-sm font-medium md:col-span-2">
              Indirizzo
              <input value={form.indirizzo} onChange={(e) => setForm({ ...form, indirizzo: e.target.value })} className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Città
              <input value={form.city_name} onChange={(e) => setForm({ ...form, city_name: e.target.value })} required className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Stato catalogo
              <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className={inputClass}>
                <option value="unclaimed">unclaimed</option>
                <option value="pending_verification">pending_verification</option>
                <option value="claimed">claimed</option>
              </select>
            </label>
            <label className="block text-sm font-medium">
              Telefono (verifica rivendica)
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+39 334 1234567"
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Email pubblica
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Sito web
              <input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className={inputClass} />
            </label>
            <label className="block text-sm font-medium md:col-span-2">
              Google Maps URL
              <input
                value={form.google_maps_url}
                onChange={(e) => setForm({ ...form, google_maps_url: e.target.value })}
                className={inputClass}
              />
            </label>
          </div>

          <section className="mt-6 space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">Posizione e mappa</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Correggi città, coordinate e segnaposto sulla mappa. Le modifiche si sincronizzano anche sull&apos;account
                partner collegato.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium">
                Latitudine
                <input
                  value={form.lat}
                  onChange={(e) => setForm({ ...form, lat: e.target.value })}
                  inputMode="decimal"
                  placeholder="45.409198"
                  className={inputClass}
                />
              </label>
              <label className="block text-sm font-medium">
                Longitudine
                <input
                  value={form.lng}
                  onChange={(e) => setForm({ ...form, lng: e.target.value })}
                  inputMode="decimal"
                  placeholder="8.056268"
                  className={inputClass}
                />
              </label>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                disabled={geocoding || !form.indirizzo.trim()}
                onClick={() => void geocodeLocation("address")}
                className="rounded-xl border border-[#0f4c81] bg-white px-4 py-2 text-sm font-semibold text-[#0f4c81] transition hover:bg-[#e8f0f8] disabled:opacity-50"
              >
                {geocoding ? "Calcolo..." : "Estrai coordinate da indirizzo"}
              </button>
              <button
                type="button"
                disabled={geocoding || !form.google_maps_url.trim()}
                onClick={() => void geocodeLocation("link")}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:opacity-50"
              >
                {geocoding ? "Calcolo..." : "Estrai da link Google Maps"}
              </button>
            </div>
            <HotelLocationPicker
              latitude={form.lat.trim() ? Number(form.lat) : null}
              longitude={form.lng.trim() ? Number(form.lng) : null}
              cityName={form.city_name}
              cityId={resolveCanonicalCityId({ cityName: form.city_name, countryCode: "IT" }) ?? ""}
              countryCode="IT"
              onChange={(coords) => {
                setForm((current) => ({
                  ...current,
                  lat: String(coords.latitude),
                  lng: String(coords.longitude),
                }));
              }}
            />
          </section>

          <div className="mt-4 rounded-xl bg-zinc-50 px-4 py-3 text-xs text-zinc-600">
            <p>Place ID Google: {hotel.place_id}</p>
            <p className="mt-1 break-all">ID catalogo: {hotel.id}</p>
            {hotel.claimed_by ? <p className="mt-1 break-all">Claimed by: {hotel.claimed_by}</p> : null}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center rounded-xl bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d3f68] disabled:opacity-50"
            >
              {saving ? "Salvataggio..." : "Salva modifiche"}
            </button>
            <button
              type="button"
              disabled={calling || !form.phone.trim()}
              onClick={() => void triggerVerifyCall()}
              className="inline-flex items-center justify-center rounded-xl border border-[#0f4c81] bg-[#e8f0f8] px-5 py-3 text-sm font-semibold text-[#0f4c81] transition hover:bg-[#d8e6f2] disabled:opacity-50"
            >
              {calling ? "Chiamata..." : "Invia chiamata Twilio"}
            </button>
            <button
              type="button"
              disabled={resettingClaim}
              onClick={() => void resetClaim()}
              className="inline-flex items-center justify-center rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-100 disabled:opacity-50"
            >
              {resettingClaim ? "Reset..." : "Ripristina rivendica"}
            </button>
            <Link
              href={`/hotel/onboarding/${hotel.id}`}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
            >
              Vedi profilo pubblico
            </Link>
            <DeleteButton entity="onboarding" id={hotel.id} label="Elimina dal catalogo" />
          </div>
        </div>
      </form>

      <section className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6">
        <h2 className="text-sm font-semibold text-zinc-900">Foto principale</h2>
        <p className="mt-1 text-sm text-zinc-600">Visibile in vetrina e nel profilo pubblico del catalogo.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-[240px_1fr]">
          <div className="aspect-video overflow-hidden rounded-2xl bg-zinc-100">
            {mainPhotoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={mainPhotoUrl} alt={hotel.nome} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-zinc-500">Nessuna foto</div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-[#0f4c81] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d3f68]">
              <ImagePlus className="h-4 w-4" />
              {uploadingPhoto ? "Caricamento..." : "Carica foto"}
              <input type="file" accept="image/*" className="hidden" onChange={(e) => void uploadPhoto(e, "main")} disabled={uploadingPhoto} />
            </label>
            {mainPhotoUrl ? (
              <button
                type="button"
                onClick={() => void removeMainPhoto()}
                disabled={uploadingPhoto}
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 disabled:opacity-50"
              >
                <X className="h-4 w-4" />
                Rimuovi foto
              </button>
            ) : null}
            <p className="text-xs text-zinc-500">JPG, PNG o WebP · max 5 MB</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6">
        <h2 className="text-sm font-semibold text-zinc-900">Foto aggiuntive</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Fino a {MAX_GALLERY_PHOTOS} immagini extra nel profilo pubblico ({galleryPhotoUrls.length}/{MAX_GALLERY_PHOTOS}).
        </p>
        <div className="mt-4 space-y-4">
          <label
            className={`inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl border border-[#0f4c81] bg-[#e8f0f8] px-4 py-2.5 text-sm font-semibold text-[#0f4c81] transition hover:bg-[#d8e6f2] ${
              galleryPhotoUrls.length >= MAX_GALLERY_PHOTOS || uploadingPhoto ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <ImagePlus className="h-4 w-4" />
            {uploadingPhoto ? "Caricamento..." : "Aggiungi foto"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => void uploadPhoto(e, "gallery")}
              disabled={uploadingPhoto || galleryPhotoUrls.length >= MAX_GALLERY_PHOTOS}
            />
          </label>

          {galleryPhotoUrls.length ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {galleryPhotoUrls.map((url, index) => (
                <div key={url} className="relative overflow-hidden rounded-xl bg-zinc-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt={`${hotel.nome} ${index + 1}`} className="aspect-video w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => void removeGalleryPhoto(index)}
                    disabled={uploadingPhoto}
                    className="absolute right-2 top-2 inline-flex rounded-full bg-black/60 p-1.5 text-white transition hover:bg-black/80 disabled:opacity-50"
                    aria-label="Rimuovi foto"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-500">Nessuna foto aggiuntiva.</p>
          )}
        </div>
      </section>
    </div>
  );
}
