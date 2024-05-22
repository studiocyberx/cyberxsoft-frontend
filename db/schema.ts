import { pgTable, serial, uuid, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
});

export const subscriberEmailTable = pgTable("subscribers", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
});
