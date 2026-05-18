import type { ReactNode } from "react";
import { BrandLogo } from "@/components/navigation/BrandLogo";

const navLink =
  "rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900";

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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandLogo className="shrink-0" />
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-4">{children}</div>
      </div>
    </header>
  );
}

export { navLink };
