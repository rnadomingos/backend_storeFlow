import { ISegmentRepository } from "@domain/segment/repository/ISegmentRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()
export class DeleteSegmentUseCase {
    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }
    async execute(id: string): Promise<void> {

        const segmentExist = await this.segmentRepository.findById(id);

        if (!segmentExist) {
            throw new ErrorHandler(`Segment was not found!`)
        }

        return await this.segmentRepository.delete(id)

    }
}