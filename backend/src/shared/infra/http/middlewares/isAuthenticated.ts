import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "@config/auth";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { UserRepositoryPostgres } from "@modules/user/repositories/postgres/UserRepositoryPostgres";


interface IPayload {
  id: string;
}

export async function isAuthenticated(req: Request, res: Response, next: NextFunction) {

  const { token } = req.cookies;
  const userRepository = new UserRepositoryPostgres()

  if (!token) {
    throw new ErrorHandler("Token missing !")
  }


  try {
    const decoded = verify(token, auth.secret_token) as IPayload

    const userExists = await userRepository.findById(decoded.id)

    if (!userExists) {
      throw new ErrorHandler('User does not exists', 401);
    }

    req.user = {
      id: decoded.id
    };

    return next();

  } catch {
    throw new ErrorHandler("Invalid token!", 401);
  }
}

