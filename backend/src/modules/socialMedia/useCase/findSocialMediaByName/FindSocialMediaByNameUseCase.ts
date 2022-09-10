import { ISocialMediaRepository } from "@domain/socialMedia/repository/ISocialMediaRepository"
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";
import { ISocialMedia } from "@domain/socialMedia/model/ISocialMedia";


@injectable()

export class FindSocialMediaByNameUseCase {

    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRepository: ISocialMediaRepository
    ) { }
    async execute(name: string): Promise<ISocialMedia> {

        const socialMedia = await this.socialMediaRepository.findByName(name);
        console.log('useCase:', name);
        
        if (!socialMedia) {
            throw new ErrorHandler(`Social Media was not found with this Name!`)
        }

        return socialMedia;

    }
}