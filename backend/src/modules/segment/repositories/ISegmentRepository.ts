import { Store } from "@modules/store/entities/Store";
import { ICreateSegmentDTO } from "../dtos/ICreateSegmentDTO";
import { IJoinSegmentStoreDTO } from "../dtos/IJoinSegmentStoreDTO";
import { Segment } from "../entities/Segment";



export interface ISegmentRepository {
  create(data: ICreateSegmentDTO): Promise<void>;
  findByName(name: string): Promise<Segment>;
  getSegmentByStoreId(id: string): Promise<Store[]>;
  list(): Promise<Segment[]>;
  joinSegmentStore(data: IJoinSegmentStoreDTO): Promise<void>;
}