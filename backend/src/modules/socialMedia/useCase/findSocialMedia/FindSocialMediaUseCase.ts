import { ISocialMediaRepository } from "@domain/socialMedia/repository/ISocialMediaRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";
import { ISocialMedia } from "@domain/socialMedia/model/ISocialMedia";
import env from "@config/env";

interface IResponse {
    total: number;
    limit_per_page: number;
    socialMedia: ISocialMedia[];
}

@injectable()
export class FindSocialMediaUseCase {

    constructor(
        @inject("SocialMediaRepository")
        private socialMediaRepository: ISocialMediaRepository
    ) { }
    async execute(args: any = '', page: number = 1): Promise<IResponse> {
        const rowsPerPage = env.register_per_page
        const socialMedia = await this.socialMediaRepository.list(args, page, rowsPerPage);
        const total = (await this.socialMediaRepository.list(args)).length
        
        if (!socialMedia) {
            throw new ErrorHandler(`Social Media not found!`)
        }
        return {
            total,
            limit_per_page: rowsPerPage,
            socialMedia
        };
    }
}