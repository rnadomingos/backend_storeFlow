import { Store } from "@modules/store/entities/Store";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class ListSellersStoreUseCase {

  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(id: string): Promise<Store[]> {
    const listSellers = await this.storeRepository.listSellers(id);

    if (listSellers.length === 0) {
      throw new Error('Store not found this id')
    }
    return listSellers;
  }

}