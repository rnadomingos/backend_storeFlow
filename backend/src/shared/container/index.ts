import { container } from "tsyringe";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { StoreRepositoryPostgres } from "@modules/store/repositories/postgres/StoreRepository";


container.registerSingleton<IStoreRepository>(
  "StoreRepository",
  StoreRepositoryPostgres
);