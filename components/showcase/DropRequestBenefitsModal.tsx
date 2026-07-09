"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type DropRequestBenefitsModalProps = {
  open: boolean;
  onClose: () => void;
  createRequestHref: string;
};

export function DropRequestBenefitsModal({
  open,
  onClose,
  createRequestHref,
}: DropRequestBenefitsModalProps) {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const modal = t.showcase.dropYourRequestModal;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="hd-drop-benefits-modal fixed inset-0 z-[200] flex items-end justify-center bg-black/45 p-0 sm:items-center sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="hd-drop-benefits-title"
        className="hd-drop-benefits-panel relative flex max-h-[min(92dvh,100%)] w-full flex-col overflow-hidden rounded-t-[1.35rem] bg-white sm:max-h-[min(88vh,760px)] sm:max-w-xl sm:rounded-3xl sm:shadow-2xl md:max-w-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-zinc-300 sm:hidden" aria-hidden />
        <header className="flex shrink-0 items-start justify-between gap-3 border-b border-zinc-200 px-4 py-3 sm:items-center sm:px-5 sm:py-4">
          <h2 id="hd-drop-benefits-title" className="pr-2 text-[1.05rem] font-bold leading-tight text-zinc-900 sm:text-lg">
            {modal.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50"
            aria-label={t.common.close}
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="hd-drop-benefits-content min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5 sm:py-5">
          <div className="space-y-3.5 text-[0.9375rem] leading-[1.6] text-zinc-600 sm:space-y-4 sm:text-[0.9375rem] sm:leading-relaxed">
            <p>
              {modal.p1Before}
              <span className="font-bold text-zinc-900">{modal.p1Bold}</span>
              {modal.p1After}
            </p>
            <p>{modal.p2}</p>
            <p>{modal.p3}</p>
            <p>{modal.p4}</p>
            <p>{modal.p5}</p>
            <p>
              <span className="font-bold text-zinc-900">{modal.p6Bold}</span> {modal.p6Rest}
            </p>
            <p>{modal.p7}</p>
            <p>{modal.p8}</p>
            <div className="space-y-2 border-t border-zinc-200 pt-4">
              <h3 className="text-sm font-bold text-zinc-900 sm:text-base">{modal.goalTitle}</h3>
              <p>{modal.goalBody}</p>
            </div>
            <p className="font-bold text-zinc-900">{modal.closingBold}</p>
          </div>
        </div>

        <footer className="hd-drop-benefits-footer shrink-0 space-y-2.5 border-t border-zinc-200 bg-zinc-50 px-4 py-3.5 safe-bottom sm:space-y-2 sm:px-5 sm:py-4">
          <p className="text-center text-[0.9rem] font-bold leading-snug text-zinc-900 sm:text-sm">{modal.footerLead}</p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <Link
              href={createRequestHref}
              onClick={onClose}
              className="hd-drop-benefits-cta-primary hd-cta-orange inline-flex min-h-12 items-center justify-center rounded-2xl px-4 text-center text-sm font-bold sm:min-h-11"
            >
              {modal.createRequestCta}
            </Link>
            <Link
              href="/registrazione?mode=partner"
              onClick={onClose}
              className="hd-drop-benefits-cta-secondary inline-flex min-h-12 items-center justify-center rounded-2xl border border-[#0f4c81] bg-white px-4 text-center text-sm font-bold text-[#0f4c81] transition hover:bg-[#e8f0f8] sm:min-h-11"
            >
              {modal.partnerCta}
            </Link>
          </div>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
