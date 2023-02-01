import { IStoreFlowRepository } from "../../../../domain/storeFlow/repository/IStoreFlowReposiotry";
import { ICreateStoreFlowDTO } from "@domain/storeFlow/dtos/ICreateStoreFlowDTO";
import { IUpdateStoreFlowDTO } from "@domain/storeFlow/dtos/IUpdateStoreFlowDTO";
import { IStoreFlow } from '@domain/storeFlow/model/IStoreFlow'
import { StoreFlow } from "@modules/storeFlow/entities/StoreFlow";
import { getRepository, ILike, Repository } from "typeorm";

export class StoreFlowRepositoryPostgres implements IStoreFlowRepository {

  private repository: Repository<IStoreFlow>;

  constructor() {
    this.repository = getRepository(StoreFlow);
  }

  async create({
    client_name,
    client_email,
    client_phone,
    time,
    date,
    test_driver,
    sold,
    id_store,
    id_seller,
    id_store_segment,
    id_type_service,
    id_user,
    id_prospection,
    id_social_media,
    comments
  }: ICreateStoreFlowDTO): Promise<void> {

    const newStoreFlow = this.repository.create({
      client_name,
      client_email,
      client_phone,
      time,
      date,
      test_driver,
      sold,
      id_store,
      id_seller,
      id_store_segment,
      id_type_service,
      id_user,
      id_prospection,
      id_social_media,
      comments
    })

    await this.repository.save(newStoreFlow)
  }

  async update({
    id,
    client_name,
    client_email,
    client_phone,
    time,
    date,
    test_driver,
    sold,
    id_store,
    id_seller,
    id_store_segment,
    id_type_service,
    id_user,
    id_prospection,
    id_social_media,
    comments
  }: IUpdateStoreFlowDTO): Promise<void> {
    const updateStoreFlow = this.repository.create({
      id,
      client_name,
      client_email,
      client_phone,
      time,
      date,
      test_driver,
      sold,
      id_store,
      id_seller,
      id_store_segment,
      id_type_service,
      id_user,
      id_prospection,
      id_social_media,
      comments
    })
    await this.repository.save(updateStoreFlow)
  }

  async findById(id: string): Promise<IStoreFlow> {
    return await this.repository.findOne(id)
  }

  async list(args?: any, page?: number, rowsPerPage?: number): Promise<IStoreFlow[]> {
    return await this.repository.find({
      where: [
        {name: ILike(`%${args}%`)},
        {brand: ILike(`%${args}%`)}
      ],
      skip: rowsPerPage *(page-1),
      take: rowsPerPage
    })
  }

}