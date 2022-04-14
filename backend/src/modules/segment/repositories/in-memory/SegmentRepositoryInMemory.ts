import { ICreateSegmentDTO } from "../../dtos/ICreateSegmentDTO";
import { Segment } from "../../entities/Segment";
import { ISegmentRepository } from "../ISegmentRepository";


export class SegmentRepositoryInMemory implements ISegmentRepository {

  private segments: Segment[] = [];

  async findByName(name: string): Promise<Segment> {
    return this.segments.find(
      (segments) => segments.name === name
    )
  }

  create({
    name,
    description
  }: ICreateSegmentDTO): void {
    const newSegment = new Segment();

    Object.assign(newSegment, {
      name,
      description,
      created_at: new Date()
    });

    this.segments.push(newSegment);
    console.log('segment', this.segments);
  }

  async list(): Promise<Segment[]> {
    return this.segments;
  }

}