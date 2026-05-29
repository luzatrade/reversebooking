-- Fase 2 sicurezza: riabilita Row Level Security su travel_requests, offers,
-- offer_messages e notifications (disabilitate in 20260514125500 per l'MVP).
--
-- Principi:
--  * Le richieste di viaggio ATTIVE restano leggibili pubblicamente (anon+auth):
--    sono annunci pubblici mostrati in home/showcase.
--  * Tutto il resto (offerte, messaggi chat, notifiche, richieste non attive)
--    è visibile solo a proprietari/partecipanti.
--  * Le funzioni SECURITY DEFINER evitano la ricorsione tra policy (problema
--    che aveva portato alla disattivazione dell'RLS).

-- ---------------------------------------------------------------------------
-- Funzioni helper (SECURITY DEFINER: bypassano l'RLS delle tabelle interne)
-- ---------------------------------------------------------------------------
create or replace function public.can_access_offer(target_offer_id uuid)
returns boolean language sql security definer set search_path = public as $$
  select exists (
    select 1 from offers o
    join hotel_accounts h on h.id = o.hotel_account_id
    where o.id = target_offer_id and h.user_id = auth.uid()
  )
  or exists (
    select 1 from offers o
    join travel_requests tr on tr.id = o.travel_request_id
    join advertiser_profiles ap on ap.id = tr.advertiser_id
    where o.id = target_offer_id and ap.user_id = auth.uid()
  );
$$;

create or replace function public.can_access_travel_request(target_request_id uuid)
returns boolean language sql security definer set search_path = public as $$
  select exists (
    select 1 from travel_requests tr
    where tr.id = target_request_id and tr.status = 'active'
  )
  or exists (
    select 1 from travel_requests tr
    join advertiser_profiles ap on ap.id = tr.advertiser_id
    where tr.id = target_request_id and ap.user_id = auth.uid()
  )
  or exists (
    select 1 from offers o
    join hotel_accounts h on h.id = o.hotel_account_id
    where o.travel_request_id = target_request_id and h.user_id = auth.uid()
  );
$$;

create or replace function public.can_access_accepted_offer(target_offer_id uuid)
returns boolean language sql security definer set search_path = public as $$
  select exists (
    select 1 from offers o
    where o.id = target_offer_id and o.status = 'accepted' and public.can_access_offer(o.id)
  );
$$;

grant execute on function public.can_access_offer(uuid) to anon, authenticated;
grant execute on function public.can_access_travel_request(uuid) to anon, authenticated;
grant execute on function public.can_access_accepted_offer(uuid) to anon, authenticated;

-- ---------------------------------------------------------------------------
-- Pulizia di tutte le policy precedenti (MVP e storiche) sulle 4 tabelle
-- ---------------------------------------------------------------------------
drop policy if exists "travel_requests_select_mvp_authenticated" on travel_requests;
drop policy if exists "travel_requests_update_mvp_authenticated" on travel_requests;
drop policy if exists "travel_requests_select_accessible" on travel_requests;
drop policy if exists "requests-advertiser-own" on travel_requests;
drop policy if exists "requests-hotel-city" on travel_requests;
drop policy if exists "travel-requests-select-participants" on travel_requests;
drop policy if exists "travel-requests-select-owner-active" on travel_requests;
drop policy if exists "travel-requests-select-accessible" on travel_requests;
drop policy if exists "tr_select_active_public" on travel_requests;
drop policy if exists "tr_select_authed" on travel_requests;
drop policy if exists "tr_advertiser_write" on travel_requests;

drop policy if exists "offers_select_mvp_authenticated" on offers;
drop policy if exists "offers_update_mvp_authenticated" on offers;
drop policy if exists "offers_select_accessible" on offers;
drop policy if exists "offers_update_accessible" on offers;
drop policy if exists "offers-hotel-own" on offers;
drop policy if exists "offers-advertiser-own" on offers;
drop policy if exists "offers-select-participants" on offers;
drop policy if exists "off_select" on offers;
drop policy if exists "off_hotel_write" on offers;
drop policy if exists "off_advertiser_update" on offers;

drop policy if exists "offer_messages_select_mvp_authenticated" on offer_messages;
drop policy if exists "offer_messages_insert_mvp_authenticated" on offer_messages;
drop policy if exists "offer_messages_select_accepted_participants" on offer_messages;
drop policy if exists "offer_messages_insert_accepted_participants" on offer_messages;
drop policy if exists "offer-messages-select-participants" on offer_messages;
drop policy if exists "offer-messages-insert-participants" on offer_messages;
drop policy if exists "om_select" on offer_messages;
drop policy if exists "om_insert" on offer_messages;

drop policy if exists "notifications-recipient" on notifications;
drop policy if exists "notifications-hotel-insert" on notifications;
drop policy if exists "notif_select" on notifications;
drop policy if exists "notif_update" on notifications;
drop policy if exists "notif_insert" on notifications;

-- ---------------------------------------------------------------------------
-- travel_requests
-- ---------------------------------------------------------------------------
-- Annunci attivi: leggibili da tutti (anon + autenticati) per home/showcase.
create policy "tr_select_active_public" on travel_requests
  for select to anon, authenticated
  using (status = 'active');

-- Accesso esteso per autenticati: proprie richieste + richieste su cui l'hotel
-- ha un'offerta (anche se non più attive, necessario per la chat post-accettazione).
create policy "tr_select_authed" on travel_requests
  for select to authenticated
  using (public.can_access_travel_request(id));

-- L'advertiser gestisce le proprie richieste (insert/update/delete).
create policy "tr_advertiser_write" on travel_requests
  for all to authenticated
  using (exists (select 1 from advertiser_profiles ap where ap.id = travel_requests.advertiser_id and ap.user_id = auth.uid()))
  with check (exists (select 1 from advertiser_profiles ap where ap.id = travel_requests.advertiser_id and ap.user_id = auth.uid()));

-- ---------------------------------------------------------------------------
-- offers
-- ---------------------------------------------------------------------------
-- Lettura: solo partecipanti (hotel proprietario o advertiser della richiesta).
create policy "off_select" on offers
  for select to authenticated
  using (public.can_access_offer(id));

-- L'hotel gestisce le proprie offerte (insert/update/delete/select).
create policy "off_hotel_write" on offers
  for all to authenticated
  using (exists (select 1 from hotel_accounts h where h.id = offers.hotel_account_id and h.user_id = auth.uid()))
  with check (exists (select 1 from hotel_accounts h where h.id = offers.hotel_account_id and h.user_id = auth.uid()));

-- L'advertiser può aggiornare lo stato delle offerte sulle proprie richieste (accetta/rifiuta).
create policy "off_advertiser_update" on offers
  for update to authenticated
  using (public.can_access_offer(id))
  with check (public.can_access_offer(id));

-- ---------------------------------------------------------------------------
-- offer_messages (chat privata): solo partecipanti di un'offerta accettata.
-- ---------------------------------------------------------------------------
create policy "om_select" on offer_messages
  for select to authenticated
  using (public.can_access_accepted_offer(offer_id));

create policy "om_insert" on offer_messages
  for insert to authenticated
  with check (sender_id = auth.uid() and public.can_access_accepted_offer(offer_id));

-- ---------------------------------------------------------------------------
-- notifications: il destinatario vede/aggiorna solo le proprie.
-- (recipient_id = hotel_account.id per gli hotel; per gli advertiser il match
--  avviene tramite travel_request_id, com'è scritto/letto dall'app.)
-- ---------------------------------------------------------------------------
create policy "notif_select" on notifications
  for select to authenticated
  using (
    (recipient_type = 'hotel' and exists (
      select 1 from hotel_accounts h where h.id = notifications.recipient_id and h.user_id = auth.uid()))
    or (recipient_type = 'advertiser' and exists (
      select 1 from travel_requests tr
      join advertiser_profiles ap on ap.id = tr.advertiser_id
      where tr.id = notifications.travel_request_id and ap.user_id = auth.uid()))
  );

create policy "notif_update" on notifications
  for update to authenticated
  using (
    (recipient_type = 'hotel' and exists (
      select 1 from hotel_accounts h where h.id = notifications.recipient_id and h.user_id = auth.uid()))
    or (recipient_type = 'advertiser' and exists (
      select 1 from travel_requests tr
      join advertiser_profiles ap on ap.id = tr.advertiser_id
      where tr.id = notifications.travel_request_id and ap.user_id = auth.uid()))
  )
  with check (true);

-- Inserimento notifiche dal client: consentito agli autenticati (una parte
-- crea notifiche per la controparte). L'invio email/notifiche server-side usa
-- comunque la service role. Da irrigidire in futuro spostando tutto server-side.
create policy "notif_insert" on notifications
  for insert to authenticated
  with check (auth.uid() is not null);

-- ---------------------------------------------------------------------------
-- Riattiva RLS
-- ---------------------------------------------------------------------------
alter table travel_requests enable row level security;
alter table offers enable row level security;
alter table offer_messages enable row level security;
alter table notifications enable row level security;
