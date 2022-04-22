
import { UserRepositoryPostgres } from "@modules/user/repositories/postgres/UserRepositoryPostgres";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { NextFunction, Request, Response } from "express";

export async function isAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.user;
  const userRepository = new UserRepositoryPostgres();
  const user = await userRepository.findById(id);

  if (user.is_admin === false) {
    throw new ErrorHandler("Permission denied!", 401);
  }
  return next();
}