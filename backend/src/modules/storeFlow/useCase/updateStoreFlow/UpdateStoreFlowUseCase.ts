import { IUpdateStoreFlowDTO } from "@modules/storeFlow/dtos/IUpdateStoreFlowDTO";
import { IStoreFlowRepository } from "@modules/storeFlow/repositories/IStoreFlowReposiotry";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()
export class UpdateStoreFlowUseCase {

  constructor(
    @inject("StoreFlowRepository")
    private storeFlowRepository: IStoreFlowRepository
  ) { }

  async execute({
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

    const storeFlow = await this.storeFlowRepository.findById(id)

    if (!storeFlow) {
      throw new ErrorHandler(`Store Flow not found!`);
    }

    if (client_name) {
      storeFlow.client_name = client_name
    }
    if (client_email) {
      storeFlow.client_email = client_email
    }
    if (client_phone) {
      storeFlow.client_phone = client_phone
    }
    if (time) {
      storeFlow.time = time
    }
    if (date) {
      storeFlow.date = date
    }
    if (test_driver !== null) {
      storeFlow.test_driver = test_driver
    }
    if (sold !== null) {
      storeFlow.sold = sold
    }
    if (id_store) {
      storeFlow.id_store = id_store
    }
    if (id_seller) {
      storeFlow.id_seller = id_seller
    }
    if (id_store_segment) {
      storeFlow.id_store_segment = id_store_segment
    }
    if (id_type_service) {
      storeFlow.id_type_service = id_type_service
    }
    if (id_user) {
      storeFlow.id_user = id_user
    }
    if (id_prospection) {
      storeFlow.id_prospection = id_prospection
    }
    if (id_social_media) {
      storeFlow.id_social_media = id_social_media
    }
    if (comments) {
      storeFlow.comments = comments
    }

    await this.storeFlowRepository.update(storeFlow)
  }
}