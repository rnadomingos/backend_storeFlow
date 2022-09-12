import { ICreateStoreDTO } from "@domain/store/dtos/ICreateStoreDTO";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";
import { IStoreRepository } from "../../../../domain/store/repository/IStoreRepository";


@injectable()
export class CreateStoreUseCase {

  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute(storeData: ICreateStoreDTO): Promise<void> {

    const storeExists = await this.storeRepository.findByCNPJ(storeData.cnpj);

    if (storeExists) {
      throw new ErrorHandler("Store Already exists")
    }

    await this.storeRepository.create(storeData);
  }

}