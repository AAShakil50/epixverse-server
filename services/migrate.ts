import { config } from "dotenv";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "./db";

config();

async function main() {
  await migrate(db, {
    migrationsFolder: "./services/migrations/",
  });
  console.log("Migration successful");
  process.exit(0);
}

main().catch((err) => {
  console.log("Migration failed: ", err);
  process.exit(1);
});
