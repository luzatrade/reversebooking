-- Audit log delle azioni amministrative sensibili (impersonate, cambi di
-- stato, eliminazioni). Scrittura solo via service_role (bypassa l'RLS);
-- lettura consentita ai soli admin.

create table if not exists public.admin_audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid,
  actor_email text,
  action text not null,
  target_type text,
  target_id text,
  details jsonb,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists admin_audit_log_created_at_idx
  on public.admin_audit_log (created_at desc);

alter table public.admin_audit_log enable row level security;

drop policy if exists "admin_audit_select_admin" on public.admin_audit_log;
create policy "admin_audit_select_admin" on public.admin_audit_log
  for select to authenticated
  using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.role = 'admin'));
