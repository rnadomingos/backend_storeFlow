import { ICreateStoreFlowDTO } from "@modules/storeFlow/dtos/ICreateStoreFlowDTO";
import { IStoreFlowRepository } from "@modules/storeFlow/repositories/IStoreFlowReposiotry";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateStoreFlowUseCase {

  constructor(
    @inject("StoreFlowRepository")
    private storeFlowRepository: IStoreFlowRepository
  ) { }

  async execute({
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

    await this.storeFlowRepository.create({
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
  }
}