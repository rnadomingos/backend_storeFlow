import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";


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
  }: ICreateUserDTO): Promise<void> {

    const userExists = await this.userRepository.findByUserDms(user_dms);

    if (userExists) {
      throw new Error("User Already Exists !")
    }

    const passwordHash = await hash(password, 10);

    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      user_dms,
      id_store
    });
  }
}

