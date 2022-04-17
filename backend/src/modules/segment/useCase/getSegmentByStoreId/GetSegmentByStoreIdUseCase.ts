import { Store } from "@modules/store/entities/Store";
import { ISegmentRepository } from "@modules/segment/repositories/ISegmentRepository";
import { inject, injectable } from "tsyringe";



@injectable()
export class GetSegmentByStoreIdUseCase {

    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }

    async excecute(id: string): Promise<Store[]> {

        const segment = await this.segmentRepository.getSegmentByStoreId(id)

        if (!segment) {
            throw new Error('Segments not found with this id.')
        }

        return segment
    }
}