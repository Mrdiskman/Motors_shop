import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid"
import { Address } from "./address.entity";
import { Announcement } from "./announcement.entity";
import { Comment } from "./comment.entity";

@Entity()

export class User {
  
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  abbreviation: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  dateOfBirth: string;

  @Column({ nullable: false })
  descripition: string;

  @Column({ nullable: false })
  seller: boolean;

  @Column({ nullable: false })
  password: string;

  @Column({ default: new Date() })
  register: Date;

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