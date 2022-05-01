import { User } from "@modules/user/entities/User";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class ListUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(): Promise<User[]> {
    const users = await this.userRepository.list();
    return users;
  }
}