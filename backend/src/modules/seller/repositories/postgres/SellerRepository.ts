import { ICreateSellerDTO } from "@modules/seller/dtos/ICreateSellerDTO";
import { IUpdateSellerDTO } from "@modules/seller/dtos/IUpdateSellerDTO";
import { Seller } from "@modules/seller/entities/Seller";
import { getRepository, Repository } from "typeorm";
import { ISellerRepository } from "../ISellerRepository";



export class SellerRepositoryPostgres implements ISellerRepository {

  private repository: Repository<Seller>;

  constructor() {
    this.repository = getRepository(Seller)
  }

  async update({
    id,
    name,
    user_dms,
    id_store,
    is_active
  }: IUpdateSellerDTO): Promise<void> {
    const updateSeller = this.repository.create({
      id,
      name,
      user_dms,
      id_store,
      is_active
    });
    await this.repository.save(updateSeller)
  }

  async findStoreBySeller(user_dms: string): Promise<Seller[]> {
    return await this.repository.find({
      where: { user_dms },
      relations: ["store"]
    });
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