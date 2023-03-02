import "reflect-metadata";
import { DataSource } from "typeorm";
import { Address } from "./entities/address.entity";
import { Announcement } from "./entities/announcement.entity";
import { Comment } from "./entities/comment.entity";
import { User } from "./entities/user.entity";
import { createMigrations1677760333487 } from "./migrations/1677760333487-createMigrations";
import { createMigrations1677762334878 } from "./migrations/1677762334878-createMigrations";
import { initialMigration1677613479220 } from "./migrations/1677613479220-initialMigration";


require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,
  entities: [User, Address, Announcement, Comment],
  migrations: [createMigrations1677760333487, createMigrations1677762334878,initialMigration1677613479220],

});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
