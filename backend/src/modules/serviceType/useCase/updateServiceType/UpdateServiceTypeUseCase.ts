import { IUpdateDTO } from "@domain/segment/dto/IUpdateSegmentDTO";
import { IServiceTypeRepository } from "@domain/serviceType/repository/IServiceTypeRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()
export class UpdateServiceTypeUseCase {

    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRepository: IServiceTypeRepository
    ) { }
    async execute(serviceTypeData: IUpdateDTO): Promise<void> {


        const serviceType = await this.serviceTypeRepository.findById(serviceTypeData.id);

        if (!serviceType) {
            throw new ErrorHandler(`Service Types was not found!`)
        }

        for (const field of [
            "name",
            "description",
            "is_active"
        ]) {
            if (serviceTypeData[field]) {
                serviceType[field] = serviceTypeData[field]
            } else {
                serviceType.is_active = serviceTypeData.is_active
            }
        }


        return await this.serviceTypeRepository.updateById(serviceType);
    }
}