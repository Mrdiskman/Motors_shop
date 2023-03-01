import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigrations1677704153154 implements MigrationInterface {
    name = 'createMigrations1677704153154'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "register"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "register" date NOT NULL DEFAULT '"2023-03-01T20:55:56.238Z"'`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "created_at" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT 'true'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "register"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "register" TIMESTAMP NOT NULL DEFAULT '2023-03-01 20:50:40.826'`);
    }

}
