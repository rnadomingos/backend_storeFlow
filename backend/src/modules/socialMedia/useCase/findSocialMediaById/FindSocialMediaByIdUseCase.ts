import { SocialMedia } from "@modules/socialMedia/entities/SocialMedia";
import { ISocialMediaRepository } from "@modules/socialMedia/repositories/ISocialMediaRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()

export class FindSocialMediaByIdUseCase {

    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRepository: ISocialMediaRepository
    ) { }
    async execute(id: string): Promise<SocialMedia> {

        const socialMedia = await this.socialMediaRepository.findById(id);

        if (!socialMedia) {
            throw new ErrorHandler(`Social Media was not found with this ID!`)
        }

        return socialMedia;

    }
}