import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Comment } from "./comment.entity";
import { User } from "./user.entity";

@Entity("announcements")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 60 })
  model: string;

  @Column({ type: "varchar", length: 50 })
  type: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  description: string;

  @Column({ type: "int" })
  km: number;

  @Column({ type: "int" })
  year: number;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "boolean", default: "true" })
  isActive: boolean;

  @ManyToOne(() => User, {
    eager: true,
  })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
