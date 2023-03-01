import "reflect-metadata";
import { DataSource } from "typeorm";
import { Address } from "./entities/address.entity";
import { Announcement } from "./entities/announcement.entity";
import { Comment } from "./entities/comment.entity";
import { User } from "./entities/user.entity";
import { createMigrations1677703573494 } from "./migrations/1677703573494-createMigrations";
import { createMigrations1677703837704 } from "./migrations/1677703837704-createMigrations";
import { createMigrations1677704153154 } from "./migrations/1677704153154-createMigrations";

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
  migrations: [
    createMigrations1677703573494,
    createMigrations1677703837704,
    createMigrations1677704153154,
  ],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
