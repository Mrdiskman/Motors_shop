import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/users";
import { Announcement } from "./entities/announcement";
import { Address } from "./entities/address";
import { Comment } from "./entities/comments/comment.entity";
import { initialMigration1678375517535 } from "./migrations/1678375517535-initialMigration";
import { createMigrations1678375535283 } from "./migrations/1678375535283-createMigrations";


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
        migrations: [initialMigration1678375517535, createMigrations1678375535283],
      });
