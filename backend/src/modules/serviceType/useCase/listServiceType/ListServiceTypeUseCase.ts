import { ServiceType } from "@modules/serviceType/entities/ServiceType";
import { IServiceTypeRepository } from "@modules/serviceType/repositories/IServiceTypeRepository";
import { inject, injectable } from "tsyringe";



@injectable()
export class ListServiceTypeUseCase {
    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRepository: IServiceTypeRepository
    ) { }
    async execute(): Promise<ServiceType[]> {
        return await this.serviceTypeRepository.list();
    }
}