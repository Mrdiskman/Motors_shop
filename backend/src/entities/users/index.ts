import { Entity, Column, PrimaryColumn, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Address } from "../address";
import { Announcement } from "../announcement";


@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  phone: string;

  @Column()
  dateOfBirth: string;

  @Column()
  descripition: string;

  @Column()
  seller: boolean;

  @Column()
  password: string;

  @Column({ default: new Date() })
  register: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Announcement, (announcement) => announcement.user)
  announcements: Announcement[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
