import { ServiceType } from '../entities/ServiceType';
import { ICreateServiceTypeDTO } from "../dtos/ICreateServiceTypeDTO";

export interface IServiceTypeRepository {
    create(data: ICreateServiceTypeDTO): Promise<void>;
    list(): Promise<ServiceType[]>;
}