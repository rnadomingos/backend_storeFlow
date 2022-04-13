import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSellers1649789222718 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sellers",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "user_dms",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "is_active",
                    type: "boolean",
                    default: false
                },
                {
                    name: "id_store",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                }
                ],
                foreignKeys: [
                    {
                        name: "FKSellerStore",
                        referencedTableName: "stores",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_store"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sellers")
    }

}
