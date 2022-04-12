import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Store1649707337764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "stores",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "cnpj",
                    type: "integer",
                    isUnique: true
                },
                {
                    name: "brand",
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
        await queryRunner.dropTable("stores")
    }

}
