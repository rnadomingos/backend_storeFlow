import { ICreateSegmentDTO } from "../dto/ICreateSegmentDTO";
import { IUpdateDTO } from "../dto/IUpdateSegmentDTO";
import { ISegment } from "../model/ISegment";



export interface ISegmentRepository {
  create(data: ICreateSegmentDTO): Promise<void>;
  findByName(name: string): Promise<ISegment>;
  findById(id: string): Promise<ISegment>;
  list(args?: any, page?: number, rowsPerPage?: number): Promise<ISegment[]>;
  update(data: IUpdateDTO): Promise<void>;
  delete(id: string): Promise<void>;
}