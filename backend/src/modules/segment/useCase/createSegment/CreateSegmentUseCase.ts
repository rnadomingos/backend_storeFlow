import { ICreateSegmentDTO } from "modules/segment/dtos/ICreateSegmentDTO";
import { ISegmentRepository } from "../../repositories/ISegmentRepository";
import { inject, injectable } from "tsyringe";
import { ErrorHandler } from "@shared/errors/ErrorHandler";


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
    name = name.toLocaleLowerCase()
    const segmentExists = await this.segmentRepository.findByName(name);

    if (segmentExists) {
      throw new ErrorHandler("Segment Already exists.")
    }

    await this.segmentRepository.create({
      name,
      description
    });
  }
}