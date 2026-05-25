"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, KeyRound, Mail, UserCog } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { validateNoContactsInFields } from "@/lib/content/contact-guard";
import type { UserRole } from "@/types/app";

type Profile = { role: UserRole | null; email: string; phone_number: string };
function dashboardHref(role: UserRole | null) { if (role === "hotel") return "/struttura/dashboard"; if (role === "advertiser") return "/inserzionista/dashboard"; return "/"; }

export function AccountSettingsClient() {
  const { t } = useLanguage();
  const [profile, setProfile] = useState<Profile>({ role: null, email: "", phone_number: "" });
  const [newEmail, setNewEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [advertiserFirstName, setAdvertiserFirstName] = useState("");
  const [advertiserLastName, setAdvertiserLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingEmail, setSavingEmail] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function loadAccount() {
    setLoading(true); setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) { setError(t.account.loginRequired); return; }
      const email = authData.user.email ?? "";
      const { data: profileData } = await supabase.from("profiles").select("role, email, phone_number").eq("user_id", authData.user.id).maybeSingle();
      const nextProfile: Profile = { role: (profileData?.role as UserRole | null) ?? null, email: profileData?.email ?? email, phone_number: profileData?.phone_number ?? "" };
      setProfile(nextProfile); setNewEmail(nextProfile.email); setPhone(nextProfile.phone_number);
      if (nextProfile.role === "advertiser") {
        const { data: advertiserData } = await supabase.from("advertiser_profiles").select("first_name, last_name").eq("user_id", authData.user.id).maybeSingle();
        setAdvertiserFirstName(advertiserData?.first_name ?? "");
        setAdvertiserLastName(advertiserData?.last_name ?? "");
      }
    } catch (err) { setError(err instanceof Error ? err.message : t.account.errorLoad); } finally { setLoading(false); }
  }
  useEffect(() => { void loadAccount(); }, []);

  async function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSavingProfile(true); setError(null); setSuccess(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) { setError(t.account.sessionInvalid); return; }
      if (profile.role === "advertiser") {
        const contactError = validateNoContactsInFields([{ label: "nome pubblico", value: advertiserFirstName }, { label: "cognome pubblico", value: advertiserLastName }]);
        if (contactError) { setError(contactError); return; }
        if (!advertiserFirstName.trim()) { setError(t.account.errorPublicName); return; }
        const { error: advertiserError } = await supabase.from("advertiser_profiles").update({ first_name: advertiserFirstName.trim(), last_name: advertiserLastName.trim() || null }).eq("user_id", authData.user.id);
        if (advertiserError) { setError(advertiserError.message); return; }
      }
      const { error: updateError } = await supabase.from("profiles").update({ phone_number: phone.trim() || null }).eq("user_id", authData.user.id);
      if (updateError) { setError(updateError.message); return; }
      setProfile((current) => ({ ...current, phone_number: phone.trim() }));
      setSuccess(t.account.accountUpdated);
    } catch (err) { setError(err instanceof Error ? err.message : t.account.errorSave); } finally { setSavingProfile(false); }
  }

  async function saveEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSavingEmail(true); setError(null); setSuccess(null);
    try {
      const email = newEmail.trim().toLowerCase(); if (!email) { setError(t.account.errorInvalidEmail); return; }
      const supabase = createBrowserSupabaseClient(); const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) { setError(t.account.sessionInvalid); return; }
      const { error: emailError } = await supabase.auth.updateUser({ email }); if (emailError) { setError(emailError.message); return; }
      await supabase.from("profiles").update({ email }).eq("user_id", authData.user.id); setProfile((current) => ({ ...current, email })); setSuccess(t.account.emailUpdated);
    } catch (err) { setError(err instanceof Error ? err.message : t.account.errorEmail); } finally { setSavingEmail(false); }
  }

  async function savePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSavingPassword(true); setError(null); setSuccess(null);
    try {
      if (password.length < 6) { setError(t.account.errorPasswordMin); return; }
      if (password !== confirmPassword) { setError(t.account.errorPasswordMismatch); return; }
      const supabase = createBrowserSupabaseClient(); const { error: passwordError } = await supabase.auth.updateUser({ password });
      if (passwordError) { setError(passwordError.message); return; }
      setPassword(""); setConfirmPassword(""); setSuccess(t.account.passwordUpdated);
    } catch (err) { setError(err instanceof Error ? err.message : t.account.errorPassword); } finally { setSavingPassword(false); }
  }

  if (loading) return <div className="rounded-3xl border p-6 text-sm text-zinc-500">{t.account.loading}</div>;

  return <div className="space-y-6"><Link href={dashboardHref(profile.role)} className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950"><ArrowLeft className="h-4 w-4" /> {t.account.backToDashboard}</Link>{error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}{success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}<section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"><p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{t.account.sectionLabel}</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">{t.account.title}</h1><p className="mt-2 text-sm text-zinc-500">{t.account.intro} e dati dell’utente. Gli annunci e i dati hotel restano separati.</p></section><form onSubmit={saveProfile} className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><UserCog className="h-5 w-5" /><h2 className="text-xl font-semibold">{t.account.accountData}</h2></div>{profile.role === "advertiser" ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"><h3 className="font-semibold">{t.account.publicAdvertiserName}</h3><p className="mt-1 text-sm text-emerald-800">{t.account.publicAdvertiserHint} nella Home/vetrina sugli annunci. Non inserire email, telefoni, WhatsApp, link o social.</p><div className="mt-4 grid gap-4 sm:grid-cols-2"><label className="block text-sm font-medium">{t.account.publicFirstName}<input value={advertiserFirstName} onChange={(event) => setAdvertiserFirstName(event.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" /></label><label className="block text-sm font-medium">{t.account.publicLastName} <span className="text-zinc-400">({t.common.optional})</span><input value={advertiserLastName} onChange={(event) => setAdvertiserLastName(event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" /></label></div></div> : null}<label className="block text-sm font-medium">{t.account.privatePhone}<input value={phone} onChange={(event) => setPhone(event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" /></label><button disabled={savingProfile} className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60">{savingProfile ? t.account.saving : t.account.saveAccountData}</button></form><form onSubmit={saveEmail} className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><Mail className="h-5 w-5" /><h2 className="text-xl font-semibold">{t.account.emailAccess}</h2></div><p className="text-sm text-zinc-500">{t.account.currentEmail}: {profile.email}</p><label className="block text-sm font-medium">{t.account.newEmail}<input type="email" value={newEmail} onChange={(event) => setNewEmail(event.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" /></label><button disabled={savingEmail} className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60">{savingEmail ? t.account.updatingEmail : t.account.updateEmail}</button></form><form onSubmit={savePassword} className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><KeyRound className="h-5 w-5" /><h2 className="text-xl font-semibold">{t.common.password}</h2></div><label className="block text-sm font-medium">{t.account.newPassword}<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" /></label><label className="block text-sm font-medium">{t.account.confirmPassword}<input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" /></label><button disabled={savingPassword} className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60">{savingPassword ? t.account.updatingPassword : t.account.updatePassword}</button></form></div>;
}
