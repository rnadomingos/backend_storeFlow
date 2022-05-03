import { StoreFlow } from "@modules/storeFlow/entities/StoreFlow";
import { IStoreFlowRepository } from "@modules/storeFlow/repositories/IStoreFlowReposiotry";
import { inject, injectable } from "tsyringe";


@injectable()
export class ListStoreFlowUseCase {

  constructor(
    @inject("StoreFlowRepository")
    private storeFlowRepository: IStoreFlowRepository
  ) { }

  async execute(): Promise<StoreFlow[]> {

    const listStoreFlow = await this.storeFlowRepository.list();
    return listStoreFlow
  }
}