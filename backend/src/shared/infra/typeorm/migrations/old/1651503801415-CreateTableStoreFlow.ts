import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableStoreFlow1651503801415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "store_flow",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "client_name",
                        type: "varchar"
                    },
                    {
                        name: "client_email",
                        type: "varchar"
                    },
                    {
                        name: "client_phone",
                        type: "varchar"
                    },
                    {
                        name: "date",
                        type: "date"
                    },
                    {
                        name: "time",
                        type: "time"
                    },
                    {
                        name: "id_store",
                        type: "varchar"
                    },
                    {
                        name: "id_seller",
                        type: "varchar"
                    },
                    {
                        name: "id_store_segment",
                        type: "varchar"
                    },
                    {
                        name: "id_type_service",
                        type: "varchar"
                    },
                    {
                        name: "id_user",
                        type: "varchar"
                    },
                    {
                        name: "id_prospection",
                        type: "varchar"
                    },
                    {
                        name: "test_driver",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "sold",
                        type: "boolean",
                        default: false
                    },
                    {

                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKStoresStoreFlow",
                        referencedTableName: "stores",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_store"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKSellerStoreFlow",
                        referencedTableName: "sellers",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_seller"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKSegmentStoreFlow",
                        referencedTableName: "segments",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_store_segment"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKServiceStoreFlow",
                        referencedTableName: "service_type",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_type_service"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserStoreFlow",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_user"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKProspectionStoreFlow",
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
        await queryRunner.dropTable("store_flow")
    }

}
