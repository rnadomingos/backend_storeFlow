
import { ICreateProspectionDTO } from '@modules/prospection/dtos/ICreateProspectionDTO'
import { IDisableEnableProspectionDTO } from '@modules/prospection/dtos/IDisableEnableProspectionDTO'
import { IUpdateProspectionDTO } from '@modules/prospection/dtos/IUpdateProspection'
import { Prospection } from '@modules/prospection/entities/Prospection'
import { getRepository, Repository } from 'typeorm'
import { IProspectionRepository } from '../IProspectionRepository'


export class ProspectionRepositoryPostgres implements IProspectionRepository {

    private repository: Repository<Prospection>;

    constructor() {
        this.repository = getRepository(Prospection);
    }

    async create({
        name,
        description
    }: ICreateProspectionDTO): Promise<void> {
        const newProspection = this.repository.create({
            name,
            description
        })
        await this.repository.save(newProspection)
    }

    async list(): Promise<Prospection[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<Prospection> {
        return await this.repository.findOne({ id })
    }

    async findByName(name: string): Promise<Prospection> {
        return await this.repository.findOne({ name })
    }

    async updateById({
        id,
        name,
        description,
        is_active
    }: IUpdateProspectionDTO): Promise<void> {
        const updateProspection = this.repository.create({
            id,
            name,
            description,
            is_active
        })
        await this.repository.save(updateProspection);
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete({ id })
    }

    async disableEnableById({
        id,
        is_active
    }: IDisableEnableProspectionDTO): Promise<void> {
        await this.repository.update({
            id
        }, {
            is_active
        })
    }

}