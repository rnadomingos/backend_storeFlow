import { Store } from "../entities/Store";
import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { Seller } from "@modules/seller/entities/Seller";

export interface IStoreRepository {
  findById(id: string): Promise<Store>;
  findByCNPJ(cnpj: number): Promise<Store>;
  create(data: ICreateStoreDTO): Promise<void>;
  list(): Promise<Store[]>
  listSellers(): Promise<Seller[]>;
}
