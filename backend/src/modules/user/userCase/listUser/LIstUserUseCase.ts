import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

interface IResponse {
  id: string
  name: string;
  email: string;
  user_dms: string;
  id_store: string;
  is_admin: boolean;
  is_active: boolean;
  create_at: Date;
}

@injectable()
export class ListUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(): Promise<IResponse> {
    const user = await this.userRepository.list();
    return {
      id: user[0].id,
      name: user[0].name,
      email: user[0].email,
      user_dms: user[0].user_dms,
      id_store: user[0].id_store,
      is_admin: user[0].is_admin,
      is_active: user[0].is_active,
      create_at: user[0].create_at
    }
  }
}