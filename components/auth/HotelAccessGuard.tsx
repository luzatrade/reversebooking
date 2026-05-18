"use client";

import { useEffect, useState} from "react";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { createBrowserSupabaseClient} from "@/lib/supabase/client";
import { isHotelOperational} from "@/lib/hotel/access";

const ALLOWED_WHEN_PAUSED = ["/struttura/profilo"];

export function HotelAccessGuard({ children}: { children: React.ReactNode}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [operational, setOperational] = useState(true);

  useEffect(() => {
    async function check() {
      setLoading(true);
      try {
        const supabase = createBrowserSupabaseClient();
        const { data: authData} = await supabase.auth.getUser();
        if (!authData.user) {
          setOperational(true);
          return;
       }
        const { data: hotel} = await supabase
          .from("hotel_accounts")
          .select("subscription_active, account_status")
          .eq("user_id", authData.user.id)
          .maybeSingle();
        setOperational(isHotelOperational(hotel));
     } finally {
        setLoading(false);
     }
   }
    void check();
 }, [pathname]);

  if (loading) {
    return <div className="mx-auto max-w-3xl px-4 py-16 text-sm text-zinc-500">Verifica account struttura...</div>;
 }

  const allowedPaused = ALLOWED_WHEN_PAUSED.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  if (operational || allowedPaused) return <>{children}</>;

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">Account in pausa</p>
        <h1 className="mt-3 text-2xl font-semibold text-amber-950">Abbonamento non attivo</h1>
        <p className="mt-4 text-sm leading-relaxed text-amber-900">
          La struttura non è visibile sul sito e non può inviare offerte, usare preferiti o chat. Puoi accedere solo al profilo e riattivare l’abbonamento.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/struttura/profilo" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white">
            Profilo struttura
          </Link>
          <Link href="/struttura" className="rounded-full border border-amber-300 px-6 py-3 text-sm font-semibold text-amber-900">
            Riattiva abbonamento
          </Link>
          <Link href="/account" className="rounded-full border px-6 py-3 text-sm font-semibold">
            Account
          </Link>
        </div>
      </div>
    </main>
  );
}
