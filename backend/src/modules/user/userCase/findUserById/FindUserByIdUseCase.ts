import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";




@injectable()
export class FindUserByIdUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(userId: string): Promise<IUserResponseDTO> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new ErrorHandler(`User not found !`)
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      user_dms: user.user_dms,
      create_at: user.create_at,
      is_active: user.is_active,
      is_admin: user.is_admin
    }
  }
}