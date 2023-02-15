import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Address } from "../address";
@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({nullable:false})
  name: string;

  @Column({unique:true, nullable:false})
  email: string;

  @Column({unique:true})
  cpf: string;

  @Column({nullable:false})
  phone: string;

  @Column({nullable:false})
  dateOfBirth: string;

  @Column({nullable:false})
  descripition: string;

  @Column({nullable:false})
  seller: boolean;

  @Column({nullable:false})
  password: string;

  @Column({ default: new Date() })
  register: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
