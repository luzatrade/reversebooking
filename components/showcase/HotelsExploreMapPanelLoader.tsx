"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

export function HotelsExploreMapPanelLoader() {
  const { t } = useLanguage();
  return <div className="flex h-full items-center justify-center text-sm text-zinc-500">{t.showcase.exploreMapLoading}</div>;
}
