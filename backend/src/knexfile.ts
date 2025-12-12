import dotenv from "dotenv";
import type { Knex } from "knex";

dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config: { [key: string]: Knex.Config } = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
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
