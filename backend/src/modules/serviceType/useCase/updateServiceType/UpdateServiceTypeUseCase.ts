import { IUpdateSegmentByIdDTO } from "@domain/segment/dto/IUpdateSegmentByIdDTO";
import { IServiceTypeRepository } from "@modules/serviceType/repositories/IServiceTypeRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { container, inject, injectable } from "tsyringe";
import { FindServiceTypeByIdUseCase } from "../findServiceTypeById/FindServiceTypeByIdUseCase";


@injectable()
export class UpdateServiceTypeUseCase {

    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRepository: IServiceTypeRepository
    ) { }
    async execute(serviceTypeData: IUpdateSegmentByIdDTO): Promise<void> {


        const serviceType = await this.serviceTypeRepository.findById(serviceTypeData.id);

        if (!serviceType) {
            throw new ErrorHandler(`This ID:(${serviceTypeData.id}) was not found!`)
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