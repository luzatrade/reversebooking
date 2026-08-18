import type { Metadata } from "next";

/** Meta tag / verification codes from env (Yandex Webmaster, Baidu 站长平台, Google, Bing). */
export function buildSiteVerificationMetadata(): Metadata["verification"] {
  const yandex = process.env.YANDEX_SITE_VERIFICATION?.trim();
  const baidu = process.env.BAIDU_SITE_VERIFICATION?.trim();
  const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.BING_SITE_VERIFICATION?.trim();

  const other: Record<string, string> = {};
  if (bing) other["msvalidate.01"] = bing;
  if (baidu) other["baidu-site-verification"] = baidu;

  if (!yandex && !google && !Object.keys(other).length) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(yandex ? { yandex } : {}),
    ...(Object.keys(other).length ? { other } : {}),
  };
}
