import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/users";
import { initialMigration1676400496579 } from "./migrations/1676400496579-initialMigration";
import { createTables1676400547866 } from "./migrations/1676400547866-createTables";

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
        entities: [User],
        migrations: [initialMigration1676400496579, createTables1676400547866],
      });
