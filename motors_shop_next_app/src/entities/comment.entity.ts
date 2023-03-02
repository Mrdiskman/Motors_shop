import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Announcement } from "./announcement.entity";
import { User } from "./user.entity";

@Entity("comment")
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 240 })
  text: string;

  @CreateDateColumn({ type: "date" })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.comments, { eager: true })
  user: User;

  @ManyToOne(() => Announcement, (announcement) => announcement.comments, {
    eager: true,
  })
  annoucement: Announcement;
}
