import { IJoinSegmentStoreDTO } from "@modules/segment/dtos/IJoinSegmentStoreDTO";
import { ISegmentRepository } from "@modules/segment/repositories/ISegmentRepository";
import { inject, injectable } from "tsyringe";



@injectable()
export class JoinSegmentStoreUseCase {

    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }

    async execute({
        segmentId,
        storeId
    }: IJoinSegmentStoreDTO): Promise<void> {

        await this.segmentRepository.joinSegmentStore(
            {
                segmentId,
                storeId
            }
        );

    }
}