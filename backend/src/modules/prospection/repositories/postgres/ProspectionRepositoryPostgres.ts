
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
    }: ICreateProspectionDTO): Promise<void> {
        const newProspection = this.repository.create({
            name,
            description
        })
        await this.repository.save(newProspection)
    }

    async list(): Promise<IProspection[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<IProspection> {
        return await this.repository.findOne({ id })
    }

    async findByName(name: string): Promise<IProspection> {
        return await this.repository.findOne({ name })
    }

    async update({
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

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id })
    }

}