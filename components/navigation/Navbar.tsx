import type { ReactNode } from "react";
import { BrandLogo } from "@/components/navigation/BrandLogo";

const navLink =
  "inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900";

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
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <BrandLogo className="shrink-0 self-center" />
        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-2 sm:gap-3">{children}</div>
      </div>
    </header>
  );
}

export { navLink };
