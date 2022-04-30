import { ISocialMediaRepository } from "@modules/socialMedia/repositories/ISocialMediaRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class DisableEnableSocialMediaByIdUseCase {
    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRespository: ISocialMediaRepository
    ) { }

    async execute(id: string): Promise<void> {

        const socialMediaExists = await this.socialMediaRespository.findById(id);

        if (!socialMediaExists) {
            throw new Error(`This ID:(${id}) was not found!`)
        }

        if (socialMediaExists.is_active) {
            socialMediaExists.is_active = false
        } else {
            socialMediaExists.is_active = true
        }

        const is_active = socialMediaExists.is_active;

        return await this.socialMediaRespository.disableEnableById({
            id,
            is_active
        });
    }
}