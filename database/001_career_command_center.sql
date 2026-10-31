-- SkillBridge AI: Career Command Center schema
-- PostgreSQL / Supabase
-- Safe to run once in the Supabase SQL Editor or through Supabase migrations.

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.careers (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  title text not null,
  description text not null default '',
  icon text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint careers_slug_not_blank check (length(btrim(slug)) > 0),
  constraint careers_title_not_blank check (length(btrim(title)) > 0),
  constraint careers_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')
);

create unique index if not exists careers_slug_uidx
  on public.careers (slug);

drop trigger if exists careers_set_updated_at on public.careers;
create trigger careers_set_updated_at
before update on public.careers
for each row execute function public.set_updated_at();

create table if not exists public.roadmap_nodes (
  id uuid primary key default gen_random_uuid(),
  career_id uuid not null,
  title text not null,
  description text not null default '',
  level smallint not null default 1,
  sort_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  constraint roadmap_nodes_career_fk
    foreign key (career_id)
    references public.careers (id)
    on delete cascade,
  constraint roadmap_nodes_title_not_blank check (length(btrim(title)) > 0),
  constraint roadmap_nodes_level_positive check (level > 0),
  constraint roadmap_nodes_sort_order_nonnegative check (sort_order >= 0)
);

create index if not exists roadmap_nodes_career_idx
  on public.roadmap_nodes (career_id);

create unique index if not exists roadmap_nodes_career_order_uidx
  on public.roadmap_nodes (career_id, sort_order);

create table if not exists public.roadmap_edges (
  id uuid primary key default gen_random_uuid(),
  parent_node uuid not null,
  child_node uuid not null,
  constraint roadmap_edges_parent_fk
    foreign key (parent_node)
    references public.roadmap_nodes (id)
    on delete cascade,
  constraint roadmap_edges_child_fk
    foreign key (child_node)
    references public.roadmap_nodes (id)
    on delete cascade,
  constraint roadmap_edges_no_self_reference check (parent_node <> child_node),
  constraint roadmap_edges_distinct_nodes unique (parent_node, child_node)
);

create index if not exists roadmap_edges_parent_idx
  on public.roadmap_edges (parent_node);

create index if not exists roadmap_edges_child_idx
  on public.roadmap_edges (child_node);

create table if not exists public.progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  node_id uuid not null,
  completed boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  constraint progress_user_fk
    foreign key (user_id)
    references auth.users (id)
    on delete cascade,
  constraint progress_node_fk
    foreign key (node_id)
    references public.roadmap_nodes (id)
    on delete cascade,
  constraint progress_completion_timestamp_check
    check (
      (completed = true and completed_at is not null)
      or (completed = false and completed_at is null)
    ),
  constraint progress_user_node_unique unique (user_id, node_id)
);

create index if not exists progress_user_idx
  on public.progress (user_id);

create index if not exists progress_node_idx
  on public.progress (node_id);

create index if not exists progress_user_completed_idx
  on public.progress (user_id, completed);

create or replace function public.set_progress_completion_timestamp()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  if new.completed then
    if not old.completed or new.completed_at is null then
      new.completed_at = coalesce(new.completed_at, timezone('utc', now()));
    end if;
  else
    new.completed_at = null;
  end if;

  return new;
end;
$$;

drop trigger if exists progress_set_completion_timestamp on public.progress;
create trigger progress_set_completion_timestamp
before insert or update on public.progress
for each row execute function public.set_progress_completion_timestamp();

alter table public.careers enable row level security;
alter table public.roadmap_nodes enable row level security;
alter table public.roadmap_edges enable row level security;
alter table public.progress enable row level security;

drop policy if exists careers_public_read on public.careers;
create policy careers_public_read
on public.careers
for select
to anon, authenticated
using (true);

drop policy if exists roadmap_nodes_public_read on public.roadmap_nodes;
create policy roadmap_nodes_public_read
on public.roadmap_nodes
for select
to anon, authenticated
using (true);

drop policy if exists roadmap_edges_public_read on public.roadmap_edges;
create policy roadmap_edges_public_read
on public.roadmap_edges
for select
to anon, authenticated
using (true);

drop policy if exists progress_owner_read on public.progress;
create policy progress_owner_read
on public.progress
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists progress_owner_insert on public.progress;
create policy progress_owner_insert
on public.progress
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists progress_owner_update on public.progress;
create policy progress_owner_update
on public.progress
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists progress_owner_delete on public.progress;
create policy progress_owner_delete
on public.progress
for delete
to authenticated
using (auth.uid() = user_id);

-- Verification queries
select
  table_name,
  table_type
from information_schema.tables
where table_schema = 'public'
  and table_name in ('careers', 'roadmap_nodes', 'roadmap_edges', 'progress')
order by table_name;

select
  tc.table_name,
  tc.constraint_name,
  tc.constraint_type
from information_schema.table_constraints tc
where tc.table_schema = 'public'
  and tc.table_name in ('careers', 'roadmap_nodes', 'roadmap_edges', 'progress')
order by tc.table_name, tc.constraint_name;

select
  schemaname,
  tablename,
  indexname
from pg_indexes
where schemaname = 'public'
  and tablename in ('careers', 'roadmap_nodes', 'roadmap_edges', 'progress')
order by tablename, indexname;

select
  count(*) filter (where table_name = 'careers') as careers_exists,
  count(*) filter (where table_name = 'roadmap_nodes') as roadmap_nodes_exists,
  count(*) filter (where table_name = 'roadmap_edges') as roadmap_edges_exists,
  count(*) filter (where table_name = 'progress') as progress_exists
from information_schema.tables
where table_schema = 'public'
  and table_name in ('careers', 'roadmap_nodes', 'roadmap_edges', 'progress');
