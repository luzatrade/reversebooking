import { createBrowserSupabaseClient } from '@/lib/supabase/client';
import type { GuestRecord, MrzExtractedData, MrzReviewField } from '@/types/check-in';

export type CheckInTelemetryEvent = 'scan' | 'save' | 'export';

export interface CheckInTelemetryPayload {
  hotelAccountId: string;
  event: CheckInTelemetryEvent;
  mrz?: Partial<MrzExtractedData>;
  savedGuest?: Omit<GuestRecord, 'id' | 'hotelAccountId'>;
  exportGuestCount?: number;
}

function ocrSnapshot(mrz?: Partial<MrzExtractedData>) {
  if (!mrz) return null;
  return {
    surname: mrz.surname ?? '',
    givenNames: mrz.givenNames ?? '',
    documentNumber: mrz.documentNumber ?? '',
    birthDate: mrz.birthDate ?? '',
    sex: mrz.sex ?? '',
    nationality: mrz.nationality ?? '',
    documentType: mrz.documentType ?? '',
    mrzValid: mrz.mrzValid ?? null,
    reviewFields: mrz.reviewFields ?? [],
  };
}

function savedSnapshot(guest?: Omit<GuestRecord, 'id' | 'hotelAccountId'>) {
  if (!guest) return null;
  return {
    surname: guest.surname,
    givenNames: guest.givenNames,
    documentNumber: guest.documentNumber ?? '',
    birthDate: guest.birthDate,
    sex: guest.sex,
    birthCountryCode: guest.birthCountryCode,
    birthMunicipalityCode: guest.birthMunicipalityCode ?? '',
    citizenshipCode: guest.citizenshipCode,
    documentTypeCode: guest.documentTypeCode ?? '',
    documentIssuePlaceCode: guest.documentIssuePlaceCode ?? '',
  };
}

async function hashMrz(raw?: string): Promise<string | null> {
  if (!raw || typeof crypto === 'undefined' || !crypto.subtle) return null;
  const data = new TextEncoder().encode(raw);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Best-effort telemetry — non blocca il flusso check-in se fallisce. */
export async function logCheckInTelemetry(payload: CheckInTelemetryPayload): Promise<void> {
  try {
    const supabase = createBrowserSupabaseClient();
    const mrzHash = await hashMrz(payload.mrz?.rawMrz);
    const reviewFields = (payload.mrz?.reviewFields ?? []) as MrzReviewField[];

    const { error } = await supabase.from('check_in_ocr_telemetry').insert({
      hotel_account_id: payload.hotelAccountId,
      event_kind: payload.event,
      document_type_mrz: payload.mrz?.documentType ?? null,
      nationality: payload.mrz?.nationality ?? null,
      mrz_valid: payload.mrz?.mrzValid ?? null,
      review_fields: reviewFields.length > 0 ? reviewFields : null,
      mrz_raw_hash: mrzHash,
      ocr_payload: ocrSnapshot(payload.mrz),
      saved_payload: savedSnapshot(payload.savedGuest),
      export_guest_count: payload.exportGuestCount ?? null,
    });

    if (error && !/check_in_ocr_telemetry|schema cache|relation.*does not exist|PGRST/i.test(error.message)) {
      console.warn('[check-in telemetry]', error.message);
    }
  } catch {
    // ignore
  }
}
