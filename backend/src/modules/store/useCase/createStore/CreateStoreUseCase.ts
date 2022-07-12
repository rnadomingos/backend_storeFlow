import { ICreateStoreDTO } from "@modules/store/dtos/ICreateStoreDTO";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";
import { IStoreRepository } from "../../repositories/IStoreRepository";


@injectable()
export class CreateStoreUseCase {

  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(storeData: ICreateStoreDTO): Promise<void> {

    for (const field of ["cnpj", "name", "brand"]) {
      if (!storeData[field]) {
        throw new ErrorHandler(`Params ${field} Missing`)
      }
    }

    const storeExists = await this.storeRepository.findByCNPJ(storeData.cnpj);

    if (storeExists) {
      throw new ErrorHandler("Store Already exists")
    }

    await this.storeRepository.create(storeData);
  }

}