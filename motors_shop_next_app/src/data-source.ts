
import { DataSource } from "typeorm"
import { Address } from "./entities/address.entity"
import { Announcement } from "./entities/announcement.entity"
import { Comment } from "./entities/comment.entity"
import { User } from "./entities/user.entity"
import { initialMigration1677613479220 } from "./migrations/1677613479220-initialMigration"
import { createMigrations1677691745788 } from "./migrations/1677691745788-createMigrations"
import { createMigrations1677691919108 } from "./migrations/1677691919108-createMigrations"


require('dotenv').config()

export const AppDataSource = new DataSource({

    type: "postgres",
    host: "localhost",
    port: 5432,

    username: process.env.POSTGRES_USER,
    password:  process.env.POSTGRES_PWD,
    database: process.env.POSTGRES_DB,

    synchronize: false,
    logging: true,
    entities: [User, Address, Announcement, Comment], 
    migrations: [initialMigration1677613479220, createMigrations1677691745788, createMigrations1677691919108]

})


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })