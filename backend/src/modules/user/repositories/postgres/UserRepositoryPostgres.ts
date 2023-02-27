import { ICreateUserDTO } from "@domain/user/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "@domain/user/dtos/IUpdateUserDTO";
import { IUser } from '@domain/user/model/IUser'
import { User } from "@modules/user/entities/User";
import { getRepository, ILike, Repository } from "typeorm";
import { IUserRepository } from "../IUserRepository";


export class UserRepositoryPostgres implements IUserRepository {

  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User)
  }

  async findStoreByUser(user_dms: string): Promise<IUser[]> {
    return await this.repository.find({
      where: { user_dms },
      relations: ["store"]
    });
  }

  async create({
    name,
    email,
    password,
    user_dms,
    id_store
  }: ICreateUserDTO): Promise<IUser> {
    user_dms = user_dms.toLocaleLowerCase()
    const newUser = this.repository.create({
      name,
      email,
      password,
      user_dms,
      id_store
    });
    return await this.repository.save(newUser)
  }

  async findByUserDms(user_dms: string): Promise<IUser> {
    return await this.repository.findOne({
      where: { user_dms, is_active: true }
    });
  }

  async list(args?: any, page?: number, rowsPerPage?:number): Promise<IUser[]> {
    return await this.repository.find({
      where: [
        {name: ILike(`%${args}%`)},
        {user_dms: ILike(`%${args}%`)}
      ],
      skip: rowsPerPage * (page-1),
      take: rowsPerPage
    })
  }

  async update({
    id,
    name,
    email,
    password,
    user_dms,
    id_store,
    is_admin,
    is_active
  }: IUpdateUserDTO): Promise<void> {
    user_dms = user_dms.toLocaleLowerCase()
    const updateUser = this.repository.create({
      id,
      name,
      email,
      password,
      user_dms,
      id_store,
      is_admin,
      is_active
    });
    await this.repository.save(updateUser)
  }

  async findById(id: string): Promise<IUser> {
    return this.repository.findOne(id)
  }

  async findByEmail(email: string): Promise<IUser> {
    return await this.repository.findOne({
      where: { email, is_active: true }
    });
  }


}