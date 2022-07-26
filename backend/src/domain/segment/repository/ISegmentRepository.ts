import { ICreateSegmentDTO } from "../dto/ICreateSegmentDTO";
import { IUpdateDTO } from "../dto/IUpdateSegmentDTO";
import { ISegment } from "../model/ISegment";



export interface ISegmentRepository {
  create(data: ICreateSegmentDTO): Promise<void>;
  findByName(name: string): Promise<ISegment>;
  findById(id: string): Promise<ISegment>;
  list(): Promise<ISegment[]>;
  update(data: IUpdateDTO): Promise<void>;
  deleteSegmentById(id: string): Promise<void>;
}