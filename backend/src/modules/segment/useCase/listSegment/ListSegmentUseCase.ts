import { ISegmentRepository } from '../../../../domain/segment/repository/ISegmentRepository';
import { inject, injectable } from 'tsyringe';
import { Segment } from '@modules/segment/entities/Segment';


@injectable()
export class ListSegmentUseCase {

    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }

    async execute(): Promise<Segment[]> {
        return await this.segmentRepository.list();
    }
}