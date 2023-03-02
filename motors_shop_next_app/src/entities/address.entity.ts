import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 8 })
  cep: string;

  @Column({ type: "varchar", length: 64 })
  state: string;

  @Column({ type: "varchar", length: 64 })
  city: string;

  @Column({ type: "varchar", length: 10 })
  number: string;

  @Column({ type: "varchar", length: 220 })
  complement: string;
}
