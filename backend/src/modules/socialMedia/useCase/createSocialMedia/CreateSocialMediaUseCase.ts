import { ICreateSegmentDTO } from "@modules/segment/dtos/ICreateSegmentDTO";
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
        description
    }: ICreateSegmentDTO): Promise<void> {

        const socialMediaExists = await this.socialMediaRepository.findByName(name);

        if (socialMediaExists) {
            throw new Error("This social media already exists!")
        }

        await this.socialMediaRepository.create({
            name,
            description
        });
    }
}