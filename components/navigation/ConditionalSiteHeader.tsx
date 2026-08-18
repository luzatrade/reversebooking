import { headers } from "next/headers";
import { SiteHeaderGate } from "@/components/navigation/SiteHeaderGate";
import { HD_PATHNAME_HEADER, isLocaleHomePath, stripLocalePrefix } from "@/lib/i18n/routing";

/** Hide the global header on the dedicated homepage (all locale prefixes). */
export async function ConditionalSiteHeader() {
  const headerStore = await headers();
  const originalPath = headerStore.get(HD_PATHNAME_HEADER);
  if (originalPath && (isLocaleHomePath(originalPath) || stripLocalePrefix(originalPath).pathname === "/")) {
    return null;
  }
  return <SiteHeaderGate />;
}
