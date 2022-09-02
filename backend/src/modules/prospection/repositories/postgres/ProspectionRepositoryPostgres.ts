
import { ICreateProspectionDTO } from '@domain/prospection/dto/ICreateProspectionDTO';
import { IUpdateProspectionDTO } from '@domain/prospection/dto/IUpdateProspection';
import { IProspection } from '@domain/prospection/model/IProspection';
import { Prospection } from '@modules/prospection/entities/Prospection'
import { IProspectionRepository } from 'domain/prospection/repository/IProspectionRepository'
import { getRepository, ILike, Repository } from 'typeorm'


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

    async list(args?: any, page?: number, rowsPerPage?: number): Promise<IProspection[]> {
        return await this.repository.find({
            where: [
                {name: ILike(`%${args}%`)},
                {description: ILike(`%${args}%`)}
            ],
            relations: ["socialMedia"],
            skip: rowsPerPage * (page -1),
            take: rowsPerPage
        });
    }

    async findById(id: string): Promise<IProspection> {
        return await this.repository.findOne({ id })
    }

    async findByName(name: string): Promise<IProspection> {
        return await this.repository.findOne({ 
            name: ILike(`${name}`)
         })
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