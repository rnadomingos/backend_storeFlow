import { IUpdateStoreDto } from "@modules/store/dtos/IUpdateStoreDTO";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class UpdateStoreUseCase {
  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute({
    id,
    cnpj,
    name,
    brand,
    is_active
  }: IUpdateStoreDto): Promise<void> {

    const store = await this.storeRepository.findById(id);

    if (cnpj) {
      store.cnpj = cnpj
    }
    if (name) {
      store.name = name
    }
    if (brand) {
      store.brand = brand
    }
    if (is_active === false) {
      store.is_active = false
    }
    if (is_active === true) {
      store.is_active = true
    }

    await this.storeRepository.update(store);
  }

}



