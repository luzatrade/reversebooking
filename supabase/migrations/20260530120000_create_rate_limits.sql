-- Rate limiting applicativo (fixed-window) per le route API.
-- La tabella tiene un contatore per chiave (es. "register:1.2.3.4") e la
-- funzione check_rate_limit lo incrementa atomicamente, azzerandolo quando la
-- finestra è scaduta. Pensata per essere chiamata SOLO lato server (service
-- role) tramite rpc. RLS abilitato senza policy: nessun accesso da anon/auth.

create table if not exists public.rate_limits (
  key text primary key,
  count integer not null default 0,
  window_start timestamptz not null default now()
);

alter table public.rate_limits enable row level security;
-- Nessuna policy: solo service_role / SECURITY DEFINER possono accedere.

-- Restituisce true se la richiesta è AMMESSA (entro il limite), false se supera.
create or replace function public.check_rate_limit(
  p_key text,
  p_max integer,
  p_window_seconds integer
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_now timestamptz := now();
  v_count integer;
begin
  insert into public.rate_limits as rl (key, count, window_start)
  values (p_key, 1, v_now)
  on conflict (key) do update
    set count = case
                  when rl.window_start < v_now - make_interval(secs => p_window_seconds) then 1
                  else rl.count + 1
                end,
        window_start = case
                  when rl.window_start < v_now - make_interval(secs => p_window_seconds) then v_now
                  else rl.window_start
                end
  returning rl.count into v_count;

  return v_count <= p_max;
end;
$$;

revoke all on function public.check_rate_limit(text, integer, integer) from public;
grant execute on function public.check_rate_limit(text, integer, integer) to service_role;
