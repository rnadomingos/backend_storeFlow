import { ICreateStoreFlowDTO } from "../dtos/ICreateStoreFlowDTO";
import { IUpdateStoreFlowDTO } from "../dtos/IUpdateStoreFlowDTO";
import { StoreFlow } from "../entities/StoreFlow";


export interface IStoreFlowRepository {
  create(data: ICreateStoreFlowDTO): Promise<void>;
  list(): Promise<StoreFlow[]>;
  update(data: IUpdateStoreFlowDTO): Promise<void>;
  findById(id: string): Promise<StoreFlow>
}