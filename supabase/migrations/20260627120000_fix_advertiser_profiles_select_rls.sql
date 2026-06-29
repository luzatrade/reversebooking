-- Fix: lettura advertiser_profiles bloccata da ricorsione RLS.
-- ap_select_public_display interroga travel_requests (RLS) che a sua volta
-- interroga advertiser_profiles → errore 42P17 "infinite recursion".
-- Soluzione: policy "own" semplice + funzione SECURITY DEFINER per la vetrina.

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
  );
$$;

grant execute on function public.advertiser_profile_publicly_readable(uuid) to anon, authenticated;

drop policy if exists "ap_select_public_display" on advertiser_profiles;

create policy "ap_select_own"
on advertiser_profiles
for select
to authenticated
using (user_id = auth.uid());

create policy "ap_select_public_display"
on advertiser_profiles
for select
to anon, authenticated
using (public.advertiser_profile_publicly_readable(id));
