import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity("image")
export class Images {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column("simple-array")
  imgs: string[];
}
