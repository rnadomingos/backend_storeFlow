import { ICreateSegmentDTO } from "../dtos/ICreateSegmentDTO";
import { Segment } from "../entities/Segment";



export interface ISegmentRepository {
  create(data: ICreateSegmentDTO): Promise<void>;
  findByName(name: string): Promise<Segment>;
  list(): Promise<Segment[]>;
}