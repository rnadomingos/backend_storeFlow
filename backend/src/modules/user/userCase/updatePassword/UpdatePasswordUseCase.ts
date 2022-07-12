import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { compare, hash } from "bcrypt";
import { inject, injectable } from "tsyringe";



@injectable()
export class UpdatePasswordUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(id: string, oldPassword: string, newPassword: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new ErrorHandler("User not found !");
    }

    const passwordMatch = await compare(oldPassword, user.password);

    if (!passwordMatch) {
      throw new ErrorHandler("Old password incorrect !");
    }

    user.password = await hash(newPassword, 10)
    await this.userRepository.update(user)

  }
}