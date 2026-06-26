import { NextResponse } from "next/server";
import { getSessionAndProfile } from "@/lib/auth/session";
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

  try {
    const hotelScope = await hotelScopeForRequest();

    if (ids?.length) {
      const requests = await fetchShowcaseConcludedRequests(ids, hotelScope);
      return NextResponse.json({ requests, scopedToHotelCity: Boolean(hotelScope) });
    }

    const requests = await fetchShowcaseTravelRequests(200, hotelScope);
    return NextResponse.json({ requests, scopedToHotelCity: Boolean(hotelScope) });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Impossibile caricare le richieste" },
      { status: 500 },
    );
  }
}
