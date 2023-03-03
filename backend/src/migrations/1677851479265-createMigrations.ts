import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigrations1677851479265 implements MigrationInterface {
    name = 'createMigrations1677851479265'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT 'true'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '"2023-03-03T13:51:22.814Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '2023-03-03 13:09:56.053'`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

}
