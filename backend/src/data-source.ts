import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/users";
import { Announcement } from "./entities/announcement";
import { Address } from "./entities/address";
import { Comment } from "./entities/comments/comment.entity";
import { initialMigration1678041158870 } from "./migrations/1678041158870-initialMigration";
import { createMigrations1678041182169 } from "./migrations/1678041182169-createMigrations";

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
          initialMigration1678041158870,
          createMigrations1678041182169
        ],
      });
