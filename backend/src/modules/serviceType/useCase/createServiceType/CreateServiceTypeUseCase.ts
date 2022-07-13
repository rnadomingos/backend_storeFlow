import { ICreateServiceTypeDTO } from "@modules/serviceType/dtos/ICreateServiceTypeDTO";
import { IServiceTypeRepository } from "../../repositories/IServiceTypeRepository";
import { inject, injectable } from "tsyringe";
import { ErrorHandler } from "@shared/errors/ErrorHandler";



@injectable()
export class CreateServiceTypeUseCase {

    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRepository: IServiceTypeRepository
    ) { }

    async execute(serviceTypeData: ICreateServiceTypeDTO): Promise<void> {
        for (const field of [
            "name",
            "description"]) {
            if (!serviceTypeData[field]) {
                throw new ErrorHandler(`Params ${field} Missing`)
            }
        }

        serviceTypeData.name = serviceTypeData.name.toLocaleLowerCase()
        const serviceTypeExists = await this.serviceTypeRepository.findByName(serviceTypeData.name)

        if (serviceTypeExists) {
            throw new ErrorHandler("Service Type Already exists")
        }

        await this.serviceTypeRepository.create(serviceTypeData);

    }
}