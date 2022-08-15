import { IServiceTypeRepository } from "@domain/serviceType/repository/IServiceTypeRepository";
import { ServiceType } from "@modules/serviceType/entities/ServiceType";
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