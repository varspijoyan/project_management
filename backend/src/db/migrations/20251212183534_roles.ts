import dotenv from "dotenv";
import type { Knex } from "knex";
import path from "path"

dotenv.config({
  path: path.resolve(process.cwd(), "../.env")
});

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    process.env.TABLE_FOR_USER_ROLES || "roles_table",
    (table: any) => {
      table
        .increments(`${process.env.TABLE_FOR_USER_ROLES || "roles_table"}_id`)
        .primary();
      table.string("title").notNullable();
      table.boolean("is_active").defaultTo(false);
      table.timestamp("created_at").defaultTo(knex.fn.now());
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(
    process.env.TABLE_FOR_USER_ROLES || "roles_table"
  );
}
