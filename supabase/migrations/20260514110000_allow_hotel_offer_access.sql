-- Policy mancanti per flusso offerte hotel.
-- L'hotel deve poter leggere gli annunci compatibili e creare offerte.

alter table travel_requests enable row level security;
alter table offers enable row level security;
alter table notifications enable row level security;

drop policy if exists "requests-hotel-city" on travel_requests;
create policy "requests-hotel-city"
on travel_requests
for select
using (
  status = 'active'::request_status
  and expires_at > now()
  and exists (
    select 1
    from hotel_accounts h
    where h.user_id = auth.uid()
      and h.country_code = travel_requests.country_code
      and h.city_id = travel_requests.city_id
      and h.account_status = 'active'::account_status
      and h.subscription_active = true
      and (
        travel_requests.preferred_structure_type = 'all'::preferred_structure_type
        or travel_requests.preferred_structure_type::text = h.structure_type::text
      )
  )
);

drop policy if exists "offers-hotel-own" on offers;
create policy "offers-hotel-own"
on offers
for all
using (
  exists (
    select 1
    from hotel_accounts h
    where h.id = offers.hotel_account_id
      and h.user_id = auth.uid()
      and h.subscription_active = true
      and h.account_status = 'active'::account_status
  )
)
with check (
  exists (
    select 1
    from hotel_accounts h
    where h.id = offers.hotel_account_id
      and h.user_id = auth.uid()
      and h.subscription_active = true
      and h.account_status = 'active'::account_status
  )
);

drop policy if exists "notifications-hotel-insert" on notifications;
create policy "notifications-hotel-insert"
on notifications
for insert
with check (
  recipient_type in ('advertiser'::notification_recipient_type, 'hotel'::notification_recipient_type)
);
