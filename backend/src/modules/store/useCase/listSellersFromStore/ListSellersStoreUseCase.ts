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
    return listSellers;
  }

}