import Link from "next/link";
import { CurrencySwitcher } from "@/components/currency/CurrencySwitcher";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { Navbar, navLink } from "@/components/navigation/Navbar";

export function SiteHeader() {
  return (
    <Navbar>
      <div className="flex flex-wrap items-center justify-end gap-2">
        <LanguageSwitcher />
        <CurrencySwitcher />
      </div>
      <nav className="flex w-full flex-wrap items-center justify-end gap-1 sm:w-auto sm:gap-2" aria-label="Principale">
        <Link className={navLink} href="/directory">
          Strutture
        </Link>
        <Link className={navLink} href="/registrazione">
          Registrazione
        </Link>
        <Link className={navLink} href="/contatti">
          Contatti
        </Link>
      </nav>
    </Navbar>
  );
}
