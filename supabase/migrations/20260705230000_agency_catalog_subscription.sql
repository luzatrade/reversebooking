-- Pacchetti agenzia in vetrina: abbonamento attivo oppure promozione gratuita fino al 31/10/2026.
-- L'invio di offerte alle richieste (offers) resta gratuito per le agenzie.

create or replace function public.agency_catalog_publish_allowed(
  p_provider_id uuid,
  p_offer_kind catalog_offer_kind,
  p_status catalog_offer_status
)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select case
    when p_status is distinct from 'published'::catalog_offer_status then true
    when p_offer_kind is distinct from 'agency_package'::catalog_offer_kind then true
    else exists (
      select 1
      from hotel_accounts ha
      where ha.id = p_provider_id
        and ha.provider_kind = 'agency'::provider_kind
        and (
          ha.subscription_active = true
          or (now() at time zone 'Europe/Rome') <= timestamptz '2026-10-31 23:59:59+02'
        )
    )
  end;
$$;

grant execute on function public.agency_catalog_publish_allowed(uuid, catalog_offer_kind, catalog_offer_status) to authenticated;

drop policy if exists "catalog_offers_provider_insert" on catalog_offers;
create policy "catalog_offers_provider_insert" on catalog_offers
for insert
with check (
  is_hotel_account_owner(provider_id)
  and agency_catalog_publish_allowed(provider_id, offer_kind, status)
);

drop policy if exists "catalog_offers_provider_update" on catalog_offers;
create policy "catalog_offers_provider_update" on catalog_offers
for update
using (is_hotel_account_owner(provider_id))
with check (
  is_hotel_account_owner(provider_id)
  and agency_catalog_publish_allowed(provider_id, offer_kind, status)
);
