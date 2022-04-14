import { Segment } from "modules/segment/entities/Segment";
import { ISegmentRepository } from "modules/segment/repositories/ISegmentRepository";


export class FindByNameSegmentUseCase {
    constructor(
        private segmentRepository: ISegmentRepository
    ) { }
   async execute({
       name
    }: Segment) {

        const segmentExists = this.segmentRepository.findByName(name)

        if (!segmentExists) {
            // throw Error(`Segment not found with ${name}!`)            
            return { 
                message: `Segment not found with ${name}!`
            }
        }
        
   }
}