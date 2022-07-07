import { Store } from "../entities/Store";
import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { IUpdateStoreDto } from "../dtos/IUpdateStoreDTO";
import { IJoinStoreSegmentDTO } from "../dtos/IJoinStoreSegmentDTO";
import { IUnjoinStoreSegmentDTO } from "../dtos/IUnjoinStoreSegmentDTO";

export interface IStoreRepository {
  findById(id: string): Promise<Store>;
  findByCNPJ(cnpj: string): Promise<Store>;
  create(data: ICreateStoreDTO): Promise<void>;
  list(): Promise<Store[]>
  listSellers(id: string): Promise<Store[]>;
  update(data: IUpdateStoreDto): Promise<void>;
  joinStoreSegment(data: IJoinStoreSegmentDTO): Promise<void>;
  getSegmentByStoreId(id: string): Promise<Store[]>;
  unjoinStoreSegment(data: IUnjoinStoreSegmentDTO): Promise<void>;
}
