import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "@config/auth";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { UserRepositoryPostgres } from "@modules/user/repositories/postgres/UserRepositoryPostgres";


interface IPayload {
  sub: string;
}

export async function isAuthenticated(req: Request, res: Response, next: NextFunction) {

  let { token } = req.cookies
  const authHeader = req.headers.authorization;

  const userRepository = new UserRepositoryPostgres()

  if (token || authHeader) {

    if (authHeader) {
      [, token] = authHeader.split(" ");
    }

    try {
      const decoded = verify(token, auth.secret_token) as IPayload


      const userExists = await userRepository.findById(decoded.sub)

      if (!userExists) {
        throw new ErrorHandler('User does not exists', 401);
      }

      req.user = {
        id: decoded.sub
      };

      return next();

    } catch {

      throw new ErrorHandler("Invalid token!", 401);
    }

  }

  throw new ErrorHandler("Token is missing or invalid !")


}

