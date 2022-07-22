import { getRepository, Repository } from "typeorm";
import { IStoreRepository } from "../IStoreRepository";
import { ICreateStoreDTO } from "../../dtos/ICreateStoreDTO";
import { Store } from "@modules/store/entities/Store";
import { IUpdateStoreDto } from "@modules/store/dtos/IUpdateStoreDTO";
import { IJoinStoreSegmentDTO } from "@modules/store/dtos/IJoinStoreSegmentDTO";
import { ISeparateStoreSegmentDTO } from "@modules/store/dtos/ISeparateStoreSegmentDTO";
import { Seller } from "@modules/seller/entities/Seller";


export class StoreRepositoryPostgres implements IStoreRepository {

  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async findById(id: string): Promise<Store> {
    return await this.repository.findOne({ id })
  }

  async findByCNPJ(cnpj: string): Promise<Store> {
    return this.repository.findOne({
      where: { cnpj, is_active: true }
    })
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
      relations: ["sellers"],
      where: { id }
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

  async joinStoreSegment({
    storeId,
    segmentId

  }: IJoinStoreSegmentDTO): Promise<void> {

    await this.repository.createQueryBuilder()
      .relation(Store, "segments")
      .of(storeId)
      .add(segmentId)
  }

  async getSegmentByStoreId(id: string): Promise<Store> {
    return await this.repository.findOne({
      where: {
        id
      },
      relations: ["segments"]
    })
  }

  async separateStoreSegment({
    storeId,
    segmentId

  }: ISeparateStoreSegmentDTO): Promise<void> {
    await this.repository.createQueryBuilder()
      .relation(Store, "segments")
      .of(storeId)
      .remove(segmentId)
  }
}

