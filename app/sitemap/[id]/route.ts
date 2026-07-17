import { notFound } from "next/navigation";
import {
  buildSitemapEntries,
  listSitemapIds,
  parseSitemapId,
  renderSitemapUrlset,
  sitemapXmlResponse,
} from "@/lib/seo/sitemap-xml";

export const revalidate = 86400;

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: RouteProps) {
  const { id: rawId } = await params;
  const id = parseSitemapId(rawId);
  if (id == null) notFound();

  const ids = await listSitemapIds();
  if (!ids.includes(id)) notFound();

  const entries = await buildSitemapEntries(id);
  return sitemapXmlResponse(renderSitemapUrlset(entries));
}
