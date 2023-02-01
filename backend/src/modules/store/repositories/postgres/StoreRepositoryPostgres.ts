import { getRepository, ILike, Repository } from "typeorm";
import { ICreateStoreDTO } from "@domain/store/dtos/ICreateStoreDTO";
import { Store } from "@modules/store/entities/Store";
import { IUpdateStoreDto } from "@domain/store/dtos/IUpdateStoreDTO";
import { IJoinStoreSegmentDTO } from "@domain/store/dtos/IJoinStoreSegmentDTO";
import { ISeparateStoreSegmentDTO } from "@domain/store/dtos/ISeparateStoreSegmentDTO";
import { IStoreRepository } from "@domain/store/repository/IStoreRepository";
import { IStore } from "@domain/store/model/IStore"


export class StoreRepositoryPostgres implements IStoreRepository {

  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async findById(id: string): Promise<IStore> {
    return await this.repository.findOne({ id })
  }

  async findByCNPJ(cnpj: string): Promise<IStore> {
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

  async list(args?: any, page?: number, rowsPerPage?: number): Promise<IStore[]> {
    return await this.repository.find({
      where: [
        {name: ILike(`%${args}%`)},
        {brand: ILike(`%${args}%`)}
      ],
      skip: rowsPerPage *(page-1),
      take: rowsPerPage
    })
  }

  async listSellers(id: string): Promise<IStore> {
    return await this.repository.findOne({
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

  async getSegmentByStoreId(id: string): Promise<IStore> {
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

