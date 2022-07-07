import { IUnjoinStoreSegmentDTO } from "@modules/store/dtos/IUnjoinStoreSegmentDTO";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class UnjoinStoreSegmentUseCase {

  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute({
    storeId,
    segmentId
  }: IUnjoinStoreSegmentDTO): Promise<void> {

    await this.storeRepository.unjoinStoreSegment({
      storeId,
      segmentId
    })
  }
}