import dotenv from "dotenv";
import type { Knex } from "knex";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), "../.env"),
});

export async function seed(knex: Knex): Promise<void> {
  await knex(process.env.TABLE_FOR_USER_ROLES || "roles_table").del();

  await knex(process.env.TABLE_FOR_USER_ROLES || "roles_table").insert([
    { roles_id: 1, title: "Project Manager", is_active: true },
    { roles_id: 2, title: "Member", is_active: true },
  ]);
}
