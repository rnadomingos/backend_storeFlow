import { ICreateServiceTypeDTO } from "../dto/ICreateServiceTypeDTO";
import { IUpdateServiceTypeDTO } from "../dto/IUpdateServiceTypeDTO";
import { IServiceType } from "../model/IServiceType";

export interface IServiceTypeRepository {
    create(data: ICreateServiceTypeDTO): Promise<void>;
    list(args?: any, page?: number, rowsPerPage?: number): Promise<IServiceType[]>;
    findById(id: string): Promise<IServiceType>;
    updateById(data: IUpdateServiceTypeDTO): Promise<void>;
    deleteById(id: string): Promise<void>;
    findByName(name: string): Promise<IServiceType>;
}