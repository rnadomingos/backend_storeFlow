import { ICreateSegmentDTO } from "../dtos/ICrateSegmentDTO";
import { Segment } from "../entities/Segment";



export interface ISegmentRepository {
  create(data: ICreateSegmentDTO): void;
  findByName(name: string): Segment;
}