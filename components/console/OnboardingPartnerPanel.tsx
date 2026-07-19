"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ImpersonateButton } from "@/components/console/ImpersonateButton";
import { StatusBadge } from "@/components/console/StatusBadge";

type LinkedHotelAccount = {
  id: string;
  user_id: string;
  property_name: string;
  public_phone: string | null;
  public_email: string | null;
  account_status: string;
  subscription_active: boolean;
  subscription_status?: string | null;
};

type Props = {
  onboardingId: string;
  hotelName: string;
  defaultEmail?: string | null;
  partnerUserId?: string | null;
  profileEmail?: string | null;
  linkedAccount?: LinkedHotelAccount | null;
  compact?: boolean;
};

const inputClass =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-[#0f4c81]/20 focus:border-[#0f4c81] focus:ring-2";

export function OnboardingPartnerPanel({
  onboardingId,
  hotelName,
  defaultEmail,
  partnerUserId,
  profileEmail,
  linkedAccount,
  compact = false,
}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState(defaultEmail?.trim() ?? "");
  const [password, setPassword] = useState("");
  const [structureType, setStructureType] = useState("hotel");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const hasPartner = Boolean(partnerUserId);

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCreating(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/admin/onboarding-hotel/register-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          onboardingId,
          email,
          password,
          structureType,
          openDashboard: true,
        }),
      });
      const data = (await res.json()) as { error?: string; redirectUrl?: string };
      if (!res.ok) throw new Error(data.error ?? "Registrazione non riuscita");

      setSuccess("Account partner creato.");
      if (data.redirectUrl) {
        window.location.assign(data.redirectUrl);
        return;
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registrazione non riuscita");
    } finally {
      setCreating(false);
    }
  }

  if (compact) {
    if (!hasPartner || !partnerUserId) return null;
    return <ImpersonateButton userId={partnerUserId} label="Dashboard struttura" />;
  }

  return (
    <section className="mb-6 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Account partner</p>
          <h2 className="mt-1 text-lg font-semibold text-zinc-900">{hotelName}</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Gestisci la dashboard struttura o crea un account partner collegato al catalogo onboarding.
          </p>
        </div>
        {hasPartner && partnerUserId ? (
          <ImpersonateButton userId={partnerUserId} label="Dashboard struttura" />
        ) : null}
      </div>

      {hasPartner && linkedAccount ? (
        <div className="mt-4 grid gap-3 rounded-xl bg-zinc-50 p-4 text-sm text-zinc-700 sm:grid-cols-2">
          <p>
            <span className="font-medium text-zinc-900">Nome account:</span> {linkedAccount.property_name}
          </p>
          <p>
            <span className="font-medium text-zinc-900">Email login:</span> {profileEmail ?? linkedAccount.public_email ?? "—"}
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium text-zinc-900">Stato:</span>
            <StatusBadge value={linkedAccount.account_status} />
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium text-zinc-900">Abbonamento:</span>
            <StatusBadge value={linkedAccount.subscription_active ? "active" : "inactive"} />
            {linkedAccount.subscription_status ? (
              <span className="text-xs text-zinc-500">{linkedAccount.subscription_status}</span>
            ) : null}
          </p>
          <p className="sm:col-span-2">
            <Link
              href={`/console/strutture?q=${encodeURIComponent(linkedAccount.property_name)}`}
              className="font-semibold text-[#0f4c81] hover:underline"
            >
              Apri in Console → Strutture
            </Link>
          </p>
        </div>
      ) : (
        <form onSubmit={handleRegister} className="mt-4 space-y-4 rounded-xl border border-dashed border-zinc-300 p-4">
          <p className="text-sm text-zinc-600">
            Nessun account partner collegato. Crea login e dashboard per agire al posto della struttura.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm font-medium md:col-span-2">
              Email partner
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={inputClass}
                placeholder="partner@hotel.it"
              />
            </label>
            <label className="block text-sm font-medium">
              Password temporanea
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={inputClass}
                placeholder="Minimo 8 caratteri"
              />
            </label>
            <label className="block text-sm font-medium">
              Tipologia
              <select
                value={structureType}
                onChange={(event) => setStructureType(event.target.value)}
                className={inputClass}
              >
                <option value="hotel">Hotel</option>
                <option value="bed_and_breakfast">B&amp;B</option>
                <option value="apartment">Appartamento</option>
              </select>
            </label>
          </div>
          {error ? <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
          {success ? <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{success}</p> : null}
          <button
            type="submit"
            disabled={creating}
            className="inline-flex rounded-xl bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d3f68] disabled:opacity-50"
          >
            {creating ? "Creazione..." : "Crea account partner e apri dashboard"}
          </button>
        </form>
      )}
    </section>
  );
}
