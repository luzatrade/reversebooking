-- Dopo conferma email, promuovi ad active (salvo rivendica onboarding con telefono pendente).

create or replace function public.enforce_profile_email_confirmation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  confirmed_at timestamptz;
  onboarding_hotel uuid;
begin
  select u.email_confirmed_at
  into confirmed_at
  from auth.users u
  where u.id = new.user_id;

  if confirmed_at is null then
    new.email_verified := false;
    new.account_status := 'pending_verification';
    return new;
  end if;

  new.email_verified := true;

  select h.onboarding_hotel_id
  into onboarding_hotel
  from public.hotel_accounts h
  where h.user_id = new.user_id;

  if new.account_status = 'pending_verification'
     and not (new.role = 'hotel' and onboarding_hotel is not null and coalesce(new.phone_verified, false) = false) then
    new.account_status := 'active';
  end if;

  return new;
end;
$$;

create or replace function public.enforce_hotel_email_confirmation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  confirmed_at timestamptz;
  phone_ok boolean;
begin
  select u.email_confirmed_at
  into confirmed_at
  from auth.users u
  where u.id = new.user_id;

  if confirmed_at is null then
    new.account_status := 'pending_verification';
    return new;
  end if;

  if new.account_status <> 'pending_verification' then
    return new;
  end if;

  if new.onboarding_hotel_id is null then
    new.account_status := 'active';
    return new;
  end if;

  select coalesce(p.phone_verified, false)
  into phone_ok
  from public.profiles p
  where p.user_id = new.user_id;

  if phone_ok then
    new.account_status := 'active';
  end if;

  return new;
end;
$$;

update public.profiles p
set
  email_verified = true,
  account_status = case
    when p.role = 'hotel'
      and exists (
        select 1
        from public.hotel_accounts h
        where h.user_id = p.user_id
          and h.onboarding_hotel_id is not null
          and coalesce(p.phone_verified, false) = false
      ) then 'pending_verification'::account_status
    else 'active'::account_status
  end
from auth.users u
where p.user_id = u.id
  and u.email_confirmed_at is not null
  and (p.email_verified = false or p.account_status = 'pending_verification');

update public.hotel_accounts h
set account_status = case
  when h.onboarding_hotel_id is not null
    and exists (
      select 1 from public.profiles p
      where p.user_id = h.user_id and coalesce(p.phone_verified, false) = false
    ) then 'pending_verification'::account_status
  else 'active'::account_status
end
from auth.users u
where h.user_id = u.id
  and u.email_confirmed_at is not null
  and h.account_status = 'pending_verification';
