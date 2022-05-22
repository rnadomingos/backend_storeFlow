import { ICreateSegmentDTO } from "@modules/segment/dtos/ICreateSegmentDTO";
import { ICreateSocialMediaDTO } from "@modules/socialMedia/dtos/ICreateSocialMediaDTO";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";
import { ISocialMediaRepository } from "../../repositories/ISocialMediaRepository";

@injectable()
export class CreateSocialMediaUseCase {
    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRepository: ISocialMediaRepository
    ) { }

    async execute({
        name,
        description,
        id_prospection
    }: ICreateSocialMediaDTO): Promise<void> {
        name = name.toLocaleLowerCase()
        const socialMediaExists = await this.socialMediaRepository.findByName(name);
        console.log(id_prospection);

        if (socialMediaExists) {
            throw new ErrorHandler("This social media already exists!")
        }

        await this.socialMediaRepository.create({
            name,
            description,
            id_prospection
        });
    }
}