import { config } from "dotenv";
import type { Config } from "drizzle-kit";

config({ path: ".env" });

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "pg",  // Changed from 'dialect: "postgresql"'
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;