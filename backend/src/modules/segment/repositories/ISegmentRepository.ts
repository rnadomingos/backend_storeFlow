import { ICreateSegmentDTO } from "../dtos/ICreateSegmentDTO";
import { IUpdateSegmentByIdDTO } from "../dtos/IUpdateSegmentByIdDTO";
import { Segment } from "../entities/Segment";



export interface ISegmentRepository {
  create(data: ICreateSegmentDTO): Promise<void>;
  findByName(name: string): Promise<Segment>;
  findById(id: string): Promise<Segment>;
  list(): Promise<Segment[]>;
  updateSegmentById(data: IUpdateSegmentByIdDTO): Promise<void>;
  deleteSegmentById(id: string): Promise<void>;
}