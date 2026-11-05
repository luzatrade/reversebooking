-- Difesa in profondità contro l'escalation di privilegi su profiles.role.

create or replace function public.guard_profiles_role_escalation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  caller text := coalesce(
    nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role',
    current_user
  );
begin
  if caller in ('service_role', 'supabase_admin', 'postgres') then
    return new;
  end if;

  if new.role = 'admin' then
    raise exception 'Ruolo admin non assegnabile dal client'
      using errcode = '42501';
  end if;

  if tg_op = 'UPDATE' and old.role = 'admin' then
    raise exception 'Profilo admin non modificabile dal client'
      using errcode = '42501';
  end if;

  return new;
end;
$$;

drop trigger if exists profiles_guard_role_escalation on public.profiles;

create trigger profiles_guard_role_escalation
before insert or update on public.profiles
for each row
execute function public.guard_profiles_role_escalation();
