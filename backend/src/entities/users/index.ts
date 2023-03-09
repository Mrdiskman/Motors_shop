import { Exclude } from "class-transformer";
import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Address } from "../address";
import { Announcement } from "../announcement";
import { Comment } from "../comments/comment.entity";

@Entity()
export class User {
  update(password: string) {
    throw new Error("Method not implemented.");
  }
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 200, nullable: false })
  name: string;

  @Column({ length: 2, nullable: false })
  abbreviation: string;

  @Column({ length: 200, unique: true, nullable: false })
  email: string;

  @Column({ length: 50, unique: true })
  cpf: string;

  @Column({ length: 50, nullable: false })
  phone: string;

  @Column({ length: 50, nullable: false })
  dateOfBirth: string;

  @Column({ length: 200, nullable: false })
  descripition: string;

  @Column({ nullable: false })
  seller: boolean;

  @Column({ length: 150, nullable: false, select: false })
  password: string;
  @Exclude()
  @Column({ default: new Date() })
  register: Date;

  @Column({ length: 8, nullable: true, select: false })
  resetCode: String;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Announcement, (announcement) => announcement.user)
  announcements: Announcement[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
