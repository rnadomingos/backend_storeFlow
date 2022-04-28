import { ICreateSocialMediaDTO } from "../dtos/ICreateSocialMediaDTO";
import { IUpdateSocialMediaDTO } from "../dtos/IUpdateSocialMediaDTO";
import { SocialMedia } from "../entities/SocialMedia";

export interface ISocialMediaRepository {

    create(data: ICreateSocialMediaDTO): Promise<void>;
    list(): Promise<SocialMedia[]>;
    findById(id: string): Promise<SocialMedia>;
    updateById(data: IUpdateSocialMediaDTO): Promise<void>;
    deleteById(id: string): Promise<void>;

}