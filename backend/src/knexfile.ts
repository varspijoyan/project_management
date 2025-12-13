import dotenv from "dotenv";
import type { Knex } from "knex";
import path from "path"

dotenv.config({
  path: path.resolve(process.cwd(), "../.env")
});

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config: { [key: string]: Knex.Config } = {
  development: {
    client: process.env.DB_CLIENT || "mysql2",
    connection: {
      database: process.env.DB_NAME || "database",
      user: process.env.DB_USER || "user",
      password: process.env.DB_PASSWORD || "password",
      host: process.env.DB_HOST || "localhost",
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    },
    migrations: {
      directory: "./db/migrations",
      extension: "ts"
    },
    seeds: {
      directory: "./db/seeds",
      extension: "ts"
    }
  },
};

export default config;
