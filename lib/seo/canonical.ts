import { getAppUrl } from "@/lib/legal/company";

export function canonicalUrl(path = "/"): string {
  const base = getAppUrl().replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function hasUrlSearchParams(
  searchParams: Record<string, string | string[] | undefined> | undefined,
): boolean {
  if (!searchParams) return false;
  return Object.keys(searchParams).length > 0;
}
