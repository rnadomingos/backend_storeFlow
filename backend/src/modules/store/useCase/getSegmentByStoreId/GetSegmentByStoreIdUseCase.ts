import { Store } from "@modules/store/entities/Store";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetSegmentByStoreIdUseCase {

    constructor(
        @inject("StoreRepository")
        private storeRepository: IStoreRepository
    ) { }

    async execute(id: string): Promise<Store[]> {

        const segment = await this.storeRepository.getSegmentByStoreId(id)

        if (!segment) {
            throw new Error('Segments not found with this id.')
        }

        return segment
    }
}