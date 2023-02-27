import { IUser } from '@domain/user/model/IUser'
import { ICreateUserDTO } from "../../../domain/user/dtos/ICreateUserDTO";
import { IUpdateUserDTO as IUpdateUserDTO } from "../../../domain/user/dtos/IUpdateUserDTO";



export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<IUser>
  findByUserDms(user_dms: string): Promise<IUser>
  list(args?: any, page?: number, rowsPerPage?: number ): Promise<IUser[]>
  findStoreByUser(user_dms: string): Promise<IUser[]>
  update(data: IUpdateUserDTO): Promise<void>
  findById(id: string): Promise<IUser>
  findByEmail(email: string): Promise<IUser>

}  