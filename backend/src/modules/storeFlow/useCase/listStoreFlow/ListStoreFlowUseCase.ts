import { StoreFlow } from "@modules/storeFlow/entities/StoreFlow";
import { IStoreFlowRepository } from "@domain/storeFlow/repository/IStoreFlowReposiotry";
import { inject, injectable } from "tsyringe";
import { IStoreFlow } from '@domain/storeFlow/model/IStoreFlow'
import env from '@config/env'
import { ErrorHandler } from '@shared/errors/ErrorHandler'

interface IResponse {
  total: number;
  limit_per_page: number;
  listStoreFlow: IStoreFlow[];
}

@injectable()
export class ListStoreFlowUseCase {

  constructor(
    @inject("StoreFlowRepository")
    private storeFlowRepository: IStoreFlowRepository
  ) { }

  async execute(args: any = '', page: number = 1): Promise<IResponse> {
    const rowsPerPage = env.register_per_page
    const listStoreFlow = await this.storeFlowRepository.list(args, page, rowsPerPage)
    const total = (await this.storeFlowRepository.list(args)).length

    if (!listStoreFlow) {
      throw new ErrorHandler('StoreFlow not found!')
    }
    return {
      total,
      limit_per_page: rowsPerPage,
      listStoreFlow
    }
  }
}