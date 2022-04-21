import { ISegmentRepository } from "@modules/segment/repositories/ISegmentRepository";
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
            throw new Error(`This ID:(${id}) was not found!`)
        }

        return await this.segmentRepository.deleteSegmentById(id)

    }
}