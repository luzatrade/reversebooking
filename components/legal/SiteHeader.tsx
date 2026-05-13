import Link from "next/link";
import { company } from "@/lib/legal/company";

const navLink =
  "rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
          {company.companyName}
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Principale">
          <Link className={navLink} href="/registrazione">
            Registrazione
          </Link>
          <Link className={navLink} href="/contatti">
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  );
}
