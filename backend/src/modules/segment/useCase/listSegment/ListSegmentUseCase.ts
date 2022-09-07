import { ISegmentRepository } from '../../../../domain/segment/repository/ISegmentRepository';
import { inject, injectable } from 'tsyringe';
import { ISegment } from '@domain/segment/model/ISegment';
import env from '@config/env'

interface IResponse {
    total: number;
    limit_per_page: number;
    segments: ISegment[]
}

@injectable()
export class ListSegmentUseCase {

    constructor(
        @inject("SegmentRepository")
        private segmentRepository: ISegmentRepository
    ) { }

    async execute(args: any = '', page: number = 1): Promise<IResponse> {
        const rowsPerPage = env.register_per_page
        const segments = await this.segmentRepository.list(args, page, rowsPerPage)
        const total = (await this.segmentRepository.list(args)).length
        return {
            total,
            limit_per_page: rowsPerPage,
            segments
        };
    }
}