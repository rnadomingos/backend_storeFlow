import { ICreateSellerDTO } from "@domain/seller/dto/ICreateSellerDTO";
import { IUpdateSellerDTO } from "@domain/seller/dto/IUpdateSellerDTO";
import { ISeller } from "@domain/seller/model/ISeller";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { Seller } from "@modules/seller/entities/Seller";
import { getRepository, Repository } from "typeorm";



export class SellerRepositoryPostgres implements ISellerRepository {

  private repository: Repository<ISeller>;

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
    name = name.toLocaleLowerCase()
    const updateSeller = this.repository.create({
      id,
      name,
      user_dms,
      id_store,
      is_active
    });
    await this.repository.save(updateSeller)
  }

  async findStoreBySeller(user_dms: string): Promise<ISeller> {
    return await this.repository.findOne({
      where: { user_dms },
      relations: ["store"]
    });
  }

  async findById(id: string): Promise<ISeller> {
    return this.repository.findOne(id)
  }

  async findByUserDms(user_dms: string): Promise<ISeller> {
    return this.repository.findOne({ user_dms })
  }

  async create({
    name,
    user_dms,
    id_store
  }: ICreateSellerDTO): Promise<void> {
    name = name.toLocaleLowerCase()
    const newSeller = this.repository.create({
      name,
      user_dms,
      id_store
    });
    await this.repository.save(newSeller)
  }

  async list(): Promise<ISeller[]> {
    return await this.repository.find()
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }

}