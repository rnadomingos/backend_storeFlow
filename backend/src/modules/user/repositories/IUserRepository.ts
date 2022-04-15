import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";


export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByUserDms(user_dms: string): Promise<User>;
  list(): Promise<User[]>;
}  