import { Segment } from "@modules/segment/entities/Segment";
import { inject, injectable } from "tsyringe";
import { ISegmentRepository } from "../../repositories/ISegmentRepository";


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
            throw new Error(`Segment not found with this id!`)
        }
        return segment;
    }
}