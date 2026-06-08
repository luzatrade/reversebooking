-- Consente la lettura del profilo inserzionista (nome pubblico) quando la richiesta
-- è visibile in vetrina o accessibile all'utente autenticato (es. hotel in città).
-- I client devono selezionare solo first_name, last_name, advertiser_type, short_description.

drop policy if exists "ap_select_public_display" on advertiser_profiles;

create policy "ap_select_public_display"
on advertiser_profiles
for select
to anon, authenticated
using (
  exists (
    select 1
    from travel_requests tr
    where tr.advertiser_id = advertiser_profiles.id
      and (
        (tr.status = 'active' and tr.expires_at > now())
        or (
          tr.status = 'completed'
          and exists (
            select 1
            from offers o
            where o.travel_request_id = tr.id
              and o.status = 'accepted'
              and o.updated_at > now() - interval '24 hours'
          )
        )
        or (
          auth.uid() is not null
          and public.can_access_travel_request(tr.id)
        )
      )
  )
);
