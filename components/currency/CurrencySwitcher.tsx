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

  const options = currencies.map((item) => (
    <option key={item.code} value={item.code}>
      {item.label}
    </option>
  ));

  // Variante compatta: solo il codice (es. "EUR"), niente icona né freccetta.
  if (compact) {
    return (
      <label className="relative inline-flex h-7 cursor-pointer select-none items-center justify-center rounded-full border border-slate-200 bg-white px-2.5 shadow-sm transition focus-within:ring-2 focus-within:ring-slate-300 hover:bg-slate-50 sm:h-8">
        <span className="sr-only">{t.common.currency}</span>
        <span aria-hidden className="text-[11px] font-semibold leading-none text-slate-700 sm:text-xs">
          {currency}
        </span>
        <select
          value={currency}
          onChange={(event) => changeCurrency(event.target.value as Currency)}
          aria-label={t.common.currency}
          className="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
        >
          {options}
        </select>
      </label>
    );
  }

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
      <Coins className="h-4 w-4" />
      <span className="sr-only">{t.common.currency}</span>
      <select
        value={currency}
        onChange={(event) => changeCurrency(event.target.value as Currency)}
        className="bg-transparent text-sm outline-none"
      >
        {options}
      </select>
    </label>
  );
}
