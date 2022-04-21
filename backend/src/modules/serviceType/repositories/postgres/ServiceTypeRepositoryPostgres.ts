
import { ServiceType } from "@modules/serviceType/entities/ServiceType";
import { ICreateServiceTypeDTO } from "../../dtos/ICreateServiceTypeDTO";
import { getRepository, Repository } from "typeorm";
import { IServiceTypeRepository } from "../IServiceTypeRepository";



export class ServiceTypeRepositoryPostgres implements IServiceTypeRepository {

    private repository: Repository<ServiceType>;

    constructor() {
        this.repository = getRepository(ServiceType);
    }

    async create({
        name,
        description
    }: ICreateServiceTypeDTO): Promise<void> {

        const newServiceType = this.repository.create({
            name,
            description
        })
        await this.repository.save(newServiceType);

    }
}