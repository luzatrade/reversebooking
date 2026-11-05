import { NextResponse } from "next/server";
import { getSessionAndProfile } from "@/lib/auth/session";
import { fetchActiveTravelRequestCount } from "@/lib/showcase/catalogCounts";
import { resolveHotelShowcaseScope } from "@/lib/showcase/hotelScope";
import { fetchShowcaseConcludedRequests, fetchShowcaseTravelRequests } from "@/lib/showcase/publicRequests";

async function hotelScopeForRequest() {
  const { user, profile } = await getSessionAndProfile();
  if (!user || profile?.role !== "hotel") return null;
  return resolveHotelShowcaseScope(user.id);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ids = searchParams
    .get("ids")
    ?.split(",")
    .map((id) => id.trim())
    .filter(Boolean);
  const cityId = searchParams.get("city_id")?.trim() || null;
  const countryCode = searchParams.get("country_code")?.trim() || null;

  try {
    const hotelScope = await hotelScopeForRequest();
    const cityFilter =
      !hotelScope && cityId
        ? { cityId, countryCode: countryCode ?? "IT" }
        : undefined;

    if (ids?.length) {
      const requests = await fetchShowcaseConcludedRequests(ids, hotelScope);
      return NextResponse.json({ requests, scopedToHotelCity: Boolean(hotelScope) });
    }

    const [requests, requestCount] = await Promise.all([
      fetchShowcaseTravelRequests(1000, hotelScope, cityFilter),
      hotelScope
        ? fetchActiveTravelRequestCount({
            countryCode: hotelScope.countryCode ?? "IT",
            cityId: hotelScope.cityId,
          })
        : fetchActiveTravelRequestCount({
            countryCode: cityId ? (countryCode ?? "IT") : null,
            cityId,
          }),
    ]);

    return NextResponse.json({
      requests,
      requestCount,
      scopedToHotelCity: Boolean(hotelScope),
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Impossibile caricare le richieste" },
      { status: 500 },
    );
  }
}
