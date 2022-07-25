import { ICreateSegmentDTO } from "../dto/ICreateSegmentDTO";
import { IUpdateSegmentByIdDTO } from "../dto/IUpdateSegmentByIdDTO";
import { Segment } from "../../../modules/segment/entities/Segment";



export interface ISegmentRepository {
  create(data: ICreateSegmentDTO): Promise<void>;
  findByName(name: string): Promise<Segment>;
  findById(id: string): Promise<Segment>;
  list(): Promise<Segment[]>;
  updateSegmentById(data: IUpdateSegmentByIdDTO): Promise<void>;
  deleteSegmentById(id: string): Promise<void>;
}