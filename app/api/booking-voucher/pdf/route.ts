import React, { type ReactElement } from "react";
import { NextResponse } from "next/server";
import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import { BookingVoucherPdf } from "@/components/offers/BookingVoucherPdf";
import type { AcceptedBookingSummaryData } from "@/components/offers/AcceptedBookingSummary";
import type { Locale } from "@/lib/i18n/translations";
import { tryCreateClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const supabase = await tryCreateClient();
  if (!supabase) {
    return NextResponse.json({ error: "Servizio non disponibile" }, { status: 503 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Devi effettuare il login" }, { status: 401 });
  }

  const body = (await request.json()) as {
    data?: AcceptedBookingSummaryData;
    locale?: Locale;
  };

  if (!body.data?.requestCode || !body.data?.offerCode) {
    return NextResponse.json({ error: "Dati riepilogo mancanti" }, { status: 400 });
  }

  const locale: Locale = body.locale === "en" ? "en" : "it";

  try {
    const doc = React.createElement(BookingVoucherPdf, {
      data: body.data,
      locale,
    }) as ReactElement<DocumentProps>;

    const buffer = await renderToBuffer(doc);

    if (!buffer?.length) {
      return NextResponse.json({ error: "PDF vuoto" }, { status: 500 });
    }

    const filename =
      locale === "en"
        ? `Booking-summary-${body.data.requestCode}.pdf`
        : `Riepilogo-prenotazione-${body.data.requestCode}.pdf`;

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Errore generazione PDF";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
