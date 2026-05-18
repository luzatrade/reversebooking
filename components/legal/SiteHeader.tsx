import Link from "next/link";
import { Navbar, navLink } from "@/components/navigation/Navbar";

export function SiteHeader() {
  return (
    <Navbar>
      <nav className="flex items-center gap-1 sm:gap-2" aria-label="Principale">
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
