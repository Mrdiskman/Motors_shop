import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Comment } from "../comments/comment.entity";

import { User } from "../users";

@Entity("announcements")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 60 })
  model: string;

  @Column({ length: 50 })
  type: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  km: number;

  @Column()
  year: number;

  @Column({ length: 220 })
  default_img: string;

  @Column("simple-array")
  images: string[];

  @Column({ type: "float" })
  price: number;

  @Column({ default: "true" })
  isActive: boolean;

  @ManyToOne(() => User, {
    eager: true,
  })
  user: User;

  @OneToMany(() => Comment, (comments) => comments.user)
  comments: Comment[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
