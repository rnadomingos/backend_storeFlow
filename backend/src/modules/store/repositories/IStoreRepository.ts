import { Store } from "../entities/Store";
import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { IUpdateStoreDto } from "../dtos/IUpdateStoreDTO";

export interface IStoreRepository {
  findById(id: string): Promise<Store>;
  findByCNPJ(cnpj: string): Promise<Store>;
  create(data: ICreateStoreDTO): Promise<void>;
  list(): Promise<Store[]>
  listSellers(id: string): Promise<Store[]>;
  update(data: IUpdateStoreDto): Promise<void>;
}
