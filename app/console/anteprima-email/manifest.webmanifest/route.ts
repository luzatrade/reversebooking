import { publicSiteOrigin } from "@/lib/seo/site-url";

export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const origin = publicSiteOrigin();
  const startUrl = `${origin}/console/anteprima-email`;
  const manifest = {
    id: "/console/anteprima-email",
    name: "HotelsDrop — Anteprima email richieste",
    short_name: "HD Email",
    description: "Anteprima live dei template email inviati alle strutture su nuova richiesta.",
    lang: "it",
    start_url: startUrl,
    scope: `${origin}/console/`,
    display: "standalone",
    orientation: "portrait",
    background_color: "#fafafa",
    theme_color: "#0f4c81",
    categories: ["business", "utilities"],
    icons: [
      {
        src: `${origin}/icon.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${origin}/icon.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };

  return Response.json(manifest, {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
