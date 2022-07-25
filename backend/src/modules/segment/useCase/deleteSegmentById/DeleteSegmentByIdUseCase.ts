import { ISegmentRepository } from "@domain/segment/repository/ISegmentRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()
export class DeleteSegmentByIdUseCase {
    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }
    async execute(id: string): Promise<void> {

        const segmentExsists = this.segmentRepository.findById(id);

        if (!segmentExsists) {
            throw new ErrorHandler(`This ID:(${id}) was not found!`)
        }

        return await this.segmentRepository.deleteSegmentById(id)

    }
}