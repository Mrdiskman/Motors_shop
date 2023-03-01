import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigrations1677691919108 implements MigrationInterface {
    name = 'createMigrations1677691919108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "abbreviation" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '"2023-03-01T17:32:02.538Z"'`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT 'true'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '2023-03-01 17:29:08.817'`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "abbreviation"`);
    }

}
