import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePasswordUseCase } from "./UpdatePasswordUseCase";

export class UpdatePasswordController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { oldPassword, newPassword } = req.body;
    console.log(id);

    const updatePasswordUseCase = container.resolve(UpdatePasswordUseCase);
    await updatePasswordUseCase.execute(id, oldPassword, newPassword)

    return res.send({
      success: true
    });
  }
}