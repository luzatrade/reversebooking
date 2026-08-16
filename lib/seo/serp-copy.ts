/** Helpers for SERP title/description length and trimming. */

export function normalizeSeoText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function trimSeoDescription(value: string, max = 160): string {
  const normalized = normalizeSeoText(value);
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 1).trim()}…`;
}

/** Trim a title segment without cutting mid-word when possible. */
export function trimSeoTitleSegment(value: string, max: number): string {
  const normalized = normalizeSeoText(value);
  if (normalized.length <= max) return normalized;
  const slice = normalized.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  if (lastSpace > max * 0.6) return `${slice.slice(0, lastSpace).trim()}…`;
  return `${slice.trim()}…`;
}

/** Prefer the first candidate that fits without truncation. */
export function pickFirstSeoDescription(candidates: string[], max = 160): string {
  for (const candidate of candidates) {
    const normalized = normalizeSeoText(candidate);
    if (normalized.length <= max) return normalized;
  }
  return trimSeoDescription(candidates[0] ?? "", max);
}
