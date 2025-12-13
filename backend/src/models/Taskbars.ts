import { Column, Required, Table } from "../decorators/decorators";
import BaseModel from "../orm/BaseModel";

@Table("taskbars")
export default class Taskbars extends BaseModel {
  @Column()
  taskbars_id!: number;

  @Column()
  projects_id!: number;

  @Column()
  @Required()
  taskbar_status!: string;

  @Column()
  is_active!: boolean;

  @Column()
  is_updated!: boolean;

  @Column()
  is_deleted!: boolean;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @Column()
  deleted_at!: Date;
}
