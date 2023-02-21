import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
// import { User } from "./users";

@Entity("comment")
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 240 })
  text: string;

  @CreateDateColumn()
  created_at: Date;

  // @OneToMany(() => User, (user) => user.comments)
  // user: User;
}
