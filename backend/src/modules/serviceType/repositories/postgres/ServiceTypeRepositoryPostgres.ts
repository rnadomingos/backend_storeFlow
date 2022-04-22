
import { ServiceType } from "@modules/serviceType/entities/ServiceType";
import { ICreateServiceTypeDTO } from "../../dtos/ICreateServiceTypeDTO";
import { getRepository, Repository } from "typeorm";
import { IServiceTypeRepository } from "../IServiceTypeRepository";
import { IUpdateServiceTypeByIdDTO } from "@modules/serviceType/dtos/IUpdateServiceTypeByIdDTO";



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

    async list(): Promise<ServiceType[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<ServiceType> {

        return await this.repository.findOne({ id });
    }
    async updateById({ id,
        name,
        description,
        is_active
    }: IUpdateServiceTypeByIdDTO): Promise<void> {
        const updateServiceType = this.repository.create({
            id,
            name,
            description,
            is_active
        })
        await this.repository.save(updateServiceType)

    }
    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}
