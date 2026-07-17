import { listSitemapIds, renderSitemapIndex, sitemapXmlResponse } from "@/lib/seo/sitemap-xml";

export const revalidate = 86400;

export async function GET() {
  const ids = await listSitemapIds();
  return sitemapXmlResponse(renderSitemapIndex(ids));
}
