import { ISocialMediaRepository } from "@domain/socialMedia/repository/ISocialMediaRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";
import { ISocialMedia } from "@domain/socialMedia/model/ISocialMedia";


@injectable()

export class FindSocialMediaByIdUseCase {

    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRepository: ISocialMediaRepository
    ) { }
    async execute(id: string): Promise<ISocialMedia> {

        const socialMedia = await this.socialMediaRepository.findById(id);
        if (!socialMedia) {
            throw new ErrorHandler(`Social Media was not found with this ID!`)
        }
        return socialMedia;

    }
}