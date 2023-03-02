import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Address } from "./address.entity";
import { Announcement } from "./announcement.entity";
import { Comment } from "./comment.entity";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 24, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 2, nullable: false })
  abbreviation: string;

  @Column({ type: "varchar", length: 20, unique: true, nullable: false })
  email: string;

  @Column({ type: "varchar", length: 11, unique: true })
  cpf: string;

  @Column({ type: "varchar", length: 11, nullable: false })
  phone: string;

  @Column({ type: "varchar", length: 10, nullable: false })
  dateOfBirth: string;

  @Column({ type: "varchar", length: 150, nullable: false })
  descripition: string;

  @Column({ type: "boolean", nullable: false })
  seller: boolean;

  @Column({ type: "varchar", length: 50, nullable: false })
  password: string;

  @Column({ type: "date", default: new Date() })
  register: Date;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Announcement, (announcement) => announcement.user, {
    eager: true,
  })
  announcements: Announcement[];

  @OneToMany(() => Comment, (comment) => comment.user, { eager: true })
  comments: Comment[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
