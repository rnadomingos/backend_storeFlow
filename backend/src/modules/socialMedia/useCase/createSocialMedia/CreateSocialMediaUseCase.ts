import { ICreateSegmentDTO } from "@modules/segment/dtos/ICreateSegmentDTO";
import { ISocialMediaRepository } from "@modules/socialMedia/repositories/ISocialMediaRepository";
import { inject, injectable } from "tsyringe";


@injectable()

export class CreateSocialMediaUseCase {
    constructor(
        @inject("SocialMediaRespository")
        private socialMediaRepository: ISocialMediaRepository
    ) { }

    async execute({
        name,
        description
    }: ICreateSegmentDTO): Promise<void> {

        const socialMediaExists = this.socialMediaRepository.findByName(name);

        if (socialMediaExists) {
            throw new Error("This social media already exists!")
        }

        await this.socialMediaRepository.create({
            name,
            description
        });
    }
}