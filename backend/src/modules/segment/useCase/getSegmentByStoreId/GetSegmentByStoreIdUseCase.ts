import { Store } from "@modules/store/entities/Store";
import { ISegmentRepository } from "@modules/segment/repositories/ISegmentRepository";
import { inject, injectable } from "tsyringe";
import { ErrorHandler } from "@shared/errors/ErrorHandler";



@injectable()
export class GetSegmentByStoreIdUseCase {

    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }

    async execute(id: string): Promise<Store[]> {

        const segment = await this.segmentRepository.getSegmentByStoreId(id)

        if (!segment) {
            throw new ErrorHandler('Segments not found with this id.')
        }

        return segment
    }
}