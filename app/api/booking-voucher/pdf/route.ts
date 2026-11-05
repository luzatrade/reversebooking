import React, { type ReactElement } from "react";
import { NextResponse } from "next/server";
import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import { BookingVoucherPdf } from "@/components/offers/BookingVoucherPdf";
import type { Locale } from "@/lib/i18n/translations";
import { tryCreateClient } from "@/lib/supabase/server";
import { isSameOrigin } from "@/lib/security/csrf";
import {
  isUuid,
  loadBookingVoucherData,
  loadCatalogBookingVoucherData,
} from "@/lib/offers/booking-voucher";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Origine non consentita" }, { status: 403 });
  }

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

  const body = (await request.json().catch(() => null)) as {
    offerId?: string;
    catalogOfferId?: string;
    locale?: Locale;
  } | null;

  const locale: Locale = body?.locale === "en" ? "en" : "it";

  let voucher;
  if (isUuid(body?.offerId)) {
    voucher = await loadBookingVoucherData(supabase, body.offerId, user.id);
  } else if (isUuid(body?.catalogOfferId)) {
    voucher = await loadCatalogBookingVoucherData(supabase, body.catalogOfferId, user.id);
  } else {
    return NextResponse.json({ error: "Offerta non valida" }, { status: 400 });
  }

  if (!voucher.ok) {
    return voucher.reason === "not_accepted"
      ? NextResponse.json({ error: "L'offerta non è confermata" }, { status: 409 })
      : NextResponse.json({ error: "Prenotazione non trovata" }, { status: 404 });
  }

  try {
    const doc = React.createElement(BookingVoucherPdf, {
      data: voucher.data,
      locale,
    }) as ReactElement<DocumentProps>;

    const buffer = await renderToBuffer(doc);

    if (!buffer?.length) {
      return NextResponse.json({ error: "PDF vuoto" }, { status: 500 });
    }

    const safeCode = voucher.data.requestCode.replace(/[^A-Za-z0-9_-]/g, "");
    const filename =
      locale === "en" ? `Booking-summary-${safeCode}.pdf` : `Riepilogo-prenotazione-${safeCode}.pdf`;

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Errore generazione PDF";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
