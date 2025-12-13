import { Column, Required, Table } from "../decorators/decorators";
import BaseModel from "../orm/BaseModel";

@Table("project_members")
export default class ProjectMembers extends BaseModel {
  @Column()
  project_members_id!: number;

  @Column()
  projects_id!: number;

  @Column()
  @Required()
  email!: string;

  @Column()
  invite_token!: string;

  @Column()
  is_accepted!: boolean;

  @Column()
  is_active!: boolean;

  @Column()
  is_deleted!: boolean;

  @Column()
  created_at!: Date;

  @Column()
  deleted_at!: Date;
}
