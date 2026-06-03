-- Allow chat on pending offers (before acceptance) for hotel + advertiser participants.

drop policy if exists "om_select" on offer_messages;
drop policy if exists "om_insert" on offer_messages;

create policy "om_select" on offer_messages
  for select to authenticated
  using (
    public.can_access_offer(offer_id)
    and exists (
      select 1 from offers o
      where o.id = offer_messages.offer_id
        and o.status in ('pending', 'accepted')
    )
  );

create policy "om_insert" on offer_messages
  for insert to authenticated
  with check (
    sender_id = auth.uid()
    and public.can_access_offer(offer_id)
    and exists (
      select 1 from offers o
      where o.id = offer_messages.offer_id
        and o.status in ('pending', 'accepted')
    )
  );
