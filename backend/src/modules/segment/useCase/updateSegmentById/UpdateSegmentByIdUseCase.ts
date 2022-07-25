import { IUpdateSegmentByIdDTO } from "@domain/segment/dto/IUpdateSegmentByIdDTO";
import { ISegmentRepository } from "@domain/segment/repository/ISegmentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateSegmentByIdUseCase {

    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }
    async execute({
        id,
        name,
        description,
        is_active
    }: IUpdateSegmentByIdDTO): Promise<void> {

        const segment = await this.segmentRepository.findById(id);

        if (name) {
            segment.name = name.toLocaleLowerCase()
        }
        if (description) {
            segment.description = description
        }
        if (is_active != null) {
            segment.is_active = is_active
        }

        return await this.segmentRepository.updateSegmentById(segment)

    }
}