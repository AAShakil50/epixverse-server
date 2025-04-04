import * as dotenv from "dotenv";
import { Config } from "drizzle-kit";

dotenv.config();

const configs: Config = {
  schema: "./services/schema.ts",
  out: "./services/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEON_DB_CONNECTION!,
  },
};

export default configs;
