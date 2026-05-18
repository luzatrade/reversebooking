import Link from "next/link";
import { company} from "@/lib/legal/company";

const linkClass =
  "text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline";

export function SiteFooter() {
  const fullAddress = `${company.legalAddress}, ${company.postalCode} ${company.city} — ${company.country}`;

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-zinc-900">
              {company.companyName}
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              {company.businessName}
            </p>
          </div>
          <div className="text-sm text-zinc-600">
            <p>
              <span className="font-medium text-zinc-800">
                P. IVA:{" "}
              </span>
              {company.vatNumber}
            </p>
            {company.taxCode ? (
              <p className="mt-1">
                <span className="font-medium text-zinc-800">
                  Codice fiscale:{" "}
                </span>
                {company.taxCode}
              </p>
            ) : null}
            {company.reaNumber ? (
              <p className="mt-1">
                <span className="font-medium text-zinc-800">
                  REA:{" "}
                </span>
                {company.reaNumber}
              </p>
            ) : null}
            <p className="mt-2">
              <span className="font-medium text-zinc-800">
                Sede legale:{" "}
              </span>
              {fullAddress}
            </p>
          </div>
          <div className="text-sm text-zinc-600">
            <p>
              <span className="font-medium text-zinc-800">
                Supporto:{" "}
              </span>
              <a className={linkClass} href={`mailto:${company.supportEmail}`}>
                {company.supportEmail}
              </a>
            </p>
            <p className="mt-1">
              <span className="font-medium text-zinc-800">
                PEC:{" "}
              </span>
              <a className={linkClass} href={`mailto:${company.pecEmail}`}>
                {company.pecEmail}
              </a>
            </p>
            <p className="mt-1">
              <span className="font-medium text-zinc-800">
                Tel.:{" "}
              </span>
              <a className={linkClass} href={`tel:${company.phone.replace(/\s/g, "")}`}>
                {company.phone}
              </a>
            </p>
          </div>
        </div>

        <nav
          aria-label="Link legali"
          className="flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-200 pt-6 text-sm"
        >
          <Link className={linkClass} href="/note-legali">
            Note legali
          </Link>
          <Link className={linkClass} href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className={linkClass} href="/cookie-policy">
            Cookie Policy
          </Link>
          <Link className={linkClass} href="/termini-e-condizioni">
            Termini e Condizioni
          </Link>
          <Link className={linkClass} href="/contatti">
            Contatti
          </Link>
          <Link className={linkClass} href="/struttura">
            Area struttura
          </Link>
        </nav>

        <p className="text-xs text-zinc-500">Codice ATECO: {company.atecoCode}</p>
      </div>
    </footer>
  );
}
