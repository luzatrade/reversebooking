/** Path che i crawler devono ricevere con 200 sulla radice apex (senza redirect a www). */
export const APEX_REDIRECT_PATH_REGEX =
  "(?!robots\\.txt$)(?!sitemap\\.xml$)(?!sitemap/)(?!llms\\.txt$)(?!llms-full\\.txt$)(?!.*\\.txt$).+";

export function isApexCrawlerPath(pathname: string): boolean {
  const path = pathname.split("?")[0] || "/";
  if (
    path === "/robots.txt" ||
    path === "/sitemap.xml" ||
    path === "/llms.txt" ||
    path === "/llms-full.txt"
  ) {
    return true;
  }
  if (path.startsWith("/sitemap/")) return true;
  if (/^\/[^/]+\.txt$/i.test(path)) return true;
  return false;
}
