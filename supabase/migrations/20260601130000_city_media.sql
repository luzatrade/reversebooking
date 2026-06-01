-- City media: galleria foto per città (≥10) + descrizione città, servite dal
-- nostro storage. Le foto vengono scaricate una volta e ricaricate sul bucket
-- pubblico "city-media": a runtime l'app non chiama mai API esterne.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'city-media',
  'city-media',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "city-media-public-read" on storage.objects;
create policy "city-media-public-read"
on storage.objects
for select
using (bucket_id = 'city-media');

create table if not exists city_media (
  id uuid primary key default gen_random_uuid(),
  city_id text not null,
  position integer not null default 0,
  storage_path text not null,
  public_url text not null,
  title_it text,
  title_en text,
  caption_it text,
  caption_en text,
  attribution text,
  source text not null default 'commons',
  curated boolean not null default false,
  created_at timestamptz not null default now(),
  unique (city_id, storage_path)
);

create index if not exists idx_city_media_city on city_media(city_id, position);

create table if not exists city_info (
  city_id text primary key,
  description_it text,
  description_en text,
  source text,
  updated_at timestamptz not null default now()
);

alter table city_media enable row level security;
alter table city_info enable row level security;

drop policy if exists "city_media_public_read" on city_media;
create policy "city_media_public_read" on city_media for select using (true);

drop policy if exists "city_info_public_read" on city_info;
create policy "city_info_public_read" on city_info for select using (true);
