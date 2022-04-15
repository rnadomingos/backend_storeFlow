import { ICreateSegmentDTO } from "modules/segment/dtos/ICreateSegmentDTO";
import { ISegmentRepository } from "../../repositories/ISegmentRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class CreateSegmentUseCase {

  constructor(
    @inject("SegmentRepository")
    private segmentRepository: ISegmentRepository
  ) { }

  async execute({
    name,
    description
  }: ICreateSegmentDTO): Promise<void> {

    const segmentExists = await this.segmentRepository.findByName(name);
    console.log('log1', segmentExists);


    if (segmentExists) {
      // throw new Error('Segment already exists!')
      throw new Error("Segment Already exists.")
    }

    await this.segmentRepository.create({
      name,
      description
    });
  }
}