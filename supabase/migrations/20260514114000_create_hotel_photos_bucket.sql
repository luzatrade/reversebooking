insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'hotel-photos',
  'hotel-photos',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

alter table hotel_accounts
add column if not exists gallery_photo_urls text[] not null default '{}';

drop policy if exists "hotel-photos-public-read" on storage.objects;
create policy "hotel-photos-public-read"
on storage.objects
for select
using (bucket_id = 'hotel-photos');

drop policy if exists "hotel-photos-user-upload" on storage.objects;
create policy "hotel-photos-user-upload"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'hotel-photos'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "hotel-photos-user-update" on storage.objects;
create policy "hotel-photos-user-update"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'hotel-photos'
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id = 'hotel-photos'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "hotel-photos-user-delete" on storage.objects;
create policy "hotel-photos-user-delete"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'hotel-photos'
  and (storage.foldername(name))[1] = auth.uid()::text
);
