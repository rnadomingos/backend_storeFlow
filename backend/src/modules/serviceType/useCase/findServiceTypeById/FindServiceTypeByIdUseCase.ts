import { ServiceType } from "@modules/serviceType/entities/ServiceType";
import { IServiceTypeRepository } from "@modules/serviceType/repositories/IServiceTypeRepository";
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
            throw new Error(`Service Type not found with this ID!`)
        }
        return serviceType;
    }
}