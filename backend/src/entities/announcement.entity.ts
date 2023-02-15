import { Entity, Column, PrimaryGeneratedColumn, ManyToOne  } from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "./user.entity";

@Entity("announcements")

export class Announcement{
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

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

    @Column({ type:"float" })
    price: number;

    @ManyToOne(() => User, {
        eager: true,
    })
    user: User;

    constructor(){
        if(!this.id) {
          this.id = uuid();
        }
    }
}