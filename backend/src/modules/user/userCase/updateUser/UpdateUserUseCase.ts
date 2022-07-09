import { IUpdateUserDTO } from "@modules/user/dtos/IUpdateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(userData: IUpdateUserDTO): Promise<void> {

    const user = await this.userRepository.findById(userData.id);

    for (const field of ["name", "email", "password", "user_dms", "id_store", "is_admin", "is_active"]) {
      if (userData[field]) {
        user[field] = userData[field]
      }
    }

    await this.userRepository.update(user);

  }
}