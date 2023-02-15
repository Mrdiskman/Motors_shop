import { Entity, Column, PrimaryColumn, Check, OneToMany} from "typeorm";
import { v4 as uuid } from "uuid";
import { Announcement } from "./announcement.entity";


@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string

  
  @OneToMany(() => Announcement, (announcement) => announcement.user)
  announcements: Announcement[];

  constructor(){
    if(!this.id) {
      this.id = uuid();
    }
  }
}