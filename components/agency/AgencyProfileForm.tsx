"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ImagePlus, X } from "lucide-react";
import { CountryCitySelect } from "@/components/location/CountryCitySelect";
import { ensureAgencyProfile } from "@/lib/agency/ensureAgencyProfile";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { isHotelOperational } from "@/lib/hotel/access";
import { cityFromStored, findCityById } from "@/lib/constants/world-city-helpers";
import { type WorldCity } from "@/lib/constants/world-cities";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type AgencyForm = {
  id: string;
  property_name: string;
  cun_code: string;
  description: string;
  full_address: string;
  country_code: string;
  country_name: string;
  city_name: string;
  city_id: string;
  specific_area: string;
  main_photo_url: string;
  gallery_photo_urls: string[];
  google_maps_url: string;
  public_email: string;
  public_phone: string;
};

const defaultCity = findCityById(null);
const MAX_GALLERY_PHOTOS = 4;
const emptyForm: AgencyForm = {
  id: "",
  property_name: "",
  cun_code: "",
  description: "",
  full_address: "",
  country_code: defaultCity.country_code,
  country_name: defaultCity.country_name,
  city_name: defaultCity.city_name,
  city_id: defaultCity.city_id,
  specific_area: "",
  main_photo_url: "",
  gallery_photo_urls: [],
  google_maps_url: "",
  public_email: "",
  public_phone: "",
};

function fileExtension(file: File) {
  if (file.type === "image/png") return "png";
  if (file.type === "image/webp") return "webp";
  return "jpg";
}

const COPY = {
  it: {
    back: "Torna alla dashboard",
    eyebrow: "Profilo agenzia",
    title: "Il profilo della tua agenzia",
    intro:
      "Completa i dati: nazione e città determinano le richieste dei viaggiatori che potrai vedere e a cui inviare offerte.",
    agencyName: "Nome agenzia",
    cunOptional: "CUN (codice identificativo)",
    optional: "facoltativo",
    cunPlaceholder: "Es. CUN-XXXXXXX",
    description: "Descrizione",
    countryLabel: "Nazione",
    cityLabel: "Città",
    cityHelp: "La città non è modificabile dopo il primo salvataggio.",
    photosTitle: "Logo / foto agenzia",
    photosHint: "La foto principale appare nello slider delle agenzie e nel profilo pubblico.",
    mainPhoto: "Foto principale",
    noPhoto: "Nessuna foto",
    uploadMain: "Carica foto principale",
    additionalPhotos: "Foto aggiuntive",
    addPhoto: "Aggiungi foto",
    noAdditionalPhotos: "Nessuna foto aggiuntiva.",
    fullAddress: "Indirizzo / sede",
    area: "Zona di operatività",
    areaPlaceholder: "Es. Centro città, intera provincia…",
    mapsUrl: "Link Google Maps (facoltativo)",
    mapsPlaceholder: "https://maps.google.com/…",
    publicEmail: "Email pubblica",
    publicPhone: "Telefono pubblico",
    uploading: "Caricamento…",
    saving: "Salvataggio…",
    savingPhotos: "Attendere le foto…",
    save: "Salva profilo",
    loginRequired: "Accedi per modificare il profilo agenzia.",
    notFound: "Profilo agenzia non trovato.",
    setupFailed: "Non siamo riusciti a creare il profilo agenzia.",
    retrySetup: "Riprova creazione profilo",
    emailConfirmRequired: "Conferma l'email prima di completare il profilo agenzia.",
    loading: "Caricamento profilo agenzia…",
    errorLoad: "Errore nel caricamento.",
    errorSave: "Errore nel salvataggio.",
    errorUpload: "Errore durante il caricamento della foto.",
    imagesOnly: "Sono ammesse solo immagini.",
    maxFileSize: "La foto non può superare 5MB.",
    maxGallery: "Hai raggiunto il numero massimo di foto.",
    mainUploaded: "Foto principale caricata.",
    galleryUploaded: "Foto aggiunta.",
  },
  en: {
    back: "Back to dashboard",
    eyebrow: "Agency profile",
    title: "Your agency profile",
    intro:
      "Complete your details: country and city determine which traveler requests you can see and send offers to.",
    agencyName: "Agency name",
    cunOptional: "CUN (identifier code)",
    optional: "optional",
    cunPlaceholder: "e.g. CUN-XXXXXXX",
    description: "Description",
    countryLabel: "Country",
    cityLabel: "City",
    cityHelp: "City cannot be changed after the first save.",
    photosTitle: "Agency logo / photo",
    photosHint: "The main photo appears in the agencies slider and on the public profile.",
    mainPhoto: "Main photo",
    noPhoto: "No photo",
    uploadMain: "Upload main photo",
    additionalPhotos: "Additional photos",
    addPhoto: "Add photo",
    noAdditionalPhotos: "No additional photos.",
    fullAddress: "Address / office",
    area: "Operating area",
    areaPlaceholder: "e.g. City center, whole province…",
    mapsUrl: "Google Maps link (optional)",
    mapsPlaceholder: "https://maps.google.com/…",
    publicEmail: "Public email",
    publicPhone: "Public phone",
    uploading: "Uploading…",
    saving: "Saving…",
    savingPhotos: "Waiting for photos…",
    save: "Save profile",
    loginRequired: "Sign in to edit the agency profile.",
    notFound: "Agency profile not found.",
    setupFailed: "We could not create your agency profile.",
    retrySetup: "Retry profile setup",
    emailConfirmRequired: "Confirm your email before completing the agency profile.",
    loading: "Loading agency profile…",
    errorLoad: "Error while loading.",
    errorSave: "Error while saving.",
    errorUpload: "Error while uploading the photo.",
    imagesOnly: "Only images are allowed.",
    maxFileSize: "The photo cannot exceed 5MB.",
    maxGallery: "You reached the maximum number of photos.",
    mainUploaded: "Main photo uploaded.",
    galleryUploaded: "Photo added.",
  },
};

