import dotenv from "dotenv";
import type { Knex } from "knex";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), "../.env"),
});

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    process.env.TABLE_FOR_CREATED_PROJECTS || "projects_table",
    (table: any) => {
      table
        .increments(
          `${process.env.TABLE_FOR_CREATED_PROJECTS || "projects_table"}_id`
        )
        .primary();
      table
        .integer("owner_id")
        .unsigned()
        .references(
          `${
            process.env.TABLE_FOR_AUTHORIZED_USERS || "authorized_users_table"
          }_id`
        )
        .inTable(
          process.env.TABLE_FOR_AUTHORIZED_USERS || "authorized_users_table"
        )
        .onDelete("CASCADE");
      table.string("project_title").notNullable();
      table.string("project_description").notNullable();
      table.string("image");
      table.timestamp("start_date").notNullable();
      table.timestamp("end_date").notNullable();
      table.boolean("is_pending").defaultTo(false);
      table.boolean("is_completed").defaultTo(false);
      table.boolean("is_cancelled").defaultTo(false);
      table.boolean("is_active").defaultTo(false);
      table.boolean("is_updated").defaultTo(false);
      table.boolean("is_deleted").defaultTo(false);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").nullable();
      table.timestamp("deleted_at").nullable();
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(
    process.env.TABLE_FOR_CREATED_PROJECTS || "projects_table"
  );
}
