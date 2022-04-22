import { ServiceType } from '../entities/ServiceType';
import { ICreateServiceTypeDTO } from "../dtos/ICreateServiceTypeDTO";
import { IUpdateServiceTypeByIdDTO } from '../dtos/IUpdateServiceTypeByIdDTO';

export interface IServiceTypeRepository {
    create(data: ICreateServiceTypeDTO): Promise<void>;
    list(): Promise<ServiceType[]>;
    findById(id: string): Promise<ServiceType>;
    updateById(data: IUpdateServiceTypeByIdDTO): Promise<void>;
    deleteById(id: string): Promise<void>;
}