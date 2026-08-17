import type { ReactNode } from "react";
import { BrandLogo } from "@/components/navigation/BrandLogo";

type NavbarProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * Barra di navigazione principale: logo HotelsDrop.com a sinistra, controlli a destra.
 * Su mobile i controlli devono stare in menu (TopbarControlsMenu), non in wrap verticale.
 */
export function Navbar({ children, className = "" }: NavbarProps) {
  return (
    <header
      className={`sticky top-0 z-[60] border-b border-zinc-200/80 bg-white/95 ${className}`.trim()}
    >
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-3 overflow-visible px-4 py-2 safe-top sm:min-h-14 sm:px-6 lg:px-8">
        <BrandLogo size="topbar" className="relative z-[1] min-w-0 shrink-0 self-center" />
        <div className="relative z-[2] flex shrink-0 items-center justify-end overflow-visible">{children}</div>
      </div>
    </header>
  );
}
