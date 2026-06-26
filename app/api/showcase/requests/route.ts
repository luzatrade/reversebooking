import { NextResponse } from "next/server";
import { fetchShowcaseConcludedRequests, fetchShowcaseTravelRequests } from "@/lib/showcase/publicRequests";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ids = searchParams
    .get("ids")
    ?.split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  try {
    if (ids?.length) {
      const requests = await fetchShowcaseConcludedRequests(ids);
      return NextResponse.json({ requests });
    }

    const requests = await fetchShowcaseTravelRequests(200);
    return NextResponse.json({ requests });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Impossibile caricare le richieste" },
      { status: 500 },
    );
  }
}
