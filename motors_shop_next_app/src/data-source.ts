
import { DataSource } from "typeorm"
import { User } from "./entities/user.entity"
import { createTables1677587488043 } from "./migrations/1677587488043-createTables"
import { initialMigration1677587581500 } from "./migrations/1677587581500-initialMigration"





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
    entities: [User], 
    migrations: [createTables1677587488043, initialMigration1677587581500], 

})


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })