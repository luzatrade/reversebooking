-- Trattamento base del pacchetto agenzia (come board_basis per offerte hotel).

alter table if exists public.agency_offer_details
  add column if not exists board_basis meal_plan not null default 'breakfast';

comment on column public.agency_offer_details.board_basis is 'Formula ricettiva base del pacchetto (RO/BB/HB/FB/AI).';
