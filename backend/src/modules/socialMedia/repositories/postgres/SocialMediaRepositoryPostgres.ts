
import { SocialMedia } from "@modules/socialMedia/entities/SocialMedia"
import { ICreateSocialMediaDTO } from "../../dtos/ICreateSocialMediaDTO"
import { IUpdateSocialMediaDTO } from "../../dtos/IUpdateSocialMediaDTO"
import { getRepository, Repository } from "typeorm"
import { ISocialMediaRepository } from "../ISocialMediaRepository"
import { IDisableEnableSocialMediaDTO } from "@modules/socialMedia/dtos/IDisableEnableSocialMediaDTO"

export class SocialMediaRepositoryPostgres implements ISocialMediaRepository {

    private repository: Repository<SocialMedia>;

    constructor() {
        this.repository = getRepository(SocialMedia);
    }

    async create({
        name,
        description
    }: ICreateSocialMediaDTO): Promise<void> {
        name = name.toLocaleLowerCase()
        const newSocialMedia = this.repository.create({
            name,
            description
        })

        await this.repository.save(newSocialMedia);
    }

    async list(): Promise<SocialMedia[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<SocialMedia> {
        return await this.repository.findOne({ id });
    }

    async findByName(name: string): Promise<SocialMedia> {
        return await this.repository.findOne({ name });
    }

    async updateById({
        id,
        name,
        description,
        is_active
    }: IUpdateSocialMediaDTO): Promise<void> {
        name = name.toLocaleLowerCase()
        const updateSocialMedia = this.repository.create({
            id,
            name,
            description,
            is_active
        })

        await this.repository.save(updateSocialMedia);
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id)

    }
    async disableEnableById({
        id,
        is_active
    }: IDisableEnableSocialMediaDTO): Promise<void> {
        await this.repository.update({
            id
        }, {
            is_active
        })
    }
}