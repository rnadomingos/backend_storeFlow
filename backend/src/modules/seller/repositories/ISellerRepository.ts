import { Seller } from "../entities/Seller";
import { ICreateSellerDTO } from "../dtos/ICreateSellerDTO";




export interface ISellerRepository {
  findById(id: string): Promise<Seller>;
  findByUserDms(user_dms: string): Promise<Seller>;
  create(data: ICreateSellerDTO): Promise<void>;
  list(): Promise<Seller[]>;
  findStoreBySeller(user_dms: string): Promise<Seller[]>;
}