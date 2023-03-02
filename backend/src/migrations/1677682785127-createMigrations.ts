import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigrations1677682785127 implements MigrationInterface {
    name = 'createMigrations1677682785127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "listimgs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "images" text NOT NULL, CONSTRAINT "PK_61e323c4bc41e1c38bbac2413df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "imagesId" uuid`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "UQ_54393232392427c4233f29e9621" UNIQUE ("imagesId")`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT 'true'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '"2023-03-01T14:59:47.717Z"'`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_54393232392427c4233f29e9621" FOREIGN KEY ("imagesId") REFERENCES "listimgs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_54393232392427c4233f29e9621"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '2023-03-01 14:34:16.193'`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "UQ_54393232392427c4233f29e9621"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "imagesId"`);
        await queryRunner.query(`DROP TABLE "listimgs"`);
    }

}
