/** Mappa tipo MRZ → codice documento tabella Alloggiati Web. */
export function documentTypeFromMrz(documentType?: string, nationality?: string): string {
  if (documentType === 'TD3') return 'PASOR';
  if (documentType === 'TD1' || nationality === 'ITA') return 'IDELE';
  return 'IDENT';
}
