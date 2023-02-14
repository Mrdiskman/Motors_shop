import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
