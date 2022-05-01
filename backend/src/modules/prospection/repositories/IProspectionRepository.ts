import { Prospection } from "../entities/Prospection";
import { ICreateProspectionDTO } from "../dtos/ICreateProspectionDTO";
import { IUpdateProspectionDTO } from "../dtos/IUpdateProspection";
import { IDisableEnableProspectionDTO } from "../dtos/IDisableEnableProspectionDTO";

export interface IProspectionRepository {

    create(data: ICreateProspectionDTO): Promise<void>;
    list(): Promise<Prospection[]>;
    findById(id: string): Promise<Prospection>;
    findByName(name: string): Promise<Prospection>;
    updateById(data: IUpdateProspectionDTO): Promise<void>;
    deleteById(id: string): Promise<void>;
    disableEnableById(data: IDisableEnableProspectionDTO): Promise<void>;
}