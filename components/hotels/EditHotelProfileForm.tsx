"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { HardNavLink } from "@/components/navigation/HardNavLink";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ImagePlus, X } from "lucide-react";
import { CountryCitySelect } from "@/components/location/CountryCitySelect";
import { HotelPhoneVerification } from "@/components/hotels/HotelPhoneVerification";
import { getAuthUserFast } from "@/lib/auth/clientSession";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { isHotelOperational } from "@/lib/hotel/access";
import { findCityById } from "@/lib/constants/world-city-helpers";
import { type WorldCity } from "@/lib/constants/world-cities";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/i18n/format";
import { getStructureTypeLabels } from "@/lib/i18n/labels";
import type { StructureType } from "@/types/app";

type HotelForm = { id: string; property_name: string; structure_type: StructureType; cin_code: string; description: string; full_address: string; country_code: string; country_name: string; city_name: string; city_id: string; specific_area: string; rooms_quantity: number; main_photo_url: string; gallery_photo_urls: string[]; google_maps_url: string; public_email: string; public_phone: string };
const defaultCity = findCityById(null);
const MAX_GALLERY_PHOTOS = 4;
const emptyForm: HotelForm = { id: "", property_name: "", structure_type: "hotel", cin_code: "", description: "", full_address: "", country_code: defaultCity.country_code, country_name: defaultCity.country_name, city_name: defaultCity.city_name, city_id: defaultCity.city_id, specific_area: "", rooms_quantity: 1, main_photo_url: "", gallery_photo_urls: [], google_maps_url: "", public_email: "", public_phone: "" };
function fileExtension(file: File) { if (file.type === "image/png") return "png"; if (file.type === "image/webp") return "webp"; return "jpg"; }

