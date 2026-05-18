import type { ReactNode} from "react";
import { LegalDraftBanner} from "@/components/legal/LegalDraftBanner";

type Props = {
  title: string;
  intro?: string;
  children: ReactNode;
};

export function LegalPageShell({ title, intro, children}: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <LegalDraftBanner />
      <header className="mt-8">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 text-base leading-relaxed text-zinc-600">{intro}</p>
        ) : null}
      </header>
      <div className="mt-10 space-y-8 text-base leading-relaxed text-zinc-700 [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-900 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_p]:mt-3">
        {children}
      </div>
    </div>
  );
}
