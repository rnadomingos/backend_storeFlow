import { Segment } from "@modules/segment/entities/Segment";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";
import { ISegmentRepository } from "../../repositories/ISegmentRepository";


@injectable()

export class FindSegmentByIdUseCase {

    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }

    async execute(
        id: string
    ): Promise<Segment> {

        const segment = await this.segmentRepository.findById(id)

        if (!segment) {
            throw new ErrorHandler(`Segment not found with this ID!`)
        }
        return segment;
    }
}