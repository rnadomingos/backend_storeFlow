
import { ICreateProspectionDTO } from '@domain/prospection/dto/ICreateProspectionDTO';
import { IUpdateProspectionDTO } from '@domain/prospection/dto/IUpdateProspection';
import { IProspection } from '@domain/prospection/model/IProspection';
import { Prospection } from '@modules/prospection/entities/Prospection'
import { IProspectionRepository } from 'domain/prospection/repository/IProspectionRepository'
import { getRepository, Repository } from 'typeorm'


export class ProspectionRepositoryPostgres implements IProspectionRepository {

    private repository: Repository<Prospection>;

    constructor() {
        this.repository = getRepository(Prospection);
    }

    async create({
        name,
        description
    }: ICreateProspectionDTO): Promise<IProspection> {
        const newProspection = this.repository.create({
            name,
            description
        })
        return await this.repository.save(newProspection)
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

    async disableEnableById(id: string, is_active: boolean ): Promise<void> {
        await this.repository.update({
            id
        }, {
            is_active
        })
    }

}