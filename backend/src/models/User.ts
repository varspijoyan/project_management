import { Column, Required, Table } from "../decorators/decorators";
import BaseModel from "../orm/BaseModel";

@Table("user_details")
export default class User extends BaseModel {
  @Column()
  @Required()
  user_details_id!: number;

  @Column()
  @Required()
  first_name!: string;

  @Column()
  @Required()
  last_name!: string;

  @Column()
  @Required()
  email!: string;

  @Column()
  image!: string;

  @Column()
  @Required()
  password!: string;

  @Column()
  @Required()
  otp!: string;

  @Column()
  @Required()
  phone_number!: string;

  @Column()
  is_verified!: boolean;

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
