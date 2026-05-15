import { HomeAdvertiserAlerts } from "@/components/showcase/HomeAdvertiserAlerts";
import { HomeHotelAlerts } from "@/components/showcase/HomeHotelAlerts";
import { PublicShowcaseClient } from "@/components/showcase/PublicShowcaseClient";

export default function HomePage() {
  return (
    <div className="rb-soft-white-home rb-compact-request-bar">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .rb-compact-request-bar header div[class*="bg-zinc-50"] {
              padding: 12px !important;
              border-radius: 22px !important;
            }
            .rb-compact-request-bar header div[class*="bg-zinc-50"] > div:first-child {
              display: none !important;
            }
            .rb-compact-request-bar header div[class*="bg-zinc-50"] input,
            .rb-compact-request-bar header div[class*="bg-zinc-50"] select,
            .rb-compact-request-bar header div[class*="bg-zinc-50"] a,
            .rb-compact-request-bar header div[class*="bg-zinc-50"] button {
              height: 44px !important;
              border-radius: 14px !important;
            }
            .rb-compact-request-bar header div[class*="max-w-4xl"] {
              max-width: 700px !important;
              padding: 10px !important;
              border-radius: 18px !important;
            }
          `,
        }}
      />
      <HomeAdvertiserAlerts />
      <HomeHotelAlerts />
      <PublicShowcaseClient />
    </div>
  );
}
