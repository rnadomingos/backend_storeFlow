import { IStoreRepository } from "@domain/store/repository/IStoreRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";
import { IStore } from "@domain/store/model/IStore";


@injectable()
export class ListSellersStoreUseCase {

  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(id: string): Promise<IStore> {
    const listSellers = await this.storeRepository.listSellers(id);

    if (!listSellers) {
      throw new ErrorHandler('Store not found !')
    }

    return listSellers;
  }

}