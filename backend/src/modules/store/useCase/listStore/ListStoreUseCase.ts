import { Store } from "../../entities/Store";
import { IStoreRepository } from "modules/store/repositories/IStoreRepository";


export class ListStoreUseCase {

  constructor(
    private storeRepositoryInMemory: IStoreRepository
  ) { }

  async execute(): Promise<Store[]> {
    const listStore = await this.storeRepositoryInMemory.list();
    return listStore;
  }
}