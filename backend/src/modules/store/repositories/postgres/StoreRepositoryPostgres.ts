import { getRepository, Repository } from "typeorm";
import { IStoreRepository } from "../IStoreRepository";
import { ICreateStoreDTO } from "../../dtos/ICreateStoreDTO";
import { Store } from "@modules/store/entities/Store";
import { IUpdateStoreDto } from "@modules/store/dtos/IUpdateStoreDTO";


export class StoreRepositoryPostgres implements IStoreRepository {

  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async findById(id: string): Promise<Store> {
    return await this.repository.findOne(id)
  }

  async findByCNPJ(cnpj: string): Promise<Store> {
    return this.repository.findOne({ cnpj })
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

  async listSellers(id: string): Promise<Store[]> {
    return await this.repository.find({
      where: { id },
      relations: ["sellers"]
    });
  }

  async update({
    id,
    cnpj,
    name,
    brand,
    is_active
  }: IUpdateStoreDto): Promise<void> {
    const updateStore = this.repository.create({
      id,
      cnpj,
      name,
      brand,
      is_active
    })
    await this.repository.save(updateStore)
  }


}

