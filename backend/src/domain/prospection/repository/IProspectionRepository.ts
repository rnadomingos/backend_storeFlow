import { ICreateProspectionDTO } from "../dto/ICreateProspectionDTO";
import { IUpdateProspectionDTO } from "../dto/IUpdateProspection";
import { IProspection } from "../model/IProspection";


export interface IProspectionRepository {

    create(data: ICreateProspectionDTO): Promise<IProspection>;
    list(): Promise<IProspection[]>;
    findById(id: string): Promise<IProspection>;
    findByName(name: string): Promise<IProspection>;
    update(data: IUpdateProspectionDTO): Promise<IProspection>;
    deleteById(id: string): Promise<void>;
    disableEnableById(id: string, is_active: boolean): Promise<void>;
}