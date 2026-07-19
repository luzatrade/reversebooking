"use client";

import { ChevronDown } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { HOTEL_SERVICE_CATEGORIES, normalizeHotelServices, type HotelServiceKey } from "@/lib/constants/hotel-services";
import {
  DEFAULT_HOUSE_RULES,
  normalizeHouseRules,
  type HouseRules,
  type PetsPolicy,
} from "@/lib/constants/house-rules";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type Props = {
  hotelAccountId: string;
  initialServices: Record<string, boolean> | null;
  initialRules: HouseRules | null;
};

const inputClass =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-[#0f4c81]/20 focus:border-[#0f4c81] focus:ring-2";

function AccordionSection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-zinc-900"
      >
        {title}
        <ChevronDown className={`h-4 w-4 shrink-0 text-zinc-500 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <div className="border-t border-zinc-100 px-4 py-3">{children}</div> : null}
    </div>
  );
}

export function HotelServicesRulesEditor({ hotelAccountId, initialServices, initialRules }: Props) {
  const { locale, t } = useLanguage();
  const copy = t.dashboard.hotel.servicesRules;
  const [services, setServices] = useState(() => normalizeHotelServices(initialServices));
  const [rules, setRules] = useState(() => normalizeHouseRules(initialRules ?? DEFAULT_HOUSE_RULES));
  const [savingServices, setSavingServices] = useState(false);
  const [savingRules, setSavingRules] = useState(false);
  const [servicesMessage, setServicesMessage] = useState<string | null>(null);
  const [servicesError, setServicesError] = useState<string | null>(null);
  const [rulesMessage, setRulesMessage] = useState<string | null>(null);
  const [rulesError, setRulesError] = useState<string | null>(null);

  const categories = useMemo(
    () =>
      HOTEL_SERVICE_CATEGORIES.map((category) => ({
        ...category,
        label: locale === "en" ? category.labelEn : category.labelIt,
        services: category.services.map((service) => ({
          ...service,
          label: locale === "en" ? service.labelEn : service.labelIt,
        })),
      })),
    [locale],
  );

  function toggleService(key: HotelServiceKey) {
    setServices((current) => ({ ...current, [key]: !current[key] }));
  }

  async function saveServices() {
    setSavingServices(true);
    setServicesMessage(null);
    setServicesError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error } = await supabase.from("hotel_accounts").update({ services }).eq("id", hotelAccountId);
      if (error) throw error;
      setServicesMessage(copy.servicesSaved);
    } catch (err) {
      setServicesError(err instanceof Error ? err.message : copy.saveError);
    } finally {
      setSavingServices(false);
    }
  }

  async function saveRules() {
    setSavingRules(true);
    setRulesMessage(null);
    setRulesError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const payload = normalizeHouseRules(rules);
      const { error } = await supabase.from("hotel_accounts").update({ house_rules: payload }).eq("id", hotelAccountId);
      if (error) throw error;
      setRules(payload);
      setRulesMessage(copy.rulesSaved);
    } catch (err) {
      setRulesError(err instanceof Error ? err.message : copy.saveError);
    } finally {
      setSavingRules(false);
    }
  }

  return (
    <div id="servizi-regole" className="mt-8 grid scroll-mt-24 gap-6 lg:grid-cols-2">
      <section className={`${dashboardSurfaces.headerPanel} space-y-4`}>
        <div>
          <h2 className="text-lg font-semibold text-zinc-950">{copy.servicesTitle}</h2>
          <p className="mt-1 text-sm text-zinc-600">{copy.servicesDesc}</p>
        </div>

        <div className="space-y-3">
          {categories.map((category, index) => (
            <AccordionSection key={category.id} title={category.label} defaultOpen={index === 0}>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.key}>
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-zinc-800">
                      <input
                        type="checkbox"
                        checked={services[service.key]}
                        onChange={() => toggleService(service.key)}
                        className="h-4 w-4 rounded border-zinc-300 text-[#0f4c81] focus:ring-[#0f4c81]"
                      />
                      {service.label}
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionSection>
          ))}
        </div>

        {servicesError ? <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{servicesError}</p> : null}
        {servicesMessage ? <p className="rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-800">{servicesMessage}</p> : null}

        <button
          type="button"
          disabled={savingServices}
          onClick={() => void saveServices()}
          className={dashboardSurfaces.btnPrimary}
        >
          {savingServices ? copy.saving : copy.saveServices}
        </button>
      </section>

      <section className={`${dashboardSurfaces.headerPanel} space-y-4`}>
        <div>
          <h2 className="text-lg font-semibold text-zinc-950">{copy.rulesTitle}</h2>
          <p className="mt-1 text-sm text-zinc-600">{copy.rulesDesc}</p>
        </div>

        <AccordionSection title={copy.rulesTimes} defaultOpen>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              {copy.checkIn}
              <input
                type="time"
                value={rules.check_in}
                onChange={(event) => setRules((current) => ({ ...current, check_in: event.target.value }))}
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium">
              {copy.checkOut}
              <input
                type="time"
                value={rules.check_out}
                onChange={(event) => setRules((current) => ({ ...current, check_out: event.target.value }))}
                className={inputClass}
              />
            </label>
          </div>
        </AccordionSection>

        <AccordionSection title={copy.rulesHouse}>
          <div className="space-y-3">
            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={rules.smoking_allowed}
                onChange={(event) => setRules((current) => ({ ...current, smoking_allowed: event.target.checked }))}
                className="h-4 w-4 rounded border-zinc-300 text-[#0f4c81] focus:ring-[#0f4c81]"
              />
              {copy.smokingAllowed}
            </label>
            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={rules.children_welcome}
                onChange={(event) => setRules((current) => ({ ...current, children_welcome: event.target.checked }))}
                className="h-4 w-4 rounded border-zinc-300 text-[#0f4c81] focus:ring-[#0f4c81]"
              />
              {copy.childrenWelcome}
            </label>
            <label className="block text-sm font-medium">
              {copy.petsPolicy}
              <select
                value={rules.pets_policy}
                onChange={(event) =>
                  setRules((current) => ({ ...current, pets_policy: event.target.value as PetsPolicy }))
                }
                className={inputClass}
              >
                <option value="not_allowed">{copy.petsNotAllowed}</option>
                <option value="on_request">{copy.petsOnRequest}</option>
                <option value="allowed">{copy.petsAllowed}</option>
              </select>
            </label>
            <label className="block text-sm font-medium">
              {copy.petsNotes}
              <input
                value={rules.pets_notes}
                onChange={(event) => setRules((current) => ({ ...current, pets_notes: event.target.value }))}
                placeholder={copy.petsNotesPlaceholder}
                className={inputClass}
              />
            </label>
          </div>
        </AccordionSection>

        <AccordionSection title={copy.rulesPolicies}>
          <div className="space-y-3">
            <label className="block text-sm font-medium">
              {copy.depositNotes}
              <textarea
                rows={2}
                value={rules.deposit_notes}
                onChange={(event) => setRules((current) => ({ ...current, deposit_notes: event.target.value }))}
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium">
              {copy.cancellationNotes}
              <textarea
                rows={2}
                value={rules.cancellation_notes}
                onChange={(event) => setRules((current) => ({ ...current, cancellation_notes: event.target.value }))}
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium">
              {copy.otherNotes}
              <textarea
                rows={2}
                value={rules.other_notes}
                onChange={(event) => setRules((current) => ({ ...current, other_notes: event.target.value }))}
                className={inputClass}
              />
            </label>
          </div>
        </AccordionSection>

        {rulesError ? <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{rulesError}</p> : null}
        {rulesMessage ? <p className="rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-800">{rulesMessage}</p> : null}

        <button
          type="button"
          disabled={savingRules}
          onClick={() => void saveRules()}
          className={dashboardSurfaces.btnPrimary}
        >
          {savingRules ? copy.saving : copy.saveRules}
        </button>
      </section>
    </div>
  );
}
