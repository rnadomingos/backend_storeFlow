import { ISocialMediaRepository } from "@modules/socialMedia/repositories/ISocialMediaRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class DeleteSocialMediaByIdUseCase {
    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRespository: ISocialMediaRepository
    ) { }

    async execute(id: string): Promise<void> {

        const socialMediaExists = await this.socialMediaRespository.findById(id);

        if (!socialMediaExists) {
            throw new Error(`This ID:(${id}) was not found!`)
        }

        return await this.socialMediaRespository.deleteById(id);
    }
}