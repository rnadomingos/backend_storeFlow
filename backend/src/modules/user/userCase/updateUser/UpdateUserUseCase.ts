import { IUpdateUserDTO } from "@modules/user/dtos/IUpdateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({
    id,
    name,
    email,
    password,
    user_dms,
    id_store,
    is_admin,
    is_active
  }: IUpdateUserDTO): Promise<void> {

    const user = await this.userRepository.findById(id);

    if (name) {
      user.name = name
    }
    if (email) {
      user.email = email
    }
    if (user_dms) {
      user.user_dms = user_dms
    }
    if (password) {
      user.password = password
    }
    if (id_store) {
      user.id_store = id_store
    }
    if (is_admin === false) {
      user.is_admin = false
    }
    if (is_admin === true) {
      user.is_admin = true
    }

    if (is_active === false) {
      user.is_active = false
    }
    if (is_active === true) {
      user.is_active = true
    }

    await this.userRepository.update(user);

  }
}