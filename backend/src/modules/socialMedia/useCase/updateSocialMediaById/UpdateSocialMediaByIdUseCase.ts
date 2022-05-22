import { IUpdateSocialMediaDTO } from "@modules/socialMedia/dtos/IUpdateSocialMediaDTO";
import { ISocialMediaRepository } from "@modules/socialMedia/repositories/ISocialMediaRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";



@injectable()
export class UpdateSocialMediaByIdUseCase {
    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRepository: ISocialMediaRepository
    ) { }
    async execute({
        id,
        name,
        description,
        is_active
    }: IUpdateSocialMediaDTO): Promise<void> {

        const socialMediaExists = await this.socialMediaRepository.findById(id);

        if (!socialMediaExists) {
            throw new ErrorHandler(`This ID:(${id}) was not found!`)
        }

        if (name) {
            socialMediaExists.name = name.toLocaleLowerCase();
        }

        if (description) {
            socialMediaExists.description = description
        }

        if (is_active != null) {
            socialMediaExists.is_active = is_active
        }

        return await this.socialMediaRepository.updateById(socialMediaExists)

    }
}