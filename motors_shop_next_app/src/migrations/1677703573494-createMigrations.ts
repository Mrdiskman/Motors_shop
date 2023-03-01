import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigrations1677703573494 implements MigrationInterface {
    name = 'createMigrations1677703573494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "complement" character varying(220) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '"2023-03-01T20:46:16.712Z"'`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT 'true'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '2023-03-01 20:43:24.302'`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "complement" character varying NOT NULL`);
    }

}
