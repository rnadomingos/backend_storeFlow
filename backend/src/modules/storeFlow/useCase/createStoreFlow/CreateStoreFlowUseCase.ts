import { ICreateStoreFlowDTO } from "@domain/storeFlow/dtos/ICreateStoreFlowDTO";
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
      "id_prospection"
    ]) {
      if (!storeFlowData["id_social_media"]) {
        storeFlowData.id_social_media = null
      }
      if (!storeFlowData["comments"]) {
        storeFlowData.comments = null
      }
      if (!storeFlowData[field]) {
        throw new ErrorHandler(`Params ${field} Missing`)
      }
    }

    await this.storeFlowRepository.create(storeFlowData)
  }
}