import { SocialMedia } from "@modules/socialMedia/entities/SocialMedia";
import { ISocialMediaRepository } from "@modules/socialMedia/repositories/ISocialMediaRepository";
import { inject, injectable } from "tsyringe";


@injectable()

export class FindAllSocialMediaUseCase {

    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRepository: ISocialMediaRepository
    ) { }
    async excecute(): Promise<SocialMedia[]> {

        const socialMedia = await this.socialMediaRepository.list();

        if (!socialMedia) {
            throw new Error(`Social Media not found!`)
        }

        return socialMedia;

    }
}