import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildOrganizationWebSiteJsonLd } from "@/lib/seo/entity-jsonld";

export function GlobalJsonLd() {
  return <JsonLdScript data={buildOrganizationWebSiteJsonLd()} />;
}
