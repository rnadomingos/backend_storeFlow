import { Segment } from "@modules/segment/entities/Segment";
import { ICreateSegmentDTO } from "../../../../domain/segment/dto/ICreateSegmentDTO";

import { ISegmentRepository } from "../../../../domain/segment/repository/ISegmentRepository";


export class SegmentRepositoryInMemory implements ISegmentRepository {

  private segments: Segment[] = [];

  async findByName(name: string): Promise<Segment> {
    return this.segments.find(
      (segments) => segments.name === name
    )
  }

  async create({
    name,
    description
  }: ICreateSegmentDTO): Promise<void> {
    const newSegment = new Segment();

    Object.assign(newSegment, {
      name,
      description,
      created_at: new Date()
    });

    this.segments.push(newSegment);
  }

  async list(): Promise<Segment[]> {
    return this.segments;
  }

}