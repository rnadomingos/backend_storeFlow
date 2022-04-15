import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1650060999699 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
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
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "user_dms",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "is_admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "id_store",
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
                        name: "FKUsersStore",
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
        await queryRunner.dropTable("users")
    }

}
