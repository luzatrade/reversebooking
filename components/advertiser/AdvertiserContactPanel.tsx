"use client";

import { Mail, MessageCircle, Phone, Globe } from "lucide-react";
import { hasAdvertiserContacts, type AdvertiserContacts } from "@/lib/advertiser/contacts";

type AdvertiserContactPanelProps = {
  contacts: AdvertiserContacts;
  title: string;
  emptyMessage: string;
  className?: string;
};

function whatsappHref(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : null;
}

function websiteHref(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export function AdvertiserContactPanel({ contacts, title, emptyMessage, className }: AdvertiserContactPanelProps) {
  if (!hasAdvertiserContacts(contacts)) {
    return (
      <div className={className ?? "rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400"}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={className ?? "rounded-2xl border border-emerald-200/80 bg-emerald-50/60 px-4 py-3 text-sm dark:border-emerald-900/50 dark:bg-emerald-950/20"}>
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">{title}</p>
      <ul className="mt-2 space-y-1.5 text-sm text-zinc-800 dark:text-zinc-200">
        {contacts.email ? (
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-emerald-700" />
            <a href={`mailto:${contacts.email}`} className="font-medium hover:underline">
              {contacts.email}
            </a>
          </li>
        ) : null}
        {contacts.phone ? (
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-emerald-700" />
            <a href={`tel:${contacts.phone}`} className="font-medium hover:underline">
              {contacts.phone}
            </a>
          </li>
        ) : null}
        {contacts.whatsapp ? (
          <li className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 shrink-0 text-emerald-700" />
            {whatsappHref(contacts.whatsapp) ? (
              <a href={whatsappHref(contacts.whatsapp)!} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                WhatsApp {contacts.whatsapp}
              </a>
            ) : (
              <span className="font-medium">{contacts.whatsapp}</span>
            )}
          </li>
        ) : null}
        {contacts.website ? (
          <li className="flex items-center gap-2">
            <Globe className="h-4 w-4 shrink-0 text-emerald-700" />
            {websiteHref(contacts.website) ? (
              <a href={websiteHref(contacts.website)!} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                {contacts.website}
              </a>
            ) : (
              <span className="font-medium">{contacts.website}</span>
            )}
          </li>
        ) : null}
      </ul>
    </div>
  );
}
