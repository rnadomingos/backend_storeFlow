import { ICreateProspectionDTO } from "../dto/ICreateProspectionDTO";
import { IUpdateProspectionDTO } from "../dto/IUpdateProspection";
import { IProspection } from "../model/IProspection";


export interface IProspectionRepository {

    create(data: ICreateProspectionDTO): Promise<void>;
    list(): Promise<IProspection[]>;
    findById(id: string): Promise<IProspection>;
    findByName(name: string): Promise<IProspection>;
    update(data: IUpdateProspectionDTO): Promise<void>;
    delete(id: string): Promise<void>;
}