"use client";

import { Menu, X } from "lucide-react";
import { type ReactNode, useEffect, useId, useRef } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { topbarMenuTriggerClass } from "@/components/navigation/topbarStyles";

type CollapseBreakpoint = "sm" | "md" | "lg" | "xl";

type TopbarControlsMenuProps = {
  children: ReactNode;
  /** Classi extra sul contenitore desktop (es. pill flottante). */
  desktopClassName?: string;
  /**
   * Sotto questo breakpoint i controlli collassano nel menu a tendina.
   */
  collapseBelow?: CollapseBreakpoint;
};

const desktopVisibility: Record<CollapseBreakpoint, string> = {
  sm: "hidden sm:flex sm:gap-1.5",
  md: "hidden md:flex md:gap-1.5",
  lg: "hidden lg:flex lg:gap-1.5",
  xl: "hidden xl:flex xl:gap-1.5",
};

const mobileOnly: Record<CollapseBreakpoint, string> = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden",
};

/**
 * Controlli topbar con menu nativo <details> su mobile (funziona anche
 * senza idratazione React completa) e riga inline su desktop.
 */
export function TopbarControlsMenu({
  children,
  desktopClassName = "",
  collapseBelow = "sm",
}: TopbarControlsMenuProps) {
  const { t } = useLanguage();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const menuId = useId();

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      const details = detailsRef.current;
      if (!details?.open) return;
      if (!details.contains(event.target as Node)) details.open = false;
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && detailsRef.current) detailsRef.current.open = false;
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;
    function onToggle() {
      const target = detailsRef.current;
      if (!target) return;
      // Chiudi il menu dopo click su link interni.
      target.querySelectorAll("a").forEach((anchor) => {
        anchor.addEventListener("click", () => {
          target.open = false;
        });
      });
    }
    details.addEventListener("toggle", onToggle);
    onToggle();
    return () => details.removeEventListener("toggle", onToggle);
  }, [children]);

  return (
    <div className="relative">
      <div className={`items-center justify-end gap-1 ${desktopVisibility[collapseBelow]} ${desktopClassName}`.trim()}>
        {children}
      </div>

      <details ref={detailsRef} className={`group relative ${mobileOnly[collapseBelow]}`}>
        <summary
          className={`${topbarMenuTriggerClass} list-none [&::-webkit-details-marker]:hidden`}
          aria-controls={menuId}
          aria-label={t.common.openMenu}
        >
          <Menu className="h-5 w-5 group-open:hidden" aria-hidden />
          <X className="hidden h-5 w-5 group-open:inline" aria-hidden />
        </summary>

        <div
          id={menuId}
          role="menu"
          className="hd-topbar-menu-panel absolute right-0 top-[calc(100%+0.5rem)] z-[10050] w-[min(18rem,calc(100vw-1.5rem))] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
        >
          {children}
        </div>
      </details>
    </div>
  );
}
