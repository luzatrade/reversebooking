import { NextRequest, NextResponse } from "next/server";
import { getFocusSliderResponse } from "@/lib/destination-slider/cache";

export async function GET(request: NextRequest) {
  const cityName = request.nextUrl.searchParams.get("cityName")?.trim() ?? "";
  if (!cityName) {
    return NextResponse.json({ error: "cityName is required" }, { status: 400 });
  }

  const countryCode = request.nextUrl.searchParams.get("countryCode");
  const countryName = request.nextUrl.searchParams.get("countryName");
  const cityId = request.nextUrl.searchParams.get("cityId");
  const localeParam = request.nextUrl.searchParams.get("locale");
  const locale = localeParam === "en" ? "en" : "it";

  try {
    const payload = await getFocusSliderResponse({
      cityName,
      countryCode,
      countryName,
      cityId,
      locale,
    });

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load destination slider";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
