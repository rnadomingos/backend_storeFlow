import { ICreateStoreDTO } from "../../dtos/ICreateStoreDTO";
import { Store } from "../../entities/Store";
import { IStoreRepository } from "../IStoreRepository";

export class StoreRepositoryInMemory implements IStoreRepository {

  private stores: Store[];
  private static INSTANCE: StoreRepositoryInMemory;

  private constructor() {
    this.stores = [];
  }

  public static getInstance(): StoreRepositoryInMemory {
    if (!StoreRepositoryInMemory.INSTANCE) {
      StoreRepositoryInMemory.INSTANCE = new StoreRepositoryInMemory()
    }
    return StoreRepositoryInMemory.INSTANCE;
  }

  async findByCNPJ(cnpj: number): Promise<Store> {
    return this.stores.find(
      (store) => store.cnpj === cnpj
    )
  }
  async create({
    cnpj,
    name,
    brand
  }: ICreateStoreDTO): Promise<void> {
    const newStore = new Store();

    Object.assign(newStore, {
      cnpj,
      name,
      brand,
      created_at: new Date()
    });

    this.stores.push(newStore);
    console.log('store', this.stores);
  }

  async list(): Promise<Store[]> {
    console.log('Stores', this.stores);
    return this.stores;
  }

}

