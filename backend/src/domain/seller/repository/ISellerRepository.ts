import { ICreateSellerDTO } from "../../../domain/seller/dto/ICreateSellerDTO";
import { IUpdateSellerDTO } from "@domain/seller/dto/IUpdateSellerDTO";
import { ISeller } from "@domain/seller/model/ISeller";





export interface ISellerRepository {
  findById(id: string): Promise<ISeller>;
  findByUserDms(user_dms: string): Promise<ISeller>;
  create(data: ICreateSellerDTO): Promise<void>;
  list(args?: any, page?: number, rowsPerPage?: number): Promise<ISeller[]>;
  findStoreBySeller(user_dms: string): Promise<ISeller>;
  update(data: IUpdateSellerDTO): Promise<void>;
  delete(id: string): Promise<void>;
}