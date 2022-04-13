import { ICreateStoreDTO } from "@modules/store/dtos/ICreateStoreDTO";
import { inject, injectable } from "tsyringe";
import { IStoreRepository } from "../../repositories/IStoreRepository";


@injectable()
export class CreateStoreUseCase {

  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute({
    cnpj,
    name,
    brand
  }: ICreateStoreDTO): Promise<void> {

    const storeExists = await this.storeRepository.findByCNPJ(cnpj);

    if (storeExists) {
      throw new Error("Store Already exists")
    }

    await this.storeRepository.create({ cnpj, name, brand });
  }

}