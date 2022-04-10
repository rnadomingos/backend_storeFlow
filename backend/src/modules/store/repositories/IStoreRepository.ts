import { Store } from "../entities/Store";
import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";

export interface IStoreRepository {
  findByCNPJ(cnpj: number): Promise<Store>;
  create(data: ICreateStoreDTO): Promise<void>;
  list(): Promise<Store[]>

}
