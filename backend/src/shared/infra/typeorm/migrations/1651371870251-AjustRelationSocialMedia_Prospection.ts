import {MigrationInterface, QueryRunner} from "typeorm";

export class AjustRelationSocialMediaProspection1651371870251 implements MigrationInterface {
    name = 'AjustRelationSocialMediaProspection1651371870251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prospection" DROP CONSTRAINT "FK_77f6b3bf065c04be972568c17ca"`);
        await queryRunner.query(`ALTER TABLE "prospection" DROP COLUMN "id_media"`);
        await queryRunner.query(`ALTER TABLE "social_media" ADD "id_prospection" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "social_media" ADD CONSTRAINT "FK_fddd5e0ece51667a761ef7fed13" FOREIGN KEY ("id_prospection") REFERENCES "prospection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "social_media" DROP CONSTRAINT "FK_fddd5e0ece51667a761ef7fed13"`);
        await queryRunner.query(`ALTER TABLE "social_media" DROP COLUMN "id_prospection"`);
        await queryRunner.query(`ALTER TABLE "prospection" ADD "id_media" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "prospection" ADD CONSTRAINT "FK_77f6b3bf065c04be972568c17ca" FOREIGN KEY ("id_media") REFERENCES "social_media"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
