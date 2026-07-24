import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

export function SeoBreadcrumb({ items, className = "" }: Props) {
  return (
    <nav aria-label="Breadcrumb" className={`overflow-x-auto ${className}`}>
      <ol className="flex min-w-0 flex-wrap items-center gap-1 text-xs text-zinc-500 sm:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex min-w-0 max-w-full items-center gap-1">
              {index > 0 ? <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden="true" /> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="truncate font-medium hover:text-zinc-900 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className={`truncate ${isLast ? "font-semibold text-zinc-700 dark:text-zinc-300" : ""}`}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
