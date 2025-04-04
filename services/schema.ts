import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid().defaultRandom().primaryKey(),
  title: varchar().notNull(),
  description: varchar().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const books = pgTable(
  "books",
  {
    id: uuid().defaultRandom().primaryKey(),
    title: varchar().notNull(),
    description: varchar().notNull(),
    projectId: uuid("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  }
);
