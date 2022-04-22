import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "@config/auth";
import { ErrorHandler } from "@shared/errors/ErrorHandler";


interface IPayload {
  id: string;
}

export async function isAuthenticated(req: Request, res: Response, next: NextFunction) {

  const { token } = req.cookies;

  if (!token) {
    throw new Error("Token missing !")
  }


  try {
    const decoded = verify(token, auth.secret_token) as IPayload

    req.user = {
      id: decoded.id
    };

    return next();

  } catch {
    throw new ErrorHandler("Invalid token!", 401);
  }
}

