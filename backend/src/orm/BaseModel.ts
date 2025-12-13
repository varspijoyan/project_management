import db from "../db/connection.ts";

export default class BaseModel {
  static tableName() {
    return Reflect.getMetadata("table:name", this);
  }

  static required() {
    return Reflect.getMetadata("validation:required", this);
  }

  static async insertData(data: any) {
    try {
      return await db(this.tableName()).insert(data);
    } catch (error) {
      console.log("Insert data error:", error);
      throw error;
    }
  }

  static async selectData() {
    try {
      return await db(this.tableName()).select("*");
    } catch (error) {
      console.log("Select all data error:", error);
      throw error;
    }
  }

  static async selectById(id: number) {
    try {
      return await db(this.tableName()).where(id).first();
    } catch (error) {
      console.log("Select data by id error:", error);
      throw error;
    }
  }

  static async updateDataById(id: number, updated: any) {
    try {
      return await db(this.tableName()).where(id).update(updated);
    } catch (error) {
      console.log("Update data by id error:", error);
      throw error;
    }
  }

  static async deleteDataById(id: number) {
    try {
      return await db(this.tableName()).where(id).del();
    } catch (error) {
      console.log("Delete by id error:", error);
      throw error;
    }
  }
}
