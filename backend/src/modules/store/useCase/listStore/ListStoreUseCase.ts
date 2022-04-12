import { Store } from "../../entities/Store";
import { IStoreRepository } from "modules/store/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class ListStoreUseCase {

  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(): Promise<Store[]> {
    const listStore = await this.storeRepository.list();
    return listStore;
  }
}