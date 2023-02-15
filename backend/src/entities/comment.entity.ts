import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
} from "typeorm";
import { User } from "./users.entity";

@Entity("comment")
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 240 })
  text: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => User, (user) => user.comments)
  user: User;
}
