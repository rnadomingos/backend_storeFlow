import { Store } from "@modules/store/entities/Store";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class GetStoreByCNPJUseCase {
  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(cnpj: string): Promise<Store> {
    const store = await this.storeRepository.findByCNPJ(cnpj);
    return store;
  }
}