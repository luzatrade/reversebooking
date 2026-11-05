import { isPartialMrzHit, isStrongMrzHit } from '@/lib/check-in/mrz/parseMrz';
import type { MrzExtractedData } from '@/types/check-in';

function scoreMrzResult(data: MrzExtractedData): number {
  let score = 0;
  if (isStrongMrzHit(data)) score += 100;
  else if (isPartialMrzHit(data)) score += 40;
  if (data.mrzValid === true) score += 30;
  if (data.surname.length >= 2) score += 5;
  if (data.givenNames.length >= 2) score += 5;
  if (data.documentNumber.length >= 6) score += 5;
  if (/^\d{4}-\d{2}-\d{2}$/.test(data.birthDate)) score += 5;
  if (data.sex === 'M' || data.sex === 'F') score += 3;
  score -= (data.reviewFields?.length ?? 0) * 2;
  return score;
}

export function pickBestMrzResult(candidates: Array<MrzExtractedData | null | undefined>): MrzExtractedData | null {
  const valid = candidates.filter(Boolean) as MrzExtractedData[];
  if (valid.length === 0) return null;
  return [...valid].sort((a, b) => scoreMrzResult(b) - scoreMrzResult(a))[0] ?? null;
}
