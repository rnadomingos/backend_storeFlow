import { ICreateStoreFlowDTO } from "../dtos/ICreateStoreFlowDTO";
import { IUpdateStoreFlowDTO } from "../dtos/IUpdateStoreFlowDTO";
import { IStoreFlow } from '../model/IStoreFlow'


export interface IStoreFlowRepository {
  create(data: ICreateStoreFlowDTO): Promise<void>
  list(args?: any, page?: number, rowsPerPage?: number): Promise<IStoreFlow[]>
  update(data: IUpdateStoreFlowDTO): Promise<void>
  findById(id: string): Promise<IStoreFlow>
}