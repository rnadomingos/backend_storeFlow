import { ICreateSegmentDTO } from "modules/segment/dtos/ICrateSegmentDTO";
import { ISegmentRepository } from "modules/segment/repositories/ISegmentRepository";


export class CreateSegmentUseCase {
  constructor(
    private segmentRepository: ISegmentRepository
  ) { }

  async execute({
    name,
    description
  }: ICreateSegmentDTO) {

    const segmentExists = this.segmentRepository.findByName(name);

    if (segmentExists) {

    }

    this.segmentRepository.create({
      name,
      description
    })
  }
}