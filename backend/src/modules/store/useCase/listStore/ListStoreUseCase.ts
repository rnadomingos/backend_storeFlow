import { IStoreRepository } from "@domain/store/repository/IStoreRepository";
import { inject, injectable } from "tsyringe";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { IStore } from "@domain/store/model/IStore";
import env from "@config/env";

interface IResponse {
  total: number;
  limit_per_page: number;
  store: IStore[];
}

@injectable()
export class ListStoreUseCase {

  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(args: any = '', page: number = 1): Promise<IResponse> {
    const rowsPerPage = env.register_per_page
    const store = await this.storeRepository.list(args, page, rowsPerPage);
    const total = (await this.storeRepository.list(args)).length

    if (!store) {
      throw new ErrorHandler('Store not found!');
    }
    return {
      total,
      limit_per_page: rowsPerPage,
      store
    }
  }
}