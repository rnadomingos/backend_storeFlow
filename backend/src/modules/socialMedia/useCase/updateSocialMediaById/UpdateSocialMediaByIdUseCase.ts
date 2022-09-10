import { IUpdateSocialMediaDTO } from "@domain/socialMedia/dtos/IUpdateSocialMediaDTO";
import { ISocialMediaRepository } from "@domain/socialMedia/repository/ISocialMediaRepository"
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";



@injectable()
export class UpdateSocialMediaByIdUseCase {
    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRepository: ISocialMediaRepository
    ) { }
    async execute(socialMediaData: IUpdateSocialMediaDTO): Promise<void> {

        const socialMedia = await this.socialMediaRepository.findById(socialMediaData.id);

        if (!socialMedia) {
            throw new ErrorHandler(`This ID:(${socialMediaData.id}) was not found!`)
        }

        for (const field of [
            "name",
            "description",
            "is_active",
            "id_prospection"
        ]) {
            if (socialMediaData[field]) {
                socialMedia[field] = socialMediaData[field]
            } else {
                socialMedia.is_active = socialMediaData.is_active
            }
        }

        return await this.socialMediaRepository.updateById(socialMedia)

    }
}