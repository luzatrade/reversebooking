-- Consenso condizioni abbonamento (hotel) al primo pagamento Stripe
alter table public.user_consents
  add column if not exists subscription_terms_accepted boolean not null default false,
  add column if not exists subscription_terms_version text,
  add column if not exists subscription_terms_at timestamptz;
