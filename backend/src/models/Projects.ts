import { Column, Required, Table } from "../decorators/decorators";
import BaseModel from "../orm/BaseModel";

@Table("projects")
export default class Projects extends BaseModel {
  @Column()
  projects_id!: number;

  @Column()
  owner_id!: number;

  @Column()
  @Required()
  project_title!: string;

  @Column()
  @Required()
  project_description!: string;

  @Column()
  image!: string;

  @Column()
  @Required()
  start_date!: Date;

  @Column()
  @Required()
  end_date!: Date;

  @Column()
  is_pending!: boolean;

  @Column()
  is_completed!: boolean;

  @Column()
  is_cancelled!: boolean;

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
