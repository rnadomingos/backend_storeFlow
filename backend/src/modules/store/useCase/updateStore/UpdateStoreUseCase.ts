import { IUpdateStoreDto } from "@modules/store/dtos/IUpdateStoreDTO";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class UpdateStoreUseCase {
  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(storeData: IUpdateStoreDto): Promise<void> {

    const store = await this.storeRepository.findById(storeData.id);

    for (const field of ["cnpj", "name", "brand", "is_active"]) {
      if (storeData[field]) {
        store[field] = storeData[field]
      } else {
        store.is_active = storeData.is_active
      }
    }


    await this.storeRepository.update(store);
  }

}



