import type { ReactNode } from "react";
import { BrandLogo } from "@/components/navigation/BrandLogo";

const navLink =
  "inline-flex h-8 items-center rounded-md px-2.5 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 sm:px-3 sm:text-sm";

type NavbarProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * Barra di navigazione principale: logo HotelsDrop.com a sinistra, link a destra.
 */
export function Navbar({ children, className = "" }: NavbarProps) {
  return (
    <header
      className={`sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur ${className}`.trim()}
    >
      <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between gap-2 px-4 py-2 sm:min-h-14 sm:px-6 lg:px-8">
        <BrandLogo className="shrink-0 self-center" />
        <div className="flex min-w-0 flex-wrap items-center justify-end gap-1.5 sm:gap-2">{children}</div>
      </div>
    </header>
  );
}

export { navLink };
