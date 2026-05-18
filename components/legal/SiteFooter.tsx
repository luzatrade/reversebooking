import Link from "next/link";
import { company, formatLegalAddress } from "@/lib/legal/company";

const linkClass =
  "text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100";

export function SiteFooter() {
  const fullAddress = formatLegalAddress();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{company.companyName}</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{company.businessName}</p>
            <p className="mt-1 text-xs text-zinc-500">Operato da {company.legalEntityName}</p>
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">P. IVA / C.F.: </span>
              {company.vatNumber}
            </p>
            <p className="mt-2">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">Sede legale: </span>
              {fullAddress}
            </p>
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">Supporto: </span>
              <a className={linkClass} href={`mailto:${company.supportEmail}`}>
                {company.supportEmail}
              </a>
            </p>
            <p className="mt-1">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">PEC: </span>
              <a className={linkClass} href={`mailto:${company.pecEmail}`}>
                {company.pecEmail}
              </a>
            </p>
            <p className="mt-1">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">Tel.: </span>
              <a className={linkClass} href={`tel:${company.phone.replace(/\s/g, "")}`}>
                {company.phone}
              </a>
            </p>
          </div>
        </div>

        <nav
          aria-label="Link legali"
          className="flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800"
        >
          <Link className={linkClass} href="/note-legali">
            Note legali
          </Link>
          <Link className={linkClass} href="/privacy-policy">
            Privacy
          </Link>
          <Link className={linkClass} href="/cookie-policy">
            Cookie
          </Link>
          <Link className={linkClass} href="/termini-e-condizioni">
            Termini
          </Link>
          <Link className={linkClass} href="/condizioni-abbonamento">
            Abbonamento
          </Link>
          <Link className={linkClass} href="/contatti">
            Contatti
          </Link>
          <Link className={linkClass} href="/struttura">
            Area struttura
          </Link>
        </nav>

        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} {company.legalEntityName} — {company.companyName}
          {company.atecoCode ? ` · ATECO ${company.atecoCode}` : null}
        </p>
      </div>
    </footer>
  );
}
