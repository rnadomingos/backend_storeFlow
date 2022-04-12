import { getRepository, Repository } from "typeorm";
import { IStoreRepository } from "../IStoreRepository";
import { ICreateStoreDTO } from "../../dtos/ICreateStoreDTO";
import { Store } from "@modules/store/entities/Store";


export class StoreRepositoryPostgres implements IStoreRepository {

  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async findByCNPJ(cnpj: number): Promise<Store> {
    return this.repository.findOne(cnpj)
  }
  async create({
    cnpj,
    name,
    brand
  }: ICreateStoreDTO): Promise<void> {
    const newStore = this.repository.create({
      cnpj,
      name,
      brand,
    })
    await this.repository.save(newStore)
  }

  async list(): Promise<Store[]> {
    return await this.repository.find()
  }

}

