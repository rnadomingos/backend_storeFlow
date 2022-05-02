import { SocialMedia } from "@modules/socialMedia/entities/SocialMedia";
import { ISocialMediaRepository } from "@modules/socialMedia/repositories/ISocialMediaRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()

export class FindAllSocialMediaUseCase {

    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRepository: ISocialMediaRepository
    ) { }
    async execute(): Promise<SocialMedia[]> {

        const socialMedia = await this.socialMediaRepository.list();

        if (!socialMedia) {
            throw new ErrorHandler(`Social Media not found!`)
        }

        return socialMedia;

    }
}