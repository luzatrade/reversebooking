"use client";

import { Menu, X } from "lucide-react";
import { type MouseEvent as ReactMouseEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { topbarMenuTriggerClass } from "@/components/navigation/topbarStyles";

type CollapseBreakpoint = "sm" | "md" | "lg" | "xl";

type TopbarControlsMenuProps = {
  children: ReactNode;
  /** Classi extra sul contenitore desktop (es. pill flottante). */
  desktopClassName?: string;
  /**
   * Sotto questo breakpoint i controlli collassano nel menu a tendina.
   * Utile quando il brand è grande (es. hero home) e i pulsanti inline
   * coprirebbero il logo su schermi medi.
   */
  collapseBelow?: CollapseBreakpoint;
};

// Stringhe complete così la JIT di Tailwind le rileva.
const desktopVisibility: Record<CollapseBreakpoint, string> = {
  sm: "hidden sm:flex sm:gap-1.5",
  md: "hidden md:flex md:gap-1.5",
  lg: "hidden lg:flex lg:gap-1.5",
  xl: "hidden xl:flex xl:gap-1.5",
};

const mobileVisibility: Record<CollapseBreakpoint, string> = {
  sm: "relative sm:hidden",
  md: "relative md:hidden",
  lg: "relative lg:hidden",
  xl: "relative xl:hidden",
};

export function TopbarControlsMenu({
  children,
  desktopClassName = "",
  collapseBelow = "sm",
}: TopbarControlsMenuProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function handleMenuPanelClick(event: ReactMouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (target.closest("a, select, option, label")) {
      if (target.closest("a")) setOpen(false);
      return;
    }
    if (target.closest('button:not([aria-haspopup="menu"])')) {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <div className={`items-center justify-end gap-1 ${desktopVisibility[collapseBelow]} ${desktopClassName}`.trim()}>
        {children}
      </div>

      <div className={mobileVisibility[collapseBelow]}>
        <button
          type="button"
          className={topbarMenuTriggerClass}
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          <span className="sr-only">{t.common.openMenu}</span>
        </button>

        {open ? (
          <div
            role="menu"
            className="hd-topbar-menu-panel absolute right-0 top-[calc(100%+0.5rem)] min-w-[12.5rem] rounded-2xl border border-slate-200 bg-white p-3 shadow-xl"
            onClick={handleMenuPanelClick}
          >
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
