import { ICreateSegmentDTO } from "../dtos/ICreateSegmentDTO";
import { IJoinSegmentStoreDTO } from "../dtos/IJoinSegmentStoreDTO";
import { Segment } from "../entities/Segment";



export interface ISegmentRepository {
  create(data: ICreateSegmentDTO): Promise<void>;
  findByName(name: string): Promise<Segment>;
  list(): Promise<Segment[]>;
  joinSegmentStore(data: IJoinSegmentStoreDTO): Promise<void>;
}