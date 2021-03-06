import { SocialMedia } from "../entities/SocialMedia";
import { ICreateSocialMediaDTO } from "../dtos/ICreateSocialMediaDTO";
import { IUpdateSocialMediaDTO } from "../dtos/IUpdateSocialMediaDTO";
import { IDisableEnableSocialMediaDTO } from "../dtos/IDisableEnableSocialMediaDTO";

export interface ISocialMediaRepository {

    create(data: ICreateSocialMediaDTO): Promise<void>;
    list(): Promise<SocialMedia[]>;
    findById(id: string): Promise<SocialMedia>;
    findByName(name: string): Promise<SocialMedia>;
    updateById(data: IUpdateSocialMediaDTO): Promise<void>;
    deleteById(id: string): Promise<void>;
    disableEnableById(data: IDisableEnableSocialMediaDTO): Promise<void>;
}