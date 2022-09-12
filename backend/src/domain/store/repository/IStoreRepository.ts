import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { IUpdateStoreDto } from "../dtos/IUpdateStoreDTO";
import { IJoinStoreSegmentDTO } from "../dtos/IJoinStoreSegmentDTO";
import { ISeparateStoreSegmentDTO } from "../dtos/ISeparateStoreSegmentDTO";
import { IStore } from "../model/IStore";

export interface IStoreRepository {
  findById(id: string): Promise<IStore>;
  findByCNPJ(cnpj: string): Promise<IStore>;
  create(data: ICreateStoreDTO): Promise<void>;
  list(args?: any, page?: number, rowsPerPage?: number): Promise<IStore[]>
  listSellers(id: string): Promise<IStore>;
  update(data: IUpdateStoreDto): Promise<void>;
  joinStoreSegment(data: IJoinStoreSegmentDTO): Promise<void>;
  getSegmentByStoreId(id: string): Promise<IStore>;
  separateStoreSegment(data: ISeparateStoreSegmentDTO): Promise<void>;
}
