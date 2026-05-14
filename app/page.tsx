import { HomeAdvertiserAlerts } from "@/components/showcase/HomeAdvertiserAlerts";
import { HomeHotelAlerts } from "@/components/showcase/HomeHotelAlerts";
import { PublicShowcaseClient } from "@/components/showcase/PublicShowcaseClient";

export default function HomePage() {
  return (
    <>
      <HomeAdvertiserAlerts />
      <HomeHotelAlerts />
      <PublicShowcaseClient />
    </>
  );
}
