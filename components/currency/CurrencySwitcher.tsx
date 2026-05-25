"use client";

import { Coins } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type Currency = "EUR" | "USD" | "GBP" | "CHF" | "AED" | "THB" | "JPY" | "CAD" | "AUD";

const currencies: Array<{ code: Currency; label: string }> = [
  { code: "EUR", label: "€ EUR" },
  { code: "USD", label: "$ USD" },
  { code: "GBP", label: "£ GBP" },
  { code: "CHF", label: "CHF" },
  { code: "AED", label: "AED" },
  { code: "THB", label: "฿ THB" },
  { code: "JPY", label: "¥ JPY" },
  { code: "CAD", label: "C$ CAD" },
  { code: "AUD", label: "A$ AUD" },
];

const storageKey = "hotelsdrop.currency";

function isCurrency(value: string | null): value is Currency {
  return Boolean(value && currencies.some((currency) => currency.code === value));
}

type CurrencySwitcherProps = {
  compact?: boolean;
};

export function CurrencySwitcher({ compact = false }: CurrencySwitcherProps) {
  const { t } = useLanguage();
  const [currency, setCurrency] = useState<Currency>("EUR");

  useEffect(() => {
    const storedCurrency = window.localStorage.getItem(storageKey);
    if (isCurrency(storedCurrency)) setCurrency(storedCurrency);
  }, []);

  function changeCurrency(value: Currency) {
    setCurrency(value);
    window.localStorage.setItem(storageKey, value);
    window.dispatchEvent(new CustomEvent("hotelsdrop:currency-change", { detail: value }));
  }

  const shellClass = compact
    ? "inline-flex h-7 items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-0 shadow-sm sm:h-8 sm:gap-1.5 sm:px-2.5"
    : "inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200";

  const iconClass = compact ? "h-3.5 w-3.5 text-slate-500" : "h-4 w-4";
  const selectClass = compact
    ? "max-w-[4.25rem] bg-transparent text-[11px] font-semibold text-slate-700 outline-none sm:max-w-none sm:text-xs"
    : "bg-transparent text-sm outline-none";

  return (
    <label className={shellClass}>
      <Coins className={iconClass} />
      <span className="sr-only">{t.common.currency}</span>
      <select
        value={currency}
        onChange={(event) => changeCurrency(event.target.value as Currency)}
        className={selectClass}
      >
        {currencies.map((item) => (
          <option key={item.code} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
