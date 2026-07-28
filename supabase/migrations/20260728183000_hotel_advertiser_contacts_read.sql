-- Consente alle strutture verificate di leggere i contatti inserzionista
-- sulle richieste attive compatibili con la loro città.

create or replace function public.advertiser_profile_publicly_readable(target_profile_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from travel_requests tr
    where tr.advertiser_id = target_profile_id
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
      )
  )
  or exists (
    select 1
    from travel_requests tr
    join advertiser_profiles ap on ap.id = tr.advertiser_id
    where tr.advertiser_id = target_profile_id
      and ap.user_id = auth.uid()
  )
  or exists (
    select 1
    from travel_requests tr
    join offers o on o.travel_request_id = tr.id
    join hotel_accounts h on h.id = o.hotel_account_id
    where tr.advertiser_id = target_profile_id
      and h.user_id = auth.uid()
  )
  or exists (
    select 1
    from travel_requests tr
    join hotel_accounts h on h.user_id = auth.uid()
    where tr.advertiser_id = target_profile_id
      and tr.status = 'active'
      and tr.expires_at > now()
      and h.account_status = 'active'
      and h.subscription_active = true
      and h.country_code = tr.country_code
      and h.city_id = tr.city_id
      and (
        tr.preferred_structure_type = 'all'
        or tr.preferred_structure_type::text = h.structure_type::text
      )
  );
$$;

grant execute on function public.advertiser_profile_publicly_readable(uuid) to anon, authenticated;
