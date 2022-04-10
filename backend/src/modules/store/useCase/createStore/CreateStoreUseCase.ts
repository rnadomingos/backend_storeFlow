import { IStoreRepository } from "../../repositories/IStoreRepository";

interface IRequest {
  cnpj: number;
  name: string;
  brand: string;
}

export class CreateStoreUseCase {

  constructor(
    private storeRepositoryInMemory: IStoreRepository
  ) { }

  async execute({
    cnpj,
    name,
    brand
  }: IRequest): Promise<void> {

    const storeExists = await this.storeRepositoryInMemory.findByCNPJ(cnpj);

    if (storeExists) {
      throw new Error("loja já cadastrada")
    }

    await this.storeRepositoryInMemory.create({ cnpj, name, brand });
  }

}