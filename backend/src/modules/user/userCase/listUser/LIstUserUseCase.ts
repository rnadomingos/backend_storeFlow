import env from '@config/env'
import { IUser } from '@domain/user/model/IUser'
import { User } from "@modules/user/entities/User";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { ErrorHandler } from '@shared/errors/ErrorHandler'
import { inject, injectable } from "tsyringe";


interface IResponse {
  total: number;
  limit_per_page: number;
  users: IUser[];
}


@injectable()
export class ListUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(args: any = '', page: number = 1): Promise<IResponse> {
    const rowsPerPage = env.register_per_page
    const users = await this.userRepository.list(args, page, rowsPerPage)
    const total = (await this.userRepository.list(args)).length

    if (!users) {
      throw new ErrorHandler('Users not found!')
    }

    return {
      total, 
      limit_per_page: rowsPerPage,
      users
    }
  }
}