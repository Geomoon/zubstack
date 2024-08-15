create database zubstack_db;

\connect zubstack_db;

create table if not exists blogs (
  blog_id uuid default gen_random_uuid(),
  blog_title varchar(80) not null,
  blog_content text not null,
  blog_tags varchar,
  blog_votes integer not null default 0,
  blog_author varchar(30),
  created_at timestamp with time zone,

  constraint blogs_pk PRIMARY KEY(blog_id)
);

