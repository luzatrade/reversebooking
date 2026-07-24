import { buildLlmsFullTxt, buildLlmsTxt } from "@/lib/seo/llms-content";

export const revalidate = 86400;

function textResponse(body: string) {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}

export function GET() {
  return textResponse(buildLlmsTxt());
}
