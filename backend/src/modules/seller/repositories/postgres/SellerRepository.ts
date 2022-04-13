import { ICreateSellerDTO } from "@modules/seller/dtos/ICreateSellerDTO";
import { Seller } from "@modules/seller/entities/Seller";
import { getRepository, Repository } from "typeorm";
import { ISellerRepository } from "../ISellerRepository";



export class SellerRepositoryPostgres implements ISellerRepository {

  private repository: Repository<Seller>;

  constructor() {
    this.repository = getRepository(Seller)
  }

  async findById(id: string): Promise<Seller> {
    return this.repository.findOne(id)
  }

  async findByUserDms(user_dms: string): Promise<Seller> {
    return this.repository.findOne({ user_dms })
  }

  async create({
    name,
    user_dms,
    id_store
  }: ICreateSellerDTO): Promise<void> {

    const newSeller = this.repository.create({
      name,
      user_dms,
      id_store
    });
    await this.repository.save(newSeller)
  }

  async list(): Promise<Seller[]> {
    return await this.repository.find()
  }

}