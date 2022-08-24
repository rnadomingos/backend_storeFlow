import { ICreateStoreFlowDTO } from "@modules/storeFlow/dtos/ICreateStoreFlowDTO";
import { IStoreFlowRepository } from "@modules/storeFlow/repositories/IStoreFlowReposiotry";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateStoreFlowUseCase {

  constructor(
    @inject("StoreFlowRepository")
    private storeFlowRepository: IStoreFlowRepository
  ) { }

  async execute(storeFlowData: ICreateStoreFlowDTO): Promise<void> {

    for (const field of [
      "client_name",
      "client_email",
      "client_phone",
      "time",
      "date",
      "id_store",
      "id_seller",
      "id_store_segment",
      "id_type_service",
      "id_user",
      "id_prospection",
      "id_social_media"]) {
      if (!storeFlowData[field]) {
        throw new ErrorHandler(`Params ${field} Missing`)
      }
    }

    await this.storeFlowRepository.create(storeFlowData)
  }
}