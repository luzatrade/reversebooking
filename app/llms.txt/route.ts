import { buildLlmsFullTxt, buildLlmsTxt } from "@/lib/seo/llms-content";
import { fetchLlmsCatalogStats } from "@/lib/seo/llms-stats";

export const revalidate = 3600;

function textResponse(body: string) {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}

export async function GET() {
  const stats = await fetchLlmsCatalogStats();
  return textResponse(buildLlmsTxt("it", stats));
}
