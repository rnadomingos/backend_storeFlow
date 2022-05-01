import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "@modules/user/dtos/IUpdateUserDTO";
import { User } from "@modules/user/entities/User";
import { getRepository, Repository } from "typeorm";
import { IUserRepository } from "../IUserRepository";


export class UserRepositoryPostgres implements IUserRepository {

  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User)
  }


  async findStoreByUser(user_dms: string): Promise<User[]> {
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
  }: ICreateUserDTO): Promise<User> {
    const newUser = this.repository.create({
      name,
      email,
      password,
      user_dms,
      id_store
    });
    return await this.repository.save(newUser)
  }

  async findByUserDms(user_dms: string): Promise<User> {
    return this.repository.findOne({ user_dms })
  }

  async list(): Promise<User[]> {
    return await this.repository.find()
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

  async findById(id: string): Promise<User> {
    return this.repository.findOne(id)
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email })
  }
}