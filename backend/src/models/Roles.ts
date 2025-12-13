import { Column, Required, Table } from "../decorators/decorators";
import BaseModel from "../orm/BaseModel";

@Table("roles")
export default class Roles extends BaseModel {
  @Column()
  roles_id!: number;

  @Column()
  @Required()
  title!: string;

  @Column()
  is_active!: boolean;

  @Column()
  created_at!: Date;
}
