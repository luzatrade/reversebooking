"use client";

import { Coins } from "lucide-react";
import { useEffect, useState } from "react";

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

const storageKey = "reversebooking.currency";

function isCurrency(value: string | null): value is Currency {
  return Boolean(value && currencies.some((currency) => currency.code === value));
}

export function CurrencySwitcher() {
  const [currency, setCurrency] = useState<Currency>("EUR");

  useEffect(() => {
    const storedCurrency = window.localStorage.getItem(storageKey);
    if (isCurrency(storedCurrency)) setCurrency(storedCurrency);
  }, []);

  function changeCurrency(value: Currency) {
    setCurrency(value);
    window.localStorage.setItem(storageKey, value);
    window.dispatchEvent(new CustomEvent("reversebooking:currency-change", { detail: value }));
  }

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
      <Coins className="h-4 w-4" />
      <span className="sr-only">Valuta</span>
      <select
        value={currency}
        onChange={(event) => changeCurrency(event.target.value as Currency)}
        className="bg-transparent text-sm outline-none"
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
