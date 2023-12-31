create table users (
  id SERIAL PRIMARY KEY,
  user_id text UNIQUE NOT NULL,
  username text UNIQUE,
  email text NOT NULL UNIQUE,
  name text NOT NULL,
  subscription_id int,
  last_seen timestamptz default now(),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

CREATE TABLE "container" (
  "id" int PRIMARY KEY,
  "image_id" int,
  "user_id" text,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "memory" (
  "id" int PRIMARY KEY,
  "subject" varchar,
  "encrypted_memory" varchar,
  "container_id" int,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "image_table" (
  "id" BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "img_url" varchar,
  "s3_key" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "subscription_configs" (
  "id" BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar,
  "cost" int,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "journal_entries" (
  "id" int PRIMARY KEY,
  "memory_id" int,
  "subject" varchar,
  "notes" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "memory_rating" (
  "id" int PRIMARY KEY,
  "rating" int,
  "memory_id" int,
  "created_at" timestamp
);

CREATE TABLE "overall_rating" (
  "id" int PRIMARY KEY,
  "rating" int,
  "user_id" text,
  "created_at" timestamp
);

ALTER TABLE "container" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "memory" ADD FOREIGN KEY ("container_id") REFERENCES "container" ("id");

ALTER TABLE "container" ADD FOREIGN KEY ("image_id") REFERENCES "image_table" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("subscription_id") REFERENCES "subscription_configs" ("id");

ALTER TABLE "journal_entries" ADD FOREIGN KEY ("memory_id") REFERENCES "memory" ("id");

ALTER TABLE "memory_rating" ADD FOREIGN KEY ("memory_id") REFERENCES "memory" ("id");

ALTER TABLE "overall_rating" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");
