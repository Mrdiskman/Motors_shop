import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/users";
import { Announcement } from "./entities/announcement";
import { Address } from "./entities/address";
import { Comment } from "./entities/comments/comment.entity";
import { createMigrations1677774187919 } from "./migrations/1677774187919-createMigrations";
import { createMigrations1677776136514 } from "./migrations/1677776136514-createMigrations";

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
        migrations: [
          createMigrations1677774187919,
          createMigrations1677776136514,
        ],
      });
