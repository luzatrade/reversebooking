"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Building2, FileText, Hotel, Megaphone, Search, Tag, UserRound, Users } from "lucide-react";
import { adminSearchTypeLabels, type AdminSearchHit, type AdminSearchHitType } from "@/lib/admin/search";
import { cn } from "@/lib/utils";

const typeIcons: Record<AdminSearchHitType, typeof UserRound> = {
  user: UserRound,
  hotel: Hotel,
  advertiser: Users,
  request: Megaphone,
  offer: Tag,
  invoice: FileText,
  onboarding: Building2,
};

function groupHits(hits: AdminSearchHit[]) {
  const order: AdminSearchHitType[] = ["user", "hotel", "advertiser", "request", "offer", "invoice", "onboarding"];
  const grouped = new Map<AdminSearchHitType, AdminSearchHit[]>();
  for (const hit of hits) {
    const list = grouped.get(hit.type) ?? [];
    list.push(hit);
    grouped.set(hit.type, list);
  }
  return order.flatMap((type) => (grouped.get(type) ?? []).map((hit) => ({ type, hit })));
}

export function AdminSearchPalette() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AdminSearchHit[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const flatResults = useMemo(() => groupHits(results), [results]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setResults([]);
    setActiveIndex(0);
  }, []);

  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery("");
    setResults([]);
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) close();
        else openPalette();
      }
      if (event.key === "Escape" && open) {
        event.preventDefault();
        close();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, open, openPalette]);

  useEffect(() => {
    if (open) {
      const timer = window.setTimeout(() => inputRef.current?.focus(), 0);
      return () => window.clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    const term = query.trim();
    if (term.length < 2) {
      setResults([]);
      setActiveIndex(0);
      setLoading(false);
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      try {
        const res = await fetch(`/api/admin/search?q=${encodeURIComponent(term)}&limit=8`, {
          signal: controller.signal,
        });
        const json = (await res.json()) as { results?: AdminSearchHit[] };
        if (!controller.signal.aborted) {
          setResults(Array.isArray(json.results) ? json.results : []);
          setActiveIndex(0);
        }
      } catch {
        if (!controller.signal.aborted) setResults([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 250);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [query]);

  function navigateTo(hit: AdminSearchHit) {
    close();
    router.push(hit.href);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const term = query.trim();
    if (!term) return;
    if (flatResults[activeIndex]) {
      navigateTo(flatResults[activeIndex]!.hit);
      return;
    }
    close();
    router.push(`/console/cerca?q=${encodeURIComponent(term)}`);
  }

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 p-2 text-zinc-600 transition hover:border-zinc-300 hover:bg-white md:hidden"
        aria-label="Cerca nella console"
      >
        <Search className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={openPalette}
        className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-600 transition hover:border-zinc-300 hover:bg-white md:inline-flex"
      >
        <Search className="h-4 w-4" />
        <span>Cerca...</span>
        <kbd className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500">⌘K</kbd>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-zinc-950/40 p-4 pt-[12vh]" onClick={close}>
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Ricerca console admin"
          >
            <form onSubmit={handleSubmit} className="border-b border-zinc-200">
              <div className="flex items-center gap-3 px-4 py-3">
                <Search className="h-5 w-5 shrink-0 text-zinc-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setActiveIndex((index) => Math.min(index + 1, Math.max(flatResults.length - 1, 0)));
                    }
                    if (event.key === "ArrowUp") {
                      event.preventDefault();
                      setActiveIndex((index) => Math.max(index - 1, 0));
                    }
                  }}
                  placeholder="Cerca per nome struttura, email, città, codice offerta..."
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
                />
                {loading ? <span className="text-xs text-zinc-400">...</span> : null}
              </div>
            </form>

            <div className="max-h-[50vh] overflow-y-auto p-2">
              {query.trim().length < 2 ? (
                <p className="px-3 py-6 text-center text-sm text-zinc-500">Digita almeno 2 caratteri per cercare.</p>
              ) : null}

              {query.trim().length >= 2 && !loading && flatResults.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-zinc-500">Nessun risultato per &quot;{query.trim()}&quot;.</p>
              ) : null}

              {flatResults.map(({ type, hit }, index) => {
                const Icon = typeIcons[type];
                return (
                  <button
                    key={`${hit.type}-${hit.id}`}
                    type="button"
                    onClick={() => navigateTo(hit)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition",
                      index === activeIndex ? "bg-[#0f4c81] text-white" : "hover:bg-zinc-100",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                        index === activeIndex ? "bg-white/15" : "bg-zinc-100 text-zinc-600",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-sm font-semibold">{hit.title}</span>
                        <span
                          className={cn(
                            "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                            index === activeIndex ? "bg-white/15 text-white" : "bg-zinc-200 text-zinc-700",
                          )}
                        >
                          {adminSearchTypeLabels[type]}
                        </span>
                      </span>
                      <span className={cn("mt-0.5 block truncate text-xs", index === activeIndex ? "text-white/80" : "text-zinc-500")}>
                        {hit.subtitle}
                      </span>
                    </span>
                    <ArrowRight className={cn("h-4 w-4 shrink-0", index === activeIndex ? "text-white/80" : "text-zinc-400")} />
                  </button>
                );
              })}
            </div>

            {query.trim().length >= 2 ? (
              <div className="border-t border-zinc-200 px-4 py-3 text-xs text-zinc-500">
                <Link
                  href={`/console/cerca?q=${encodeURIComponent(query.trim())}`}
                  onClick={close}
                  className="inline-flex items-center gap-1 font-semibold text-[#0f4c81] hover:underline"
                >
                  Vedi tutti i risultati
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
