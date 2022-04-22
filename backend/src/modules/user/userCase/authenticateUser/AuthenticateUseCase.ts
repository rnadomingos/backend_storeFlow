import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";
import auth from "@config/auth";


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
  }
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
      throw new Error("Email or password incorrect !");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect !");
    }

    const token = sign({ user_dms: user.user_dms }, auth.secret_token, {
      subject: user.id,
      expiresIn: auth.expires_in_token
    });

    const options = {
      expires: new Date(
        Date.now() + auth.cookie_expires_time * 24 * 60 * 1000
      ),
      httpOnly: true
    }


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