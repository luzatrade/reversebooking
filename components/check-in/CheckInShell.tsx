"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AppHeader } from "@/components/check-in/layout/AppHeader";
import { BottomNav, type CheckInTab } from "@/components/check-in/layout/BottomNav";
import { CheckInPage } from "@/components/check-in/pages/CheckInPage";
import { ExportPage } from "@/components/check-in/pages/ExportPage";
import { GuestsPage } from "@/components/check-in/pages/GuestsPage";
import { ToastContainer } from "@/components/check-in/ui/ToastContainer";
import { registerToastHandler, useToastState } from "@/lib/check-in/useToast";
import { getAuthUserFast } from "@/lib/auth/clientSession";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { ProviderKind } from "@/types/app";

export function CheckInShell({
  basePath,
  expectedProviderKind,
}: {
  basePath: "/struttura" | "/agenzia";
  expectedProviderKind: ProviderKind;
}) {
  const toastState = useToastState();
  const [propertyName, setPropertyName] = useState<string | null>(null);
  const [hotelAccountId, setHotelAccountId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<CheckInTab>("checkin");
  const [guestsKey, setGuestsKey] = useState(0);
  const [usingLocalStorage, setUsingLocalStorage] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initial = params.get("tab");
    if (initial === "export" || initial === "guests" || initial === "checkin") {
      setTab(initial);
    }
  }, []);

  const handleStorageFallback = useCallback(() => {
    setUsingLocalStorage(true);
  }, []);

  const handleGuestSaved = useCallback(() => {
    setGuestsKey((k) => k + 1);
  }, []);

  useEffect(() => {
    registerToastHandler(toastState.push);
  }, [toastState.push]);

  useEffect(() => {
    async function load() {
      const supabase = createBrowserSupabaseClient();
      const { user } = await getAuthUserFast(supabase);
      if (!user) {
        setError("Accedi per usare il check-in.");
        return;
      }
      const { data } = await supabase
        .from("hotel_accounts")
        .select("id, property_name, provider_kind")
        .eq("user_id", user.id)
        .maybeSingle();
      if (!data || data.provider_kind !== expectedProviderKind) {
        setError("Profilo non trovato.");
        return;
      }
      setPropertyName(data.property_name);
      setHotelAccountId(data.id);
    }
    void load();
  }, [expectedProviderKind]);

  if (error) {
    return (
      <div className="fc-app mx-auto max-w-lg p-6">
        <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</p>
        <Link href={`${basePath}/dashboard`} className="mt-4 inline-block text-sm font-semibold text-[#0f4c81]">
          ← Dashboard
        </Link>
      </div>
    );
  }

  if (!hotelAccountId) {
    return (
      <div className="fc-app mx-auto max-w-lg p-6">
        <p className="text-sm text-[var(--color-muted)]">Caricamento…</p>
      </div>
    );
  }

  const storageProps = {
    usingLocalStorage,
    onStorageFallback: handleStorageFallback,
  };

  return (
    <div className="fc-app mx-auto flex min-h-[80vh] max-w-lg flex-col bg-[var(--fc-bg,#f4f6f8)]">
      <AppHeader structureName={propertyName ?? "…"} dashboardHref={`${basePath}/dashboard`} />
      <div className="flex-1 overflow-y-auto px-4 pb-2 pt-2">
        {tab === "checkin" && (
          <CheckInPage
            hotelAccountId={hotelAccountId}
            onSaved={handleGuestSaved}
            {...storageProps}
          />
        )}
        {tab === "guests" && (
          <GuestsPage hotelAccountId={hotelAccountId} refreshKey={guestsKey} {...storageProps} />
        )}
        {tab === "export" && (
          <ExportPage hotelAccountId={hotelAccountId} refreshKey={guestsKey} {...storageProps} />
        )}
      </div>
      <BottomNav active={tab} onChange={setTab} />
      <ToastContainer toasts={toastState.toasts} onDismiss={toastState.dismiss} />
    </div>
  );
}
