import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSegment1649946189619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "segments",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "is_active",
                    type: "boolean",
                    default: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("segments")
    }

}
