import { ICreateUserTokenDTO } from "@domain/user/dtos/ICreateUserTokenDTO";
import { UserToken } from "@modules/user/entities/UserToken";
import { getRepository, Repository } from "typeorm";
import { IUserTokenRepository } from "../IUserTokenRepositoryPostgres";



export class UserTokenRepositoryPostgres implements IUserTokenRepository {

  private repository: Repository<UserToken>

  constructor() {
    this.repository = getRepository(UserToken)
  }

  async findByRefreshToken(refresh_token: string): Promise<UserToken> {
    const userToken = await this.repository.findOne({ refresh_token });
    return userToken;
  }

  async create({
    refresh_token,
    user_id,
    expires_token
  }: ICreateUserTokenDTO): Promise<UserToken> {
    const userToken = this.repository.create({
      refresh_token,
      user_id,
      expires_token,
    });

    await this.repository.save(userToken)

    return userToken;
  }

  async findByUserIdAndToken(user_id: string, refresh_token: string): Promise<UserToken> {

    const userToken = await this.repository.findOne({
      user_id,
      refresh_token
    })

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}