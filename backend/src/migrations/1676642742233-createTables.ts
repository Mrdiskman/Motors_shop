import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1676642742233 implements MigrationInterface {
    name = 'createTables1676642742233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_1968b95a7c6d64a81b1b3b5aad4"`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying(240) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '"2023-02-17T14:05:45.762Z"'`);
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT 'true'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '2023-02-17 13:35:08.773'`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "userId" uuid`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_1968b95a7c6d64a81b1b3b5aad4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
