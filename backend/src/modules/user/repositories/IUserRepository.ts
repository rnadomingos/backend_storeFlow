import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO as IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { User } from "../entities/User";


export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByUserDms(user_dms: string): Promise<User>;
  list(): Promise<User[]>;
  findStoreByUser(user_dms: string): Promise<User[]>;
  update(data: IUpdateUserDTO): Promise<void>;
  findById(id: string): Promise<User>;
}  