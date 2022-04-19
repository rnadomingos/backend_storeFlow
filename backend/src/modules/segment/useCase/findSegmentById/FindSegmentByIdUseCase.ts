import { Segment } from "@modules/segment/entities/Segment";
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
            throw new Error(`Segment not found with this ID!`)
        }
        return segment;
    }
}