export function EditHotelProfileForm() {
  const { t, locale } = useLanguage();
  const structureTypeLabels = getStructureTypeLabels(locale);
  const hp = t.forms.hotelProfile;
  const router = useRouter();
  const searchParams = useSearchParams();
  const claimFlow = searchParams.get("claim") === "1";
  const [form, setForm] = useState<HotelForm>(emptyForm);
  const [selectedCity, setSelectedCity] = useState<WorldCity>(defaultCity);
  const [userId, setUserId] = useState<string | null>(null);
  const [onboardingHotelId, setOnboardingHotelId] = useState<string | null>(null);
  const [phoneVerified, setPhoneVerified] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [hotelOperational, setHotelOperational] = useState(true);

  useEffect(() => {
    let active = true;
    async function loadProfile() {
      setLoading(true);
      setError(null);
      try {
        const supabase = createBrowserSupabaseClient();
        const { user, error: authError } = await getAuthUserFast(supabase);
        if (!active) return;
        if (authError || !user) {
          setError(hp.loginRequired);
          return;
        }
        setUserId(user.id);
        const [{ data, error: hotelError }, { data: profileData }] = await Promise.all([
          supabase
            .from("hotel_accounts")
            .select(
              "id, property_name, structure_type, cin_code, description, full_address, country_code, country_name, city_name, city_id, specific_area, rooms_quantity, main_photo_url, gallery_photo_urls, google_maps_url, public_email, public_phone, subscription_active, account_status, onboarding_hotel_id",
            )
            .eq("user_id", user.id)
            .maybeSingle(),
          supabase.from("profiles").select("phone_verified").eq("user_id", user.id).maybeSingle(),
        ]);
        if (!active) return;
        if (hotelError || !data) {
          setError(hotelError?.message ?? hp.profileNotFound);
          return;
        }
        setHotelOperational(
          isHotelOperational(data, { phone_verified: profileData?.phone_verified ?? false }),
        );
        setOnboardingHotelId(data.onboarding_hotel_id ?? null);
        setPhoneVerified(Boolean(profileData?.phone_verified));
        const city = findCityById(data.city_id);
        setSelectedCity(city);
        setForm({
          id: data.id,
          property_name: data.property_name ?? "",
          structure_type: data.structure_type ?? "hotel",
          cin_code: data.cin_code ?? "",
          description: data.description ?? "",
          full_address: data.full_address ?? "",
          country_code: city.country_code,
          country_name: city.country_name,
          city_name: city.city_name,
          city_id: city.city_id,
          specific_area: data.specific_area ?? "",
          rooms_quantity: data.rooms_quantity ?? 1,
          main_photo_url: data.main_photo_url ?? "",
          gallery_photo_urls: data.gallery_photo_urls ?? [],
          google_maps_url: data.google_maps_url ?? "",
          public_email: data.public_email ?? "",
          public_phone: data.public_phone ?? "",
        });
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : hp.errorLoad);
      } finally {
        if (active) setLoading(false);
      }
    }
    void loadProfile();
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function update<K extends keyof HotelForm>(key: K, value: HotelForm[K]) { setForm((current) => ({ ...current, [key]: value })); }
  function updateCity(city: WorldCity) { setSelectedCity(city); setForm((current) => ({ ...current, country_code: city.country_code, country_name: city.country_name, city_name: city.city_name, city_id: city.city_id })); }
  async function uploadPhoto(file: File, kind: "main" | "gallery") { if (!userId) throw new Error(hp.userNotFound); if (!file.type.startsWith("image/")) throw new Error(hp.imagesOnly); if (file.size > 5 * 1024 * 1024) throw new Error(hp.maxFileSize); const supabase = createBrowserSupabaseClient(); const path = `${userId}/${kind}-${Date.now()}.${fileExtension(file)}`; const { error: uploadError } = await supabase.storage.from("hotel-photos").upload(path, file, { cacheControl: "3600", upsert: true }); if (uploadError) throw uploadError; const { data } = supabase.storage.from("hotel-photos").getPublicUrl(path); return data.publicUrl; }
  async function onMainPhotoChange(event: ChangeEvent<HTMLInputElement>) { const file = event.target.files?.[0]; if (!file) return; setUploading(true); setError(null); setSuccess(null); try { const url = await uploadPhoto(file, "main"); update("main_photo_url", url); setSuccess(hp.mainPhotoUploaded); } catch (err) { setError(err instanceof Error ? err.message : hp.errorUpload); } finally { setUploading(false); event.target.value = ""; } }
  async function onGalleryPhotoChange(event: ChangeEvent<HTMLInputElement>) { const file = event.target.files?.[0]; if (!file) return; setUploading(true); setError(null); setSuccess(null); try { if (form.gallery_photo_urls.length >= MAX_GALLERY_PHOTOS) { setError(hp.maxGalleryPhotos); return; } const url = await uploadPhoto(file, "gallery"); update("gallery_photo_urls", [...form.gallery_photo_urls, url].slice(0, MAX_GALLERY_PHOTOS)); setSuccess(hp.galleryPhotoUploaded); } catch (err) { setError(err instanceof Error ? err.message : hp.errorUpload); } finally { setUploading(false); event.target.value = ""; } }
  function removeGalleryPhoto(index: number) { update("gallery_photo_urls", form.gallery_photo_urls.filter((_, photoIndex) => photoIndex !== index)); }
  async function onSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSaving(true); setError(null); setSuccess(null); try { const supabase = createBrowserSupabaseClient(); const updatePayload: Record<string, unknown> = { property_name: form.property_name, structure_type: form.structure_type, cin_code: form.cin_code.trim() || null, description: form.description || null, full_address: form.full_address, country_code: form.country_code, country_name: form.country_name, city_name: form.city_name, city_id: form.city_id, specific_area: form.specific_area || null, rooms_quantity: form.rooms_quantity, main_photo_url: form.main_photo_url || null, gallery_photo_urls: form.gallery_photo_urls.slice(0, MAX_GALLERY_PHOTOS), google_maps_url: form.google_maps_url || null, public_email: form.public_email || null }; if (!onboardingHotelId) { updatePayload.public_phone = form.public_phone || null; } const { error: updateError } = await supabase.from("hotel_accounts").update(updatePayload).eq("id", form.id); if (updateError) { setError(updateError.message); return; } router.push(hotelOperational ? "/struttura/dashboard" : "/struttura/profilo"); return; } catch (err) { setError(err instanceof Error ? err.message : hp.errorSave); } finally { setSaving(false); } }
  const phoneLocked = Boolean(onboardingHotelId);
  const needsPhoneVerification = phoneLocked && !phoneVerified;
  if (loading) return <div className="rounded-3xl border p-6 text-sm text-zinc-500">Caricamento profilo struttura...</div>;

  if (error || !form.id) {
    return (
      <div className="space-y-4">
        <HardNavLink href="/struttura/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950">
          <ArrowLeft className="h-4 w-4" /> {hp.backToDashboard}
        </HardNavLink>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error ?? hp.profileNotFound}
        </div>
        <HardNavLink href="/login?redirect=/struttura/profilo" className="inline-block text-sm font-semibold text-[#0f4c81] underline">
          {hp.loginRequired}
        </HardNavLink>
      </div>
    );
  }

  return <div className="space-y-6"><HardNavLink href="/struttura/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"><ArrowLeft className="h-4 w-4" /> {hp.backToDashboard}</HardNavLink>{needsPhoneVerification || claimFlow ? <HotelPhoneVerification phone={form.public_phone} verified={phoneVerified} onVerified={() => { setPhoneVerified(true); setHotelOperational(true); }} /> : null}{success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}<form onSubmit={onSubmit} className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"><div><p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{hp.sectionLabel}</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">{hp.title}</h1><p className="mt-2 text-sm text-zinc-500">{hp.intro}</p></div><CountryCitySelect value={selectedCity} onChange={updateCity} countryLabel={hp.countryLabel} cityLabel={hp.cityLabel} helpText={hp.cityHelp} />
  <div className="grid gap-5 md:grid-cols-2"><label className="block text-sm font-medium">{hp.propertyName}<input value={form.property_name} onChange={(e) => update("property_name", e.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label><label className="block text-sm font-medium">{hp.structureType}<select value={form.structure_type} onChange={(e) => update("structure_type", e.target.value as StructureType)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950">{Object.entries(structureTypeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label className="block text-sm font-medium">{hp.cinOptional} <span className="text-zinc-400">({t.common.optional})</span><input value={form.cin_code} onChange={(e) => update("cin_code", e.target.value)} placeholder={hp.cinPlaceholder} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label><label className="block text-sm font-medium">{hp.roomsUnits}<input type="number" min={1} value={form.rooms_quantity} onChange={(e) => update("rooms_quantity", Number(e.target.value))} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label><label className="block text-sm font-medium md:col-span-2">{hp.description}<textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows={5} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
  <section className="space-y-4 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 md:col-span-2"><div><h2 className="font-semibold">{hp.photosTitle}</h2><p className="mt-1 text-sm text-zinc-500">{hp.photosHint}</p></div><div className="grid gap-4 md:grid-cols-[240px_1fr]"><div className="rounded-2xl border border-zinc-200 p-3 dark:border-zinc-800"><p className="text-sm font-medium">{hp.mainPhoto}</p><div className="mt-3 aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-950">{form.main_photo_url ? <Image src={form.main_photo_url} alt={hp.mainPhoto} width={600} height={360} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-sm text-zinc-500">{hp.noPhoto}</div>}</div><label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950"><ImagePlus className="h-4 w-4" /> {uploading ? hp.uploading : hp.uploadMain}<input type="file" accept="image/jpeg,image/png,image/webp" onChange={onMainPhotoChange} disabled={uploading} className="sr-only" /></label></div><div className="rounded-2xl border border-zinc-200 p-3 dark:border-zinc-800"><div className="flex items-center justify-between gap-3"><p className="text-sm font-medium">{formatMessage(hp.additionalPhotos, { count: String(form.gallery_photo_urls.length) })}</p><label className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${form.gallery_photo_urls.length >= MAX_GALLERY_PHOTOS ? "pointer-events-none opacity-50" : ""}`}><ImagePlus className="h-4 w-4" /> {hp.addPhoto}<input type="file" accept="image/jpeg,image/png,image/webp" onChange={onGalleryPhotoChange} disabled={uploading || form.gallery_photo_urls.length >= MAX_GALLERY_PHOTOS} className="sr-only" /></label></div><div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{form.gallery_photo_urls.map((url, index) => <div key={url} className="relative aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-950"><Image src={url} alt={`Foto hotel ${index + 1}`} width={300} height={180} className="h-full w-full object-cover" /><button type="button" onClick={() => removeGalleryPhoto(index)} className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-zinc-900 shadow-sm"><X className="h-4 w-4" /></button></div>)}{!form.gallery_photo_urls.length ? <p className="text-sm text-zinc-500">{hp.noAdditionalPhotos}</p> : null}</div></div></div></section>
  <label className="block text-sm font-medium md:col-span-2">{hp.fullAddress}<input value={form.full_address} onChange={(e) => update("full_address", e.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label><label className="block text-sm font-medium">{hp.area}<input value={form.specific_area} onChange={(e) => update("specific_area", e.target.value)} placeholder={hp.areaPlaceholder} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
  <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 md:col-span-2"><label className="block text-sm font-medium">{hp.mapsUrl}<input value={form.google_maps_url} onChange={(e) => update("google_maps_url", e.target.value)} placeholder={hp.mapsPlaceholder} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label><div className="mt-3 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-600 dark:bg-zinc-950/60 dark:text-zinc-300"><p className="font-semibold text-zinc-800 dark:text-zinc-100">{hp.mapsHowTo}</p><ol className="mt-2 list-decimal space-y-1 pl-5"><li>{hp.mapsStep1}</li><li>{hp.mapsStep2}</li><li>{hp.mapsStep3}</li><li>{hp.mapsStep4}</li><li>{hp.mapsStep5}</li><li>{hp.mapsStep6}</li></ol></div></div><label className="block text-sm font-medium">{hp.publicEmail}<input value={form.public_email} onChange={(e) => update("public_email", e.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label><label className="block text-sm font-medium">{hp.publicPhone}<input value={form.public_phone} onChange={(e) => update("public_phone", e.target.value)} readOnly={phoneLocked} className={`mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950 ${phoneLocked ? "cursor-not-allowed bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300" : ""}`} />{phoneLocked ? <span className="mt-1 block text-xs text-zinc-500">{hp.publicPhoneReadonly}</span> : null}</label></div><button disabled={saving || uploading || needsPhoneVerification} type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950">{saving ? hp.saving : uploading ? hp.savingPhotos : hp.saveProfile}</button></form></div>;
}
