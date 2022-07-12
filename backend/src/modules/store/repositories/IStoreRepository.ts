import { Store } from "../entities/Store";
import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { IUpdateStoreDto } from "../dtos/IUpdateStoreDTO";
import { IJoinStoreSegmentDTO } from "../dtos/IJoinStoreSegmentDTO";
import { ISeparateStoreSegmentDTO } from "../dtos/ISeparateStoreSegmentDTO";

export interface IStoreRepository {
  findById(id: string): Promise<Store>;
  findByCNPJ(cnpj: string): Promise<Store>;
  create(data: ICreateStoreDTO): Promise<void>;
  list(): Promise<Store[]>
  listSellers(id: string): Promise<Store[]>;
  update(data: IUpdateStoreDto): Promise<void>;
  joinStoreSegment(data: IJoinStoreSegmentDTO): Promise<void>;
  getSegmentByStoreId(id: string): Promise<Store>;
  separateStoreSegment(data: ISeparateStoreSegmentDTO): Promise<void>;
}
