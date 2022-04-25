import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UserToken } from "../entities/UserToken";

export interface IUserTokenRepository {
  create(data: ICreateUserTokenDTO): Promise<UserToken>;
  findByUserIdAndToken(user_id: string, refresh_token: string): Promise<UserToken>;
  deleteById(id: string): Promise<void>;
  findByRefreshToken(refresh_token: string): Promise<UserToken>;
}