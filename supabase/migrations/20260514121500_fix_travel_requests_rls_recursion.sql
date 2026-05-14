drop policy if exists "travel-requests-select-participants" on travel_requests;

drop policy if exists "travel-requests-select-owner-active" on travel_requests;
create policy "travel-requests-select-owner-active"
on travel_requests
for select
to authenticated
using (
  status = 'active'
  or advertiser_id in (
    select id
    from advertiser_profiles
    where user_id = auth.uid()
  )
);

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
    from advertiser_profiles ap
    where ap.user_id = auth.uid()
      and ap.id in (
        select tr.advertiser_id
        from travel_requests tr
        where tr.id = offers.travel_request_id
      )
  )
);
