import { IStore } from "@domain/store/model/IStore";
import { IStoreRepository } from "@domain/store/repository/IStoreRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class FindStoreByIdUseCase {
  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(id: string): Promise<IStore> {
    const store = await this.storeRepository.findById(id);
    return store;
  }
}