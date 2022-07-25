import { Segment } from "@modules/segment/entities/Segment";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";
import { ISegmentRepository } from "../../../../domain/segment/repository/ISegmentRepository";


@injectable()
export class FindSegmentByNameUseCase {

    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }

    async execute(
        name: string
    ): Promise<Segment> {

        const segment = await this.segmentRepository.findByName(name)

        if (!segment) {
            throw new ErrorHandler(`Segment not found with this id!`)
        }
        return segment;
    }
}