import { HomeAdvertiserAlerts} from "@/components/showcase/HomeAdvertiserAlerts";
import { HomeHotelAlerts} from "@/components/showcase/HomeHotelAlerts";
import { PublicShowcaseClient} from "@/components/showcase/PublicShowcaseClient";

export default function HomePage() {
  return (
    <div className="rb-soft-white-home">
      <HomeAdvertiserAlerts />
      <HomeHotelAlerts />
      <PublicShowcaseClient />
    </div>
  );
}
