-- Jalankan sekali di Supabase Dashboard > SQL Editor.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 3 and 180),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  excerpt text,
  content text not null,
  category text not null default 'WEB3',
  tags text[] not null default '{}',
  cover_url text,
  status text not null default 'draft' check (status in ('draft','published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Aman dijalankan juga bila tabel posts sudah dibuat sebelum fitur tag ditambahkan.
alter table public.posts add column if not exists tags text[] not null default '{}';

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;
drop trigger if exists on_posts_updated on public.posts;
create trigger on_posts_updated before update on public.posts for each row execute procedure public.set_updated_at();

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin insert into public.profiles (id) values (new.id); return new; end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and is_admin = true);
$$;

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
create policy "public reads published posts" on public.posts for select using (status = 'published' or public.is_admin());
create policy "admin manages posts" on public.posts for all using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id,name,public) values ('post-covers','post-covers',true) on conflict (id) do nothing;
create policy "public reads cover images" on storage.objects for select using (bucket_id = 'post-covers');
create policy "admin manages cover images" on storage.objects for all using (bucket_id = 'post-covers' and public.is_admin()) with check (bucket_id = 'post-covers' and public.is_admin());

-- Setelah membuat akun pertama lewat Authentication > Users, jalankan baris ini satu kali:
-- update public.profiles set is_admin = true where id = 'UUID_AKUN_ANDA';
