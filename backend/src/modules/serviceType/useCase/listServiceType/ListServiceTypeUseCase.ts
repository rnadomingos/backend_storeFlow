import { IServiceTypeRepository } from "@domain/serviceType/repository/IServiceTypeRepository";
import { ServiceType } from "@modules/serviceType/entities/ServiceType";
import { inject, injectable } from "tsyringe";
import env from '@config/env'
import { IServiceType } from "@domain/serviceType/model/IServiceType";

interface IResponse {
    total: number;
    limit_per_page: number;
    serviceType: IServiceType[]
}

@injectable()
export class ListServiceTypeUseCase {
    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRepository: IServiceTypeRepository
    ) { }
    async execute(args: any = '', page: number = 1): Promise<IResponse> {
        const rowsPerPage = env.register_per_page
        const serviceType = await this.serviceTypeRepository.list(args, page, rowsPerPage)
        const total = (await this.serviceTypeRepository.list(args)).length
        return {
            total,
            limit_per_page: rowsPerPage,
            serviceType
        };
    }
}