import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateSellerUseCase } from "./UpdateSellerUseCase";

export class UpdateSellerController {

  async handle(req: Request, res: Response): Promise<Response> {

    const { id } = req.params
    const {
      name,
      user_dms,
      id_store,
      is_active,
    } = req.body;

    const updateSellerUseCase = container.resolve(UpdateSellerUseCase);
    await updateSellerUseCase.execute({
      id,
      name,
      user_dms,
      id_store,
      is_active
    });

    return res.status(200).json("message: success")
  }
}