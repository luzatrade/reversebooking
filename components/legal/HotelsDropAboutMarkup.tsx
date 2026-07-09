import Link from "next/link";

export type HotelsDropAboutContent = {
  title: string;
  p1Before: string;
  p1Bold: string;
  p1After: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6Bold: string;
  p6Rest: string;
  p7: string;
  p8: string;
  goalTitle: string;
  goalBody: string;
  closingBold: string;
  footerLead?: string;
  createRequestCta?: string;
  partnerCta?: string;
};

type HotelsDropAboutMarkupProps = {
  content: HotelsDropAboutContent;
  showActions?: boolean;
  createRequestHref?: string;
  className?: string;
};

export function HotelsDropAboutMarkup({
  content,
  showActions = false,
  createRequestHref = "/inserzionista/crea-annuncio",
  className = "",
}: HotelsDropAboutMarkupProps) {
  return (
    <article className={className}>
      <div className="space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
        <p>
          {content.p1Before}
          <strong className="font-bold text-zinc-900">{content.p1Bold}</strong>
          {content.p1After}
        </p>
        <p>{content.p2}</p>
        <p>{content.p3}</p>
        <p>{content.p4}</p>
        <p>{content.p5}</p>
        <p>
          <strong className="font-bold text-zinc-900">{content.p6Bold}</strong> {content.p6Rest}
        </p>
        <p>{content.p7}</p>
        <p>{content.p8}</p>
        <section className="space-y-2 border-t border-zinc-200 pt-4">
          <h2 className="text-base font-bold text-zinc-900 sm:text-lg">{content.goalTitle}</h2>
          <p>{content.goalBody}</p>
        </section>
        <p className="font-bold text-zinc-900">{content.closingBold}</p>
      </div>

      {showActions && content.footerLead && content.createRequestCta && content.partnerCta ? (
        <footer className="mt-8 space-y-3 border-t border-zinc-200 pt-6">
          <p className="text-center text-sm font-bold text-zinc-900">{content.footerLead}</p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <Link
              href={createRequestHref}
              className="hd-cta-orange inline-flex min-h-12 items-center justify-center rounded-2xl px-4 text-center text-sm font-bold"
            >
              {content.createRequestCta}
            </Link>
            <Link
              href="/registrazione?mode=partner"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-[#0f4c81] bg-white px-4 text-center text-sm font-bold text-[#0f4c81] transition hover:bg-[#e8f0f8]"
            >
              {content.partnerCta}
            </Link>
          </div>
        </footer>
      ) : null}
    </article>
  );
}
