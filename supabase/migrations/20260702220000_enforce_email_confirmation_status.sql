-- Gli account senza email confermata non devono risultare attivi in console o operativi.

create or replace function public.enforce_profile_email_confirmation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  confirmed_at timestamptz;
begin
  select u.email_confirmed_at
  into confirmed_at
  from auth.users u
  where u.id = new.user_id;

  if confirmed_at is null then
    new.email_verified := false;
    new.account_status := 'pending_verification';
  else
    new.email_verified := true;
  end if;

  return new;
end;
$$;

drop trigger if exists trg_enforce_profile_email_confirmation on public.profiles;
create trigger trg_enforce_profile_email_confirmation
before insert or update on public.profiles
for each row
execute function public.enforce_profile_email_confirmation();

create or replace function public.enforce_hotel_email_confirmation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  confirmed_at timestamptz;
begin
  select u.email_confirmed_at
  into confirmed_at
  from auth.users u
  where u.id = new.user_id;

  if confirmed_at is null then
    new.account_status := 'pending_verification';
  end if;

  return new;
end;
$$;

drop trigger if exists trg_enforce_hotel_email_confirmation on public.hotel_accounts;
create trigger trg_enforce_hotel_email_confirmation
before insert or update on public.hotel_accounts
for each row
execute function public.enforce_hotel_email_confirmation();

update public.profiles p
set
  email_verified = false,
  account_status = 'pending_verification'
from auth.users u
where p.user_id = u.id
  and u.email_confirmed_at is null
  and (p.account_status = 'active' or p.email_verified = true);

update public.hotel_accounts h
set account_status = 'pending_verification'
from auth.users u
where h.user_id = u.id
  and u.email_confirmed_at is null
  and h.account_status = 'active';
