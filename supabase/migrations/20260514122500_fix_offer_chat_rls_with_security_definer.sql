create or replace function public.can_access_travel_request(target_request_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from travel_requests tr
    join advertiser_profiles ap on ap.id = tr.advertiser_id
    where tr.id = target_request_id
      and ap.user_id = auth.uid()
  )
  or exists (
    select 1
    from offers o
    join hotel_accounts h on h.id = o.hotel_account_id
    where o.travel_request_id = target_request_id
      and h.user_id = auth.uid()
  )
  or exists (
    select 1
    from travel_requests tr
    where tr.id = target_request_id
      and tr.status = 'active'
  );
$$;

create or replace function public.can_access_offer(target_offer_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from offers o
    join hotel_accounts h on h.id = o.hotel_account_id
    where o.id = target_offer_id
      and h.user_id = auth.uid()
  )
  or exists (
    select 1
    from offers o
    join travel_requests tr on tr.id = o.travel_request_id
    join advertiser_profiles ap on ap.id = tr.advertiser_id
    where o.id = target_offer_id
      and ap.user_id = auth.uid()
  );
$$;

create or replace function public.can_access_accepted_offer(target_offer_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from offers o
    where o.id = target_offer_id
      and o.status = 'accepted'
      and public.can_access_offer(o.id)
  );
$$;

grant execute on function public.can_access_travel_request(uuid) to authenticated;
grant execute on function public.can_access_offer(uuid) to authenticated;
grant execute on function public.can_access_accepted_offer(uuid) to authenticated;

drop policy if exists "travel-requests-select-participants" on travel_requests;
drop policy if exists "travel-requests-select-owner-active" on travel_requests;
drop policy if exists "travel-requests-select-public-active" on travel_requests;

create policy "travel-requests-select-accessible"
on travel_requests
for select
to authenticated
using (public.can_access_travel_request(id));

drop policy if exists "offers-select-participants" on offers;
drop policy if exists "offers-select-own" on offers;
drop policy if exists "offers-select-hotel-or-advertiser" on offers;

create policy "offers-select-accessible"
on offers
for select
to authenticated
using (public.can_access_offer(id));

drop policy if exists "offer-messages-select-participants" on offer_messages;
create policy "offer-messages-select-participants"
on offer_messages
for select
to authenticated
using (public.can_access_accepted_offer(offer_id));

drop policy if exists "offer-messages-insert-participants" on offer_messages;
create policy "offer-messages-insert-participants"
on offer_messages
for insert
to authenticated
with check (
  sender_id = auth.uid()
  and public.can_access_accepted_offer(offer_id)
);
