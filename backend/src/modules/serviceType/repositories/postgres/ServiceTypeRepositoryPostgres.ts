
import { ServiceType } from "@modules/serviceType/entities/ServiceType";
import { ICreateServiceTypeDTO } from "../../../../domain/serviceType/dto/ICreateServiceTypeDTO";
import { getRepository, ILike, Repository } from "typeorm";
import { IUpdateServiceTypeDTO } from "@domain/serviceType/dto/IUpdateServiceTypeDTO";
import { IServiceTypeRepository } from "@domain/serviceType/repository/IServiceTypeRepository";
import { IServiceType } from "@domain/serviceType/model/IServiceType";



export class ServiceTypeRepositoryPostgres implements IServiceTypeRepository {

    private repository: Repository<IServiceType>;

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

    async list(args?: any, page?: number, rowsPerPage?: number): Promise<IServiceType[]> {
        return await this.repository.find({
            where: [
                {name: ILike (`%${args}%`)},
                {description: ILike(`%${args}%`)}
            ],
            skip: rowsPerPage * (page -1),
            take: rowsPerPage
        });
    }

    async findById(id: string): Promise<IServiceType> {

        return await this.repository.findOne({ id });
    }

    async findByName(name: string): Promise<IServiceType> {
        return await this.repository.findOne({ name });
    }

    async updateById({ id,
        name,
        description,
        is_active
    }: IUpdateServiceTypeDTO): Promise<void> {

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
