import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";

config();

const sql = neon(process.env.NEON_DB_CONNECTION!);

export const db = drizzle(sql);
