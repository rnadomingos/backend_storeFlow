import { IStore } from "@domain/store/model/IStore";
import { IStoreRepository } from "@domain/store/repository/IStoreRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class GetStoreByCNPJUseCase {
  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(cnpj: string): Promise<IStore> {
    const store = await this.storeRepository.findByCNPJ(cnpj);
    return store;
  }
}