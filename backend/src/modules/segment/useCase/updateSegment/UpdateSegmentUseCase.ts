import { IUpdateDTO } from "@domain/segment/dto/IUpdateSegmentDTO";
import { ISegmentRepository } from "@domain/segment/repository/ISegmentRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateSegmentUseCase {

    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }
    async execute({
        id,
        name,
        description,
        is_active
    }: IUpdateDTO): Promise<void> {

        const segment = await this.segmentRepository.findById(id);

        if (!segment) {
            throw new ErrorHandler(`This ID:(${id}) was not found!`)
        }


        if (name) {
            segment.name = name.toLocaleLowerCase()
        }
        if (description) {
            segment.description = description
        }
        if (is_active != null) {
            segment.is_active = is_active
        }

        return await this.segmentRepository.update(segment)

    }
}