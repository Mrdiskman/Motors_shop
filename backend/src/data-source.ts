import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/users";
import { Address } from "./entities/address";
import { Announcement } from "./entities/announcement";
import { Comment } from "./entities/comment.entity";
import { initialMigration1676642724073 } from "./migrations/1676642724073-initialMigration";
import { createTables1676642742233 } from "./migrations/1676642742233-createTables";


export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [User, Address, Announcement, Comment],
        migrations: [initialMigration1676642724073, createTables1676642742233],
      });
