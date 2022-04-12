import { inject, injectable } from "tsyringe";
import { IStoreRepository } from "../../repositories/IStoreRepository";

interface IRequest {
  cnpj: number;
  name: string;
  brand: string;
}

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
  }: IRequest): Promise<void> {

    const storeExists = await this.storeRepository.findByCNPJ(cnpj);

    if (storeExists) {
      throw new Error("loja já cadastrada")
    }

    await this.storeRepository.create({ cnpj, name, brand });
  }

}