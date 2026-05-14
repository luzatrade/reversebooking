create table if not exists offer_messages (
  id uuid primary key default gen_random_uuid(),
  offer_id uuid not null references offers(id) on delete cascade,
  sender_id uuid not null references auth.users(id) on delete cascade,
  sender_role user_role not null,
  body text not null,
  created_at timestamptz not null default now()
);

alter table offer_messages enable row level security;

create index if not exists offer_messages_offer_id_created_at_idx
on offer_messages (offer_id, created_at);

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
