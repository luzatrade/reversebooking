-- ROLLBACK della migration 20260529000000_reenable_rls_phase2.sql
-- Ripristina lo stato precedente: RLS DISABILITATO sulle 4 tabelle.
-- Usare SOLO in caso di problemi dopo la riattivazione dell'RLS.

alter table travel_requests disable row level security;
alter table offers disable row level security;
alter table offer_messages disable row level security;
alter table notifications disable row level security;
