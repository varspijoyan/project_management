import dotenv from "dotenv";
import type { Knex } from "knex";
import path from "path"

dotenv.config({
  path: path.resolve(process.cwd(), "../.env")
});

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    process.env.TABLE_FOR_AUTHORIZED_USERS || "authorized_users_table",
    (table: any) => {
      table
        .increments(
          `${
            process.env.TABLE_FOR_AUTHORIZED_USERS || "authorized_users_table"
          }_id`
        )
        .primary();
      table
        .integer(`${process.env.TABLE_FOR_USER_ROLES || "roles_table"}_id`)
        .unsigned()
        .references(`${process.env.TABLE_FOR_USER_ROLES || "roles_table"}_id`)
        .inTable(process.env.TABLE_FOR_USER_ROLES)
        .onDelete("CASCADE");
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.string("image");
      table.string("otp").notNullable();
      table.boolean("is_verified").defaultTo(false);
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
    process.env.TABLE_FOR_AUTHORIZED_USERS || "authorized_users_table"
  );
}
