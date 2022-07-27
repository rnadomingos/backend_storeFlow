import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      user_dms,
      id_store
    } = req.body;

    for (const field of [
      "name",
      "email",
      "password",
      "user_dms",
      "id_store"]) {
      if (!req.body[field]) {
        throw new ErrorHandler(`Params ${field} Missing`)
      }
    }

    const createUserUseCase = container.resolve(CreateUserUseCase);
    const authenticateToken = await createUserUseCase.execute({
      name,
      email,
      password,
      user_dms,
      id_store
    });

    return res.cookie(
      'token',
      authenticateToken.token,
      authenticateToken.options).json({
        success: true,
        authenticateToken
      });
  }
}