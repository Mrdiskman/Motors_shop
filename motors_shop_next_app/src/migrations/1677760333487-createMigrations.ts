import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigrations1677760333487 implements MigrationInterface {
    name = 'createMigrations1677760333487'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying(8) NOT NULL, "state" character varying(64) NOT NULL, "city" character varying(64) NOT NULL, "number" character varying(10) NOT NULL, "complement" character varying(220) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying(24) NOT NULL, "abbreviation" character varying(2) NOT NULL, "email" character varying(20) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(11) NOT NULL, "dateOfBirth" character varying(10) NOT NULL, "descripition" character varying(150) NOT NULL, "seller" boolean NOT NULL, "password" character varying(50) NOT NULL, "register" date NOT NULL DEFAULT '"2023-03-02T12:32:16.625Z"', "addressId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"), CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying(240) NOT NULL, "created_at" date NOT NULL DEFAULT now(), "userId" uuid, "annoucementId" uuid, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announcements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying(60) NOT NULL, "type" character varying(50) NOT NULL, "description" character varying(50), "km" integer NOT NULL, "year" integer NOT NULL, "price" double precision NOT NULL, "isActive" boolean NOT NULL DEFAULT 'true', "userId" uuid, CONSTRAINT "PK_b3ad760876ff2e19d58e05dc8b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_ae9a9203862a24274bcc4beebff" FOREIGN KEY ("annoucementId") REFERENCES "announcements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_1968b95a7c6d64a81b1b3b5aad4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_1968b95a7c6d64a81b1b3b5aad4"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_ae9a9203862a24274bcc4beebff"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`DROP TABLE "announcements"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
