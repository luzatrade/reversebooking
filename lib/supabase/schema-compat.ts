/** Postgres/PostgREST: colonna non presente (migration non ancora applicata). */
export function isMissingColumnError(error: { message?: string } | null | undefined, column: string) {
  const message = (error?.message ?? "").toLowerCase();
  const col = column.toLowerCase();
  if (!message.includes(col)) return false;
  return (
    message.includes("does not exist") ||
    message.includes("could not find") ||
    message.includes("schema cache")
  );
}

export function stripKeys<T extends Record<string, unknown>>(obj: T, keys: string[]): T {
  const copy = { ...obj };
  for (const key of keys) delete copy[key];
  return copy;
}
