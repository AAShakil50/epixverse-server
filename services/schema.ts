import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid().defaultRandom().primaryKey(),
  title: varchar().notNull(),
  description: varchar().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const books = pgTable("books", {
  id: uuid().defaultRandom().primaryKey(),
  title: varchar().notNull(),
  description: varchar().notNull(),
  projectId: uuid("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type PROJECT = typeof projects.$inferSelect;
export type NEW_PROJECT = typeof projects.$inferInsert;

export type BOOK = typeof books.$inferSelect;
export type NEW_BOOK = typeof books.$inferInsert;
