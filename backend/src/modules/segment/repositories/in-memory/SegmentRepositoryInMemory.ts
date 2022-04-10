import { ICreateSegmentDTO } from "modules/segment/dtos/ICrateSegmentDTO";
import { Segment } from "../../entities/Segment";
import { ISegmentRepository } from "../ISegmentRepository";


export class SegmentRepositoryInMemory implements ISegmentRepository {
  findByName(name: string): Segment {
    throw new Error("Method not implemented.");
  }
  create(data: ICreateSegmentDTO): void {
    throw new Error("Method not implemented.");
  }

}