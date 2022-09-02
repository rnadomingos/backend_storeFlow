import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableSocialMedia1651498306190 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "social_media",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
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
                        name: "id_prospection",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKSellerSocialMedia",
                        referencedTableName: "prospection",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_prospection"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("social_media")
    }

}
