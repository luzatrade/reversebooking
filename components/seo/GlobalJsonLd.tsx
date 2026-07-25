import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { buildOrganizationWebSiteJsonLd } from "@/lib/seo/entity-jsonld";

export async function GlobalJsonLd() {
  const locale = await getServerLocale();
  return <JsonLdScript data={buildOrganizationWebSiteJsonLd(locale)} />;
}
