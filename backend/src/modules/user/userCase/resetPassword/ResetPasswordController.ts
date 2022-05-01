import { Request, Response } from "express";
import { container } from "tsyringe";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";


export class ResetPasswordController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { token } = req.query
    const { password } = req.body;

    const resetPasswordUseCase = container.resolve(ResetPasswordUseCase);

    await resetPasswordUseCase.execute({ refreshToken: String(token), password });

    return res.send({
      success: true
    });
  }
}