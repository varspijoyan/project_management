import { knex, type Knex } from "knex";
import config from "../knexfile.ts";

const db: Knex = knex(config.development);

export default db;
