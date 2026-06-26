"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function CreateListingBackLink() {
  const { t } = useLanguage();
  const [href, setHref] = useState("/");
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    async function resolveHref() {
      const supabase = createBrowserSupabaseClient();
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setHref("/inserzionista/dashboard");
        setLabel(t.common.backToDashboard);
        return;
      }
      setHref("/");
      setLabel(t.common.home);
    }
    void resolveHref();
  }, [t.common.backToDashboard, t.common.home]);

  return (
    <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950">
      <ArrowLeft className="h-4 w-4" /> {label ?? t.common.home}
    </Link>
  );
}
