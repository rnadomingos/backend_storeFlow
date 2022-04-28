import { ICreateSocialMediaDTO } from "@modules/socialMedia/dtos/ICreateSocialMediaDTO"
import { IUpdateSocialMediaDTO } from "@modules/socialMedia/dtos/IUpdateSocialMediaDTO"
import { SocialMedia } from "@modules/socialMedia/entities/SocialMedia"
import { getRepository, Repository } from "typeorm"
import { ISocialMediaRepository } from "../ISocialMediaRepository"

export class SociaMediaRepositoryPostgres implements ISocialMediaRepository {

    private repository: Repository<SocialMedia>;

    constructor() {
        this.repository = getRepository(SocialMedia);
    }

    async create({
        name,
        description
    }: ICreateSocialMediaDTO): Promise<void> {

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

    async updateById({
        id,
        name,
        description,
        is_active
    }: IUpdateSocialMediaDTO): Promise<void> {
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
}