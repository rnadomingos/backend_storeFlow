import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { User } from "@modules/user/entities/User";
import { getRepository, Repository } from "typeorm";
import { IUserRepository } from "../IUserRepository";


export class UserRepositoryPostgres implements IUserRepository {

  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User)
  }

  async create({
    name,
    email,
    password,
    user_dms,
    id_store
  }: ICreateUserDTO): Promise<void> {
    const newUser = this.repository.create({
      name,
      email,
      password,
      user_dms,
      id_store
    });
    await this.repository.save(newUser)
  }

  async findByUserDms(user_dms: string): Promise<User> {
    return this.repository.findOne({ user_dms })
  }

  async list(): Promise<User[]> {
    return await this.repository.find()
  }

}