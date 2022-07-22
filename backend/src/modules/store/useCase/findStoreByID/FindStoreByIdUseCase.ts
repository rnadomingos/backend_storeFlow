import { Store } from "@modules/store/entities/Store";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class FindStoreByIdUseCase {
  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(id: string): Promise<Store> {
    const store = await this.storeRepository.findById(id);
    return store;
  }
}