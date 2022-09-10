import { ICreateSocialMediaDTO } from "../dtos/ICreateSocialMediaDTO";
import { IUpdateSocialMediaDTO } from "../dtos/IUpdateSocialMediaDTO";
import { ISocialMedia } from "../model/ISocialMedia";

export interface ISocialMediaRepository {

    create(data: ICreateSocialMediaDTO): Promise<void>;
    list(args?: any, page?: number, rowsPerPage?: number): Promise<ISocialMedia[]>;
    findById(id: string): Promise<ISocialMedia>;
    findByName(name: string): Promise<ISocialMedia>;
    updateById(data: IUpdateSocialMediaDTO): Promise<void>;
    deleteById(id: string): Promise<void>;
}