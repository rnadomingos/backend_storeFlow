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

    async execute(socialMediaData: ICreateSocialMediaDTO): Promise<void> {

        socialMediaData.name = socialMediaData.name.toLocaleLowerCase()
        const socialMediaExists = await this.socialMediaRepository.findByName(socialMediaData.name);

        if (socialMediaExists) {
            throw new ErrorHandler("This social media already exists!")
        }

        await this.socialMediaRepository.create(socialMediaData);
    }
}