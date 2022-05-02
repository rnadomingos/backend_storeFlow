import { ICreateStoreFlowDTO } from "../dtos/ICreateStoreFlowDTO";
import { StoreFlow } from "../entities/StoreFlow";


export interface IStoreFlowRepository {
  create(data: ICreateStoreFlowDTO): Promise<void>;
  list(): Promise<StoreFlow[]>;
}