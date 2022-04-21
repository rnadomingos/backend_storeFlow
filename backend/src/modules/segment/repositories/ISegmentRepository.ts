import { Store } from "@modules/store/entities/Store";
import { ICreateSegmentDTO } from "../dtos/ICreateSegmentDTO";
import { IJoinSegmentStoreDTO } from "../dtos/IJoinSegmentStoreDTO";
import { IUpdateSegmentByIdDTO } from "../dtos/IUpdateSegmentByIdDTO";
import { Segment } from "../entities/Segment";



export interface ISegmentRepository {
  create(data: ICreateSegmentDTO): Promise<void>;
  findByName(name: string): Promise<Segment>;
  findById(id: string): Promise<Segment>;
  getSegmentByStoreId(id: string): Promise<Store[]>;
  list(): Promise<Segment[]>;
  joinSegmentStore(data: IJoinSegmentStoreDTO): Promise<void>;
  updateSegmentById(data: IUpdateSegmentByIdDTO): Promise<void>;
  deleteSegmentById(id: string): Promise<void>;
}