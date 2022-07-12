import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";


interface IResponse {
  user: {
    id: string;
    name: string;
    user_dms: string
  },
  store: {
    id: string
    name: string;
    cnpj: string;
    brand: string
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
        id: userAndStore[0].id,
        name: userAndStore[0].name,
        user_dms: userAndStore[0].user_dms
      },
      store: {
        name: userAndStore[0].store.name,
        cnpj: userAndStore[0].store.cnpj,
        brand: userAndStore[0].store.brand,
        id: userAndStore[0].store.id
      }
    }
    return returnResponse
  }

}