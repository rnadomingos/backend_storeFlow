import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { generateToken, optionsToCookie } from "utils/helpersToken";
import { ErrorHandler } from "@shared/errors/ErrorHandler";


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
export class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({
    name,
    email,
    password,
    user_dms,
    id_store
  }: ICreateUserDTO): Promise<IResponse> {

    const userExists = await this.userRepository.findByUserDms(user_dms);

    if (userExists) {
      throw new ErrorHandler("User Already Exists !")
    }

    const passwordHash = await hash(password, 10);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      user_dms,
      id_store
    });

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

