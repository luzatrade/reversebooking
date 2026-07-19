-- Servizi estesi (ristorante, wifi, colazione…) e regole della casa sul profilo struttura.

alter table public.hotel_accounts
  add column if not exists house_rules jsonb not null default '{
    "check_in": "15:00",
    "check_out": "11:00",
    "smoking_allowed": false,
    "pets_policy": "not_allowed",
    "pets_notes": "",
    "children_welcome": true,
    "deposit_notes": "",
    "cancellation_notes": "",
    "other_notes": ""
  }'::jsonb;

alter table public.hotel_accounts
  alter column services set default '{
    "wifi": false,
    "breakfast": false,
    "restaurant": false,
    "pool": false,
    "spa": false,
    "garage": false,
    "beach": false,
    "pets_allowed": false,
    "disabled_access": false
  }'::jsonb;

update public.hotel_accounts
set services = coalesce(services, '{}'::jsonb)
  || '{"wifi": false, "breakfast": false, "restaurant": false, "beach": false}'::jsonb
where services is not null;
