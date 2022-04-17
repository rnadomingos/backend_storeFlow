import { User } from "@modules/user/entities/User";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";


interface IResponse {
  user: {
    name: string;
    user_dms: string
  },
  store: {
    name: string;
    cnpj: string;
  }
}

@injectable()
export class GetStoreUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(user_dms: string): Promise<IResponse> {
    const userAndStore = await this.userRepository.findStoreByUser(user_dms);

    const returnResponse: IResponse = {
      user: {
        name: userAndStore[0].name,
        user_dms: userAndStore[0].user_dms
      },
      store: {
        name: userAndStore[0].store.name,
        cnpj: userAndStore[0].store.cnpj
      }
    }
    return returnResponse
  }

}