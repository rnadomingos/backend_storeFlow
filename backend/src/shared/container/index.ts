import { container } from "tsyringe";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { StoreRepositoryPostgres } from "@modules/store/repositories/postgres/StoreRepositoryPostgres";
import { SellerRepositoryPostgres } from "@modules/seller/repositories/postgres/SellerRepository";
import { ISellerRepository } from "@modules/seller/repositories/ISellerRepository";
import { ISegmentRepository } from "@modules/segment/repositories/ISegmentRepository";
import { SegmentRepositoryPostgres } from "@modules/segment/repositories/postgres/SegmentRepositoryPostgres";
import { ServiceTypeRepositoryPostgres } from "@modules/serviceType/repositories/postgres/ServiceTypeRepositoryPostgres";
import { IServiceTypeRepository } from "@modules/serviceType/repositories/IServiceTypeRepository";
import { ISocialMediaRepository } from "@modules/socialMedia/repositories/ISocialMediaRepository";
import { SocialMediaRepositoryPostgres } from "@modules/socialMedia/repositories/postgres/SocialMediaRepositoryPostgres"
import { IProspectionRepository } from "@modules/prospection/repositories/IProspectionRepository";
import { ProspectionRepositoryPostgres } from "@modules/prospection/repositories/postgres/ProspectionRepositoryPostgres"
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { UserRepositoryPostgres } from "@modules/user/repositories/postgres/UserRepositoryPostgres";
import { IUserTokenRepository } from "@modules/user/repositories/IUserTokenRepositoryPostgres";
import { UserTokenRepositoryPostgres } from "@modules/user/repositories/postgres/UserTokenRepositoryPostgres";
import "@shared/container/providers";
import { StoreFlowRepositoryPostgres } from "@modules/storeFlow/repositories/postgres/StoreFlowRepositoryPostgres";
import { IStoreFlowRepository } from "@modules/storeFlow/repositories/IStoreFlowReposiotry";



container.registerSingleton<IStoreFlowRepository>(
  "StoreFlowRepository",
  StoreFlowRepositoryPostgres
)

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

container.registerSingleton<IServiceTypeRepository>(
  "ServiceTypeRepository",
  ServiceTypeRepositoryPostgres
)

container.registerSingleton<ISocialMediaRepository>(
  "SocialMediaRepository",
  SocialMediaRepositoryPostgres
)

container.registerSingleton<IProspectionRepository>(
  "ProspectionRepository",
  ProspectionRepositoryPostgres
)
container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepositoryPostgres

)

container.registerSingleton<IUserTokenRepository>(
  "UserTokenRepository",
  UserTokenRepositoryPostgres

)
