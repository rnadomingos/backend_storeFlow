import "@shared/container/providers";
import { container } from "tsyringe";
import { IStoreRepository } from "@domain/store/repository/IStoreRepository";
import { StoreRepositoryPostgres } from "@modules/store/repositories/postgres/StoreRepositoryPostgres";
import { SellerRepositoryPostgres } from "@modules/seller/repositories/postgres/SellerRepository";
import { SegmentRepositoryPostgres } from "@modules/segment/repositories/postgres/SegmentRepositoryPostgres";
import { ServiceTypeRepositoryPostgres } from "@modules/serviceType/repositories/postgres/ServiceTypeRepositoryPostgres";
import { ISocialMediaRepository } from "@domain/socialMedia/repository/ISocialMediaRepository"
import { SocialMediaRepositoryPostgres } from "@modules/socialMedia/repositories/postgres/SocialMediaRepository"
import { ProspectionRepositoryPostgres } from "@modules/prospection/repositories/postgres/ProspectionRepositoryPostgres"
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { UserRepositoryPostgres } from "@modules/user/repositories/postgres/UserRepositoryPostgres";
import { IUserTokenRepository } from "@modules/user/repositories/IUserTokenRepositoryPostgres";
import { UserTokenRepositoryPostgres } from "@modules/user/repositories/postgres/UserTokenRepositoryPostgres";
import { StoreFlowRepositoryPostgres } from "@modules/storeFlow/repositories/postgres/StoreFlowRepositoryPostgres";
import { IStoreFlowRepository } from "@domain/storeFlow/repository/IStoreFlowReposiotry";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { ISegmentRepository } from "@domain/segment/repository/ISegmentRepository";
import { IProspectionRepository } from "@domain/prospection/repository/IProspectionRepository";
import { IServiceTypeRepository } from "@domain/serviceType/repository/IServiceTypeRepository";



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
