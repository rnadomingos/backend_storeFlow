
import { SocialMedia } from "@modules/socialMedia/entities/SocialMedia"
import { ICreateSocialMediaDTO } from "../../../../domain/socialMedia/dtos/ICreateSocialMediaDTO"
import { IUpdateSocialMediaDTO } from "../../../../domain/socialMedia/dtos/IUpdateSocialMediaDTO"
import { getRepository, ILike, Repository } from "typeorm"
import { ISocialMediaRepository } from "../../../../domain/socialMedia/repository/ISocialMediaRepository"
import { ISocialMedia } from "@domain/socialMedia/model/ISocialMedia"

export class SocialMediaRepositoryPostgres implements ISocialMediaRepository {

    private repository: Repository<ISocialMedia>;

    constructor() {
        this.repository = getRepository(SocialMedia);
    }

    async create({
        name,
        description,
        id_prospection,
    }: ICreateSocialMediaDTO): Promise<void> {
        const newSocialMedia = this.repository.create({
            name,
            description,
            id_prospection
        })

        await this.repository.save(newSocialMedia);
    }

    async list(args?: any, page?: number, rowsPerPage?: number): Promise<ISocialMedia[]> {
        return await this.repository.find({
            where: [
                {name: ILike(`%${args}%`)},
                {description: ILike(`%${args}%`)}
            ],
            skip: rowsPerPage *(page-1),
            take: rowsPerPage
        });
    }

    async findById(id: string): Promise<ISocialMedia> {
        return await this.repository.findOne({ id });
    }

    async findByName(name: string): Promise<ISocialMedia> {
        return await this.repository.findOne({ 
            where: [
                {name: ILike(`%${name}%`) }
            ]
        });
    }

    async updateById({
        id,
        name,
        description,
        is_active,
        id_prospection
    }: IUpdateSocialMediaDTO): Promise<void> {
        const updateSocialMedia = this.repository.create({
            id,
            name,
            description,
            is_active,
            id_prospection
        })

        await this.repository.save(updateSocialMedia);
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id)

    }
}