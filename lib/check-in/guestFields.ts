import type { GuestType } from '@/types/check-in';

const TYPES_WITH_DOCUMENT: GuestType[] = ['single', 'head_family', 'head_group'];

export function guestNeedsDocumentFields(guestType: GuestType): boolean {
  return TYPES_WITH_DOCUMENT.includes(guestType);
}
