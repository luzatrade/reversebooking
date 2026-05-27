"use client";

import { company } from "@/lib/legal/company";
import { LegalFooterLinks } from "@/components/legal/LegalFooterLinks";

export function LegalFooterCompact() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {company.legalEntityName} — {company.companyName}
        </p>
        <LegalFooterLinks className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs" />
      </div>
    </footer>
  );
}
