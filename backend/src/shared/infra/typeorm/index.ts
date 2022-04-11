import { DataSource } from "typeorm"

export default async () => {
  const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "database_postgres",
    port: 5432,
    username: "docker",
    password: "docker123456",
    database: "db_store_flow",
    synchronize: true,
    logging: false,
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    entities: ["./src/modules/**/entities/*.ts"]

  })
}