export function AgencyProfileForm() {
  const { locale } = useLanguage();
  const c = locale === "en" ? COPY.en : COPY.it;
  const router = useRouter();
  const [form, setForm] = useState<AgencyForm>(emptyForm);
  const [selectedCity, setSelectedCity] = useState<WorldCity>(defaultCity);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [operational, setOperational] = useState(true);

  useEffect(() => {
    void loadProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadProfile() {
    setLoading(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) {
        setError(c.loginRequired);
        return;
      }
      setUserId(authData.user.id);

      const ensured = await ensureAgencyProfile(supabase, authData.user.id);
      if (ensured.error) {
        setError(
          ensured.error.includes("Conferma l'email") || ensured.error.toLowerCase().includes("confirm")
            ? c.emailConfirmRequired
            : ensured.error,
        );
        return;
      }
      const data = ensured.data;
      if (!data?.id) {
        setError(c.notFound);
        return;
      }

      setOperational(isHotelOperational(data));
      const city = cityFromStored({
        country_code: data.country_code,
        country_name: data.country_name,
        city_name: data.city_name,
        city_id: data.city_id,
      });
      setSelectedCity(city);
      setForm({
        id: data.id,
        property_name: data.property_name ?? "",
        cun_code: data.cun_code ?? "",
        description: data.description ?? "",
        full_address: data.full_address ?? "",
        country_code: data.country_code ?? city.country_code,
        country_name: data.country_name ?? city.country_name,
        city_name: data.city_name ?? city.city_name,
        city_id: data.city_id ?? city.city_id,
        specific_area: data.specific_area ?? "",
        main_photo_url: data.main_photo_url ?? "",
        gallery_photo_urls: data.gallery_photo_urls ?? [],
        google_maps_url: data.google_maps_url ?? "",
        public_email: data.public_email ?? "",
        public_phone: data.public_phone ?? "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : c.errorLoad);
    } finally {
      setLoading(false);
    }
  }

  function update<K extends keyof AgencyForm>(key: K, value: AgencyForm[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }
  function updateCity(city: WorldCity) {
    setSelectedCity(city);
    setForm((current) => ({
      ...current,
      country_code: city.country_code,
      country_name: city.country_name,
      city_name: city.city_name,
      city_id: city.city_id,
    }));
  }
  async function uploadPhoto(file: File, kind: "main" | "gallery") {
    if (!userId) throw new Error(c.errorUpload);
    if (!file.type.startsWith("image/")) throw new Error(c.imagesOnly);
    if (file.size > 5 * 1024 * 1024) throw new Error(c.maxFileSize);
    const supabase = createBrowserSupabaseClient();
    const path = `${userId}/${kind}-${Date.now()}.${fileExtension(file)}`;
    const { error: uploadError } = await supabase.storage
      .from("hotel-photos")
      .upload(path, file, { cacheControl: "3600", upsert: true });
    if (uploadError) throw uploadError;
    const { data } = supabase.storage.from("hotel-photos").getPublicUrl(path);
    return data.publicUrl;
  }
  async function onMainPhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    setSuccess(null);
    try {
      const url = await uploadPhoto(file, "main");
      update("main_photo_url", url);
      setSuccess(c.mainUploaded);
    } catch (err) {
      setError(err instanceof Error ? err.message : c.errorUpload);
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }
  async function onGalleryPhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    setSuccess(null);
    try {
      if (form.gallery_photo_urls.length >= MAX_GALLERY_PHOTOS) {
        setError(c.maxGallery);
        return;
      }
      const url = await uploadPhoto(file, "gallery");
      update("gallery_photo_urls", [...form.gallery_photo_urls, url].slice(0, MAX_GALLERY_PHOTOS));
      setSuccess(c.galleryUploaded);
    } catch (err) {
      setError(err instanceof Error ? err.message : c.errorUpload);
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }
  function removeGalleryPhoto(index: number) {
    update(
      "gallery_photo_urls",
      form.gallery_photo_urls.filter((_, photoIndex) => photoIndex !== index),
    );
  }
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.id) {
      setError(c.notFound);
      return;
    }
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error: updateError } = await supabase
        .from("hotel_accounts")
        .update({
          property_name: form.property_name,
          cun_code: form.cun_code.trim() || null,
          description: form.description || null,
          full_address: form.full_address,
          country_code: form.country_code,
          country_name: form.country_name,
          city_name: form.city_name,
          city_id: form.city_id,
          specific_area: form.specific_area || null,
          main_photo_url: form.main_photo_url || null,
          gallery_photo_urls: form.gallery_photo_urls.slice(0, MAX_GALLERY_PHOTOS),
          google_maps_url: form.google_maps_url || null,
          public_email: form.public_email || null,
          public_phone: form.public_phone || null,
        })
        .eq("id", form.id);
      if (updateError) {
        setError(updateError.message);
        return;
      }
      router.push(operational ? "/agenzia/dashboard" : "/agenzia/profilo");
    } catch (err) {
      setError(err instanceof Error ? err.message : c.errorSave);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="rounded-3xl border p-6 text-sm text-zinc-500">{c.loading}</div>;

  if (!form.id) {
    return (
      <div className="space-y-6">
        <Link
          href="/agenzia/dashboard"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> {c.back}
        </Link>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error ?? c.setupFailed}
        </div>
        <button
          type="button"
          onClick={() => void loadProfile()}
          disabled={loading}
          className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950"
        >
          {loading ? c.loading : c.retrySetup}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        href="/agenzia/dashboard"
        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> {c.back}
      </Link>
      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
      {success ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div>
      ) : null}
      <form
        onSubmit={onSubmit}
        className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{c.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{c.title}</h1>
          <p className="mt-2 text-sm text-zinc-500">{c.intro}</p>
        </div>
        <CountryCitySelect
          value={selectedCity}
          onChange={updateCity}
          countryLabel={c.countryLabel}
          cityLabel={c.cityLabel}
          helpText={c.cityHelp}
        />
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium">
            {c.agencyName}
            <input
              value={form.property_name}
              onChange={(e) => update("property_name", e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
            />
          </label>
          <label className="block text-sm font-medium">
            {c.cunOptional} <span className="text-zinc-400">({c.optional})</span>
            <input
              value={form.cun_code}
              onChange={(e) => update("cun_code", e.target.value)}
              placeholder={c.cunPlaceholder}
              className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
            />
          </label>
          <label className="block text-sm font-medium md:col-span-2">
            {c.description}
            <textarea
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              rows={5}
              className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
            />
          </label>

          <section className="space-y-4 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 md:col-span-2">
            <div>
              <h2 className="font-semibold">{c.photosTitle}</h2>
              <p className="mt-1 text-sm text-zinc-500">{c.photosHint}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-[240px_1fr]">
              <div className="rounded-2xl border border-zinc-200 p-3 dark:border-zinc-800">
                <p className="text-sm font-medium">{c.mainPhoto}</p>
                <div className="mt-3 aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-950">
                  {form.main_photo_url ? (
                    <Image
                      src={form.main_photo_url}
                      alt={c.mainPhoto}
                      width={600}
                      height={360}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-zinc-500">{c.noPhoto}</div>
                  )}
                </div>
                <label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
                  <ImagePlus className="h-4 w-4" /> {uploading ? c.uploading : c.uploadMain}
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={onMainPhotoChange}
                    disabled={uploading}
                    className="sr-only"
                  />
                </label>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-3 dark:border-zinc-800">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium">
                    {c.additionalPhotos} ({form.gallery_photo_urls.length}/{MAX_GALLERY_PHOTOS})
                  </p>
                  <label
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
                      form.gallery_photo_urls.length >= MAX_GALLERY_PHOTOS ? "pointer-events-none opacity-50" : ""
                    }`}
                  >
                    <ImagePlus className="h-4 w-4" /> {c.addPhoto}
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={onGalleryPhotoChange}
                      disabled={uploading || form.gallery_photo_urls.length >= MAX_GALLERY_PHOTOS}
                      className="sr-only"
                    />
                  </label>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {form.gallery_photo_urls.map((url, index) => (
                    <div
                      key={url}
                      className="relative aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-950"
                    >
                      <Image
                        src={url}
                        alt={`Foto agenzia ${index + 1}`}
                        width={300}
                        height={180}
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeGalleryPhoto(index)}
                        className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-zinc-900 shadow-sm"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  {!form.gallery_photo_urls.length ? <p className="text-sm text-zinc-500">{c.noAdditionalPhotos}</p> : null}
                </div>
              </div>
            </div>
          </section>

          <label className="block text-sm font-medium md:col-span-2">
            {c.fullAddress}
            <input
              value={form.full_address}
              onChange={(e) => update("full_address", e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
            />
          </label>
          <label className="block text-sm font-medium">
            {c.area}
            <input
              value={form.specific_area}
              onChange={(e) => update("specific_area", e.target.value)}
              placeholder={c.areaPlaceholder}
              className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
            />
          </label>
          <label className="block text-sm font-medium">
            {c.mapsUrl}
            <input
              value={form.google_maps_url}
              onChange={(e) => update("google_maps_url", e.target.value)}
              placeholder={c.mapsPlaceholder}
              className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
            />
          </label>
          <label className="block text-sm font-medium">
            {c.publicEmail}
            <input
              value={form.public_email}
              onChange={(e) => update("public_email", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
            />
          </label>
          <label className="block text-sm font-medium">
            {c.publicPhone}
            <input
              value={form.public_phone}
              onChange={(e) => update("public_phone", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
            />
          </label>
        </div>
        <button
          disabled={saving || uploading}
          type="submit"
          className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950"
        >
          {saving ? c.saving : uploading ? c.savingPhotos : c.save}
        </button>
      </form>
    </div>
  );
}
