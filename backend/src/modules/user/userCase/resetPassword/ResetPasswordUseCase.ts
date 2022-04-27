import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { IUserTokenRepository } from "@modules/user/repositories/IUserTokenRepositoryPostgres";
import { IDateProvider } from "@shared/container/providers/date/IDateProvider";
import { IMailProvider } from "@shared/container/providers/mail/IMailProvider";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";


interface IRequest {
  refreshToken: string;
  password: string;
}

@injectable()
export class ResetPasswordUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider,
    @inject("UserTokenRepository")
    private userTokenRepository: IUserTokenRepository
  ) { }

  async execute({ refreshToken, password }: IRequest): Promise<void> {

    const userToken = await this.userTokenRepository.findByRefreshToken(refreshToken)

    if (!userToken) {
      throw new ErrorHandler("Token Invalid!")
    }

    if (
      this.dateProvider.compareIfBefore(
        userToken.expires_token,
        this.dateProvider.dateNow()
      )
    ) {
      throw new ErrorHandler("Token expired!")
    }

    const user = await this.userRepository.findById(userToken.user_id);

    user.password = await hash(password, 10)
    await this.userRepository.update(user)

    await this.userTokenRepository.deleteById(userToken.id)

  }
}