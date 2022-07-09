import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { generateToken, optionsToCookie } from "@shared/container/providers/utils/helpersToken";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { IEmailValidator } from "@shared/container/providers/validators/IEmailValidator";


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
    private userRepository: IUserRepository,
    @inject("EmailValidator")
    private emailValidator: IEmailValidator
  ) { }

  async execute(userData: ICreateUserDTO): Promise<IResponse> {

    for (const field of ["name", "email", "password", "user_dms", "id_store"]) {
      if (!userData[field]) {
        throw new ErrorHandler(`Params ${field} Missing`)
      }
    }

    const userExists = await this.userRepository.findByUserDms(userData.user_dms);

    if (userExists) {
      throw new ErrorHandler("User Already Exists !")
    }

    const emailIsValid = this.emailValidator.isValid(userData.email)

    if (!emailIsValid) {
      throw new ErrorHandler("Invalid Email !")
    }

    const passwordHash = await hash(userData.password, 10);

    const user = await this.userRepository.create({
      name: userData.name,
      email: userData.email,
      password: passwordHash,
      user_dms: userData.user_dms,
      id_store: userData.id_store
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

