export default class BaseModel {
  static tableName() {
    return Reflect.getMetadata("table:name", this);
  }

  static columns() {
    return Reflect.getMetadata("table:columns", this);
  }

  static required() {
    return Reflect.getMetadata("validation:required", this);
  }
}
