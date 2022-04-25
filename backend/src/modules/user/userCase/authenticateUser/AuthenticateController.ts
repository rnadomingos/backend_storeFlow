import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUseCase } from "./AuthenticateUseCase";


export class AuthenticateController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { user_dms, password } = req.body;

    const authenticateUseCase = container.resolve(AuthenticateUseCase);
    const authenticateToken = await authenticateUseCase.execute(user_dms, password);
    const { token, user, options } = authenticateToken;
    return res.cookie(
      'token',
      token,
      options).json({
        success: true,
        user,
        token
      });
  }
}