import { IJoinStoreSegmentDTO } from "@modules/store/dtos/IJoinStoreSegmentDTO";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";



@injectable()
export class JoinStoreSegmentUseCase {

    constructor(
        @inject("StoreRepository")
        private storeRepository: IStoreRepository
    ) { }

    async execute({
        storeId,
        segmentId
    }: IJoinStoreSegmentDTO): Promise<void> {

        await this.storeRepository.joinStoreSegment(
            {
                storeId,
                segmentId

            }
        );

    }
}