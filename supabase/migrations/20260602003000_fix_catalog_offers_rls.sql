-- Fix catalog offer INSERT RLS: provider check must use provider_id, not self-referencing offer id.

create or replace function is_hotel_account_owner(account_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from hotel_accounts ha
    where ha.id = account_id
      and ha.user_id = auth.uid()
      and ha.account_status = 'active'
  );
$$;

drop policy if exists "catalog_offers_provider_all" on catalog_offers;
create policy "catalog_offers_provider_select" on catalog_offers
for select using (is_hotel_account_owner(provider_id));

create policy "catalog_offers_provider_insert" on catalog_offers
for insert with check (is_hotel_account_owner(provider_id));

create policy "catalog_offers_provider_update" on catalog_offers
for update using (is_hotel_account_owner(provider_id))
with check (is_hotel_account_owner(provider_id));

create policy "catalog_offers_provider_delete" on catalog_offers
for delete using (is_hotel_account_owner(provider_id));

-- Child tables: provider owns via catalog_offers.provider_id
create or replace function is_catalog_offer_provider(offer_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from catalog_offers co
    where co.id = offer_id
      and is_hotel_account_owner(co.provider_id)
  );
$$;
