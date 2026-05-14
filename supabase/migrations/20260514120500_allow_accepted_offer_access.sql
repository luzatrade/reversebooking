drop policy if exists "offers-select-participants" on offers;
create policy "offers-select-participants"
on offers
for select
to authenticated
using (
  exists (
    select 1
    from hotel_accounts h
    where h.id = offers.hotel_account_id
      and h.user_id = auth.uid()
  )
  or exists (
    select 1
    from travel_requests tr
    join advertiser_profiles ap on ap.id = tr.advertiser_id
    where tr.id = offers.travel_request_id
      and ap.user_id = auth.uid()
  )
);

drop policy if exists "travel-requests-select-participants" on travel_requests;
create policy "travel-requests-select-participants"
on travel_requests
for select
to authenticated
using (
  advertiser_id in (
    select id from advertiser_profiles where user_id = auth.uid()
  )
  or status = 'active'
  or exists (
    select 1
    from offers o
    join hotel_accounts h on h.id = o.hotel_account_id
    where o.travel_request_id = travel_requests.id
      and h.user_id = auth.uid()
  )
);

drop policy if exists "offer-messages-select-participants" on offer_messages;
create policy "offer-messages-select-participants"
on offer_messages
for select
to authenticated
using (
  exists (
    select 1
    from offers o
    join hotel_accounts h on h.id = o.hotel_account_id
    join travel_requests tr on tr.id = o.travel_request_id
    join advertiser_profiles ap on ap.id = tr.advertiser_id
    where o.id = offer_messages.offer_id
      and o.status = 'accepted'
      and (h.user_id = auth.uid() or ap.user_id = auth.uid())
  )
);

drop policy if exists "offer-messages-insert-participants" on offer_messages;
create policy "offer-messages-insert-participants"
on offer_messages
for insert
to authenticated
with check (
  sender_id = auth.uid()
  and exists (
    select 1
    from offers o
    join hotel_accounts h on h.id = o.hotel_account_id
    join travel_requests tr on tr.id = o.travel_request_id
    join advertiser_profiles ap on ap.id = tr.advertiser_id
    where o.id = offer_messages.offer_id
      and o.status = 'accepted'
      and (h.user_id = auth.uid() or ap.user_id = auth.uid())
  )
);
