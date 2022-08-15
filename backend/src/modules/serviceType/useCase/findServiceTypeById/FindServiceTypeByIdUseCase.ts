import { IServiceTypeRepository } from "@domain/serviceType/repository/IServiceTypeRepository";
import { ServiceType } from "@modules/serviceType/entities/ServiceType";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindServiceTypeByIdUseCase {
    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRepository: IServiceTypeRepository
    ) { }

    async execute(
        id: string
    ): Promise<ServiceType> {

        const serviceType = await this.serviceTypeRepository.findById(id);

        if (!serviceType) {
            throw new ErrorHandler(`Service Type was not found!`)
        }
        return serviceType;
    }
}