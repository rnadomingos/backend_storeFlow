import { ICreateStoreFlowDTO } from "@modules/storeFlow/dtos/ICreateStoreFlowDTO";
import { IUpdateStoreFlowDTO } from "@modules/storeFlow/dtos/IUpdateStoreFlowDTO";
import { StoreFlow } from "@modules/storeFlow/entities/StoreFlow";
import { getRepository, Repository } from "typeorm";
import { IStoreFlowRepository } from "../IStoreFlowReposiotry";

export class StoreFlowRepositoryPostgres implements IStoreFlowRepository {

  private repository: Repository<StoreFlow>;

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
    id_prospection
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
      id_prospection
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
    id_prospection
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
      id_prospection
    })
    await this.repository.save(updateStoreFlow)
  }

  async findById(id: string): Promise<StoreFlow> {
    return await this.repository.findOne(id)
  }

  async list(): Promise<StoreFlow[]> {
    return await this.repository.find()
  }

}