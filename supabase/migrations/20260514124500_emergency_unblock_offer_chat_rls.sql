drop policy if exists "travel-requests-select-participants" on travel_requests;
drop policy if exists "travel-requests-select-owner-active" on travel_requests;
drop policy if exists "travel-requests-select-public-active" on travel_requests;
drop policy if exists "travel-requests-select-accessible" on travel_requests;
drop policy if exists "travel_requests_select_accessible" on travel_requests;

drop policy if exists "offers-select-participants" on offers;
drop policy if exists "offers-select-own" on offers;
drop policy if exists "offers-select-hotel-or-advertiser" on offers;
drop policy if exists "offers-select-accessible" on offers;
drop policy if exists "offers_select_accessible" on offers;
drop policy if exists "offers_update_accessible" on offers;

drop policy if exists "offer-messages-select-participants" on offer_messages;
drop policy if exists "offer-messages-insert-participants" on offer_messages;
drop policy if exists "offer_messages_select_accepted_participants" on offer_messages;
drop policy if exists "offer_messages_insert_accepted_participants" on offer_messages;

create policy "travel_requests_select_mvp_authenticated"
on travel_requests
for select
to authenticated
using (true);

create policy "travel_requests_update_mvp_authenticated"
on travel_requests
for update
to authenticated
using (true)
with check (true);

create policy "offers_select_mvp_authenticated"
on offers
for select
to authenticated
using (true);

create policy "offers_update_mvp_authenticated"
on offers
for update
to authenticated
using (true)
with check (true);

create policy "offer_messages_select_mvp_authenticated"
on offer_messages
for select
to authenticated
using (true);

create policy "offer_messages_insert_mvp_authenticated"
on offer_messages
for insert
to authenticated
with check (sender_id = auth.uid());
