alter table travel_requests
add column if not exists nickname text,
add column if not exists room_details jsonb not null default '[]'::jsonb,
add column if not exists preference_filters jsonb not null default '{}'::jsonb;

-- preference_filters userà chiavi come:
-- connecting_rooms, disabled_access, pool, spa, bathtub, garage, beach
