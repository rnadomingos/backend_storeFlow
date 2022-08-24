import { ICreateServiceTypeDTO } from "@domain/serviceType/dto/ICreateServiceTypeDTO";
import { inject, injectable } from "tsyringe";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { IServiceTypeRepository } from "@domain/serviceType/repository/IServiceTypeRepository";



@injectable()
export class CreateServiceTypeUseCase {

    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRepository: IServiceTypeRepository
    ) { }

    async execute(serviceTypeData: ICreateServiceTypeDTO): Promise<void> {
        
        serviceTypeData.name = serviceTypeData.name.toLocaleLowerCase()
        const serviceTypeExists = await this.serviceTypeRepository.findByName(serviceTypeData.name)

        if (serviceTypeExists) {
            throw new ErrorHandler("Service Type Already exists")
        }

        await this.serviceTypeRepository.create(serviceTypeData);

    }
}