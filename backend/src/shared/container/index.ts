import { container } from "tsyringe";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { StoreRepositoryPostgres } from "@modules/store/repositories/postgres/StoreRepositoryPostgres";
import { SellerRepositoryPostgres } from "@modules/seller/repositories/postgres/SellerRepository";
import { ISellerRepository } from "@modules/seller/repositories/ISellerRepository";
import { ISegmentRepository } from "@modules/segment/repositories/ISegmentRepository";
import { SegmentRepositoryPostgres } from "@modules/segment/repositories/postgres/SegmentRepositoryPostgres";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { UserRepositoryPostgres } from "@modules/user/repositories/postgres/UserRepositoryPostgres";
import { IUserTokenRepository } from "@modules/user/repositories/IUserTokenRepositoryPostgres";
import { UserTokenRepositoryPostgres } from "@modules/user/repositories/postgres/UserTokenRepositoryPostgres";
import "@shared/container/providers";


container.registerSingleton<IStoreRepository>(
  "StoreRepository",
  StoreRepositoryPostgres
)

container.registerSingleton<ISellerRepository>(
  "SellerRepository",
  SellerRepositoryPostgres
)

container.registerSingleton<ISegmentRepository>(
  "SegmentRepository",
  SegmentRepositoryPostgres

)

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepositoryPostgres

)

container.registerSingleton<IUserTokenRepository>(
  "UserTokenRepository",
  UserTokenRepositoryPostgres

)
