import { IStore } from "@domain/store/model/IStore";
import { IStoreRepository } from "@domain/store/repository/IStoreRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetSegmentByStoreIdUseCase {

    constructor(
        @inject("StoreRepository")
        private storeRepository: IStoreRepository
    ) { }

    async execute(id: string): Promise<IStore> {

        const segment = await this.storeRepository.getSegmentByStoreId(id)

        if (!segment) {
            throw new Error('Segments not found with this id.')
        }
        return segment
    }
}