import "reflect-metadata";

export function Table(tableName: string) {
  return function (target: any) {
    Reflect.defineMetadata("table:name", tableName, target);
  };
}

export function Column(columnName: string) {
  return function (target: any, propertyKey: string) {
    const columns =
      Reflect.getMetadata("table:columns", target.constructor) || [];
    columns.push({
      propertyKey,
      columnName: columnName || propertyKey,
    });

    Reflect.defineMetadata("table:columns", columns, target.constructor);
  };
}
export function Required() {
  return function (target: any, propertyKey: string) {
    const required =
      Reflect.getMetadata("validation:required", target.constructor) || [];

    required.push(propertyKey);

    Reflect.defineMetadata("validation:required", required, target.constructor);
  };
}
