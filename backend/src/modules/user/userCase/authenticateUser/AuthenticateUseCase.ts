import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { generateToken, optionsToCookie } from "@shared/container/providers/utils/helpersToken";


interface IResponse {
  user: {
    name: string;
    user_dms: string;
    is_admin: boolean;
  },
  token: string;
  options: {
    expires: Date;
    httpOnly: boolean
  },
}

@injectable()
export class AuthenticateUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(user_dms: string, password: string): Promise<IResponse> {

    const user = await this.userRepository.findByUserDms(user_dms);

    if (!user) {
      throw new ErrorHandler("Email or password incorrect !");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new ErrorHandler("Email or password incorrect !");
    }

    const token = generateToken(user);
    const options = optionsToCookie();


    const tokenReturn: IResponse = {
      token,
      options,
      user: {
        name: user.name,
        user_dms: user.user_dms,
        is_admin: user.is_admin
      }
    }

    return tokenReturn

  }

}