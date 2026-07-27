import { oneAdvertiserProfile } from "@/lib/advertiser/publicName";

export type AdvertiserContacts = {
  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  website: string | null;
};

type AdvertiserProfileContacts = {
  contact_email?: string | null;
  contact_phone?: string | null;
  contact_whatsapp?: string | null;
  website_url?: string | null;
};

export type AdvertiserContactSource = {
  visible_contact_email?: string | null;
  visible_contact_phone?: string | null;
  visible_contact_whatsapp?: string | null;
  visible_contact_website?: string | null;
  advertiser_profiles?: AdvertiserProfileContacts | AdvertiserProfileContacts[] | null;
};

export function resolveAdvertiserContacts(source: AdvertiserContactSource): AdvertiserContacts {
  const profile = oneAdvertiserProfile(source.advertiser_profiles);
  return {
    email: source.visible_contact_email?.trim() || profile?.contact_email?.trim() || null,
    phone: source.visible_contact_phone?.trim() || profile?.contact_phone?.trim() || null,
    whatsapp: source.visible_contact_whatsapp?.trim() || profile?.contact_whatsapp?.trim() || null,
    website: source.visible_contact_website?.trim() || profile?.website_url?.trim() || null,
  };
}

export function hasAdvertiserContacts(contacts: AdvertiserContacts): boolean {
  return Boolean(contacts.email || contacts.phone || contacts.whatsapp || contacts.website);
}
