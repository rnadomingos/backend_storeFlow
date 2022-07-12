
import { ISeparateStoreSegmentDTO } from "@modules/store/dtos/ISeparateStoreSegmentDTO";
import { IStoreRepository } from "@modules/store/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class SeparateStoreSegmentUseCase {

  constructor(
    @inject("StoreRepository")
    private storeRepository: IStoreRepository
  ) { }

  async execute({
    storeId,
    segmentId
  }: ISeparateStoreSegmentDTO): Promise<void> {

    await this.storeRepository.separateStoreSegment({
      storeId,
      segmentId
    })
  }
}