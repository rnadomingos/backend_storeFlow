import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      name,
      email,
      password,
      user_dms,
      id_store,
      is_admin,
      is_active
    } = req.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    await updateUserUseCase.execute({
      id,
      name,
      email,
      password,
      user_dms,
      id_store,
      is_admin,
      is_active
    });

    return res.status(200).json({
      success: true
    })
  }
}
